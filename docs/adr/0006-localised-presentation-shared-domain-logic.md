# ADR-0006: Localized presentation with shared canonical domain logic

- Status: Accepted
- Decision date: 2026-07-29
- Last reviewed: 2026-09-02
- Decision owners: Project owner and repository maintainers
- Related documentation: [Content and Localisation](../CONTENT_AND_LOCALISATION.md), [Calculators](../features/CALCULATORS.md), [Contact Form](../features/CONTACT_FORM.md)

## Context

Calculators and Contact require EN/ES/RU interfaces but must preserve identical service identity, estimates, route results and server validation. Spanish and Russian calculator/contact batches plus current regression scripts explicitly compare canonical results and prohibit localized formula copies.

The precise original rationale is not recorded; it is reconstructed from current module separation and tests.

## Decision

- Keep calculations, enums, service codes, route-node keys, stored payloads and validators language-neutral/canonical.
- Localize visible labels, explanatory content, errors and locale-specific date/number/currency formatting.
- Pass the UI locale separately to Contact without translating visitor text or canonical fields.
- Recompute stored calculator estimates with shared domain logic before Contact trusts them.

## Alternatives considered

Localized copies of formulas/domain values are rejected by current regression rules. Other alternatives are not recorded.

## Consequences

### Positive

- Identical inputs produce identical business results in all locales.
- One validator protects calculator-to-Contact handoff from tampering and drift.
- Translators can improve natural presentation without touching pricing logic.

### Negative / trade-offs

- Presentation dictionaries must map canonical values carefully.
- Payload/schema changes require coordinated UI, Contact and policy updates.
- A localized page cannot introduce a locally convenient enum or route value.

## Implementation references

- [`src/lib/calculators`](../../src/lib/calculators)
- [`src/i18n/calculators.ts`](../../src/i18n/calculators.ts)
- [`src/utils/contact.ts`](../../src/utils/contact.ts)
- [`scripts/check-calculator-localisation.mjs`](../../scripts/check-calculator-localisation.mjs)
- Spanish calculator commit `75871e6`; Russian calculator commit `2e57fab`.

## Supersedes / Superseded by

None.
