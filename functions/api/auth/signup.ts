/**
 * Signup API Endpoint
 * POST /api/auth/signup
 * 
 * Creates a new user account and sends verification email
 */
import { hashPassword, validatePassword, validateEmail } from '../../../lib/auth/password';
import { generateSecureToken, getExpirationDate } from '../../../lib/auth/tokens';
import { createUser, findUserByEmail } from '../../../lib/db/users';
import { createAuthToken } from '../../../lib/db/tokens';
import { checkRateLimit } from '../../../lib/db/rate-limit';
import { sendEmail } from '../../../lib/email/ses';
import { welcomeEmailTemplate } from '../../../lib/email/templates';

interface Env {
  DB: D1Database;
  AWS_ACCESS_KEY_ID: string;
  AWS_SECRET_ACCESS_KEY: string;
  AWS_REGION: string;
  SES_FROM_EMAIL: string;
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
    const rateLimit = await checkRateLimit(env.DB as any, 'signup', clientIP);
    if (!rateLimit.allowed) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Too many signup attempts. Please try again later.',
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

    // Validate email format
    if (!validateEmail(email)) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Please enter a valid email address',
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Validate password strength
    const passwordError = validatePassword(password);
    if (passwordError) {
      return new Response(
        JSON.stringify({
          success: false,
          error: passwordError,
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Check if user already exists (but don't reveal this to prevent enumeration)
    const existingUser = await findUserByEmail(env.DB as any, email);
    if (existingUser) {
      // Return same success message to prevent user enumeration
      // But don't actually create the user or send email
      return new Response(
        JSON.stringify({
          success: true,
          message: 'If this email is available, you will receive a verification email shortly.',
        }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Hash password
    const passwordHash = await hashPassword(password);

    // Create user
    const userId = await createUser(env.DB as any, email, passwordHash);
    if (!userId) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Failed to create account. Please try again.',
        }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Generate verification token
    const { token, tokenHash } = await generateSecureToken();
    const expiresAt = getExpirationDate('verify_email');

    // Store token hash in database
    await createAuthToken(
      env.DB as any,
      tokenHash,
      userId,
      'verify_email',
      expiresAt
    );

    // Send verification email
    const emailTemplate = welcomeEmailTemplate(env.APP_BASE_URL, token);
    await sendEmail(
      {
        AWS_ACCESS_KEY_ID: env.AWS_ACCESS_KEY_ID,
        AWS_SECRET_ACCESS_KEY: env.AWS_SECRET_ACCESS_KEY,
        AWS_REGION: env.AWS_REGION,
        SES_FROM_EMAIL: env.SES_FROM_EMAIL,
      },
      email,
      emailTemplate.subject,
      emailTemplate.html,
      emailTemplate.text
    );

    return new Response(
      JSON.stringify({
        success: true,
        message: 'If this email is available, you will receive a verification email shortly.',
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Signup error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: 'An error occurred. Please try again.',
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
