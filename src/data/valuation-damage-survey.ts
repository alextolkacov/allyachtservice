import { siteConfig } from './site';
import { createContactHref } from '../utils/contact';

export const valuationDamageSurveyPage = {
  title: 'Yacht Valuation and Damage Survey in Spain | All Yacht Service',
  description:
    'Independent yacht valuation and damage assessment across Spain and the Mediterranean, with clear evidence, reporting and practical recommendations.',
  pathname: '/valuation-damage-survey',
  eyebrow: 'Independent technical assessment',
  heading: 'Yacht Valuation and Damage Assessment in Spain',
  summary:
    'Independent condition-based valuation and damage reporting for yacht owners, buyers, insurers, brokers and repair professionals.',
  // Reuse the closest approved technical-survey photograph until original
  // valuation and damage-assessment inspection photography is available.
  heroImage: {
    src: '/images/pre-purchase-survey.webp',
    alt: 'Technical inspection of a yacht for valuation or damage assessment',
    width: 1200,
    height: 674,
  },
  socialImageAlt:
    'Technical yacht inspection for valuation or damage assessment',
  contextualImage: {
    src: '/images/insurance-condition-survey.webp',
    alt: 'Sailing yachts damaged ashore after severe weather',
    width: 1280,
    height: 720,
    caption:
      'Yachts damaged ashore after severe weather, illustrating why the event, visible evidence and inspection limitations must be considered together.',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    {
      label: 'Yacht Valuation and Damage Assessment',
      href: '/valuation-damage-survey',
    },
  ],
  primaryCta: {
    label: 'Request an Assessment Quote',
    href: createContactHref({ service: 'valuation-damage-survey' }),
  },
  secondaryCta: {
    label: 'WhatsApp Us',
    href: siteConfig.contact.whatsappHref,
    external: true,
  },
  valuationUseCases: [
    {
      title: 'Insurance Application or Renewal',
      description:
        'An insurer may request an opinion of current market value or another value basis relevant to the proposed policy.',
    },
    {
      title: 'Purchase or Sale Planning',
      description:
        'A buyer or owner may require an independent indication of value before making a commercial decision.',
    },
    {
      title: 'Change of Ownership',
      description:
        'A valuation may be requested when ownership or the insured party changes.',
    },
    {
      title: 'Post-Refit Assessment',
      description:
        'A yacht may require reassessment after significant repairs, upgrades or refurbishment.',
    },
    {
      title: 'Finance or Professional Review',
      description:
        'A valuation may be requested by a lender, adviser or other professional party, subject to an agreed scope and permitted reliance.',
    },
    {
      title: 'Damage or Total-Loss Consideration',
      description:
        'Value information may be relevant where the cost or significance of damage must be considered against the yacht’s pre-damage or current condition.',
    },
  ],
  valuationFactors: [
    'Yacht make, model and year',
    'Construction material',
    'Length, configuration and accommodation',
    'Machinery and propulsion',
    'Equipment and specification',
    'General observed condition',
    'Maintenance and refit history',
    'Available documentation',
    'Known defects or outstanding work',
    'Location and market exposure',
    'Comparable yachts currently offered or recently marketed',
    'Relevant market conditions at the valuation date',
  ],
  valuationIsNot: [
    'A guaranteed selling price',
    'A guaranteed insured value',
    'A binding offer to buy or sell',
    'A tax assessment',
    'Legal advice',
    'Financial advice',
    'A warranty of the yacht’s condition',
  ],
  damagePurposes: [
    'What areas appear to be affected',
    'The visible extent of damage',
    'Immediate safety concerns',
    'Whether the yacht should be operated or moved',
    'Which systems require further investigation',
    'What temporary or permanent actions may be considered',
    'Whether specialist inspections or testing are required',
  ],
  damageTypes: [
    {
      title: 'Collision Damage',
      description:
        'Visible damage resulting from contact with another vessel, marina structure or fixed object.',
    },
    {
      title: 'Grounding Damage',
      description:
        'Damage potentially affecting the keel, hull, rudder, propellers, shafts, saildrives or associated structure.',
    },
    {
      title: 'Storm and Weather Damage',
      description:
        'Damage associated with heavy weather, mooring failure, flooding, impact or movement of equipment.',
    },
    {
      title: 'Water Ingress and Flooding',
      description:
        'Observed damage to structure, machinery, electrical equipment, interiors or systems following water entry.',
    },
    {
      title: 'Fire or Heat Damage',
      description:
        'Visible fire, smoke or heat effects within the limits of safe access and the agreed scope.',
    },
    {
      title: 'Machinery or System Failure',
      description:
        'Damage involving accessible propulsion, steering, electrical, plumbing or onboard systems where appropriate.',
    },
    {
      title: 'Rigging and Mast Damage',
      description:
        'Visible damage to accessible standing rigging, running rigging, mast, boom, deck fittings or sails.',
    },
    {
      title: 'Transport or Lifting Damage',
      description:
        'Damage associated with haul-out, launching, lifting, transport or yard handling.',
    },
    {
      title: 'Vandalism or Impact Damage',
      description: 'Visible physical damage affecting the yacht or equipment.',
    },
    {
      title: 'Poor Previous Repair',
      description:
        'Evidence suggesting inadequate, incomplete or undocumented repair work.',
    },
  ],
  damageInspectionItems: [
    'Review of the reported incident information',
    'Visual inspection of safely accessible affected areas',
    'Inspection of adjacent areas for related damage',
    'Photographic documentation',
    'Review of visible structural distortion or cracking',
    'Moisture assessment where appropriate',
    'Inspection of accessible machinery and systems',
    'Review of underwater components where the yacht is hauled out',
    'Identification of immediate safety concerns',
    'Opinion on apparent damage extent',
    'Opinion on apparent or probable cause where supported by evidence',
    'Recommendations for specialist examination',
    'Initial repair-scope observations',
    'Review of available quotations or repair proposals where agreed',
    'Written report with findings and limitations',
  ],
  specialistInvestigations: [
    'Structural engineering review',
    'Composite laminate testing',
    'Ultrasonic thickness measurement',
    'Engine or gearbox diagnostics',
    'Oil or fluid analysis',
    'Electrical testing',
    'Rigging inspection aloft',
    'Refrigeration or air-conditioning inspection',
    'Laboratory analysis',
    'Manufacturer consultation',
    'Controlled dismantling',
    'Repair-yard investigation',
  ],
  processSteps: [
    {
      title: 'Initial Information Review',
      description:
        'We review the yacht details, location, purpose of the assignment, available documentation and any reported incident information.',
    },
    {
      title: 'Scope and Quotation',
      description:
        'The required valuation, damage inspection or combined scope is agreed before the appointment.',
    },
    {
      title: 'Inspection',
      description:
        'The yacht and relevant accessible areas are inspected according to the agreed scope and inspection conditions.',
    },
    {
      title: 'Evidence and Analysis',
      description:
        'Observed condition, photographs, documentation and relevant market or technical evidence are reviewed.',
    },
    {
      title: 'Professional Report',
      description:
        'The client receives a written report stating the findings, assumptions, recommendations and limitations.',
    },
  ],
  reportItems: [
    'Vessel particulars',
    'Inspection date and location',
    'Purpose and scope',
    'Valuation basis and valuation date',
    'Observed general condition',
    'Available market evidence',
    'Description and location of damage',
    'Photographic evidence',
    'Apparent damage extent',
    'Immediate safety concerns',
    'Apparent or probable cause where supportable',
    'Recommended further investigation',
    'Repair-scope observations',
    'Assumptions and limitations',
    'Opinion of value where included',
    'Relevant conflict-of-interest declaration',
  ],
  limitations: [
    'Concealed structures',
    'Linings and fixed furniture',
    'Lack of dismantling',
    'Restricted access',
    'Contamination or debris',
    'Yacht position',
    'Lack of haul-out',
    'Systems not operating',
    'Missing documentation',
    'Previous repairs',
    'Time elapsed since the reported event',
    'Changes made before inspection',
  ],
  clients: [
    'Yacht owners',
    'Prospective yacht buyers',
    'Insurance clients',
    'Insurance brokers and underwriters',
    'Yacht brokers',
    'Boatyards and repair professionals',
    'Lenders or professional advisers where reliance is agreed',
    'Other parties requiring an independent technical opinion',
  ],
  whyChoose: [
    'Independent, client-focused technical assessment',
    'IIMS-Certified Yacht and Small Craft Marine Surveyor',
    'Yacht & Small Craft Professional Qualification',
    'Licensed captain',
    'More than 20 years of engineering, quality-assurance and management experience',
    'Structured evidence gathering and photographic reporting',
    'Clear assumptions, limitations and recommendations',
    'Practical communication with owners, insurers, brokers and repair professionals',
    'Relevant commercial relationships disclosed before appointment',
    'Based at Marina Greenwich in Altea',
    'Operating throughout Spain and the Mediterranean',
    'Reports normally issued within 48 hours where the assignment permits',
  ],
  relatedServices: [
    {
      title: 'Insurance Condition Yacht Survey',
      description:
        'Condition assessment and reporting for insurance applications and policy renewals.',
      href: '/insurance-survey',
      linkLabel: 'View Insurance Survey',
    },
    {
      title: 'Pre-Purchase Yacht Survey',
      description:
        'Independent assessment of a yacht’s condition before completing a purchase.',
      href: '/pre-purchase-survey',
      linkLabel: 'View Pre-Purchase Survey',
    },
    {
      title: 'Yacht Buyer Representation',
      description:
        'Independent technical support before, during and after a yacht purchase.',
      href: '/buyer-representation',
      linkLabel: 'View Buyer Representation',
    },
    {
      title: 'Yacht Delivery',
      description:
        'Professional yacht relocation throughout Spain and the Mediterranean.',
      href: '/yacht-delivery',
      linkLabel: 'View Yacht Delivery',
    },
  ],
  finalCta: {
    heading: 'Do You Need a Yacht Valuation or Damage Assessment?',
    body: 'Send us the yacht type, length, location and the purpose of the requested assessment. For damage enquiries, include a short description of the incident and any available photographs or documents.',
    note: 'The existing Contact form allows supporting PDF and image attachments within the configured file limits.',
    links: [
      {
        label: 'Request an Assessment Quote',
        href: createContactHref({ service: 'valuation-damage-survey' }),
      },
      {
        label: `WhatsApp ${siteConfig.contact.whatsapp}`,
        href: siteConfig.contact.whatsappHref,
        external: true,
      },
      {
        label: siteConfig.contact.email,
        href: siteConfig.contact.emailHref,
      },
    ],
  },
  serviceSchemas: [
    {
      id: 'valuation-service',
      name: 'Yacht Valuation',
      serviceType: 'Yacht valuation survey',
      description:
        'Independent professional opinion of yacht value based on the agreed purpose, inspection scope and available market evidence.',
    },
    {
      id: 'damage-service',
      name: 'Yacht Damage Assessment',
      serviceType: 'Yacht damage assessment',
      description:
        'Independent inspection and reporting of observed yacht damage, apparent extent and recommended further investigation.',
    },
  ],
  areaServed: [
    'Spain',
    'Balearic Islands',
    'France',
    'Italy',
    'Greece',
    'Mediterranean',
  ],
} as const;
