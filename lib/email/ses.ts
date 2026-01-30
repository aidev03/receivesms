/**
 * Amazon SES Email Client
 * Uses AWS SDK v3 for Edge compatibility
 */
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

interface EmailEnv {
  AWS_ACCESS_KEY_ID: string;
  AWS_SECRET_ACCESS_KEY: string;
  AWS_REGION: string;
  SES_FROM_EMAIL: string;
}

/**
 * Create SES client with environment credentials
 */
function createSESClient(env: EmailEnv): SESClient {
  return new SESClient({
    region: env.AWS_REGION,
    credentials: {
      accessKeyId: env.AWS_ACCESS_KEY_ID,
      secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
    },
  });
}

/**
 * Send an email via Amazon SES
 */
export async function sendEmail(
  env: EmailEnv,
  to: string,
  subject: string,
  htmlBody: string,
  textBody: string
): Promise<boolean> {
  try {
    const client = createSESClient(env);

    const command = new SendEmailCommand({
      Source: env.SES_FROM_EMAIL,
      Destination: {
        ToAddresses: [to],
      },
      Message: {
        Subject: {
          Data: subject,
          Charset: 'UTF-8',
        },
        Body: {
          Html: {
            Data: htmlBody,
            Charset: 'UTF-8',
          },
          Text: {
            Data: textBody,
            Charset: 'UTF-8',
          },
        },
      },
    });

    await client.send(command);
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
}
