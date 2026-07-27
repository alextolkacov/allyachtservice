import { siteConfig } from './site';

export const insuranceSurveyPage = {
  title: 'Insurance Yacht Survey in Spain | All Yacht Service',
  description:
    'Independent insurance condition yacht surveys across Spain and the Mediterranean for new policies, renewals and ownership changes.',
  schemaDescription:
    'Independent condition assessment for yacht insurance applications, renewals and changes of ownership.',
  pathname: '/insurance-survey',
  eyebrow: 'Independent insurance surveying',
  heading: 'Insurance Condition Yacht Survey in Spain',
  summary:
    'Independent condition assessments for new insurance applications, policy renewals and changes of ownership.',
  heroImage: {
    src: '/images/insurance-condition-survey.webp',
    alt: 'Yacht undergoing an insurance condition survey',
    width: 1280,
    height: 720,
  },
  socialImageAlt: 'Yacht undergoing an independent insurance condition survey',
  breadcrumbs: [
    { label: 'Home', href: '/' },
    {
      label: 'Insurance Condition Yacht Survey',
      href: '/insurance-survey',
    },
  ],
  primaryCta: {
    label: 'Request an Insurance Survey Quote',
    href: '/#contact',
  },
  secondaryCta: {
    label: 'WhatsApp Us',
    href: siteConfig.contact.whatsappHref,
    external: true,
  },
  suitabilityItems: [
    {
      title: 'New Insurance Application',
      description:
        'When insurance cover is being arranged for a yacht for the first time with a particular insurer.',
    },
    {
      title: 'Policy Renewal',
      description:
        'When an insurer requires an updated assessment because of the yacht’s age, value, condition or previous survey date.',
    },
    {
      title: 'Change of Ownership',
      description: 'When the policyholder or ownership of the yacht changes.',
    },
    {
      title: 'Change of Insurer',
      description:
        'When moving an existing yacht policy to a different insurance provider.',
    },
    {
      title: 'Older Vessel',
      description:
        'When the yacht has reached an age at which the underwriter requests periodic condition reporting.',
    },
    {
      title: 'Change of Use or Cruising Area',
      description:
        'When the yacht’s intended use, home port or navigation area changes.',
    },
    {
      title: 'Post-Refit or Major Repair',
      description:
        'When significant work has been completed and the insurer requests confirmation of the vessel’s current condition.',
    },
  ],
  inspectionItems: [
    {
      title: 'Hull, Deck and Superstructure',
      description:
        'Visual assessment of the hull, deck, superstructure, fittings and safely accessible structural areas.',
    },
    {
      title: 'General Structural Condition',
      description:
        'Review for visible signs of damage, deterioration, distortion, fatigue or previous repair.',
    },
    {
      title: 'Machinery and Propulsion',
      description:
        'Visual and operational checks of accessible engines, propulsion equipment and associated systems where practical.',
    },
    {
      title: 'Electrical Systems',
      description:
        'Inspection of accessible AC and DC systems, batteries, charging equipment, wiring and distribution panels.',
    },
    {
      title: 'Plumbing and Seacocks',
      description:
        'Inspection of accessible pumps, pipework, hoses, clamps, seacocks, tanks and onboard water systems.',
    },
    {
      title: 'Steering and Controls',
      description:
        'Inspection of accessible steering equipment, controls and associated components.',
    },
    {
      title: 'Fuel Systems',
      description:
        'Visual inspection of accessible fuel tanks, lines, filters, shut-off arrangements and associated equipment.',
    },
    {
      title: 'Fire Safety',
      description:
        'Review of accessible firefighting equipment, installation condition and service information where available.',
    },
    {
      title: 'Lifesaving Equipment',
      description:
        'Review of accessible lifejackets, lifebuoys, liferafts and other relevant safety equipment.',
    },
    {
      title: 'Navigation and Communication Equipment',
      description:
        'Operational checks of accessible navigation and communication equipment where practical.',
    },
    {
      title: 'Bilge and Flooding Protection',
      description:
        'Review of accessible bilge pumps, alarms, drainage arrangements and potential water-ingress points.',
    },
    {
      title: 'Rigging and Sails',
      description:
        'Deck-level visual inspection of accessible standing and running rigging on sailing yachts where included in the agreed scope.',
    },
    {
      title: 'Underwater Components',
      description:
        'Inspection of the underwater hull, keel, rudder, propellers, shafts, saildrives and fittings when haul-out is required or available.',
    },
    {
      title: 'Vessel Identification and Documentation',
      description:
        'Review of available vessel identification, registration and relevant documentation supplied by the owner.',
    },
    {
      title: 'Written Report',
      description:
        'A professional written report with photographs, findings and recommendations suitable for submission to the insurer or broker.',
    },
  ],
  findings: [
    'Structural deterioration or previous damage',
    'Moisture ingress or soft deck areas',
    'Corrosion of tanks, fittings or underwater components',
    'Deteriorated seacocks, hoses or clamps',
    'Electrical installation deficiencies',
    'Machinery leaks or maintenance concerns',
    'Steering-system defects',
    'Missing, expired or unsuitable safety equipment',
    'Inadequate firefighting arrangements',
    'Bilge-pump or flooding-protection deficiencies',
    'Poorly executed or undocumented modifications',
    'Rigging concerns on sailing yachts',
    'Evidence of grounding, collision or water ingress',
  ],
  insurerRequirements: [
    'A particular survey form or questionnaire',
    'Haul-out of the yacht',
    'Current market valuation',
    'Photographs of specific areas or equipment',
    'Machinery inspection or engine test information',
    'Standing-rigging information',
    'Evidence of safety-equipment servicing',
    'Evidence that previous recommendations have been completed',
    'A report issued within a specified period',
    'Any wording specific to the policy or cruising area',
  ],
  processSteps: [
    {
      title: 'Insurance Requirements Review',
      description:
        'We review the yacht details, location, insurer’s instructions and any required forms before confirming the survey scope and quotation.',
    },
    {
      title: 'Inspection Arrangements',
      description:
        'Access is coordinated with the owner, marina, boatyard or other representative. Haul-out is arranged where required by the insurer or agreed survey scope.',
    },
    {
      title: 'Condition Inspection',
      description:
        'The yacht’s accessible structure, systems, machinery, safety equipment and relevant documentation are examined.',
    },
    {
      title: 'Findings and Recommendations',
      description:
        'Observed defects and safety concerns are recorded and prioritised, with practical recommendations where appropriate.',
    },
    {
      title: 'Insurance-Ready Report',
      description:
        'The client receives a written report with photographs for submission to the insurance broker or underwriter.',
    },
  ],
  reportItems: [
    'Vessel particulars',
    'Inspection date and location',
    'Survey scope and limitations',
    'General condition assessment',
    'Photographic evidence',
    'Safety and insurability-related findings',
    'Prioritised recommendations',
    'Valuation where included in the agreed scope',
    'A declaration of relevant limitations and conflicts of interest',
  ],
  whyChoose: [
    'Independent professional assessment',
    'IIMS-Certified Yacht and Small Craft Marine Surveyor',
    'Yacht & Small Craft Professional Qualification',
    'Licensed captain with practical sailing and motor-yacht experience',
    'More than 20 years of engineering, quality-assurance and management experience',
    'Clear, detailed and practical survey reports',
    'Reports normally issued within 48 hours',
    'Based at Marina Greenwich in Altea',
    'Operating throughout Spain and the Mediterranean',
    'Insurer-provided forms and written requirements reviewed where supplied in advance',
  ],
  relatedServices: [
    {
      title: 'Pre-Purchase Yacht Survey',
      description:
        'Independent assessment of a yacht’s condition before completing a purchase.',
      href: '/pre-purchase-survey',
    },
    {
      title: 'Yacht Delivery',
      description:
        'Professional delivery of sailing yachts, motor yachts and catamarans throughout Spain and the Mediterranean.',
      href: '/yacht-delivery',
    },
  ],
  finalCta: {
    heading: 'Has Your Insurer Requested a Yacht Survey?',
    body: 'Send us the yacht type, length, age, construction, current location and the insurer’s survey requirements. We will review the requested scope and provide a tailored quotation.',
    note: 'Where available, attach the insurer’s survey form, questionnaire or written instructions to your enquiry.',
    links: [
      {
        label: 'Request an Insurance Survey Quote',
        href: '/#contact',
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
  areaServed: [
    'Spain',
    'Balearic Islands',
    'France',
    'Italy',
    'Greece',
    'Mediterranean',
  ],
} as const;
