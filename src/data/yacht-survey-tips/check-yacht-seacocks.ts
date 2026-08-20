import type {
  SurveyTipArticlePageData,
  SurveyTipsArticle,
  SurveyTipsImage,
} from './types';

const articleImage = {
  src: '/images/yacht-survey-tips/check-yacht-seacocks-below-waterline.png',
  alt: 'Survey tip graphic showing a corroded yacht seacock and the visible warning signs buyers should check',
  width: 1092,
  height: 1440,
} as const satisfies SurveyTipsImage;

export const checkYachtSeacocksArticle = {
  sourceUrl: 'https://www.instagram.com/p/DbqCr3JKW-d/',
  title: 'Do Not Ignore Seacocks: What Used-Yacht Buyers Should Check',
  seoTitle: 'Yacht Seacocks: What Buyers Should Check | All Yacht Service',
  description:
    'Seacocks and through-hull fittings are easy to overlook but can become a major problem if they fail. Learn which visible warning signs deserve closer investigation before buying a used yacht.',
  metaDescription:
    'Learn what used-yacht buyers should check around seacocks, hoses and clamps, and why visible corrosion or leaks deserve further investigation.',
  slug: 'check-yacht-seacocks',
  pathname: '/yacht-survey-tips/check-yacht-seacocks',
  category: 'Pre-Purchase Checks · Below-Waterline Fittings',
  status: 'Published',
  publicationDate: '5 August 2026',
  publicationDateTime: '2026-08-05',
  modifiedDateTime: '2026-08-05',
  readingTime: '4-minute read',
  timeRequired: 'PT4M',
  standfirst:
    'A small fitting below the waterline can become a major problem if it fails. Seacocks, through-hull fittings, connected hoses and clamps deserve deliberate attention during a used-yacht inspection.',
  image: articleImage,
  imageCaption:
    'Corrosion, aged hoses, loose clamps, difficult valve movement and evidence of leakage are all reasons for closer investigation.',
  socialImageAlt:
    'All Yacht Service survey tip about checking yacht seacocks and below-waterline fittings',
  author: {
    name: 'Aleksandrs Tolkacovs',
    professionalDescription:
      'IIMS-Certified Yacht and Small Craft Marine Surveyor',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Yacht Survey Tips', href: '/yacht-survey-tips' },
    {
      label: 'Do Not Ignore Seacocks',
      href: '/yacht-survey-tips/check-yacht-seacocks',
    },
  ],
  introduction: {
    id: 'seacocks-introduction',
    label: 'Introduction',
    paragraphs: [
      'Seacocks and through-hull fittings are essential to several onboard systems, including engine cooling, toilets and sinks. Despite their importance, they are often hidden inside lockers or engine compartments and can be overlooked during a viewing.',
      'A clean interior or well-presented engine space does not confirm the condition of every fitting below the waterline. The seacock itself, its hose connections and the surrounding evidence should all be considered.',
      'A buyer’s visual check can identify warning signs, but it cannot confirm the condition of every fitting or installation. Findings should be considered within an independent pre-purchase survey.',
    ],
  },
  sections: [
    {
      id: 'why-seacocks-matter',
      title: 'Why Seacocks and Through-Hull Fittings Matter',
      paragraphs: [
        'A seacock controls an opening through the hull below the waterline. If a fitting, hose connection or valve deteriorates or fails, a comparatively small component can become a major problem.',
        'A seized or deteriorated seacock may require immediate replacement and, in severe cases, could contribute to flooding if it fails. Its condition should therefore be treated as a technical and safety consideration rather than a cosmetic detail.',
      ],
    },
    {
      id: 'seacock-warning-signs',
      title: 'Visible Warning Signs to Check',
      paragraphs: [
        'During a used-yacht viewing or inspection, look carefully at accessible seacocks, through-hull fittings, connected hoses and clamps. Warning signs include:',
      ],
      items: [
        'Corrosion or heavy corrosion products on metal fittings',
        'Cracked or aged hoses',
        'Rusted or loose hose clamps',
        'Valves that are difficult or impossible to operate',
        'Signs of previous leaks or water staining',
      ],
      closingParagraphs: [
        'Any one of these observations deserves closer attention. The visible sign may identify the location of a concern, but it does not by itself confirm the complete condition of the fitting or the extent of any repair required.',
      ],
      note: 'Because many seacocks are hidden from normal view, a quick walk-through can miss fittings that deserve inspection.',
    },
    {
      id: 'look-beyond-valve',
      title: 'Look at the Installation, Not Only the Valve',
      paragraphs: [
        'The seacock is only one part of the installation. The connected hose, hose clamps, accessible metal surfaces and nearby staining all provide relevant information.',
        'Corrosion products, aged hose material, rusted clamps or water marks should be recorded rather than dismissed because the valve still appears present and intact. Difficulty operating a valve is also a finding that requires further investigation.',
      ],
    },
    {
      id: 'visual-inspection-limitations',
      title: 'What a Visual Inspection Can and Cannot Confirm',
      paragraphs: [
        'A simple visual inspection is useful, but it cannot confirm the condition of every fitting or installation. Access may be limited, some components may be partly concealed and appearance alone does not establish how the complete installation will perform.',
        'An independent survey considers the installation, accessibility and visible condition and can make recommendations for repair, replacement or further investigation where the findings justify it.',
      ],
    },
    {
      id: 'pre-purchase-survey-context',
      title: 'Why This Belongs in a Pre-Purchase Survey',
      paragraphs: [
        'Seacocks can be easy to miss during an ordinary viewing precisely because they are small, numerous and often located out of sight. A structured pre-purchase inspection brings them into the wider assessment of the yacht’s accessible systems and condition.',
        'The objective is not to make a purchase decision from one fitting. It is to identify defects and limitations before they become expensive surprises and to understand where repair or further investigation may be needed.',
      ],
    },
  ],
  keyPoint: {
    id: 'seacocks-key-point',
    title: 'Surveyor’s Key Point',
    body: 'Do not ignore small fittings below the waterline. Corrosion, cracked hoses, loose clamps, difficult valve movement or signs of leakage can identify a concern that deserves closer investigation before purchase.',
  },
  relatedServices: [
    {
      title: 'Pre-Purchase Yacht Survey',
      description:
        'Independent assessment of a yacht’s accessible structure, systems, machinery and general condition before purchase.',
      href: '/pre-purchase-survey',
    },
    {
      title: 'Insurance Condition Yacht Survey',
      description:
        'Condition assessment and professional reporting for insurance applications and renewals.',
      href: '/insurance-survey',
    },
    {
      title: 'Yacht Buyer Representation',
      description:
        'Independent technical support before, during and after the purchase of a yacht.',
      href: '/buyer-representation',
    },
  ],
  relatedArticles: [
    {
      label: 'Check the Steering Before You Trust It',
      href: '/yacht-survey-tips/check-yacht-steering',
    },
    {
      label: 'Can You Trust a Shiny Hull?',
      href: '/yacht-survey-tips/shiny-hull',
    },
    {
      label: 'All Yacht Survey Tips',
      href: '/yacht-survey-tips',
    },
  ],
  finalCta: {
    heading: 'Buying a Used Yacht?',
    body: 'A professional pre-purchase survey can help identify visible defects in accessible seacocks, hoses, clamps and other onboard systems before they become expensive surprises.',
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
    title: 'Do Not Ignore Seacocks',
    description:
      'Seacocks are easy to overlook, but visible concerns around fittings, hoses and clamps deserve investigation before purchase.',
    href: '/yacht-survey-tips/check-yacht-seacocks',
    category: 'Pre-Purchase Checks · Below-Waterline Fittings',
    status: 'Published',
    publicationDate: '5 August 2026',
    publicationDateTime: '2026-08-05',
    readingTime: '4 minutes',
    image: articleImage,
  } satisfies SurveyTipsArticle,
} as const satisfies SurveyTipArticlePageData;
