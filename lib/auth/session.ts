/**
 * Session Management
 * Secure HttpOnly cookie-based sessions
 * Uses Web Crypto API for Cloudflare Workers compatibility
 */

const COOKIE_NAME = 'session';
const COOKIE_MAX_AGE = 7 * 24 * 60 * 60; // 7 days in seconds

interface SessionData {
  sessionId: string;
  userId: number;
  expiresAt: string;
}

/**
 * Sign data with HMAC-SHA256 using Web Crypto API
 */
async function signData(data: string, secret: string): Promise<string> {
  const encoder = new TextEncoder();
  const keyData = encoder.encode(secret);
  const messageData = encoder.encode(data);
  
  const key = await crypto.subtle.importKey(
    'raw',
    keyData,
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  
  const signature = await crypto.subtle.sign('HMAC', key, messageData);
  const signatureArray = Array.from(new Uint8Array(signature));
  return signatureArray.map((b) => b.toString(16).padStart(2, '0')).join('');
}

/**
 * Create a signed session cookie value
 */
export async function createSessionCookie(
  sessionData: SessionData,
  secret: string
): Promise<string> {
  const data = JSON.stringify(sessionData);
  const signature = await signData(data, secret);
  const encoded = btoa(data);
  return `${encoded}.${signature}`;
}

/**
 * Parse and verify a session cookie
 * Returns null if invalid or tampered
 */
export async function parseSessionCookie(
  cookieValue: string,
  secret: string
): Promise<SessionData | null> {
  try {
    const [encoded, signature] = cookieValue.split('.');
    if (!encoded || !signature) return null;

    const data = atob(encoded);
    const expectedSignature = await signData(data, secret);

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
export async function setSessionCookieHeader(
  sessionData: SessionData,
  secret: string,
  isProduction: boolean
): Promise<string> {
  const cookieValue = await createSessionCookie(sessionData, secret);
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
export async function getSessionFromRequest(
  request: Request,
  secret: string
): Promise<SessionData | null> {
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
