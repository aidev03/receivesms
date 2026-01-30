/**
 * Reset Password API Endpoint
 * POST /api/auth/reset-password
 * 
 * Resets password using token from email
 */
import { hashPassword, validatePassword } from '../../../lib/auth/password';
import { hashToken } from '../../../lib/auth/tokens';
import { findUserById, updateUserPassword } from '../../../lib/db/users';
import { findValidAuthToken, deleteAuthToken, deleteAllUserTokens } from '../../../lib/db/tokens';
import { deleteAllUserSessions } from '../../../lib/db/sessions';
import { sendEmail } from '../../../lib/email/ses';
import { passwordChangedEmailTemplate } from '../../../lib/email/templates';

interface Env {
  DB: D1Database;
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
    // Parse request body
    const body = await request.json().catch(() => ({})) as {
      token?: string;
      password?: string;
    };

    const { token, password } = body;

    if (!token || !password) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Token and new password are required',
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

    // Hash the token to look it up
    const tokenHash = await hashToken(token);

    // Find valid token
    const authToken = await findValidAuthToken(
      env.DB as any,
      tokenHash,
      'reset_password'
    );

    if (!authToken) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Invalid or expired reset link. Please request a new one.',
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Get user
    const user = await findUserById(env.DB as any, authToken.user_id);
    if (!user) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'User not found',
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Hash new password
    const passwordHash = await hashPassword(password);

    // Update password
    const updated = await updateUserPassword(env.DB as any, user.id, passwordHash);
    if (!updated) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Failed to update password. Please try again.',
        }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Delete the reset token (single use)
    await deleteAuthToken(env.DB as any, tokenHash);

    // Delete all other tokens for this user
    await deleteAllUserTokens(env.DB as any, user.id);

    // Invalidate all sessions (security measure)
    await deleteAllUserSessions(env.DB as any, user.id);

    // Send confirmation email
    const emailTemplate = passwordChangedEmailTemplate();
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

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Password reset successfully! You can now log in with your new password.',
        redirectTo: '/sign-in',
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Reset password error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: 'An error occurred. Please try again.',
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
