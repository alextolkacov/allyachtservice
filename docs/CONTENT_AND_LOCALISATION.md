# Content and localisation

Last reviewed: 2026-09-02

## Language contract

The supported languages are exactly English, Spanish and Russian. [`src/data/languages.ts`](../src/data/languages.ts) owns locale codes, prefixes, HTML languages and Open Graph locales.

English is the content source of truth unless a feature explicitly documents another workflow. Translate the current approved English implementation, not an old draft, social caption or previous translation. Spanish and Russian versions must preserve scope, safety limitations, disclosures, metadata, links and structured-data meaning without adding claims.

Do not add Latvian, French, Italian, Greek or another locale without explicit approval and a complete route/content plan.

## Route equivalence

[`translatedRoutes` in `src/data/navigation.ts`](../src/data/navigation.ts) is the source of truth for real page equivalents. Representative groups are:

- `/`, `/es`, `/ru`.
- `/pre-purchase-survey`, `/es/pre-purchase-survey`, `/ru/pre-purchase-survey`.
- `/yacht-survey-tips/check-yacht-steering`, `/es/yacht-survey-tips/check-yacht-steering`, `/ru/yacht-survey-tips/check-yacht-steering`.

Do not copy the complete route table into documentation; inspect the typed map. A route belongs in an equivalence group only after its Astro page and genuine localized content exist.

The language switcher in [`src/components/LanguageSwitcher.astro`](../src/components/LanguageSwitcher.astro) links to the equivalent page when available. If no equivalent is published, it may link to that locale's homepage, but the accessible label must identify it as a homepage. Such fallbacks are never page-equivalent hreflang.

## Content locations

- English typed page content: `src/data/*.ts` and English Astro routes.
- Spanish typed content: [`src/data/es`](../src/data/es) and [`src/pages/es`](../src/pages/es).
- Russian typed content: [`src/data/ru`](../src/data/ru) and [`src/pages/ru`](../src/pages/ru).
- Shared interface dictionaries: [`src/i18n`](../src/i18n).
- Survey Tips: one typed data module per article and language, rendered by shared components.

Page data and Astro markup currently coexist. Match the neighboring pattern instead of forcing a broad abstraction.

## Canonical internal values

Localization changes presentation, never domain identity:

- Contact service codes remain canonical values such as `pre-purchase-survey` and `yacht-delivery`.
- Calculator enum values, route-node keys, formulas, references, stored payloads and storage keys remain canonical.
- Spanish uses `es-ES`, Russian uses `ru-RU`, and English calculator output uses the implementation's English locale for dates/numbers/currency.
- Contact submissions include `locale` so internal delivery can record the website language. Visitor-entered text is not machine-translated.

See [ADR-0006](adr/0006-localised-presentation-shared-domain-logic.md).

## SEO relationship

Each genuine route group emits reciprocal `en`, `es`, `ru` alternates and an English `x-default`. Each page has its own canonical URL, localized title/description, Open Graph locale, breadcrumbs and visible content. See [SEO and Indexing](SEO_AND_INDEXING.md).

## Terminology guidance

Terminology must be professional and contextual; these are preferred concepts, not a mechanical glossary.

### Spanish

| English                    | Preferred Spanish                                                                              |
| -------------------------- | ---------------------------------------------------------------------------------------------- |
| Pre-purchase survey        | Inspección precompra                                                                           |
| Insurance condition survey | Inspección de condición para seguro                                                            |
| Marine surveyor            | Inspector naval; use “inspector naval de yates y embarcaciones menores” in formal descriptions |
| Sea trial                  | Prueba de mar                                                                                  |
| Haul-out                   | Varada                                                                                         |
| Rigging                    | Aparejo                                                                                        |
| Deck moisture              | Humedad en la cubierta                                                                         |
| Moisture meter             | Medidor de humedad                                                                             |
| Percussion testing         | Prueba de percusión                                                                            |

Do not translate marine “survey” as a customer questionnaire.

### Russian

| English                    | Preferred Russian                                                                 |
| -------------------------- | --------------------------------------------------------------------------------- |
| Yacht surveyor             | Яхтенный сюрвейер                                                                 |
| Marine surveyor            | Сюрвейер яхт и маломерных судов                                                   |
| Pre-purchase survey        | Предпокупочный сюрвейерский осмотр                                                |
| Insurance condition survey | Сюрвейерский осмотр для страхования                                               |
| Yacht delivery             | Перегон яхт                                                                       |
| Sea trial                  | Ходовые испытания                                                                 |
| Haul-out                   | Подъём яхты                                                                       |
| Length overall             | Габаритная длина яхты                                                             |
| Non-binding estimate       | Ориентировочный расчёт / необязательное ценовое предложение, according to context |
| Deck core                  | Заполнитель палубной конструкции                                                  |
| Percussion testing         | Перкуссионная проверка or простукивание                                           |
| Conflict of interest       | Конфликт интересов                                                                |

Natural variations are appropriate when they preserve technical meaning and limitations. Search current Russian data modules before introducing a new term.

## New localized page checklist

1. Complete and approve the English implementation/data first.
2. Create genuine Spanish content from that source.
3. Create genuine Russian content from that source.
4. Create all three Astro routes using the current lowercase ASCII slug convention.
5. Add one typed route group to `translatedRoutes` only after all equivalents exist.
6. Add localized title, meta description, H1, body copy, breadcrumbs, CTAs and image alt text.
7. Confirm each self-canonical URL and reciprocal `en`/`es`/`ru` hreflang.
8. Confirm English `x-default` and localized Open Graph metadata.
9. Reuse stable Business/Person IDs and add only appropriate page/service/article schema.
10. Check header, footer, service links and contextual links in every language.
11. Build and inspect sitemap entries and generated pages.
12. Run applicable localization, legal, calculator, SEO/schema and link regressions from [Testing and Quality](TESTING_AND_QUALITY.md).
