import { getServerEnv } from '@/lib/server-env';

// Transactional email through the Resend HTTP API.
// Uses plain `fetch` (no SDK) so it runs natively on Cloudflare Workers.
// The sending domain must be verified in the Resend dashboard.

const RESEND_ENDPOINT = 'https://api.resend.com/emails';
const SEND_TIMEOUT_MS = 10_000;

export const EMAIL_FROM = 'Signal Strait Labs <noreply@signalstraitlabs.com>';
export const LEADS_INBOX = 'connect@signalstraitlabs.com';

export type EmailMessage = {
  to: string | string[];
  subject: string;
  text: string;
  html?: string;
  replyTo?: string;
};

export type SendEmailResult =
  | { status: 'sent'; id?: string }
  | { status: 'not-configured' }
  | { status: 'failed'; error: string };

export function isEmailConfigured(): boolean {
  return Boolean(getServerEnv('RESEND_API_KEY'));
}

// Header values must stay on one line.
function singleLine(value: string): string {
  return value.replace(/[\r\n]+/g, ' ').trim();
}

export async function sendEmail(message: EmailMessage): Promise<SendEmailResult> {
  // Read per call, inside the request, never at module scope.
  const apiKey = getServerEnv('RESEND_API_KEY');
  if (!apiKey) {
    return { status: 'not-configured' };
  }

  try {
    const response = await fetch(RESEND_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: EMAIL_FROM,
        to: message.to,
        subject: singleLine(message.subject),
        text: message.text,
        ...(message.html ? { html: message.html } : {}),
        ...(message.replyTo ? { reply_to: singleLine(message.replyTo) } : {}),
      }),
      signal: AbortSignal.timeout(SEND_TIMEOUT_MS),
    });

    if (!response.ok) {
      // Resend returns { name, message } on errors. Never include the API key.
      const body = (await response.json().catch(() => ({}))) as { name?: string; message?: string };
      return {
        status: 'failed',
        error: `Resend ${response.status}${body.name ? ` ${body.name}` : ''}${body.message ? `: ${body.message}` : ''}`,
      };
    }

    const data = (await response.json().catch(() => ({}))) as { id?: string };
    return { status: 'sent', id: data.id };
  } catch (err) {
    return { status: 'failed', error: err instanceof Error ? err.message : String(err) };
  }
}
