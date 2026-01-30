/**
 * Login API Endpoint
 * POST /api/auth/login
 * 
 * Authenticates user and creates session
 */
import { verifyPassword } from '../../../lib/auth/password';
import { generateSessionId, getSessionExpiration } from '../../../lib/auth/tokens';
import { setSessionCookieHeader } from '../../../lib/auth/session';
import { findUserByEmail } from '../../../lib/db/users';
import { createSession } from '../../../lib/db/sessions';
import { checkRateLimit, resetRateLimit } from '../../../lib/db/rate-limit';

interface Env {
  DB: D1Database;
  AUTH_COOKIE_SECRET: string;
  APP_BASE_URL: string;
}

interface D1Database {
  prepare(query: string): D1PreparedStatement;
}

interface D1PreparedStatement {
  bind(...values: unknown[]): D1PreparedStatement;
  first<T = unknown>(): Promise<T | null>;
  run(): Promise<D1Result>;
}

interface D1Result {
  meta?: { changes: number; last_row_id: number };
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  try {
    // Get client IP for rate limiting
    const clientIP = request.headers.get('CF-Connecting-IP') || 'unknown';

    // Check rate limit
    const rateLimit = await checkRateLimit(env.DB as any, 'login', clientIP);
    if (!rateLimit.allowed) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Too many login attempts. Please try again later.',
        }),
        {
          status: 429,
          headers: {
            'Content-Type': 'application/json',
            'Retry-After': Math.ceil(
              (rateLimit.resetAt.getTime() - Date.now()) / 1000
            ).toString(),
          },
        }
      );
    }

    // Parse request body
    const body = await request.json().catch(() => ({})) as {
      email?: string;
      password?: string;
    };

    const { email, password } = body;

    // Validate input
    if (!email || !password) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Email and password are required',
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Find user
    const user = await findUserByEmail(env.DB as any, email);

    // Generic error message to prevent user enumeration
    const invalidCredentialsResponse = new Response(
      JSON.stringify({
        success: false,
        error: 'Invalid email or password',
      }),
      { status: 401, headers: { 'Content-Type': 'application/json' } }
    );

    if (!user) {
      // Perform a dummy hash comparison to prevent timing attacks
      await verifyPassword(password, '$2a$12$dummy.hash.to.prevent.timing.attacks');
      return invalidCredentialsResponse;
    }

    // Verify password
    const isValidPassword = await verifyPassword(password, user.password_hash);
    if (!isValidPassword) {
      return invalidCredentialsResponse;
    }

    // Check if email is verified
    if (!user.email_verified) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Please verify your email before logging in',
          needsVerification: true,
        }),
        { status: 403, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Reset rate limit on successful login
    await resetRateLimit(env.DB as any, 'login', clientIP);

    // Create session
    const sessionId = generateSessionId();
    const expiresAt = getSessionExpiration();

    await createSession(env.DB as any, sessionId, user.id, expiresAt);

    // Create session cookie
    const isProduction = env.APP_BASE_URL.startsWith('https://');
    const sessionCookie = setSessionCookieHeader(
      {
        sessionId,
        userId: user.id,
        expiresAt: expiresAt.toISOString(),
      },
      env.AUTH_COOKIE_SECRET,
      isProduction
    );

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Login successful',
        redirectTo: '/dashboard',
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Set-Cookie': sessionCookie,
        },
      }
    );
  } catch (error) {
    console.error('Login error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: 'An error occurred. Please try again.',
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
