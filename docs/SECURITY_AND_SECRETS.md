# Security and secrets

Last reviewed: 2026-09-02

## Rule

Credentials and tokens belong in local/provider secret stores, never in source, documentation, screenshots, logs or chat transcripts. Do not retrieve or display a secret merely to document the system. If a real credential is committed, stop feature work, report it privately and coordinate revocation/rotation rather than copying it.

## Environment classification

Names only:

| Class                            | Names                                                                                                        | Handling                                                                                                                                                   |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Public build settings            | `PUBLIC_SITE_INDEXABLE`, `PUBLIC_TURNSTILE_SITE_KEY`                                                         | Astro may embed values in client output. Never use the `PUBLIC_` prefix for a secret.                                                                      |
| Non-secret runtime configuration | `CONTACT_FROM_EMAIL`, `CONTACT_TO_EMAIL`, `TURNSTILE_EXPECTED_HOSTNAMES`                                     | Configure per Cloudflare environment; values may be operationally sensitive even if not credentials.                                                       |
| Secrets                          | `TURNSTILE_SECRET_KEY`, `GOOGLE_OAUTH_CLIENT_ID`, `GOOGLE_OAUTH_CLIENT_SECRET`, `GOOGLE_OAUTH_REFRESH_TOKEN` | Store encrypted in Cloudflare and untracked local `.dev.vars`; never expose client-side. Treat the OAuth client ID conservatively with the credential set. |

Tracked `.env.example` and `.dev.vars.example` document names and local setup. The latter uses provider-supplied local test values/placeholders; it is not a source for production credentials. `.gitignore` excludes real `.env*` and `.dev.vars*` files while retaining the examples.

## Contact security controls

Verified in [`functions/api/contact.ts`](../functions/api/contact.ts), [`functions/_lib/contact-form.ts`](../functions/_lib/contact-form.ts) and [`functions/_lib/turnstile.ts`](../functions/_lib/turnstile.ts):

- same-origin POST requirement and multipart-only content type;
- request, field and message limits;
- timing check and hidden honeypot;
- Cloudflare Turnstile server-side verification for action `contact`, hostname allowlist and timeout;
- hashed client-IP rate key with a one-minute limit;
- submission-ID deduplication retained in cache for 24 hours;
- safe client responses and metadata-only structured logs;
- no-store API response/header policy.

Attachments are limited to three files, 2 MB each and 3 MB combined, with an overall request limit. Allowed types are PDF, JPEG, PNG and WebP; MIME type, extension and magic signature must agree. Filenames are normalized and sanitized. These controls reduce risk but are not a malware-scanning service.

## Gmail delivery boundary

The Function exchanges the stored refresh token for a short-lived Google access token and sends a MIME message through the Gmail API. OAuth and Gmail calls have timeouts. The browser never receives Gmail credentials. The current intended authorization is send-only; do not expand OAuth scope without explicit review.

## Browser storage and third parties

Current code uses `sessionStorage` only for calculator handoff and a read/remove compatibility key. Regression checks prohibit unrecorded cookies, `localStorage`, IndexedDB, service workers, external fonts/embeds and common analytics scripts. Turnstile and Gmail are the relevant external processors in current website operation; policy text must change if tracking, storage or processors change.

## Headers and routing

[`public/_headers`](../public/_headers) sets nosniff, referrer, permissions and frame policies and marks `/api/*` no-store. [`public/_routes.json`](../public/_routes.json) limits Function invocation to `/api/*`. Reassess the security and legal inventory when changing either file.

## Secret review checklist

1. Review only filenames and variable names unless a credential holder is explicitly performing configuration.
2. Ensure real local env files remain ignored and untracked.
3. Scan the staged/current diff for key, token, password, cookie and private-key patterns without printing matched values.
4. Treat official provider test credentials as test-only; never deploy them as production settings.
5. If a real secret is found, stop, report the path/type, revoke or rotate in the authoritative provider and purge history through an owner-approved procedure.
