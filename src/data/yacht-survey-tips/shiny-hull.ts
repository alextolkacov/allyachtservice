import type { SurveyTipsArticle, SurveyTipsImage } from './types';

const articleImage = {
  src: '/images/yacht-survey-tips/shiny-yacht-hull-hidden-repairs.png',
  alt: 'Survey tip graphic explaining that a shiny yacht hull may conceal signs of previous repairs',
  width: 1122,
  height: 1402,
} as const satisfies SurveyTipsImage;

export const shinyHullArticle = {
  sourceUrl: 'https://www.allyachtservice.com/yacht-survey-tips/shiny-hull',
  title: 'Can You Trust a Shiny Hull? What Used-Yacht Buyers Should Check',
  seoTitle: 'Shiny Yacht Hull? Signs of Previous Repairs | All Yacht Service',
  description:
    'A glossy hull can look reassuring while making previous repair areas or surface inconsistencies less obvious. Learn what buyers can safely check and when professional investigation is appropriate.',
  metaDescription:
    'A glossy yacht hull can conceal previous repairs or damage. Learn what used-boat buyers should check and how a pre-purchase survey reduces risk.',
  slug: 'shiny-hull',
  pathname: '/yacht-survey-tips/shiny-hull',
  category: 'Pre-Purchase Checks · Hull & Structure',
  status: 'Published',
  publicationDate: '28 July 2026',
  publicationDateTime: '2026-07-28',
  modifiedDateTime: '2026-07-28',
  readingTime: '5 minutes',
  timeRequired: 'PT5M',
  standfirst:
    'A glossy finish creates a strong first impression, but it does not confirm what lies beneath. Differences in colour, reflection, fairness or repair quality may justify closer investigation before buying a used yacht.',
  image: articleImage,
  imageCaption:
    'A highly polished surface can improve presentation while making some visual inconsistencies more difficult to notice during a quick viewing.',
  socialImageAlt:
    'Survey tip graphic explaining that a shiny yacht hull may conceal signs of previous repairs',
  author: {
    name: 'Aleksandrs Tolkacovs',
    professionalDescription:
      'IIMS-Certified Yacht and Small Craft Marine Surveyor',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Yacht Survey Tips', href: '/yacht-survey-tips' },
    {
      label: 'Can You Trust a Shiny Hull?',
      href: '/yacht-survey-tips/shiny-hull',
    },
  ],
  finishMayConceal: [
    'Previous repairs',
    'Filler',
    'Impact damage',
    'Blister treatment',
    'Fairing work',
    'Other previous hull work',
  ],
  repairSigns: [
    {
      id: 'uneven-gloss-colour',
      title: 'Uneven Gloss or Colour',
      body: [
        'Look along the hull from different angles rather than standing directly in front of it.',
        'Local differences in colour, reflection or gloss may indicate that one section has been painted, polished or repaired separately from the surrounding area. This can be especially noticeable in strong natural light.',
        'Colour differences do not prove that a repair is defective, but they justify asking for more information.',
      ],
      items: [],
    },
    {
      id: 'hull-fairness',
      title: 'Waviness or Changes in Hull Fairness',
      body: [
        'A hull surface should normally appear smooth and fair when viewed along its length.',
        'Local hollows, raised areas, distortion or changes in reflection may justify closer investigation.',
      ],
      items: [
        'Filler beneath the coating',
        'Previous impact repairs',
        'Laminate work',
        'Poor surface preparation',
        'Local deformation',
      ],
      note: 'Some construction marks are normal, particularly on older yachts, so these signs must be interpreted in context.',
    },
    {
      id: 'sanding-masking-overspray',
      title: 'Sanding Marks, Masking Lines or Overspray',
      body: [
        'Visible sanding scratches, paint on fittings, sharp masking edges or overspray can suggest that refinishing work was completed quickly or locally.',
        'The quality of the finish may also provide an indication of the care taken during the underlying repair.',
      ],
      items: [
        'Windows',
        'Rubbing strakes',
        'Through-hull fittings',
        'Deck-to-hull joints',
        'Exhaust outlets',
        'Transom fittings',
        'Decals and registration markings',
      ],
    },
    {
      id: 'repairs-not-matching',
      title: 'Repairs That Do Not Match the Surrounding Surface',
      body: [
        'Differences in gelcoat texture, paint thickness, surface profile or finish can identify areas where work has previously been completed.',
        'Pay particular attention around locations where impact, grounding, loading or water ingress may occur.',
      ],
      items: [
        'Bow',
        'Stern quarters',
        'Keel area',
        'Rudder',
        'Chainplates',
        'Stanchion bases',
        'Lifting points',
        'Areas close to fenders and marina contact points',
      ],
    },
    {
      id: 'cracking-loaded-areas',
      title: 'Cracking Around Structural or Loaded Areas',
      body: [
        'Small cracks are not all equal.',
        'Fine cosmetic crazing in ageing gelcoat may be relatively superficial, while cracks around the keel, bulkheads, chainplates, mast support, rudder or deck fittings may require closer investigation.',
        'The location, direction and pattern of cracking are often more important than the crack width alone.',
      ],
      items: [],
    },
  ],
  sellerQuestions: [
    'Has the hull ever been involved in a collision, grounding or other impact event?',
    'Have any areas of the hull been re-laminated, filled or faired?',
    'When were the topsides last painted or extensively polished?',
    'Why was the repainting, refinishing or repair work carried out?',
    'Who completed the work?',
    'Has the yacht had previous moisture, blister or osmosis treatment?',
    'Were any insurance claims connected with the work?',
    'Are invoices, repair photographs or technical reports available?',
    'Is documentation available from the repair yard or insurer?',
  ],
  diyChecks: [
    'Inspect the hull from different angles.',
    'Look along the hull rather than only directly at it.',
    'Observe how reflections travel across the surface.',
    'Use natural or directional light.',
    'Compare the port and starboard sides.',
    'Inspect transitions around areas that appear repaired.',
    'Look for inconsistent colour, gloss, shape or finish.',
    'Check for visible masking boundaries, sanding marks or overspray.',
    'Record observations for discussion with a surveyor.',
  ],
  buyerMustNot: [
    'Scrape coatings',
    'Drill holes',
    'Remove fittings',
    'Damage the surface',
    'Perform aggressive percussion testing',
    'Carry out destructive investigation without permission',
  ],
  professionalSurveyMethods: [
    'Close visual inspection of the topsides and underwater hull',
    'Comparative assessment of port, starboard and surrounding surfaces',
    'Examination of reflections and hull fairness',
    'Inspection of accessible internal structures, bulkheads and connections',
    'Review of visible repairs',
    'Percussion testing where appropriate',
    'Moisture assessment interpreted in context where appropriate',
    'Review of available repair, yard and insurance documentation',
    'Haul-out inspection of the underwater hull, keel, rudder and fittings',
    'Recommendations for specialist or destructive investigation where justified',
  ],
  buyerConsiderations: [
    'Why the repair was required',
    'Which structure was affected',
    'How it was completed',
    'Which materials were used',
    'Whether it is documented',
    'Whether the finish is cosmetic or connected to deeper work',
    'Whether further investigation is required',
    'Whether it affects safety, value, maintenance or future resale',
  ],
  professionalLimitations: [
    'A glossy surface does not prove good condition.',
    'A glossy surface does not prove concealed damage.',
    'Colour differences do not automatically prove defective repair.',
    'A visible repair is not automatically unacceptable.',
    'Visual inspection cannot confirm every concealed condition.',
    'Normal surveys are generally visual and non-destructive.',
    'Specialist or destructive examination may require separate authorisation.',
    'Findings must be interpreted in context.',
  ],
  relatedServices: [
    {
      title: 'Pre-Purchase Yacht Survey',
      description:
        'Independent assessment of accessible structure, systems and visible previous work before purchase.',
      href: '/pre-purchase-survey',
    },
    {
      title: 'Yacht Valuation and Damage Assessment',
      description:
        'Independent valuation and damage reporting for an agreed purpose and scope.',
      href: '/valuation-damage-survey',
    },
    {
      title: 'Insurance Condition Yacht Survey',
      description:
        'Condition inspection and professional reporting for insurance requirements.',
      href: '/insurance-survey',
    },
  ],
  relatedArticles: [
    {
      label: 'Deck Moisture and Soft Spots: What Yacht Buyers Should Know',
      href: '/yacht-survey-tips/deck-moisture-soft-spots',
    },
    {
      label: 'All Yacht Survey Tips',
      href: '/yacht-survey-tips',
    },
  ],
  finalCta: {
    heading: 'Buying a Used Yacht?',
    body: 'A professional pre-purchase survey can help identify visible signs of previous repairs, assess accessible structure and systems, review available documentation and explain where further investigation may be appropriate.',
    links: [
      {
        label: 'Request a Pre-Purchase Survey Quote',
        href: '/contact?service=pre-purchase-survey',
      },
      {
        label: 'View Pre-Purchase Survey',
        href: '/pre-purchase-survey',
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
    title: 'Can You Trust a Shiny Hull? What Used-Yacht Buyers Should Check',
    description:
      'A glossy hull can make previous repair areas or surface inconsistencies less obvious during a viewing.',
    href: '/yacht-survey-tips/shiny-hull',
    category: 'Pre-Purchase Checks · Hull & Structure',
    status: 'Published',
    publicationDate: '28 July 2026',
    publicationDateTime: '2026-07-28',
    readingTime: '5 minutes',
    image: articleImage,
  } satisfies SurveyTipsArticle,
} as const;
