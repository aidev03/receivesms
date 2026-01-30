/**
 * Secure Token Utilities
 * Cryptographically secure token generation and validation
 */
import { createHash, randomBytes } from 'crypto';

/**
 * Generate a cryptographically secure random token
 * Returns both the raw token (for email) and hash (for storage)
 */
export function generateSecureToken(): { token: string; tokenHash: string } {
  // Generate 32 bytes of random data (256 bits)
  const token = randomBytes(32).toString('hex');
  // Hash the token for storage (never store raw tokens)
  const tokenHash = hashToken(token);
  return { token, tokenHash };
}

/**
 * Hash a token using SHA-256
 */
export function hashToken(token: string): string {
  return createHash('sha256').update(token).digest('hex');
}

/**
 * Generate a secure session ID
 */
export function generateSessionId(): string {
  return randomBytes(32).toString('hex');
}

/**
 * Calculate expiration date
 */
export function getExpirationDate(type: 'verify_email' | 'reset_password'): Date {
  const now = new Date();
  if (type === 'verify_email') {
    // 24 hours for email verification
    return new Date(now.getTime() + 24 * 60 * 60 * 1000);
  } else {
    // 30 minutes for password reset
    return new Date(now.getTime() + 30 * 60 * 1000);
  }
}

/**
 * Check if a date string is expired
 */
export function isExpired(expiresAt: string): boolean {
  return new Date(expiresAt) < new Date();
}

/**
 * Get session expiration (7 days)
 */
export function getSessionExpiration(): Date {
  return new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
}
