/**
 * Resend Verification Email API Endpoint
 * POST /api/auth/resend-verification
 * 
 * Resends verification email to authenticated user
 */
import { getSessionFromRequest } from '../../../lib/auth/session';
import { findUserById } from '../../../lib/db/users';
import { findValidSession } from '../../../lib/db/sessions';
import { generateSecureToken, getExpirationDate } from '../../../lib/auth/tokens';
import { createAuthToken } from '../../../lib/db/tokens';
import { sendEmail } from '../../../lib/email/ses';
import { welcomeEmailTemplate } from '../../../lib/email/templates';

interface Env {
  DB: D1Database;
  AUTH_COOKIE_SECRET: string;
  APP_BASE_URL: string;
  AWS_ACCESS_KEY_ID: string;
  AWS_SECRET_ACCESS_KEY: string;
  AWS_REGION: string;
  SES_FROM_EMAIL: string;
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
    // Get session from cookie
    const sessionData = await getSessionFromRequest(request, env.AUTH_COOKIE_SECRET);

    if (!sessionData) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Not authenticated',
        }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Verify session exists in database
    const session = await findValidSession(env.DB as any, sessionData.sessionId);
    if (!session) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Session expired',
        }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Get user
    const user = await findUserById(env.DB as any, session.user_id);
    if (!user) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'User not found',
        }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Check if already verified
    if (user.email_verified) {
      return new Response(
        JSON.stringify({
          success: true,
          message: 'Email is already verified',
        }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Generate verification token
    const { token, tokenHash } = await generateSecureToken();
    const expiresAt = getExpirationDate('verify_email');

    // Store token in database
    await createAuthToken(env.DB as any, tokenHash, user.id, 'verify_email', expiresAt);

    // Send verification email
    const emailTemplate = welcomeEmailTemplate(env.APP_BASE_URL, token);
    
    try {
      await sendEmail(
        {
          AWS_ACCESS_KEY_ID: env.AWS_ACCESS_KEY_ID,
          AWS_SECRET_ACCESS_KEY: env.AWS_SECRET_ACCESS_KEY,
          AWS_REGION: env.AWS_REGION,
          SES_FROM_EMAIL: env.SES_FROM_EMAIL,
        },
        user.email,
        emailTemplate.subject,
        emailTemplate.html,
        emailTemplate.text
      );
    } catch (emailError) {
      console.error('Failed to send verification email:', emailError);
      // Still return success - don't expose email sending issues
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Verification email sent',
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Resend verification error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: 'An error occurred',
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
