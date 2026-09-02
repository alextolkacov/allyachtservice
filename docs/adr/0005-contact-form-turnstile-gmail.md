# ADR-0005: Contact form with Pages Function, Turnstile and Gmail

- Status: Accepted
- Decision date: 2026-07-27
- Last reviewed: 2026-09-02
- Decision owners: Project owner and repository maintainers
- Related documentation: [Contact Form](../features/CONTACT_FORM.md), [Security and Secrets](../SECURITY_AND_SECRETS.md)

## Context

Commit `ce4b343` added the Contact page, form and email API. The current endpoint needs to accept localized enquiry data and attachments while keeping abuse verification and Google credentials outside static/client code. Delivery targets the existing business mailbox through Gmail.

The provider rationale below is reconstructed from current code, configuration and regression rules; a full alternatives analysis is not in git history.

## Decision

- Use one Cloudflare Pages Function at `/api/contact` for authoritative validation and delivery.
- Use Cloudflare Turnstile client token plus server-side Siteverify checks for the `contact` action and expected hostnames.
- Apply same-origin, honeypot, timing, rate-limit, deduplication and bounded attachment controls.
- Use Google OAuth server-side and Gmail API send to deliver MIME email to the configured business mailbox.
- Preserve visitor email as validated `Reply-To`; never expose private provider credentials to the browser.

## Alternatives considered

Not recorded in repository history.

## Consequences

### Positive

- Static pages retain a narrow secure server boundary for secret-dependent behavior.
- All locales share the same validation/delivery contract.
- Attachments and calculator context can be delivered in a structured enquiry.
- Direct reply uses the visitor's validated address.

### Negative / trade-offs

- Contact depends on Cloudflare Turnstile/cache and Google OAuth/Gmail availability/configuration.
- Provider secrets and hostname settings require operational maintenance.
- Attachment validation reduces obvious mismatch risk but is not malware scanning.

## Implementation references

- [`functions/api/contact.ts`](../../functions/api/contact.ts)
- [`functions/_lib/contact-form.ts`](../../functions/_lib/contact-form.ts)
- [`functions/_lib/turnstile.ts`](../../functions/_lib/turnstile.ts)
- [`functions/_lib/email.ts`](../../functions/_lib/email.ts)
- [`src/components/ContactForm.astro`](../../src/components/ContactForm.astro)
- Commit `ce4b343`.

## Supersedes / Superseded by

None.
