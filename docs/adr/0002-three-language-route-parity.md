# ADR-0002: Three-language route parity

- Status: Accepted
- Decision date: 2026-07-29
- Last reviewed: 2026-09-02
- Decision owners: Project owner and repository maintainers
- Related documentation: [Content and Localisation](../CONTENT_AND_LOCALISATION.md), [SEO and Indexing](../SEO_AND_INDEXING.md)

## Context

The initial foundation contemplated more locales. Commit `a36598f` removed French, Italian and Greek on 2026-07-28; Spanish and Russian implementation batches then established the current three-language publication boundary. The typed locale union, route-equivalence map and regression scripts now require English, Spanish and Russian only.

The detailed rationale is reconstructed from the current implementation and validation rules.

## Decision

- Support exactly EN/ES/RU until a future explicit decision.
- Treat current English content as the source of truth.
- Publish a locale route only when a genuine localized page exists.
- Record real equivalents in typed `translatedRoutes`.
- Emit reciprocal hreflang for published equivalents and English `x-default`.
- Do not emit a language-switcher homepage fallback as page-equivalent hreflang.

## Alternatives considered

The repository history proves that French, Italian and Greek placeholders were removed; it does not record the detailed evaluation of those alternatives.

## Consequences

### Positive

- Visitors and search engines receive complete equivalent pages rather than misleading fallbacks.
- One route map drives navigation, language switching and hreflang.
- Regression scripts can compare parity and domain-logic identity across locales.

### Negative / trade-offs

- A public feature normally requires three content/page implementations before route parity is complete.
- Translation changes must track English scope and safety changes.
- Adding a language is a cross-cutting architecture/content decision, not a selector-only edit.

## Implementation references

- [`src/data/languages.ts`](../../src/data/languages.ts)
- [`src/data/navigation.ts`](../../src/data/navigation.ts)
- [`src/utils/hreflang.ts`](../../src/utils/hreflang.ts)
- [`scripts/check-spanish-localisation.mjs`](../../scripts/check-spanish-localisation.mjs)
- [`scripts/check-russian-localisation.mjs`](../../scripts/check-russian-localisation.mjs)
- Commits `a36598f`, `1ac7255` and `1adb65d`.

## Supersedes / Superseded by

None.
