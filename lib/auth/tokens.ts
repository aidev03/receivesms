/**
 * Secure Token Utilities
 * Cryptographically secure token generation and validation
 * Uses Web Crypto API for Cloudflare Workers compatibility
 */

/**
 * Generate a cryptographically secure random token
 * Returns both the raw token (for email) and hash (for storage)
 */
export async function generateSecureToken(): Promise<{ token: string; tokenHash: string }> {
  // Generate 32 bytes of random data (256 bits)
  const randomArray = new Uint8Array(32);
  crypto.getRandomValues(randomArray);
  const token = Array.from(randomArray)
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
  
  // Hash the token for storage (never store raw tokens)
  const tokenHash = await hashToken(token);
  return { token, tokenHash };
}

/**
 * Hash a token using SHA-256 (Web Crypto API)
 */
export async function hashToken(token: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(token);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
}

/**
 * Generate a secure session ID
 */
export function generateSessionId(): string {
  const randomArray = new Uint8Array(32);
  crypto.getRandomValues(randomArray);
  return Array.from(randomArray)
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
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
