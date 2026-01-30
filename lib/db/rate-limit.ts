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
  const key = `${action}:${identifier}`;
  const windowStart = new Date(
    Date.now() - config.windowMinutes * 60 * 1000
  ).toISOString();

  // Get current count
  const record = await db
    .prepare(
      'SELECT count, window_start FROM rate_limits WHERE key = ? AND window_start > ?'
    )
    .bind(key, windowStart)
    .first<{ count: number; window_start: string }>();

  if (!record) {
    // No record or expired, create new window
    await db
      .prepare(
        'INSERT OR REPLACE INTO rate_limits (key, count, window_start) VALUES (?, 1, datetime("now"))'
      )
      .bind(key)
      .run();

    return {
      allowed: true,
      remaining: config.maxAttempts - 1,
      resetAt: new Date(Date.now() + config.windowMinutes * 60 * 1000),
    };
  }

  if (record.count >= config.maxAttempts) {
    // Rate limited
    const resetAt = new Date(
      new Date(record.window_start).getTime() + config.windowMinutes * 60 * 1000
    );
    return {
      allowed: false,
      remaining: 0,
      resetAt,
    };
  }

  // Increment count
  await db
    .prepare('UPDATE rate_limits SET count = count + 1 WHERE key = ?')
    .bind(key)
    .run();

  return {
    allowed: true,
    remaining: config.maxAttempts - record.count - 1,
    resetAt: new Date(
      new Date(record.window_start).getTime() + config.windowMinutes * 60 * 1000
    ),
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
  const key = `${action}:${identifier}`;
  await db.prepare('DELETE FROM rate_limits WHERE key = ?').bind(key).run();
}

/**
 * Clean up old rate limit records
 */
export async function cleanupRateLimits(db: D1Database): Promise<number> {
  const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString();
  const result = await db
    .prepare('DELETE FROM rate_limits WHERE window_start < ?')
    .bind(oneHourAgo)
    .run();

  return result.meta?.changes ?? 0;
}
