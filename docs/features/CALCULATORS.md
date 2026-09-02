# Calculators

Last reviewed: 2026-09-02

## Product contract

The site has two browser calculators:

- Pre-Purchase Yacht Survey Cost Calculator.
- Yacht Delivery Cost Calculator.

Both return approximate, non-binding planning estimates. Final scope and quotation require review by All Yacht Service. Translation/localisation must never change calculated values or business formulas.

## Layering

| Layer                             | Survey                                                                                        | Delivery                                                                                      |
| --------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| Canonical domain logic            | [`prePurchaseSurvey.ts`](../../src/lib/calculators/prePurchaseSurvey.ts)                      | [`yachtDelivery.ts`](../../src/lib/calculators/yachtDelivery.ts)                              |
| Stored payload validation/summary | [`prePurchaseSurveyEstimate.ts`](../../src/lib/calculators/prePurchaseSurveyEstimate.ts)      | [`yachtDeliveryEstimate.ts`](../../src/lib/calculators/yachtDeliveryEstimate.ts)              |
| Route graph data                  | Not applicable                                                                                | [`mediterraneanDeliveryRoutes.ts`](../../src/data/calculators/mediterraneanDeliveryRoutes.ts) |
| Localized presentation            | [`src/i18n/calculators.ts`](../../src/i18n/calculators.ts) plus localized page data           | Same                                                                                          |
| Browser component                 | [`PrePurchaseSurveyCalculator.astro`](../../src/components/PrePurchaseSurveyCalculator.astro) | [`YachtDeliveryCalculator.astro`](../../src/components/YachtDeliveryCalculator.astro)         |

Do not copy formula constants into localized data. Pricing provenance/version information is recorded in the domain modules.

## Survey calculator

Inputs include LOA, sailing/motor type, package, afloat/hull-out arrangement and compatible optional inspections. The canonical logic validates the supported 5–40 m range, applies the maintained pricing rules and package behavior, then rounds according to the implementation. Sailing-only rigging choices and the full-package composition are enforced centrally.

Do not describe the optional engine or rigging calculation as proof that a standard survey automatically includes a specialist inspection. Public copy and quotation scope must remain precise.

## Delivery calculator

Inputs include departure/destination route nodes, sailing/motor type, length band, passage complexity and urgency. The route module builds a bidirectional Mediterranean graph from curated nodes/edges and computes the shortest maintained corridor. Distance and rate/multiplier rules produce an estimated starting professional fee.

The route is an approximate planning corridor, not navigation, weather routing, a passage plan or a guarantee that a port/leg is available or safe.

## Localization invariants

EN/ES/RU components share the same calculation imports. Only labels, explanatory copy and locale-aware currency/date/number output change. These values must remain identical for identical inputs:

- canonical enums and route node keys;
- selected inputs;
- survey totals, discount and included item identity;
- delivery path, distance and starting fee;
- reference and payload version semantics;
- validation of tampering, expiry and mismatched references.

## Storage and Contact transfer

Each valid estimate is stored in browser `sessionStorage` under a versioned key:

- `ays:pre-purchase-survey-estimate:v1`
- `ays:yacht-delivery-estimate:v1`

Payload version is currently `1`. A stored estimate is accepted for at most 24 hours, must match the reference in the Contact URL, must contain only allowed bounded fields, and must not be future-dated beyond the allowed clock tolerance. Contact recomputes the result from canonical inputs and rejects any mismatch in totals, items, route or distance.

The Contact handoff sends the canonical service code, source and estimate reference in the URL. The estimate itself stays in same-tab `sessionStorage` until Contact validates and renders a localized summary. No request is sent simply by using the calculator.

## Change rules

- Formula, route graph, range or multiplier changes are business-logic changes: obtain approval and update provenance/version if required.
- Change canonical logic once; never patch one locale's component to produce a different result.
- A payload-shape change requires a new versioned contract/storage key or deliberate migration strategy.
- Keep calculator, Contact, cookie/storage policies and regression fixtures aligned.
- Do not label an estimate as a quotation, exact route cost or tax-inclusive final price unless the business contract changes explicitly.

## Validation

Run `check:calculators` plus current type, lint, format, EN/ES/RU, legal/storage and both build-mode checks from [Testing and Quality](../TESTING_AND_QUALITY.md). Verify representative inputs in every locale and calculator-to-Contact transfer, including expired, tampered and mismatched references.
