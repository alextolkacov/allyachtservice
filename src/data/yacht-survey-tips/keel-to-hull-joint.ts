import type {
  SurveyTipArticlePageData,
  SurveyTipsArticle,
  SurveyTipsImage,
} from './types';

const articleImage = {
  src: '/images/yacht-survey-tips/keel-to-hull-joint.png',
  alt: 'All Yacht Service infographic showing visible warning signs to check at a sailing yacht keel-to-hull joint',
  width: 1080,
  height: 1350,
} as const satisfies SurveyTipsImage;

export const keelToHullJointArticle = {
  sourceUrl:
    'https://www.allyachtservice.com/yacht-survey-tips/keel-to-hull-joint',
  title: 'Keel-to-Hull Joint: Warning Signs Yacht Buyers Should Look For',
  seoTitle: 'Keel-to-Hull Joint Checks for Yacht Buyers | All Yacht Service',
  description:
    'A practical guide to visible cracks, staining, fairing changes and local repairs at a sailing yacht’s keel-to-hull joint, including when further investigation may be appropriate.',
  metaDescription:
    'Learn which visible signs at a sailing yacht’s keel-to-hull joint may warrant closer investigation before purchase and why context matters.',
  slug: 'keel-to-hull-joint',
  pathname: '/yacht-survey-tips/keel-to-hull-joint',
  category: 'Pre-Purchase Checks · Hull & Structure',
  status: 'Published',
  publicationDate: '6 October 2026',
  publicationDateTime: '2026-10-06',
  modifiedDateTime: '2026-10-06',
  readingTime: '6-minute read',
  timeRequired: 'PT6M',
  standfirst:
    'When a sailing yacht is safely ashore, the joint between the keel and hull can provide useful clues about possible movement, previous grounding or repair work. Visible evidence needs context before conclusions are drawn.',
  image: articleImage,
  imageCaption:
    'The original Survey Tip infographic highlights visible keel-to-hull joint signs and the importance of grounding history. It is a guide to observations, not a diagnosis.',
  socialImageAlt:
    'All Yacht Service guide to visible keel-to-hull joint warning signs for sailing-yacht buyers',
  author: {
    name: 'Aleksandrs Tolkacovs',
    professionalDescription:
      'IIMS-Certified Yacht and Small Craft Marine Surveyor',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Yacht Survey Tips', href: '/yacht-survey-tips' },
    {
      label: 'Keel-to-Hull Joint',
      href: '/yacht-survey-tips/keel-to-hull-joint',
    },
  ],
  introduction: {
    id: 'keel-to-hull-joint-introduction',
    label: 'Introduction',
    paragraphs: [
      'The keel-to-hull joint is the visible transition between a sailing yacht’s keel and hull. When the yacht is safely supported ashore and access is permitted, the joint can be viewed along its length and compared from both sides.',
      'Cracking, staining or a local repair may justify questions, but appearance alone does not establish structural damage. The pattern, location and extent of the evidence, the surrounding structure and the yacht’s grounding and repair history all matter.',
    ],
  },
  sections: [
    {
      id: 'why-keel-to-hull-joint-matters',
      title: 'Why the Keel-to-Hull Joint Matters',
      paragraphs: [
        'The joint sits where loads from the keel are transferred into the hull structure. Its visible condition may provide clues about surface fairing, sealant, previous repairs or possible movement, especially when considered with accessible evidence inside the bilge.',
        'A visual check should be comparative rather than diagnostic. Follow the seam, observe both sides and note whether a feature is isolated or forms part of a wider pattern. Stay outside restricted support or lifting areas and do not remove coatings without authorization.',
      ],
    },
    {
      id: 'visible-signs-worth-checking',
      title: 'Visible Signs Worth Checking',
      paragraphs: [
        'With the yacht safely ashore, look at the accessible joint and surrounding surfaces for:',
      ],
      items: [
        'Cracking that follows the keel-to-hull joint',
        'Rust-coloured streaks',
        'Weeping or moisture tracking from the joint',
        'Uneven fairing',
        'Visible gaps',
        'Local changes in contour',
        'Fresh local filler',
        'Fresh or renewed sealant',
        'Local antifouling renewal',
        'Dampness around accessible keel bolts',
        'Cracking around accessible keel bolts',
        'Evidence of repairs around accessible keel bolts',
        'Evidence of repairs to the supporting structure inside the bilge',
      ],
      closingParagraphs: [
        'Record where each sign appears and how far it extends. None of these observations confirms a cause by itself.',
      ],
    },
    {
      id: 'why-cracking-needs-context',
      title: 'Why Cracking Does Not Automatically Mean Structural Damage',
      paragraphs: [
        'Some surface cracking may be cosmetic and limited to fairing compound, sealant or a coating. Other patterns may warrant closer investigation because of their position, extent, recurrence or relationship to evidence elsewhere.',
        'A photograph or visible crack alone cannot determine whether the underlying structure has moved or been damaged. The finding should be considered with the adjacent hull and keel surfaces, accessible internal structure and available history.',
      ],
    },
    {
      id: 'staining-weeping-and-fairing-changes',
      title: 'What Staining, Weeping and Fairing Changes May Indicate',
      paragraphs: [
        'Rust-coloured streaks or weeping may show that moisture or staining is reaching the surface, but they do not prove that a keel bolt has failed. The starting point, route and extent of the staining should be noted and compared with accessible internal evidence.',
        'Uneven fairing, gaps, contour changes or fresh local filler, sealant or antifouling may reflect maintenance or previous repair work. They are reasons to ask when and why the area was treated, not proof that damage was concealed or that a repair was inadequate.',
      ],
    },
    {
      id: 'accessible-bilge-evidence',
      title: 'What to Inspect Inside the Bilge Where Accessible',
      paragraphs: [
        'Where safe access is available, look at accessible keel bolts and the surrounding supporting structure for dampness, cracking, staining or visible repair work. Compare the area with neighbouring structure and note whether coatings, sealant or finishes appear locally renewed.',
        'A standard visual survey cannot automatically assess every keel bolt or hidden part of the internal structure. Linings, tanks, joinery, coatings and limited access may conceal relevant areas, and external appearance does not establish the condition of embedded or inaccessible components.',
      ],
    },
    {
      id: 'grounding-and-repair-history',
      title: 'Why Grounding and Repair History Matter',
      paragraphs: [
        'A previous grounding may be relevant because loads can affect the keel, joint or supporting structure in ways that are not fully explained by one visible mark. Ask whether the yacht has grounded and whether the keel area has been inspected, faired, sealed or repaired afterwards.',
        'Previous survey findings, yard invoices, repair photographs and available insurance-claim information may provide useful context. Their absence does not prove a problem, and their presence does not confirm the yacht’s current condition or the quality of work completed.',
      ],
    },
    {
      id: 'questions-for-seller-or-broker',
      title: 'Questions for the Seller or Broker',
      paragraphs: [
        'Keep the discussion factual and ask for available supporting information. Useful questions include:',
      ],
      items: [
        'Has the yacht ever grounded or struck an underwater object?',
        'Has the keel-to-hull joint been faired, resealed or repaired?',
        'Were any keel-related findings recorded in previous surveys?',
        'Are yard invoices, repair photographs or other records available?',
        'Is any relevant insurance-claim information available?',
      ],
    },
    {
      id: 'pre-purchase-survey-scope',
      title: 'What a Pre-Purchase Yacht Survey May Assess',
      paragraphs: [
        'When haul-out forms part of the agreed scope, a pre-purchase survey may record the visible condition of accessible parts of the keel-to-hull joint, hull surface, keel fairing, accessible keel bolts and surrounding internal structure. These observations can be considered alongside repair records and grounding history.',
        'A standard survey does not automatically include destructive testing, keel removal, full keel-bolt extraction, laboratory analysis, hidden laminate inspection or specialist structural engineering. Access and surface coatings may also limit what can be seen.',
      ],
    },
    {
      id: 'when-further-investigation-is-appropriate',
      title: 'When Further Structural Investigation May Be Appropriate',
      paragraphs: [
        'Further investigation may be appropriate when visible evidence is extensive, repeated, associated with accessible internal cracking or dampness, or supported by a known grounding or repair history. The suitable next step depends on the material, construction, access and evidence present.',
        'An appropriate specialist may recommend additional access, local coating removal, non-destructive examination or another targeted method. That work should be separately agreed and should not be inferred from a surface photograph alone.',
      ],
    },
  ],
  keyPoint: {
    id: 'keel-to-hull-joint-key-point',
    title: 'Surveyor’s Key Point',
    body: 'A visible crack at the keel-to-hull joint is a clue, not a diagnosis. Consider its pattern, location and extent together with accessible internal evidence, repair records and grounding history, and arrange appropriate further investigation when the combined evidence warrants it.',
  },
  relatedServices: [
    {
      title: 'Pre-Purchase Yacht Survey',
      description:
        'An independent assessment of accessible yacht structures, systems and machinery before purchase, within an agreed scope.',
      href: '/pre-purchase-survey',
    },
    {
      title: 'Yacht Valuation and Damage Assessment',
      description:
        'Independent valuation or damage assessment for an agreed purpose, scope and available evidence.',
      href: '/valuation-damage-survey',
    },
  ],
  relatedArticles: [
    {
      label: 'Can You Trust a Shiny Hull? What Used-Yacht Buyers Should Check',
      href: '/yacht-survey-tips/shiny-hull',
    },
    {
      label: 'Before a Yacht Survey: Which Documents Should a Buyer Ask For?',
      href: '/yacht-survey-tips/documents-before-yacht-survey',
    },
    { label: 'All Yacht Survey Tips', href: '/yacht-survey-tips' },
  ],
  finalCta: {
    heading: 'Buying a Sailing Yacht?',
    body: 'If the yacht is available for haul-out, an independent pre-purchase survey can record accessible keel, hull and internal observations within the agreed scope and recommend further investigation where the evidence calls for it.',
    links: [
      {
        label: 'Request a Pre-Purchase Survey Quote',
        href: '/contact?service=pre-purchase-survey',
      },
      { label: 'View Pre-Purchase Yacht Survey', href: '/pre-purchase-survey' },
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
    title: 'Check the Keel-to-Hull Joint',
    description:
      'Cracks, staining, fairing changes or local repairs can provide useful clues, but visible signs need context and investigation before conclusions are drawn.',
    href: '/yacht-survey-tips/keel-to-hull-joint',
    category: 'Pre-Purchase Checks · Hull & Structure',
    status: 'Published',
    publicationDate: '6 October 2026',
    publicationDateTime: '2026-10-06',
    readingTime: '6 minutes',
    image: articleImage,
  } satisfies SurveyTipsArticle,
} as const satisfies SurveyTipArticlePageData;
