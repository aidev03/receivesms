/**
 * Get Current User API Endpoint
 * GET /api/auth/me
 * 
 * Returns current authenticated user info
 */
import { getSessionFromRequest } from '../../../lib/auth/session';
import { findUserById } from '../../../lib/db/users';
import { findValidSession } from '../../../lib/db/sessions';

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

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  try {
    // Get session from cookie
    const sessionData = getSessionFromRequest(request, env.AUTH_COOKIE_SECRET);

    if (!sessionData) {
      return new Response(
        JSON.stringify({
          authenticated: false,
          user: null,
        }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Verify session exists in database
    const session = await findValidSession(env.DB as any, sessionData.sessionId);
    if (!session) {
      return new Response(
        JSON.stringify({
          authenticated: false,
          user: null,
        }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Get user
    const user = await findUserById(env.DB as any, session.user_id);
    if (!user) {
      return new Response(
        JSON.stringify({
          authenticated: false,
          user: null,
        }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Return user info (without sensitive data)
    return new Response(
      JSON.stringify({
        authenticated: true,
        user: {
          id: user.id,
          email: user.email,
          emailVerified: Boolean(user.email_verified),
          createdAt: user.created_at,
        },
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Get user error:', error);
    return new Response(
      JSON.stringify({
        authenticated: false,
        user: null,
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
