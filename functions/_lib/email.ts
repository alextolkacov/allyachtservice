import type { ContactAttachment, ContactSubmission } from './contact-form';

interface GoogleTokenResponse {
  access_token: string;
  expires_in?: number;
  scope?: string;
  token_type?: string;
}

interface GmailSendResponse {
  id: string;
  threadId?: string;
  labelIds?: string[];
}

export class EmailDeliveryError extends Error {
  readonly status: number;
  readonly code: string;

  constructor(message: string, status = 503, code = 'email-delivery-failed') {
    super(message);
    this.name = 'EmailDeliveryError';
    this.status = status;
    this.code = code;
  }
}

function isGoogleTokenResponse(value: unknown): value is GoogleTokenResponse {
  return (
    typeof value === 'object' &&
    value !== null &&
    'access_token' in value &&
    typeof value.access_token === 'string' &&
    value.access_token.length > 0
  );
}

function isGmailSendResponse(value: unknown): value is GmailSendResponse {
  return (
    typeof value === 'object' &&
    value !== null &&
    'id' in value &&
    typeof value.id === 'string' &&
    value.id.length > 0
  );
}

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function toHtmlLines(value: string): string {
  return escapeHtml(value).replaceAll('\n', '<br>');
}

function buildSubject(submission: ContactSubmission): string {
  const topic =
    submission.serviceLabel === 'Not specified'
      ? 'Website enquiry'
      : submission.serviceLabel;
  return `[All Yacht Service] ${topic} — ${submission.name}`.slice(0, 180);
}

function buildPlainText(submission: ContactSubmission): string {
  const attachmentNames = submission.attachments.length
    ? submission.attachments.map((item) => `- ${item.filename}`).join('\n')
    : 'None';

  return [
    `Website enquiry ${submission.reference}`,
    '',
    `Name: ${submission.name}`,
    `Email: ${submission.email}`,
    `Phone / WhatsApp: ${submission.phone || 'Not provided'}`,
    `Service: ${submission.serviceLabel}`,
    `Vessel type: ${submission.vesselTypeLabel}`,
    `Vessel length: ${submission.vesselLength ? `${submission.vesselLength} m` : 'Not provided'}`,
    `Vessel location: ${submission.vesselLocation || 'Not provided'}`,
    `Preferred date: ${submission.preferredDate || 'Not provided'}`,
    `Website language: ${submission.locale === 'es' ? 'Spanish' : 'English'}`,
    `Source: ${submission.source}`,
    `Page: ${submission.pageUrl || 'Not provided'}`,
    `Calculator estimate: ${submission.estimateReference || 'Not provided'}`,
    '',
    'Message:',
    submission.message,
    '',
    'Calculator summary:',
    submission.calculatorSummary || 'Not provided',
    '',
    'Attachments:',
    attachmentNames,
  ].join('\n');
}

function buildHtml(submission: ContactSubmission): string {
  const rows = [
    ['Reference', submission.reference],
    ['Name', submission.name],
    ['Email', submission.email],
    ['Phone / WhatsApp', submission.phone || 'Not provided'],
    ['Service', submission.serviceLabel],
    ['Vessel type', submission.vesselTypeLabel],
    [
      'Vessel length',
      submission.vesselLength ? `${submission.vesselLength} m` : 'Not provided',
    ],
    ['Vessel location', submission.vesselLocation || 'Not provided'],
    ['Preferred date', submission.preferredDate || 'Not provided'],
    ['Website language', submission.locale === 'es' ? 'Spanish' : 'English'],
    ['Source', submission.source],
    ['Page', submission.pageUrl || 'Not provided'],
    ['Calculator estimate', submission.estimateReference || 'Not provided'],
  ];
  const tableRows = rows
    .map(
      ([label, value]) =>
        `<tr><th style="padding:8px 12px;text-align:left;vertical-align:top;border-bottom:1px solid #d9dee3;color:#0a1d2f">${escapeHtml(label ?? '')}</th><td style="padding:8px 12px;border-bottom:1px solid #d9dee3">${escapeHtml(value ?? '')}</td></tr>`,
    )
    .join('');
  const attachments = submission.attachments.length
    ? `<ul>${submission.attachments.map((item) => `<li>${escapeHtml(item.filename)}</li>`).join('')}</ul>`
    : '<p>None</p>';
  const calculatorSummary = submission.calculatorSummary
    ? `<h2 style="color:#0a1d2f">Calculator summary</h2><p>${toHtmlLines(submission.calculatorSummary)}</p>`
    : '';

  return `<!doctype html>
<html lang="en">
  <body style="margin:0;background:#f5f3ed;color:#252b31;font-family:Arial,Helvetica,sans-serif;line-height:1.55">
    <div style="max-width:760px;margin:0 auto;padding:24px">
      <div style="background:#0a1d2f;padding:20px 24px;color:#fff">
        <p style="margin:0;font-size:13px;letter-spacing:.08em;text-transform:uppercase">All Yacht Service website</p>
        <h1 style="margin:6px 0 0;font-size:24px">New enquiry ${escapeHtml(submission.reference)}</h1>
      </div>
      <div style="background:#fff;padding:24px">
        <table style="width:100%;border-collapse:collapse">${tableRows}</table>
        <h2 style="margin-top:28px;color:#0a1d2f">Message</h2>
        <p>${toHtmlLines(submission.message)}</p>
        ${calculatorSummary}
        <h2 style="margin-top:28px;color:#0a1d2f">Attachments</h2>
        ${attachments}
      </div>
    </div>
  </body>
</html>`;
}

function textToBase64(value: string): string {
  const bytes = new TextEncoder().encode(value);
  const chunkSize = 0x8000;
  let binary = '';

  for (let offset = 0; offset < bytes.length; offset += chunkSize) {
    binary += String.fromCharCode(
      ...bytes.subarray(offset, offset + chunkSize),
    );
  }

  return btoa(binary);
}

function arrayBufferToBase64(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  const chunkSize = 0x8000;
  let binary = '';

  for (let offset = 0; offset < bytes.length; offset += chunkSize) {
    binary += String.fromCharCode(
      ...bytes.subarray(offset, offset + chunkSize),
    );
  }

  return btoa(binary);
}

function wrapBase64(value: string): string {
  return value.match(/.{1,76}/gu)?.join('\r\n') ?? '';
}

function encodeHeader(value: string): string {
  return `=?UTF-8?B?${textToBase64(value)}?=`;
}

function encodeBase64Url(value: string): string {
  return textToBase64(value)
    .replaceAll('+', '-')
    .replaceAll('/', '_')
    .replace(/=+$/u, '');
}

function createAsciiFilename(filename: string): string {
  const fallback = filename
    .normalize('NFKD')
    .replace(/[^\x20-\x7e]/gu, '')
    .replace(/["\\]/gu, '-')
    .trim();
  return (fallback || 'attachment').slice(0, 100);
}

function buildAttachmentPart(
  attachment: ContactAttachment,
  content: string,
): string {
  const asciiFilename = createAsciiFilename(attachment.filename);
  const encodedFilename = encodeURIComponent(attachment.filename);

  return [
    `Content-Type: ${attachment.type}; name="${asciiFilename}"`,
    'Content-Transfer-Encoding: base64',
    `Content-Disposition: attachment; filename="${asciiFilename}"; filename*=UTF-8''${encodedFilename}`,
    '',
    wrapBase64(content),
  ].join('\r\n');
}

async function buildMimeMessage(
  submission: ContactSubmission,
  env: Env,
): Promise<string> {
  const mixedBoundary = `ays-mixed-${submission.submissionId}`;
  const alternativeBoundary = `ays-alternative-${submission.submissionId}`;
  const attachmentParts = await Promise.all(
    submission.attachments.map(async (attachment) =>
      buildAttachmentPart(
        attachment,
        arrayBufferToBase64(await attachment.file.arrayBuffer()),
      ),
    ),
  );
  const headers = [
    `From: ${encodeHeader('All Yacht Service Website')} <${env.CONTACT_FROM_EMAIL}>`,
    `To: ${env.CONTACT_TO_EMAIL}`,
    `Reply-To: ${encodeHeader(submission.name)} <${submission.email}>`,
    `Subject: ${encodeHeader(buildSubject(submission))}`,
    'MIME-Version: 1.0',
    `X-Website-Submission-ID: ${submission.submissionId}`,
    `X-Website-Source: ${encodeHeader(submission.source)}`,
    `Content-Type: multipart/mixed; boundary="${mixedBoundary}"`,
  ];
  const alternative = [
    `--${mixedBoundary}`,
    `Content-Type: multipart/alternative; boundary="${alternativeBoundary}"`,
    '',
    `--${alternativeBoundary}`,
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: base64',
    '',
    wrapBase64(textToBase64(buildPlainText(submission))),
    `--${alternativeBoundary}`,
    'Content-Type: text/html; charset=UTF-8',
    'Content-Transfer-Encoding: base64',
    '',
    wrapBase64(textToBase64(buildHtml(submission))),
    `--${alternativeBoundary}--`,
  ];
  const attachments = attachmentParts.flatMap((part) => [
    `--${mixedBoundary}`,
    part,
  ]);

  return [
    ...headers,
    '',
    ...alternative,
    ...attachments,
    `--${mixedBoundary}--`,
    '',
  ].join('\r\n');
}

async function getGoogleAccessToken(env: Env): Promise<string> {
  if (
    !env.GOOGLE_OAUTH_CLIENT_ID ||
    !env.GOOGLE_OAUTH_CLIENT_SECRET ||
    !env.GOOGLE_OAUTH_REFRESH_TOKEN
  ) {
    throw new EmailDeliveryError(
      'Gmail delivery is not configured.',
      503,
      'gmail-not-configured',
    );
  }

  let response: Response;

  try {
    response = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: env.GOOGLE_OAUTH_CLIENT_ID,
        client_secret: env.GOOGLE_OAUTH_CLIENT_SECRET,
        refresh_token: env.GOOGLE_OAUTH_REFRESH_TOKEN,
        grant_type: 'refresh_token',
      }),
      signal: AbortSignal.timeout(10_000),
    });
  } catch {
    throw new EmailDeliveryError(
      'Google authorization is temporarily unavailable.',
      503,
      'gmail-oauth-unavailable',
    );
  }

  let payload: unknown;
  try {
    payload = await response.json();
  } catch {
    throw new EmailDeliveryError(
      'Google authorization returned an unreadable response.',
      503,
      'gmail-oauth-invalid-response',
    );
  }

  if (!response.ok || !isGoogleTokenResponse(payload)) {
    throw new EmailDeliveryError(
      'Google authorization rejected the stored credentials.',
      503,
      `gmail-oauth-${response.status}`,
    );
  }

  return payload.access_token;
}

export async function sendContactEmail(
  submission: ContactSubmission,
  env: Env,
): Promise<void> {
  if (!env.CONTACT_TO_EMAIL || !env.CONTACT_FROM_EMAIL) {
    throw new EmailDeliveryError(
      'Email addresses are not configured.',
      503,
      'gmail-addresses-not-configured',
    );
  }

  const [accessToken, mimeMessage] = await Promise.all([
    getGoogleAccessToken(env),
    buildMimeMessage(submission, env),
  ]);
  let response: Response;

  try {
    response = await fetch(
      'https://gmail.googleapis.com/gmail/v1/users/me/messages/send',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          raw: encodeBase64Url(mimeMessage),
        }),
        signal: AbortSignal.timeout(12_000),
      },
    );
  } catch {
    throw new EmailDeliveryError(
      'Gmail is temporarily unavailable.',
      503,
      'gmail-api-unavailable',
    );
  }

  let payload: unknown;
  try {
    payload = await response.json();
  } catch {
    throw new EmailDeliveryError(
      'Gmail returned an unreadable response.',
      503,
      'gmail-api-invalid-response',
    );
  }

  if (!response.ok || !isGmailSendResponse(payload)) {
    const status = response.status === 429 ? 429 : 503;
    throw new EmailDeliveryError(
      'Gmail rejected the message.',
      status,
      `gmail-api-${response.status}`,
    );
  }
}
