/**
 * Email Templates
 * Transactional, AdSense-safe email templates
 */

const BRAND_NAME = 'Receive SMS Online';
const BRAND_COLOR = '#3B82F6';

/**
 * Base email wrapper with consistent styling
 */
function emailWrapper(content: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${BRAND_NAME}</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif; background-color: #f3f4f6;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
    <tr>
      <td style="background-color: #ffffff; border-radius: 12px; padding: 40px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
        ${content}
      </td>
    </tr>
    <tr>
      <td style="padding: 20px; text-align: center; color: #6b7280; font-size: 12px;">
        <p style="margin: 0;">© ${new Date().getFullYear()} ${BRAND_NAME}. All rights reserved.</p>
        <p style="margin: 8px 0 0 0;">This is a transactional email regarding your account.</p>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

/**
 * Welcome + Email Verification Email
 */
export function welcomeEmailTemplate(
  baseUrl: string,
  token: string
): { subject: string; html: string; text: string } {
  const verifyUrl = `${baseUrl}/verify-email?token=${token}`;

  const html = emailWrapper(`
    <h1 style="margin: 0 0 24px 0; color: #111827; font-size: 24px; font-weight: 600;">
      Welcome to ${BRAND_NAME}!
    </h1>
    
    <p style="margin: 0 0 16px 0; color: #374151; font-size: 16px; line-height: 24px;">
      Thank you for creating an account. To complete your registration and access all features, please verify your email address.
    </p>
    
    <table role="presentation" cellspacing="0" cellpadding="0" style="margin: 32px 0;">
      <tr>
        <td style="background-color: ${BRAND_COLOR}; border-radius: 8px;">
          <a href="${verifyUrl}" target="_blank" style="display: inline-block; padding: 14px 28px; color: #ffffff; text-decoration: none; font-size: 16px; font-weight: 600;">
            Verify Email Address
          </a>
        </td>
      </tr>
    </table>
    
    <p style="margin: 0 0 16px 0; color: #6b7280; font-size: 14px; line-height: 22px;">
      If the button doesn't work, copy and paste this link into your browser:
    </p>
    <p style="margin: 0 0 24px 0; color: ${BRAND_COLOR}; font-size: 14px; word-break: break-all;">
      ${verifyUrl}
    </p>
    
    <p style="margin: 0; color: #6b7280; font-size: 14px; line-height: 22px;">
      This link will expire in 24 hours. If you didn't create an account, you can safely ignore this email.
    </p>
  `);

  const text = `
Welcome to ${BRAND_NAME}!

Thank you for creating an account. To complete your registration, please verify your email address by visiting the link below:

${verifyUrl}

This link will expire in 24 hours.

If you didn't create an account, you can safely ignore this email.

© ${new Date().getFullYear()} ${BRAND_NAME}
  `.trim();

  return {
    subject: `Verify your email - ${BRAND_NAME}`,
    html,
    text,
  };
}

/**
 * Password Reset Email
 */
export function passwordResetEmailTemplate(
  baseUrl: string,
  token: string
): { subject: string; html: string; text: string } {
  const resetUrl = `${baseUrl}/reset-password?token=${token}`;

  const html = emailWrapper(`
    <h1 style="margin: 0 0 24px 0; color: #111827; font-size: 24px; font-weight: 600;">
      Reset Your Password
    </h1>
    
    <p style="margin: 0 0 16px 0; color: #374151; font-size: 16px; line-height: 24px;">
      We received a request to reset your password. Click the button below to create a new password.
    </p>
    
    <table role="presentation" cellspacing="0" cellpadding="0" style="margin: 32px 0;">
      <tr>
        <td style="background-color: ${BRAND_COLOR}; border-radius: 8px;">
          <a href="${resetUrl}" target="_blank" style="display: inline-block; padding: 14px 28px; color: #ffffff; text-decoration: none; font-size: 16px; font-weight: 600;">
            Reset Password
          </a>
        </td>
      </tr>
    </table>
    
    <p style="margin: 0 0 16px 0; color: #6b7280; font-size: 14px; line-height: 22px;">
      If the button doesn't work, copy and paste this link into your browser:
    </p>
    <p style="margin: 0 0 24px 0; color: ${BRAND_COLOR}; font-size: 14px; word-break: break-all;">
      ${resetUrl}
    </p>
    
    <div style="padding: 16px; background-color: #fef3c7; border-radius: 8px; margin: 24px 0;">
      <p style="margin: 0; color: #92400e; font-size: 14px; line-height: 22px;">
        <strong>Security Notice:</strong> This link will expire in 30 minutes. If you didn't request a password reset, please ignore this email or contact support if you're concerned about your account security.
      </p>
    </div>
  `);

  const text = `
Reset Your Password

We received a request to reset your password. Visit the link below to create a new password:

${resetUrl}

SECURITY NOTICE: This link will expire in 30 minutes.

If you didn't request a password reset, please ignore this email or contact support if you're concerned about your account security.

© ${new Date().getFullYear()} ${BRAND_NAME}
  `.trim();

  return {
    subject: `Reset your password - ${BRAND_NAME}`,
    html,
    text,
  };
}

/**
 * Password Changed Confirmation Email
 */
export function passwordChangedEmailTemplate(): { subject: string; html: string; text: string } {
  const html = emailWrapper(`
    <h1 style="margin: 0 0 24px 0; color: #111827; font-size: 24px; font-weight: 600;">
      Password Changed Successfully
    </h1>
    
    <p style="margin: 0 0 16px 0; color: #374151; font-size: 16px; line-height: 24px;">
      Your password has been changed successfully. You can now log in with your new password.
    </p>
    
    <div style="padding: 16px; background-color: #fef3c7; border-radius: 8px; margin: 24px 0;">
      <p style="margin: 0; color: #92400e; font-size: 14px; line-height: 22px;">
        <strong>Didn't make this change?</strong> If you didn't change your password, please contact our support team immediately as your account may be compromised.
      </p>
    </div>
  `);

  const text = `
Password Changed Successfully

Your password has been changed successfully. You can now log in with your new password.

Didn't make this change? If you didn't change your password, please contact our support team immediately as your account may be compromised.

© ${new Date().getFullYear()} ${BRAND_NAME}
  `.trim();

  return {
    subject: `Password changed - ${BRAND_NAME}`,
    html,
    text,
  };
}
