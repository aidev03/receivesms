/**
 * Rate Limiting
 * Simple rate limiter for sensitive actions
 */
import type { D1Database } from './users';

interface RateLimitConfig {
  maxAttempts: number;
  windowMinutes: number;
}

const RATE_LIMITS: Record<string, RateLimitConfig> = {
  login: { maxAttempts: 5, windowMinutes: 15 },
  signup: { maxAttempts: 3, windowMinutes: 60 },
  forgot_password: { maxAttempts: 3, windowMinutes: 60 },
  verify_email: { maxAttempts: 5, windowMinutes: 15 },
};

/**
 * Check if action is rate limited
 * Returns true if allowed, false if rate limited
 */
export async function checkRateLimit(
  db: D1Database,
  action: keyof typeof RATE_LIMITS,
  identifier: string // IP address or email
): Promise<{ allowed: boolean; remaining: number; resetAt: Date }> {
  const config = RATE_LIMITS[action];
  const now = new Date();

  // Get current record
  const record = await db
    .prepare(
      'SELECT count, reset_at FROM rate_limits WHERE identifier = ? AND action = ?'
    )
    .bind(identifier, action)
    .first<{ count: number; reset_at: string }>();

  // Calculate reset time
  const resetAt = new Date(now.getTime() + config.windowMinutes * 60 * 1000);

  if (!record) {
    // No record, create new one
    await db
      .prepare(
        'INSERT INTO rate_limits (identifier, action, count, reset_at) VALUES (?, ?, 1, ?)'
      )
      .bind(identifier, action, resetAt.toISOString())
      .run();

    return {
      allowed: true,
      remaining: config.maxAttempts - 1,
      resetAt,
    };
  }

  // Check if window has expired
  const recordResetAt = new Date(record.reset_at);
  if (recordResetAt < now) {
    // Window expired, reset count
    await db
      .prepare(
        'UPDATE rate_limits SET count = 1, reset_at = ? WHERE identifier = ? AND action = ?'
      )
      .bind(resetAt.toISOString(), identifier, action)
      .run();

    return {
      allowed: true,
      remaining: config.maxAttempts - 1,
      resetAt,
    };
  }

  if (record.count >= config.maxAttempts) {
    // Rate limited
    return {
      allowed: false,
      remaining: 0,
      resetAt: recordResetAt,
    };
  }

  // Increment count
  await db
    .prepare('UPDATE rate_limits SET count = count + 1 WHERE identifier = ? AND action = ?')
    .bind(identifier, action)
    .run();

  return {
    allowed: true,
    remaining: config.maxAttempts - record.count - 1,
    resetAt: recordResetAt,
  };
}

/**
 * Reset rate limit (e.g., after successful login)
 */
export async function resetRateLimit(
  db: D1Database,
  action: string,
  identifier: string
): Promise<void> {
  await db
    .prepare('DELETE FROM rate_limits WHERE identifier = ? AND action = ?')
    .bind(identifier, action)
    .run();
}

/**
 * Clean up old rate limit records
 */
export async function cleanupRateLimits(db: D1Database): Promise<number> {
  const now = new Date().toISOString();
  const result = await db
    .prepare('DELETE FROM rate_limits WHERE reset_at < ?')
    .bind(now)
    .run();

  return result.meta?.changes ?? 0;
}
