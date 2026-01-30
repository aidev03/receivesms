/**
 * Forgot Password API Endpoint
 * POST /api/auth/forgot-password
 * 
 * Sends password reset email (always returns success to prevent enumeration)
 */
import { generateSecureToken, getExpirationDate } from '../../../lib/auth/tokens';
import { findUserByEmail } from '../../../lib/db/users';
import { createAuthToken } from '../../../lib/db/tokens';
import { checkRateLimit } from '../../../lib/db/rate-limit';
import { sendEmail } from '../../../lib/email/ses';
import { passwordResetEmailTemplate } from '../../../lib/email/templates';

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

  // Always return success message to prevent user enumeration
  const successResponse = new Response(
    JSON.stringify({
      success: true,
      message: 'If an account exists with this email, you will receive a password reset link shortly.',
    }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );

  try {
    // Get client IP for rate limiting
    const clientIP = request.headers.get('CF-Connecting-IP') || 'unknown';

    // Check rate limit
    const rateLimit = await checkRateLimit(env.DB as any, 'forgot_password', clientIP);
    if (!rateLimit.allowed) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Too many requests. Please try again later.',
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
    const body = await request.json().catch(() => ({})) as { email?: string };
    const { email } = body;

    if (!email) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Email is required',
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Find user (but don't reveal if they exist)
    const user = await findUserByEmail(env.DB as any, email);

    if (!user) {
      // Return success anyway to prevent enumeration
      return successResponse;
    }

    // Generate reset token
    const { token, tokenHash } = await generateSecureToken();
    const expiresAt = getExpirationDate('reset_password');

    // Store token hash in database
    await createAuthToken(
      env.DB as any,
      tokenHash,
      user.id,
      'reset_password',
      expiresAt
    );

    // Send reset email
    const emailTemplate = passwordResetEmailTemplate(env.APP_BASE_URL, token);
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

    return successResponse;
  } catch (error) {
    console.error('Forgot password error:', error);
    // Still return success to prevent information leakage
    return successResponse;
  }
};
