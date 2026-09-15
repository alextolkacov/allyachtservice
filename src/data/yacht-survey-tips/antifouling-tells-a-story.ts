import type {
  SurveyTipArticlePageData,
  SurveyTipsArticle,
  SurveyTipsImage,
} from './types';

const articleImage = {
  src: '/images/yacht-survey-tips/antifouling-tells-a-story.png',
  alt: 'Antifouling condition and underwater hull inspection guide for used-yacht buyers by All Yacht Service',
  width: 1080,
  height: 1350,
} as const satisfies SurveyTipsImage;

export const antifoulingTellsAStoryArticle = {
  sourceUrl:
    'https://www.allyachtservice.com/yacht-survey-tips/antifouling-tells-a-story',
  title: 'Antifouling Tells a Story: What Used-Yacht Buyers Should Look For',
  seoTitle:
    'Antifouling on Used Yachts: What Buyers Should Check | All Yacht Service',
  description:
    'Antifouling condition can provide useful clues about underwater-hull maintenance, coating compatibility, previous local work and areas that deserve further investigation before buying a used yacht.',
  metaDescription:
    'Learn what peeling antifouling, marine growth, blisters and underwater-hull repairs can reveal before buying a used yacht.',
  slug: 'antifouling-tells-a-story',
  pathname: '/yacht-survey-tips/antifouling-tells-a-story',
  category: 'Pre-Purchase Checks · Hull & Underwater Gear',
  status: 'Published',
  publicationDate: '15 September 2026',
  publicationDateTime: '2026-09-15',
  modifiedDateTime: '2026-09-15',
  readingTime: '6-minute read',
  timeRequired: 'PT6M',
  standfirst:
    'What is happening below the waterline can reveal a great deal about how a yacht has been maintained. Antifouling controls marine growth, but its condition can also provide useful clues during a pre-purchase inspection.',
  image: articleImage,
  imageCaption:
    'Peeling coatings, marine growth, raised areas and impact marks are observations to examine in context during an out-of-water inspection.',
  socialImageAlt:
    'All Yacht Service guide to checking antifouling and an underwater hull before buying a used yacht',
  author: {
    name: 'Aleksandrs Tolkacovs',
    professionalDescription:
      'IIMS-Certified Yacht and Small Craft Marine Surveyor',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Yacht Survey Tips', href: '/yacht-survey-tips' },
    {
      label: 'Antifouling Tells a Story',
      href: '/yacht-survey-tips/antifouling-tells-a-story',
    },
  ],
  introduction: {
    id: 'antifouling-introduction',
    label: 'Introduction',
    paragraphs: [
      'Antifouling is applied to the underwater hull to control marine growth. When a used yacht is lifted ashore, the coating can also help a buyer understand how the underwater surfaces have been prepared, maintained and repaired over time.',
      'Peeling paint, heavy growth, raised areas, different coating layers or impact marks are observations rather than diagnoses. Each needs to be considered alongside the hull material, coating system, available maintenance records and the condition of the surrounding surface.',
      'An attractive finish does not prove that the structure beneath it is sound. Equally, poor-looking antifouling is often a coating or maintenance issue rather than evidence of structural damage. The aim is to identify what deserves explanation or closer investigation.',
    ],
  },
  sections: [
    {
      id: 'why-antifouling-condition-matters',
      title: 'Why Antifouling Condition Matters During a Yacht Survey',
      paragraphs: [
        'The pattern and condition of antifouling may provide useful clues about surface preparation, coating compatibility, time since the last application and previous local work. It can also direct attention towards parts of the keel, rudder, lower hull or underwater fittings that require a more careful look.',
        'Antifouling itself is a consumable maintenance coating. Its deterioration does not automatically mean that the hull has a structural defect, but thick or failing layers can make cracking, surface deterioration and earlier repairs harder to see.',
      ],
    },
    {
      id: 'what-to-look-for-below-waterline',
      title: 'What to Look for Below the Waterline',
      paragraphs: [
        'Whenever possible, inspect a used yacht out of the water in good light. Look at the entire underwater hull before focusing on individual marks, and compare corresponding areas on both sides.',
      ],
      subsections: [
        {
          id: 'peeling-flaking-antifouling',
          title: 'Peeling or Flaking Antifouling',
          paragraphs: [
            'Peeling or flaking may indicate inadequate surface preparation, incompatible coating systems or excessive coating build-up. The affected pattern and the adhesion of surrounding layers deserve attention, but peeling paint alone does not establish structural damage.',
          ],
        },
        {
          id: 'heavy-marine-growth',
          title: 'Heavy Marine Growth',
          paragraphs: [
            'Heavy growth may be consistent with extended periods without use, ineffective antifouling or overdue maintenance. It can obscure the surface and underwater fittings, and may adversely affect vessel performance and fuel consumption.',
          ],
        },
        {
          id: 'blisters-raised-areas',
          title: 'Blisters and Raised Areas',
          paragraphs: [
            'Blisters or raised areas warrant further investigation, but not every blister is osmosis. The feature may relate to one or more coating layers, trapped contamination, local preparation or the substrate beneath, so its nature should not be assumed from appearance alone.',
          ],
        },
        {
          id: 'coating-layers-previous-repairs',
          title: 'Different Coating Layers and Previous Repairs',
          paragraphs: [
            'Uneven repairs, changes in colour or visibly different layers may indicate previous local repairs, grounding damage or repeated coating work. They do not prove a particular history by themselves. Compare the area with the opposite side and ask whether invoices, photographs or repair records are available.',
          ],
        },
        {
          id: 'scrapes-impact-damage',
          title: 'Scrapes and Impact Damage',
          paragraphs: [
            'Scrapes, gouges and impact marks deserve particular attention around the keel, rudder and lower hull. Some damage may be limited to the coating, while deeper or distorted areas require closer assessment of the underlying surface and adjacent structure.',
          ],
        },
      ],
    },
    {
      id: 'fresh-antifouling-still-needs-investigation',
      title: 'Why a Freshly Painted Hull Can Still Require Investigation',
      paragraphs: [
        'Fresh antifouling does not automatically prove that the underwater hull is in good condition. A uniform new coat can make the yacht look well prepared while concealing older layers, local filling, cracking or repairs that remain relevant to a buyer.',
        'Ask when the work was completed, which coating system was used and how the surface was prepared. Supporting invoices or photographs can add context, but records and a fresh finish do not replace an inspection of the hull itself.',
      ],
      note: 'Treat a freshly painted hull as a surface to inspect, not as evidence that the underwater structure has already been assessed.',
    },
    {
      id: 'simple-antifouling-check',
      title: 'A Simple Check Buyers Can Make',
      paragraphs: [
        'With the yacht safely ashore, stand back and compare both sides of the hull in good light. Then view the surface from different angles and look for changes in coating colour or texture, poor adhesion, raised areas, unfairness, local repairs and impact marks.',
        'Include the keel, rudder and accessible underwater fittings in the visual comparison. Do not scrape, sand, probe or remove coatings without the owner’s authorisation and suitable controls, because this may damage the finish or disturb potentially hazardous material.',
      ],
    },
    {
      id: 'professional-pre-purchase-survey',
      title: 'What a Professional Pre-Purchase Survey Adds',
      paragraphs: [
        'When haul-out is included in the agreed scope, a pre-purchase yacht survey can assess the accessible underwater hull, keel, rudder and fittings as part of the vessel’s wider condition. The surveyor can record visible coating failure, surface irregularities, possible repairs and impact evidence in context rather than treating one mark as a conclusion.',
        'Antifouling may limit what can be seen beneath it, and access, contamination or coating condition can restrict the inspection. Where an observation cannot be resolved within the agreed survey scope, further cleaning, coating removal, yard work or specialist investigation may be recommended.',
      ],
    },
  ],
  keyPoint: {
    id: 'antifouling-key-point',
    title: 'Surveyor’s Key Point',
    body: 'Antifouling condition can tell a useful maintenance story, but it does not provide a diagnosis on its own. Inspect the yacht ashore whenever possible, compare the whole underwater hull, and investigate observations in the context of the coating system, hull material and available history.',
  },
  relatedServices: [
    {
      title: 'Pre-Purchase Yacht Survey',
      description:
        'Independent assessment of a yacht’s accessible structure, systems, machinery and general condition before purchase.',
      href: '/pre-purchase-survey',
    },
    {
      title: 'Yacht Buyer Representation',
      description:
        'Independent technical support before, during and after the purchase of a yacht.',
      href: '/buyer-representation',
    },
    {
      title: 'Yacht Valuation and Damage Assessment',
      description:
        'Independent valuation and damage reporting for an agreed purpose and scope.',
      href: '/valuation-damage-survey',
    },
  ],
  relatedArticles: [
    {
      label: 'Shiny Hull? Look Closer',
      href: '/yacht-survey-tips/shiny-hull',
    },
    {
      label: 'Do Not Ignore Seacocks',
      href: '/yacht-survey-tips/check-yacht-seacocks',
    },
    {
      label: 'All Yacht Survey Tips',
      href: '/yacht-survey-tips',
    },
  ],
  finalCta: {
    heading: 'Buying a Used Yacht in Spain?',
    body: 'All Yacht Service provides independent pre-purchase yacht surveys across the Costa Blanca and throughout Spain. Mediterranean assignments are available, with additional travel fees where applicable. Reports are normally delivered within 48 hours in English, with professional translations available for an additional fee.',
    links: [
      {
        label: 'Request a Pre-Purchase Survey Quote',
        href: '/contact?service=pre-purchase-survey',
      },
      {
        label: 'View Pre-Purchase Yacht Survey',
        href: '/pre-purchase-survey',
      },
      {
        label: 'WhatsApp +34 695 718 540',
        href: 'https://wa.me/34695718540',
        external: true,
      },
    ],
  },
  labels: {
    breadcrumb: 'Breadcrumb',
    published: 'Published',
    readingTime: 'Reading time',
    author: 'Author',
    authorPrefix: 'By',
    professionalSupport: 'Professional support',
    relatedServices: 'Related Services',
    viewService: 'View service',
    moreTips: 'More Yacht Survey Tips',
    moreTipsBody:
      'Continue with related buyer guidance or browse the complete knowledge hub.',
    finalCtaEyebrow: 'Pre-purchase support',
  },
  card: {
    title: 'Antifouling Tells a Story',
    description:
      'Peeling coatings, marine growth, raised areas and underwater repairs can provide useful clues before buying a used yacht.',
    href: '/yacht-survey-tips/antifouling-tells-a-story',
    category: 'Pre-Purchase Checks · Hull & Underwater Gear',
    status: 'Published',
    publicationDate: '15 September 2026',
    publicationDateTime: '2026-09-15',
    readingTime: '6 minutes',
    image: articleImage,
  } satisfies SurveyTipsArticle,
} as const satisfies SurveyTipArticlePageData;
