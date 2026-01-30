/**
 * Database Queries - Auth Tokens
 * D1 database operations for verification and reset tokens
 */
import type { D1Database } from './users';

export interface AuthToken {
  token_hash: string;
  user_id: number;
  type: 'verify_email' | 'reset_password';
  expires_at: string;
  created_at: string;
}

/**
 * Create an auth token
 */
export async function createAuthToken(
  db: D1Database,
  tokenHash: string,
  userId: number,
  type: 'verify_email' | 'reset_password',
  expiresAt: Date
): Promise<boolean> {
  try {
    // Delete any existing tokens of the same type for this user
    await db
      .prepare('DELETE FROM auth_tokens WHERE user_id = ? AND type = ?')
      .bind(userId, type)
      .run();

    // Create new token
    await db
      .prepare(
        'INSERT INTO auth_tokens (token_hash, user_id, type, expires_at) VALUES (?, ?, ?, ?)'
      )
      .bind(tokenHash, userId, type, expiresAt.toISOString())
      .run();

    return true;
  } catch (error) {
    console.error('Failed to create auth token:', error);
    return false;
  }
}

/**
 * Find and validate an auth token
 * Returns the token if valid, null if not found or expired
 */
export async function findValidAuthToken(
  db: D1Database,
  tokenHash: string,
  type: 'verify_email' | 'reset_password'
): Promise<AuthToken | null> {
  const token = await db
    .prepare(
      'SELECT * FROM auth_tokens WHERE token_hash = ? AND type = ? AND expires_at > datetime("now")'
    )
    .bind(tokenHash, type)
    .first<AuthToken>();

  return token;
}

/**
 * Delete an auth token (single use)
 */
export async function deleteAuthToken(
  db: D1Database,
  tokenHash: string
): Promise<boolean> {
  const result = await db
    .prepare('DELETE FROM auth_tokens WHERE token_hash = ?')
    .bind(tokenHash)
    .run();

  return (result.meta?.changes ?? 0) > 0;
}

/**
 * Delete all tokens for a user (used when password is reset)
 */
export async function deleteAllUserTokens(
  db: D1Database,
  userId: number
): Promise<void> {
  await db
    .prepare('DELETE FROM auth_tokens WHERE user_id = ?')
    .bind(userId)
    .run();
}

/**
 * Clean up expired tokens (maintenance)
 */
export async function cleanupExpiredTokens(db: D1Database): Promise<number> {
  const result = await db
    .prepare('DELETE FROM auth_tokens WHERE expires_at < datetime("now")')
    .run();

  return result.meta?.changes ?? 0;
}
