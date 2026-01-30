/**
 * Logout API Endpoint
 * POST /api/auth/logout
 * 
 * Destroys session and clears cookie
 */
import { getSessionFromRequest, clearSessionCookieHeader } from '../../../lib/auth/session';
import { deleteSession } from '../../../lib/db/sessions';

interface Env {
  DB: D1Database;
  AUTH_COOKIE_SECRET: string;
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
    // Get current session
    const session = getSessionFromRequest(request, env.AUTH_COOKIE_SECRET);

    if (session) {
      // Delete session from database
      await deleteSession(env.DB as any, session.sessionId);
    }

    // Clear session cookie
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Logged out successfully',
        redirectTo: '/sign-in',
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Set-Cookie': clearSessionCookieHeader(),
        },
      }
    );
  } catch (error) {
    console.error('Logout error:', error);
    // Still clear cookie even on error
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Logged out',
        redirectTo: '/sign-in',
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Set-Cookie': clearSessionCookieHeader(),
        },
      }
    );
  }
};
