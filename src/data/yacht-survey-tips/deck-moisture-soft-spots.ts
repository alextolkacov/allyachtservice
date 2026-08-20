import type { SurveyTipsArticle, SurveyTipsImage } from './types';

const articleImage = {
  src: '/images/yacht-survey-tips/deck-moisture-soft-spots.png',
  alt: 'Marine surveyor using a moisture meter during a yacht deck inspection',
  width: 1122,
  height: 1402,
} as const satisfies SurveyTipsImage;

export const deckMoistureSoftSpotsArticle = {
  title: 'Deck Moisture and Soft Spots: What Yacht Buyers Should Know',
  seoTitle: 'Deck Moisture and Soft Spots on Yachts | All Yacht Service',
  description:
    'Moisture intrusion and soft deck areas are among the most common concerns found during yacht inspections. Learn how moisture enters yacht structures, how surveyors investigate it and what buyers should consider before purchase.',
  metaDescription:
    'Learn how moisture enters cored yacht decks, the warning signs of soft spots and how a marine surveyor investigates suspected deck moisture.',
  slug: 'deck-moisture-soft-spots',
  pathname: '/yacht-survey-tips/deck-moisture-soft-spots',
  category: 'Structural Condition',
  status: 'Published',
  publicationDate: 'July 2026',
  publicationDateTime: '2026-07',
  modifiedDateTime: '2026-07-28',
  readingTime: '5 minutes',
  timeRequired: 'PT5M',
  standfirst:
    'Moisture inside a cored yacht deck can remain hidden beneath the surface. Understanding how water enters the structure, the warning signs to look for and the limits of survey testing can help buyers make better-informed decisions.',
  image: articleImage,
  imageCaption:
    'Deck-moisture findings should be interpreted alongside construction, access conditions and other inspection evidence.',
  socialImageAlt:
    'Marine surveyor inspecting a yacht deck for possible moisture',
  author: {
    name: 'Aleksandrs Tolkacovs',
    professionalDescription:
      'IIMS-Certified Yacht and Small Craft Marine Surveyor',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Yacht Survey Tips', href: '/yacht-survey-tips' },
    {
      label: 'Deck Moisture and Soft Spots',
      href: '/yacht-survey-tips/deck-moisture-soft-spots',
    },
  ],
  keyInterpretationPoints: [
    'Moisture does not automatically mean that the deck has lost structural strength.',
    'A soft area does not automatically identify the full extent or cause.',
    'Findings must be interpreted together with construction, location, history and other inspection evidence.',
  ],
  moistureConsequences: [
    'Core deterioration',
    'Loss of adhesion between the core and laminate skins',
    'Localised delamination',
    'Reduced panel stiffness',
    'Movement around deck fittings',
    'Freeze-related deterioration in colder climates',
    'Corrosion of embedded or nearby metal components',
    'Larger and more complex future repairs',
  ],
  moistureEntryPoints: [
    'Stanchion bases',
    'Cleats and fairleads',
    'Chainplates',
    'Hatches',
    'Windows and portlights',
    'Mast step and mast partners',
    'Winches',
    'Handrails',
    'Windlass installations',
    'Deck organisers and blocks',
    'Ventilation fittings',
    'Previous screw holes',
    'Added equipment',
    'Poorly executed repairs',
    'Cracks or impact damage',
  ],
  warningSigns: [
    'Staining beneath deck fittings',
    'Water marks inside lockers or headlining',
    'Cracked, shrinking or detached sealant',
    'Corrosion around fasteners',
    'Local surface cracking',
    'A soft or spongy feeling underfoot',
    'Local movement around fittings',
    'A change in sound when the deck is lightly tapped',
    'Depressions around heavily loaded fittings',
    'Repeated interior leaks',
    'Previous repairs without supporting documentation',
  ],
  softAreaCauses: [
    'Deteriorated core',
    'Loss of bonding',
    'Local delamination',
    'Inadequate original support',
    'Previous repair',
    'Thin or flexible construction',
    'Movement around a loaded fitting',
  ],
  inspectionMethods: [
    {
      id: 'visual-inspection',
      title: 'Visual Inspection',
      summary:
        'The surveyor examines accessible areas for evidence that may identify an entry point, previous intervention or a change in local condition.',
      items: [
        'Sealant condition',
        'Fittings',
        'Fasteners',
        'Cracks',
        'Surface distortion',
        'Interior staining',
        'Previous repairs',
        'Accessible underside structure',
      ],
      limitations: [],
    },
    {
      id: 'tap-testing',
      title: 'Percussion or Tap Testing',
      summary:
        'Light comparative tapping may help identify changes in acoustic response associated with differences in bonding, laminate thickness or core condition.',
      items: [],
      limitations: [
        'The method is comparative.',
        'Results depend on construction and access.',
        'Different sounds do not automatically prove wet core.',
        'Heavy decorative finishes may reduce usefulness.',
      ],
    },
    {
      id: 'moisture-meter-readings',
      title: 'Moisture Meter Readings',
      summary:
        'A moisture meter can provide comparative readings across the deck and help identify patterns requiring further investigation.',
      items: [],
      limitations: [
        'Readings are not a direct measurement of percentage water inside every laminate.',
        'Metal, carbon fibre, wiring, tanks, fittings and other conductive materials can influence readings.',
        'Salt contamination can influence readings.',
        'Surface moisture and recent rain can influence readings.',
        'Antifouling, coatings and different laminate thicknesses may affect interpretation.',
        'Readings must be compared with reference areas and other evidence.',
      ],
    },
    {
      id: 'thermal-imaging',
      title: 'Thermal Imaging',
      summary:
        'Where conditions are suitable, thermal imaging may help identify temperature patterns that support further investigation.',
      items: [],
      limitations: [
        'Results depend on environmental conditions.',
        'Solar heating, wind, recent rain and internal heat sources affect images.',
        'Thermal imaging should not be treated as a standalone diagnosis.',
      ],
    },
    {
      id: 'inspection-from-below',
      title: 'Inspection From Below',
      summary:
        'Where accessible, the surveyor checks the underside of the deck and adjacent interior areas for supporting evidence.',
      items: [
        'Headlining',
        'Lockers',
        'Deck underside',
        'Backing plates',
        'Fasteners',
        'Structural supports',
        'Interior staining',
        'Local repairs',
      ],
      limitations: [],
    },
    {
      id: 'further-investigation',
      title: 'Further Investigation',
      summary:
        'Controlled opening, core sampling or dismantling may be recommended where confirmation is needed and the commissioning client authorises destructive investigation.',
      items: [
        'The suspected area is significant.',
        'Structural loading is involved.',
        'The findings are inconsistent.',
        'Repair planning requires confirmation.',
        'The commissioning client authorises destructive investigation.',
      ],
      limitations: [
        'Destructive testing is not automatically included in a normal pre-purchase survey.',
      ],
    },
  ],
  moistureReadingContext: [
    'Meter type and scale',
    'Reference readings',
    'Construction material',
    'Core type',
    'Surface condition',
    'Weather before inspection',
    'Nearby metal or wiring',
    'Pattern and extent',
    'Visual evidence',
    'Tap-test findings',
    'Movement',
    'Interior evidence',
    'Vessel history',
  ],
  repairOutcomes: [
    'Monitoring and resealing',
    'Removing and rebedding a fitting',
    'Local drying and repair',
    'Localised core replacement',
    'Wider laminate and core reconstruction',
  ],
  repairFactors: [
    'Moisture source',
    'Core condition',
    'Bonding',
    'Structural loading',
    'Size of the affected area',
    'Access',
    'Previous repairs',
    'Repair quality expected',
    'Whether the moisture source has been stopped',
  ],
  buyerActions: [
    {
      title: 'Do not rely only on appearance',
      description:
        'A clean deck surface does not confirm the condition of the core below it.',
    },
    {
      title: 'Review the yacht’s history',
      description:
        'Ask about previous leaks, deck repairs, fitting replacement, mast-step work and insurance claims.',
    },
    {
      title: 'Ensure the deck is accessible',
      description:
        'Personal equipment, covers and stored items should be removed before inspection where practical.',
    },
    {
      title: 'Arrange appropriate inspection conditions',
      description:
        'Recent rain, washing or heavy surface moisture may affect some testing.',
    },
    {
      title: 'Ask for findings to be explained in context',
      description:
        'Request clarification of location, extent, evidence and recommended next steps.',
    },
    {
      title: 'Obtain repair information where necessary',
      description:
        'For material findings, obtain an appropriate repair proposal before completing the purchase.',
    },
    {
      title: 'Use the survey findings in the purchase decision',
      description:
        'Consider safety, urgency, future maintenance, repair access and cost—not only the presence of moisture.',
    },
  ],
  questionsAfterFinding: [
    'Where is the suspected moisture located?',
    'How large is the affected area?',
    'What evidence supports the finding?',
    'Is movement or loss of stiffness present?',
    'Is the area structurally loaded?',
    'What is the likely entry point?',
    'Is the source still active?',
    'Is further testing recommended?',
    'Should a repair specialist inspect the area?',
    'Does the finding affect immediate use?',
    'Is the repair likely to be local or wider?',
    'What limitations affected the inspection?',
  ],
  professionalSurveyIndicators: [
    'Buying an older GRP yacht',
    'Deck fittings show signs of leakage',
    'Soft areas are noticed',
    'Repairs are visible but undocumented',
    'The mast step or chainplate areas show staining',
    'The yacht has extensive deck hardware',
    'The vessel has been stored outdoors for long periods',
    'The buyer cannot confidently interpret inspection findings',
  ],
  relatedServices: [
    {
      title: 'Pre-Purchase Yacht Survey',
      description:
        'Independent assessment of accessible structure, systems and equipment before purchase.',
      href: '/pre-purchase-survey',
    },
    {
      title: 'Insurance Condition Yacht Survey',
      description:
        'Condition inspection and professional reporting for insurance requirements.',
      href: '/insurance-survey',
    },
    {
      title: 'Yacht Valuation and Damage Assessment',
      description:
        'Independent valuation and damage reporting for an agreed purpose and scope.',
      href: '/valuation-damage-survey',
    },
  ],
  relatedArticle: {
    title: 'More Yacht Survey Tips',
    description:
      'Browse practical guidance about yacht condition, common defects and survey preparation.',
    label: 'View all Yacht Survey Tips',
    href: '/yacht-survey-tips',
  },
  finalCta: {
    heading: 'Buying a Yacht With Suspected Deck Moisture?',
    body: 'All Yacht Service can inspect the yacht’s accessible deck structure, fittings and related areas as part of an agreed pre-purchase survey scope. Send us the yacht details and location to discuss the inspection.',
    links: [
      {
        label: 'Request a Pre-Purchase Survey Quote',
        href: '/contact?service=pre-purchase-survey',
      },
      {
        label: 'Calculate Your Survey Cost',
        href: '/pre-purchase-survey-calculator',
      },
      {
        label: 'WhatsApp +34 695 718 540',
        href: 'https://wa.me/34695718540',
        external: true,
      },
    ],
  },
  card: {
    title: 'Deck Moisture and Soft Spots: What Yacht Buyers Should Know',
    description:
      'Moisture intrusion and soft deck areas can indicate a condition that deserves closer investigation before purchase.',
    href: '/yacht-survey-tips/deck-moisture-soft-spots',
    category: 'Structural Condition',
    status: 'Published',
    publicationDate: 'July 2026',
    publicationDateTime: '2026-07',
    readingTime: '5 minutes',
    image: articleImage,
  } satisfies SurveyTipsArticle,
} as const;
