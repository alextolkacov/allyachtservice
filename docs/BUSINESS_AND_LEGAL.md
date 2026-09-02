# Business and legal invariants

Last reviewed: 2026-09-02

This is internal engineering guidance, not legal advice. Legal/business documentation is not a substitute for the source-of-truth legal configuration and must be updated whenever approved legal facts change.

## Sources of truth

- Public business/contact/service-area data: [`src/data/site.ts`](../src/data/site.ts).
- Legal operator, registry, retention, approval and review status: [`src/data/legal.ts`](../src/data/legal.ts).
- Localized policy explanations: English legal Astro pages and typed Spanish/Russian legal modules.
- Independence/conflict wording: current About, Buyer Representation and Yachts for Sale content.

Do not copy a legal identifier from this document into code. Read and verify the current approved module.

## Brand and operator

### Durable rule

Distinguish the public trading brand from its legal operator in notices, privacy handling, contracts and structured data. Do not imply that two commercial brands are separate legal entities.

### Current factual value

- Trading brand: **All Yacht Service**.
- Legal operator: **PREMIUM YACHTS SPAIN, S.L.**
- Current pages state that All Yacht Service and Premium Yachts Spain are separate commercial brands/service areas operated by the same legal entity.

The current NIF, legal form, Mercantile Registry details, IRUS, CNAE, registered address and public office address are maintained only in [`src/data/legal.ts`](../src/data/legal.ts). They may change through an approved legal update.

## Surveyor identity and role

### Durable rule

Use only approved professional descriptions and separate a professional role from a statutory corporate office. Do not infer insurance, regulatory status or legal authority from a qualification.

### Current factual value

- Aleksandrs Tolkacovs is presented as an **IIMS-Certified Yacht and Small Craft Marine Surveyor and Licensed Captain**.
- The site also records a Yacht & Small Craft Professional Qualification.
- Current public company context identifies him as Chief Operating Officer of Premium Yachts Spain.

Do not describe him as statutory administrator or legal representative unless verified and approved. Do not describe IIMS as a Spanish regulator or imply that IIMS certification makes every survey legally mandatory.

## Independence and conflicts

### Durable rule

- The commissioning client receives findings based on observed condition and agreed scope.
- Repair or brokerage interests must not influence findings.
- A relevant commercial relationship or potential conflict is disclosed before appointment.
- The client may choose another surveyor.
- Decline the assignment or agree clear limitations where appropriate independence cannot be maintained.

This is especially important when a vessel or transaction is connected with Premium Yachts Spain. Do not remove these disclosures to simplify marketing copy.

## Tax, insurance and legal-review status

### Durable rule

Never derive a VAT number from a Spanish NIF, use `vatID` schema, claim VIES/ROI registration, claim professional liability insurance or claim external legal review without explicit verified approval.

### Current factual value

- `roiViesRegistered` is `false`.
- No `vatID` is published.
- No professional liability insurance claim is approved in the repository.
- `externalLegalReviewCompleted` is `false`.

The operator's recorded internal approval and legal-data completeness are separate from external lawyer review.

## Retention and privacy

### Durable rule

Do not casually change enquiry, unsuccessful-quote, client-record or security-record retention language. The localized policies and Contact implementation must remain consistent with the central legal configuration and actual storage/processors.

### Current factual value

General enquiries and unsuccessful quotations are configured for 12 months. Client and service records, security records and exceptional extensions use approved criteria rather than one universal fixed period. Read the complete current wording in [`src/data/legal.ts`](../src/data/legal.ts).

The Contact privacy checkbox acknowledges that the visitor has read the Privacy Policy and understands enquiry handling. It is not blanket consent for every processing activity.

## Service and reporting claims

- “Reports normally issued within 48 hours” is qualified by completion and, on some pages, applicability or assignment scope. Do not turn it into a guarantee.
- Standard-English reporting and optional paid translation are owner-approved operating context but are not centralized in executable configuration; verify before changing or expanding the public claim.
- Mediterranean travel fees are scope-dependent.
- A survey is limited by access, conditions and agreed scope and does not replace specialist investigation automatically.
- Buyer support does not replace legal, tax, customs, registration or contract advisers.

## Change procedure

1. Obtain verified owner/legal input.
2. Update the central source module first.
3. Update all affected EN/ES/RU policies, visible pages, email content and schema.
4. Update this document and, for a policy-level decision, add or supersede an ADR.
5. Run the legal, localization and indexable-build checks from [Testing and Quality](TESTING_AND_QUALITY.md).
