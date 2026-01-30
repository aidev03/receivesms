/**
 * Database Queries - Sessions
 * D1 database operations for session management
 */
import type { D1Database } from './users';

export interface Session {
  id: string;
  user_id: number;
  expires_at: string;
  created_at: string;
}

/**
 * Create a new session
 */
export async function createSession(
  db: D1Database,
  sessionId: string,
  userId: number,
  expiresAt: Date
): Promise<boolean> {
  try {
    await db
      .prepare(
        'INSERT INTO sessions (id, user_id, expires_at) VALUES (?, ?, ?)'
      )
      .bind(sessionId, userId, expiresAt.toISOString())
      .run();

    return true;
  } catch (error) {
    console.error('Failed to create session:', error);
    return false;
  }
}

/**
 * Find a valid session
 */
export async function findValidSession(
  db: D1Database,
  sessionId: string
): Promise<Session | null> {
  return db
    .prepare(
      'SELECT * FROM sessions WHERE id = ? AND expires_at > datetime("now")'
    )
    .bind(sessionId)
    .first<Session>();
}

/**
 * Delete a session
 */
export async function deleteSession(
  db: D1Database,
  sessionId: string
): Promise<boolean> {
  const result = await db
    .prepare('DELETE FROM sessions WHERE id = ?')
    .bind(sessionId)
    .run();

  return (result.meta?.changes ?? 0) > 0;
}

/**
 * Delete all sessions for a user (logout everywhere)
 */
export async function deleteAllUserSessions(
  db: D1Database,
  userId: number
): Promise<void> {
  await db
    .prepare('DELETE FROM sessions WHERE user_id = ?')
    .bind(userId)
    .run();
}

/**
 * Clean up expired sessions (maintenance)
 */
export async function cleanupExpiredSessions(db: D1Database): Promise<number> {
  const result = await db
    .prepare('DELETE FROM sessions WHERE expires_at < datetime("now")')
    .run();

  return result.meta?.changes ?? 0;
}
