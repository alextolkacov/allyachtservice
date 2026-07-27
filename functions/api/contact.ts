import {
  CONTACT_FORM_LIMITS,
  validateContactForm,
  type ContactSubmission,
} from '../_lib/contact-form';
import { EmailDeliveryError, sendContactEmail } from '../_lib/email';
import { verifyTurnstile } from '../_lib/turnstile';

interface ContactApiResponse {
  ok: boolean;
  message: string;
  reference?: string;
  errors?: Record<string, string>;
}

const responseHeaders = {
  'Cache-Control': 'no-store',
  'Content-Type': 'application/json; charset=utf-8',
  'Referrer-Policy': 'no-referrer',
  'X-Content-Type-Options': 'nosniff',
} as const;

function jsonResponse(
  body: ContactApiResponse,
  status = 200,
  extraHeaders: Record<string, string> = {},
): Response {
  return Response.json(body, {
    status,
    headers: {
      ...responseHeaders,
      ...extraHeaders,
    },
  });
}

function logEvent(
  level: 'info' | 'error',
  event: string,
  details: Record<string, string | number | boolean | undefined>,
): void {
  const payload = JSON.stringify({
    event,
    ...details,
  });

  if (level === 'error') console.error(payload);
  else console.log(payload);
}

function getClientIp(request: Request): string {
  return request.headers.get('CF-Connecting-IP')?.trim() || 'unknown';
}

async function hashValue(value: string): Promise<string> {
  const encoded = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest('SHA-256', encoded);
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('');
}

async function getCacheKey(kind: string, value: string): Promise<Request> {
  const digest = await hashValue(`${kind}:${value}`);
  return new Request(`https://contact-control.invalid/${kind}/${digest}`);
}

async function hasCachedEntry(key: Request): Promise<boolean> {
  return Boolean(await caches.default.match(key));
}

function rememberCacheEntry(
  key: Request,
  maxAgeSeconds: number,
): Promise<void> {
  return caches.default
    .put(
      key,
      new Response('', {
        headers: {
          'Cache-Control': `max-age=${maxAgeSeconds}`,
        },
      }),
    )
    .then(() => undefined);
}

function isSameOriginRequest(request: Request): boolean {
  const origin = request.headers.get('Origin');
  if (!origin) return false;

  try {
    return new URL(origin).origin === new URL(request.url).origin;
  } catch {
    return false;
  }
}

async function checkSubmissionControls(
  request: Request,
  submission: ContactSubmission,
): Promise<
  | {
      duplicate: true;
      submissionKey: Request;
      rateLimitKey: Request;
    }
  | {
      duplicate: false;
      rateLimited: boolean;
      submissionKey: Request;
      rateLimitKey: Request;
    }
> {
  const clientIp = getClientIp(request);
  const [submissionKey, rateLimitKey] = await Promise.all([
    getCacheKey('submission', submission.submissionId),
    getCacheKey('rate', clientIp),
  ]);
  const [duplicate, rateLimited] = await Promise.all([
    hasCachedEntry(submissionKey),
    hasCachedEntry(rateLimitKey),
  ]);

  if (duplicate) {
    return {
      duplicate: true,
      submissionKey,
      rateLimitKey,
    };
  }

  return {
    duplicate: false,
    rateLimited,
    submissionKey,
    rateLimitKey,
  };
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;
  const contentType = request.headers.get('Content-Type') ?? '';
  const contentLength = Number(request.headers.get('Content-Length') ?? '0');

  if (!isSameOriginRequest(request)) {
    return jsonResponse(
      {
        ok: false,
        message: 'The form request could not be verified.',
      },
      403,
    );
  }

  if (!contentType.toLowerCase().startsWith('multipart/form-data')) {
    return jsonResponse(
      {
        ok: false,
        message: 'Submit the enquiry using the website form.',
      },
      415,
    );
  }

  if (
    Number.isFinite(contentLength) &&
    contentLength > CONTACT_FORM_LIMITS.requestBytes
  ) {
    return jsonResponse(
      {
        ok: false,
        message: 'The enquiry is too large to submit.',
        errors: {
          attachments: 'Reduce the attachment size and try again.',
        },
      },
      413,
    );
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return jsonResponse(
      {
        ok: false,
        message: 'The form data could not be read.',
      },
      400,
    );
  }

  const validation = await validateContactForm(formData);

  if (validation.isHoneypot) {
    return jsonResponse({
      ok: true,
      message: 'Thank you. Your enquiry has been received.',
    });
  }

  if (!validation.submission || Object.keys(validation.errors).length > 0) {
    return jsonResponse(
      {
        ok: false,
        message: 'Check the highlighted fields and try again.',
        errors: validation.errors,
      },
      400,
    );
  }

  const submission = validation.submission;
  const controls = await checkSubmissionControls(request, submission);

  if (controls.duplicate) {
    return jsonResponse({
      ok: true,
      message: 'Thank you. Your enquiry has already been received.',
      reference: submission.reference,
    });
  }

  if (controls.rateLimited) {
    return jsonResponse(
      {
        ok: false,
        message:
          'Please wait a minute before sending another enquiry, or contact us directly.',
      },
      429,
      { 'Retry-After': '60' },
    );
  }

  const verification = await verifyTurnstile({
    secret: env.TURNSTILE_SECRET_KEY,
    token: submission.turnstileToken,
    remoteIp: getClientIp(request),
    expectedHostnames: env.TURNSTILE_EXPECTED_HOSTNAMES,
  });

  if (!verification.success) {
    logEvent('info', 'contact_turnstile_rejected', {
      reference: submission.reference,
      reason: verification.reason,
    });
    return jsonResponse(
      {
        ok: false,
        message:
          'Secure verification failed or expired. Complete it again and resubmit the form.',
        errors: {
          verification: 'Complete the secure verification again.',
        },
      },
      400,
    );
  }

  try {
    await sendContactEmail(submission, env);
  } catch (error) {
    const deliveryError =
      error instanceof EmailDeliveryError
        ? error
        : new EmailDeliveryError('Unexpected email delivery failure.');
    logEvent('error', 'contact_email_failed', {
      reference: submission.reference,
      code: deliveryError.code,
      status: deliveryError.status,
    });
    return jsonResponse(
      {
        ok: false,
        message:
          deliveryError.status === 429
            ? 'The email service is temporarily busy. Please wait and try again, or contact us directly.'
            : 'Your enquiry could not be delivered. Please try again or contact us by phone, WhatsApp or email.',
      },
      deliveryError.status,
      deliveryError.status === 429 ? { 'Retry-After': '60' } : {},
    );
  }

  context.waitUntil(
    Promise.all([
      rememberCacheEntry(controls.submissionKey, 24 * 60 * 60),
      rememberCacheEntry(controls.rateLimitKey, 60),
    ]).then(() => undefined),
  );
  logEvent('info', 'contact_email_sent', {
    reference: submission.reference,
    service: submission.service || 'not-specified',
    attachmentCount: submission.attachments.length,
    source: submission.source,
  });

  return jsonResponse({
    ok: true,
    message:
      'Thank you. Your enquiry has been sent and we will reply as soon as possible.',
    reference: submission.reference,
  });
};

export const onRequestGet: PagesFunction<Env> = () =>
  jsonResponse(
    {
      ok: false,
      message: 'Use the contact form to send an enquiry.',
    },
    405,
    { Allow: 'POST' },
  );

export const onRequestOptions: PagesFunction<Env> = () =>
  new Response(null, {
    status: 204,
    headers: {
      Allow: 'POST, OPTIONS',
      'Cache-Control': 'no-store',
      'X-Content-Type-Options': 'nosniff',
    },
  });
