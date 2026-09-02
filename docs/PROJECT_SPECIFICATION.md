# Project specification

Last reviewed: 2026-09-02

## Product

All Yacht Service is a multilingual professional-services website for yacht surveying, technical buyer support and yacht delivery. The production origin is `https://www.allyachtservice.com`.

## Purpose

The site explains professional services, helps prospective clients understand scope and limitations, provides non-binding planning tools and offers enquiry paths by form, phone, WhatsApp and email. It also publishes conservative educational survey guidance.

## Current product areas

Current routes and service relationships are authoritative in [`src/data/navigation.ts`](../src/data/navigation.ts). The product presently covers:

- Pre-Purchase Yacht Survey.
- Insurance Condition Yacht Survey.
- Yacht Valuation and Damage Assessment.
- Yacht Buyer Representation.
- Yacht Delivery.
- Pre-purchase survey and yacht-delivery cost calculators.
- Yacht Survey Tips technical knowledge centre.
- Yachts for Sale content linking to external Premium Yachts Spain listings and explaining independent buyer-side support.
- Company, Contact and legal/policy information.

The Yachts for Sale page is not an All Yacht Service inventory system. Live listing data, prices and availability are controlled by the external listing broker.

## Audiences

- Buyers comparing or inspecting sailing yachts, motor yachts and catamarans.
- Yacht owners who need insurance-related condition reporting, valuation or damage assessment.
- Buyers needing independent technical coordination before, during or after a purchase.
- Owners and purchasers planning a yacht relocation.
- Owners, buyers and enthusiasts seeking educational survey guidance.
- Brokers, yards or other parties that require an independent report within an agreed professional scope.

## Geographic and service context

The business is based at Marina Greenwich in Altea, Alicante. The current approved service-area source is [`src/data/site.ts`](../src/data/site.ts): Costa Blanca, the Spanish Mediterranean coast, mainland Spain and the Balearic Islands are primary areas; wider Mediterranean and European assignments may be available subject to agreed scope.

Current article and owner-approved operating context state that Mediterranean assignments may incur additional travel fees. Do not promise geographic availability or fixed travel treatment without a confirmed quotation.

## Language model

The public website supports exactly English, Spanish and Russian:

- English uses root paths and is the content source of truth.
- Spanish uses `/es`.
- Russian uses `/ru`.

Every published translation must be a genuine page equivalent. See [Content and Localisation](CONTENT_AND_LOCALISATION.md).

## Service constraints and professional wording

- Survey and assessment reports are described in current service content as normally issued within 48 hours after completion, with qualifications such as “where applicable” or “where the assignment permits.” This is not an unconditional guarantee.
- Owner-approved operating context says the standard report language is English and professional translation may be available for an additional fee. This is not currently implemented as a website control or centralized code value; confirm the wording before adding it to new public content.
- Every engagement depends on an agreed scope, access and available evidence. A general survey does not automatically include specialist rigging, engine, electrical or other specialist investigation.
- Independent survey findings must not be influenced by brokerage, repair or other commercial interests. Relevant relationships or conflicts are disclosed and an assignment may be declined where independence cannot be maintained.
- Buyer representation supplies technical support; the buyer retains purchase decisions and responsibility for legal, tax, registration, customs and contractual advice.
- Valuation and damage work does not determine legal liability, insurance cover, claim settlement or a repair contract.

## Non-goals and prohibited implications

- A Survey Tip is educational content, not a vessel-specific professional survey or diagnosis.
- Calculator results are approximate, non-binding estimates, not quotations, invoices or guaranteed prices.
- Website content does not guarantee that every defect will be found or that a yacht is safe, compliant or fit for a particular purpose.
- Buyer representation does not remove conflict disclosure or give authority to make a final purchase decision unless a separate legally appropriate written arrangement exists.
- The site must not invent qualifications, statutory roles, insurance, VAT/VIES status, legal review, service scope, replacement intervals or marine-survey conclusions.

Business and legal boundaries are maintained in [Business and Legal](BUSINESS_AND_LEGAL.md); current public facts come from [`src/data/site.ts`](../src/data/site.ts) and [`src/data/legal.ts`](../src/data/legal.ts).
