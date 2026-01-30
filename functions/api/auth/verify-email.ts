/**
 * Verify Email API Endpoint
 * POST /api/auth/verify-email
 * 
 * Verifies email using token from email link
 */
import { hashToken } from '../../../lib/auth/tokens';
import { verifyUserEmail } from '../../../lib/db/users';
import { findValidAuthToken, deleteAuthToken } from '../../../lib/db/tokens';
import { checkRateLimit } from '../../../lib/db/rate-limit';

interface Env {
  DB: D1Database;
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
    const rateLimit = await checkRateLimit(env.DB as any, 'verify_email', clientIP);
    if (!rateLimit.allowed) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Too many attempts. Please try again later.',
        }),
        {
          status: 429,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Parse request body
    const body = await request.json().catch(() => ({})) as { token?: string };
    const { token } = body;

    if (!token) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Verification token is required',
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Hash the token to look it up
    const tokenHash = hashToken(token);

    // Find valid token
    const authToken = await findValidAuthToken(
      env.DB as any,
      tokenHash,
      'verify_email'
    );

    if (!authToken) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Invalid or expired verification link. Please request a new one.',
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Mark email as verified
    const verified = await verifyUserEmail(env.DB as any, authToken.user_id);
    if (!verified) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Failed to verify email. Please try again.',
        }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Delete the token (single use)
    await deleteAuthToken(env.DB as any, tokenHash);

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Email verified successfully! You can now log in.',
        redirectTo: '/sign-in',
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Verify email error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: 'An error occurred. Please try again.',
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
