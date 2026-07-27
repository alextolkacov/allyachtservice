import { siteConfig } from './site';
import { createContactHref } from '../utils/contact';

export const prePurchaseSurveyPage = {
  title: 'Pre-Purchase Yacht Survey in Spain | All Yacht Service',
  description:
    'Independent pre-purchase yacht surveys across Spain and the Mediterranean by an IIMS-certified surveyor, with clear reports and practical advice.',
  pathname: '/pre-purchase-survey',
  eyebrow: 'Independent yacht surveying',
  heading: 'Pre-Purchase Yacht Survey in Spain',
  summary:
    'Independent inspection of sailing yachts, motor yachts and catamarans up to 40 metres before purchase.',
  heroImage: {
    src: '/images/pre-purchase-survey.webp',
    alt: 'Yacht undergoing an independent pre-purchase inspection',
    width: 1200,
    height: 674,
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    {
      label: 'Pre-Purchase Yacht Survey',
      href: '/pre-purchase-survey',
    },
  ],
  primaryCta: {
    label: 'Request a Survey Quote',
    href: createContactHref({
      service: 'pre-purchase-survey',
      source: 'pre-purchase-survey-hero',
    }),
  },
  secondaryCta: {
    label: 'WhatsApp Us',
    href: siteConfig.contact.whatsappHref,
    external: true,
  },
  inspectionItems: [
    {
      title: 'Hull, Deck and Superstructure',
      description:
        'Visual assessment of the hull, deck, superstructure, fittings and accessible structural areas.',
    },
    {
      title: 'Structural Condition',
      description:
        'Assessment for signs of damage, distortion, fatigue, previous repairs or deterioration.',
    },
    {
      title: 'Machinery and Propulsion',
      description:
        'Visual and operational inspection of accessible machinery, propulsion components and associated systems.',
    },
    {
      title: 'Electrical Systems',
      description:
        'Inspection of accessible AC and DC systems, batteries, charging equipment, wiring and distribution panels.',
    },
    {
      title: 'Plumbing and Tank Systems',
      description:
        'Inspection of accessible pumps, pipework, seacocks, tanks and onboard water systems.',
    },
    {
      title: 'Steering and Controls',
      description:
        'Inspection of accessible steering equipment, controls and associated components.',
    },
    {
      title: 'Safety Equipment',
      description:
        'Review of accessible safety, firefighting and lifesaving equipment.',
    },
    {
      title: 'Navigation Equipment',
      description:
        'Operational checks of accessible navigation and communication equipment where practical.',
    },
    {
      title: 'Rigging and Sails',
      description:
        'Deck-level visual inspection of accessible standing and running rigging and sails on sailing yachts where included in the agreed scope.',
    },
    {
      title: 'Moisture Assessment',
      description:
        'Moisture-meter readings and further assessment where appropriate for the vessel’s construction and inspection conditions.',
    },
    {
      title: 'Underwater Components',
      description:
        'Inspection of the underwater hull, keel, rudder, propellers, shafts, saildrives and fittings when the yacht is hauled out.',
    },
    {
      title: 'Sea Trial',
      description:
        'Operational assessment of propulsion, steering, instruments and onboard systems under way when a sea trial is included and conditions permit.',
    },
    {
      title: 'Written Report',
      description:
        'A detailed report with photographs, findings, defect priorities and practical recommendations.',
    },
  ],
  reportUses: [
    'Purchase negotiations',
    'Requests for repairs before completion',
    'Budgeting for maintenance and refit work',
    'Insurance applications',
    'A decision to proceed with or withdraw from the purchase',
  ],
  commonDefects: [
    'Moisture ingress in decks, hull structures and bulkheads',
    'Soft or delaminated deck areas',
    'Structural fatigue or previous repairs',
    'Osmosis-related indications in GRP hulls',
    'Corrosion of tanks, fittings and underwater components',
    'Deteriorated seacocks, hoses and clamps',
    'Electrical installation deficiencies',
    'Ageing batteries and charging equipment',
    'Machinery leaks or maintenance concerns',
    'Steering-system wear',
    'Safety-equipment deficiencies',
    'Poorly executed or undocumented modifications',
    'Rigging or sail-condition concerns',
    'Evidence of grounding, collision or water ingress',
  ],
  processSteps: [
    {
      title: 'Initial Enquiry and Scope',
      description:
        'We review the yacht type, length, age, construction, location and intended survey requirements. Available documentation and any known concerns can also be discussed before quotation.',
    },
    {
      title: 'Inspection Arrangements',
      description:
        'Access is coordinated with the owner, broker, marina or boatyard. Where possible, the survey may include an in-water inspection, haul-out and sea trial.',
    },
    {
      title: 'Detailed Inspection',
      description:
        'The vessel’s accessible structure, systems, machinery, equipment and safety arrangements are examined in accordance with the agreed scope.',
    },
    {
      title: 'Sea Trial and Haul-Out',
      description:
        'When included, the sea trial allows key systems to be assessed under operating conditions, while haul-out provides access to the underwater hull and appendages.',
    },
    {
      title: 'Report and Recommendations',
      description:
        'The client receives a clear written report with photographs, findings, defect priorities and practical recommendations.',
    },
  ],
  preOfferItems: [
    'Visual inspection of safely accessible areas',
    'Identification of obvious defects and major warning signs',
    'Review of the general condition of the vessel',
    'A short written summary',
    'Guidance on whether a full survey or specialist inspection should be considered',
  ],
  whyChoose: [
    'Independent, buyer-focused approach',
    'IIMS-Certified Yacht and Small Craft Marine Surveyor',
    'Yacht & Small Craft Professional Qualification',
    'Licensed captain with yacht delivery and regatta experience',
    'More than 20 years of engineering, quality-assurance and management experience',
    'Clear, detailed and practical survey reports',
    'Reports normally issued within 48 hours',
    'Based at Marina Greenwich in Altea',
    'Operating throughout Spain and the Mediterranean',
  ],
  relatedServices: [
    {
      title: 'Yacht Delivery',
      description:
        'Professional delivery of sailing yachts, motor yachts and catamarans throughout Spain and the Mediterranean.',
      href: '/yacht-delivery',
    },
  ],
  finalCta: {
    heading: 'Considering the Purchase of a Yacht?',
    body: 'Tell us the yacht type, length, age, current location and preferred inspection date. We will review the survey requirements and provide a tailored quotation.',
    links: [
      {
        label: 'Request a Survey Quote',
        href: createContactHref({
          service: 'pre-purchase-survey',
          source: 'pre-purchase-survey-final-cta',
        }),
      },
      {
        label: `WhatsApp ${siteConfig.contact.whatsapp}`,
        href: siteConfig.contact.whatsappHref,
        external: true,
      },
      {
        label: `Email ${siteConfig.contact.email}`,
        href: siteConfig.contact.emailHref,
      },
    ],
  },
  areaServed: [
    'Spain',
    'Balearic Islands',
    'France',
    'Italy',
    'Greece',
    'Mediterranean',
  ],
} as const;
