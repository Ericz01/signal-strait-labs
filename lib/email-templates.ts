// Email templates. Email clients need table layout and inline styles, so the
// brand tokens from globals.css are repeated here as plain hex values.

import { LEADS_INBOX } from '@/lib/email';

const BRAND = {
  ink: '#01081b', // --color-ssl-bg (Abyss Blue)
  blue: '#1a59cc', // --color-ssl-blue
  gold: '#C5A059', // --color-ssl-gold
  canvas: '#fbfbfd', // --color-ssl-light-bg
  body: '#475569', // slate-600
  muted: '#64748b', // slate-500
};

const FONT = "'Plus Jakarta Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif";
const DISPLAY_FONT = "'Sora', 'Helvetica Neue', Helvetica, Arial, sans-serif";

const SITE_URL = 'https://signalstraitlabs.com';
const PHONE_DISPLAY = '+254 712 895 903';
const PHONE_TEL = '+254712895903';

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Only the first word of the name, capped. This email goes to an address
// typed into a public form, so keep visitor-supplied text to a minimum.
function firstName(name: string): string {
  const first = name.trim().split(/\s+/)[0] ?? '';
  return first.slice(0, 40);
}

export type RenderedEmail = {
  subject: string;
  text: string;
  html: string;
};

export function leadConfirmationEmail({ name }: { name: string }): RenderedEmail {
  const first = firstName(name);
  const greeting = first ? `Hi ${first},` : 'Hi,';
  const subject = 'Thanks for contacting Signal Strait Labs';

  const text = [
    greeting,
    '',
    'Thanks for getting in touch. We have your message and will get back to you shortly.',
    '',
    `If it is urgent, reply to this email or call us on ${PHONE_DISPLAY}.`,
    '',
    'Signal Strait Labs',
    'Nairobi, Kenya',
    SITE_URL,
    '',
    'You got this email because someone used this address on the contact form at signalstraitlabs.com. If that was not you, you can ignore it.',
  ].join('\n');

  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHtml(subject)}</title>
</head>
<body style="margin:0;padding:0;background-color:${BRAND.canvas};">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${BRAND.canvas};">
  <tr>
    <td align="center" style="padding:32px 16px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:560px;">
        <tr>
          <td style="background-color:${BRAND.ink};border-radius:12px 12px 0 0;border-bottom:2px solid ${BRAND.gold};padding:24px 32px;">
            <span style="font-family:${DISPLAY_FONT};font-size:18px;font-weight:700;color:#ffffff;letter-spacing:0.02em;">Signal Strait Labs</span>
          </td>
        </tr>
        <tr>
          <td style="background-color:#ffffff;border-radius:0 0 12px 12px;padding:32px;font-family:${FONT};font-size:16px;line-height:1.6;color:${BRAND.body};">
            <p style="margin:0 0 16px;font-family:${DISPLAY_FONT};font-size:20px;font-weight:600;color:${BRAND.ink};">${escapeHtml(greeting)}</p>
            <p style="margin:0 0 16px;">Thanks for getting in touch. We have your message and will get back to you shortly.</p>
            <p style="margin:0 0 24px;">If it is urgent, reply to this email or call us on <a href="tel:${PHONE_TEL}" style="color:${BRAND.blue};text-decoration:none;">${PHONE_DISPLAY}</a>.</p>
            <p style="margin:0;color:${BRAND.ink};font-weight:600;">Signal Strait Labs</p>
            <p style="margin:0;">Nairobi, Kenya</p>
            <p style="margin:0;"><a href="${SITE_URL}" style="color:${BRAND.blue};text-decoration:none;">signalstraitlabs.com</a></p>
          </td>
        </tr>
        <tr>
          <td style="padding:16px 32px;font-family:${FONT};font-size:12px;line-height:1.5;color:${BRAND.muted};text-align:center;">
            You got this email because someone used this address on the contact form at signalstraitlabs.com. If that was not you, you can ignore it.
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`;

  return { subject, text, html };
}

// Reply-to for emails sent to visitors, so replies reach the team inbox
// instead of the no-reply sender.
export const VISITOR_REPLY_TO = LEADS_INBOX;
