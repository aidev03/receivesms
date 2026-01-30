/**
 * Amazon SES Email Client
 * Uses raw fetch with AWS Signature V4 for Cloudflare Workers compatibility
 */

interface EmailEnv {
  AWS_ACCESS_KEY_ID: string;
  AWS_SECRET_ACCESS_KEY: string;
  AWS_REGION: string;
  SES_FROM_EMAIL: string;
}

/**
 * Create HMAC-SHA256 signature using Web Crypto API
 */
async function hmacSha256(key: ArrayBuffer, message: string): Promise<ArrayBuffer> {
  const cryptoKey = await crypto.subtle.importKey(
    'raw',
    key,
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  return crypto.subtle.sign('HMAC', cryptoKey, new TextEncoder().encode(message));
}

/**
 * Create HMAC-SHA256 signature from string key
 */
async function hmacSha256FromString(key: string, message: string): Promise<ArrayBuffer> {
  const keyBuffer = new TextEncoder().encode(key);
  const cryptoKey = await crypto.subtle.importKey(
    'raw',
    keyBuffer,
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  return crypto.subtle.sign('HMAC', cryptoKey, new TextEncoder().encode(message));
}

/**
 * Create SHA-256 hash
 */
async function sha256(message: string): Promise<string> {
  const hashBuffer = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(message));
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

/**
 * Convert ArrayBuffer to hex string
 */
function toHex(buffer: ArrayBuffer): string {
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

/**
 * Get AWS Signature V4 signing key
 */
async function getSignatureKey(
  secretKey: string,
  dateStamp: string,
  region: string,
  service: string
): Promise<ArrayBuffer> {
  const kDate = await hmacSha256FromString('AWS4' + secretKey, dateStamp);
  const kRegion = await hmacSha256(kDate, region);
  const kService = await hmacSha256(kRegion, service);
  return hmacSha256(kService, 'aws4_request');
}

/**
 * Send an email via Amazon SES using raw API
 */
export async function sendEmail(
  env: EmailEnv,
  to: string,
  subject: string,
  htmlBody: string,
  textBody: string
): Promise<boolean> {
  try {
    const service = 'ses';
    const host = `email.${env.AWS_REGION}.amazonaws.com`;
    const endpoint = `https://${host}/`;
    const method = 'POST';

    // Create request body
    const params = new URLSearchParams();
    params.append('Action', 'SendEmail');
    params.append('Source', env.SES_FROM_EMAIL);
    params.append('Destination.ToAddresses.member.1', to);
    params.append('Message.Subject.Data', subject);
    params.append('Message.Subject.Charset', 'UTF-8');
    params.append('Message.Body.Html.Data', htmlBody);
    params.append('Message.Body.Html.Charset', 'UTF-8');
    params.append('Message.Body.Text.Data', textBody);
    params.append('Message.Body.Text.Charset', 'UTF-8');
    params.append('Version', '2010-12-01');

    const requestBody = params.toString();

    // Create date strings
    const now = new Date();
    const amzDate = now.toISOString().replace(/[:-]|\.\d{3}/g, '');
    const dateStamp = amzDate.slice(0, 8);

    // Create canonical request
    const contentType = 'application/x-www-form-urlencoded';
    const payloadHash = await sha256(requestBody);
    
    const canonicalHeaders = 
      `content-type:${contentType}\n` +
      `host:${host}\n` +
      `x-amz-date:${amzDate}\n`;
    
    const signedHeaders = 'content-type;host;x-amz-date';
    
    const canonicalRequest = 
      `${method}\n` +
      `/\n` +
      `\n` +
      `${canonicalHeaders}\n` +
      `${signedHeaders}\n` +
      `${payloadHash}`;

    // Create string to sign
    const algorithm = 'AWS4-HMAC-SHA256';
    const credentialScope = `${dateStamp}/${env.AWS_REGION}/${service}/aws4_request`;
    const canonicalRequestHash = await sha256(canonicalRequest);
    
    const stringToSign = 
      `${algorithm}\n` +
      `${amzDate}\n` +
      `${credentialScope}\n` +
      `${canonicalRequestHash}`;

    // Calculate signature
    const signingKey = await getSignatureKey(
      env.AWS_SECRET_ACCESS_KEY,
      dateStamp,
      env.AWS_REGION,
      service
    );
    const signatureBuffer = await hmacSha256(signingKey, stringToSign);
    const signature = toHex(signatureBuffer);

    // Create authorization header
    const authorizationHeader = 
      `${algorithm} ` +
      `Credential=${env.AWS_ACCESS_KEY_ID}/${credentialScope}, ` +
      `SignedHeaders=${signedHeaders}, ` +
      `Signature=${signature}`;

    // Make request
    const response = await fetch(endpoint, {
      method,
      headers: {
        'Content-Type': contentType,
        'X-Amz-Date': amzDate,
        'Authorization': authorizationHeader,
      },
      body: requestBody,
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('SES API error:', response.status, errorText);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
}
