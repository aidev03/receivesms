/**
 * Session Management
 * Secure HttpOnly cookie-based sessions
 */
import { createHmac } from 'crypto';

const COOKIE_NAME = 'session';
const COOKIE_MAX_AGE = 7 * 24 * 60 * 60; // 7 days in seconds

interface SessionData {
  sessionId: string;
  userId: number;
  expiresAt: string;
}

/**
 * Sign data with HMAC-SHA256
 */
function signData(data: string, secret: string): string {
  return createHmac('sha256', secret).update(data).digest('hex');
}

/**
 * Create a signed session cookie value
 */
export function createSessionCookie(
  sessionData: SessionData,
  secret: string
): string {
  const data = JSON.stringify(sessionData);
  const signature = signData(data, secret);
  const encoded = Buffer.from(data).toString('base64');
  return `${encoded}.${signature}`;
}

/**
 * Parse and verify a session cookie
 * Returns null if invalid or tampered
 */
export function parseSessionCookie(
  cookieValue: string,
  secret: string
): SessionData | null {
  try {
    const [encoded, signature] = cookieValue.split('.');
    if (!encoded || !signature) return null;

    const data = Buffer.from(encoded, 'base64').toString('utf-8');
    const expectedSignature = signData(data, secret);

    // Constant-time comparison to prevent timing attacks
    if (!timingSafeEqual(signature, expectedSignature)) {
      return null;
    }

    const sessionData = JSON.parse(data) as SessionData;

    // Check if session is expired
    if (new Date(sessionData.expiresAt) < new Date()) {
      return null;
    }

    return sessionData;
  } catch {
    return null;
  }
}

/**
 * Constant-time string comparison
 */
function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return result === 0;
}

/**
 * Get session cookie options
 */
export function getSessionCookieOptions(isProduction: boolean): string {
  const options = [
    `Max-Age=${COOKIE_MAX_AGE}`,
    'Path=/',
    'HttpOnly',
    'SameSite=Lax',
  ];
  
  if (isProduction) {
    options.push('Secure');
  }
  
  return options.join('; ');
}

/**
 * Get cookie header for setting session
 */
export function setSessionCookieHeader(
  sessionData: SessionData,
  secret: string,
  isProduction: boolean
): string {
  const cookieValue = createSessionCookie(sessionData, secret);
  const options = getSessionCookieOptions(isProduction);
  return `${COOKIE_NAME}=${cookieValue}; ${options}`;
}

/**
 * Get cookie header for clearing session
 */
export function clearSessionCookieHeader(): string {
  return `${COOKIE_NAME}=; Max-Age=0; Path=/; HttpOnly; SameSite=Lax`;
}

/**
 * Extract session cookie from request headers
 */
export function getSessionFromRequest(
  request: Request,
  secret: string
): SessionData | null {
  const cookieHeader = request.headers.get('Cookie');
  if (!cookieHeader) return null;

  const cookies = Object.fromEntries(
    cookieHeader.split(';').map((cookie) => {
      const [name, ...value] = cookie.trim().split('=');
      return [name, value.join('=')];
    })
  );

  const sessionCookie = cookies[COOKIE_NAME];
  if (!sessionCookie) return null;

  return parseSessionCookie(sessionCookie, secret);
}
