import type {
  SurveyTipArticlePageData,
  SurveyTipsArticle,
  SurveyTipsImage,
} from './types';

const articleImage = {
  src: '/images/yacht-survey-tips/check-yacht-steering-before-you-trust-it.png',
  alt: 'Survey tip graphic showing a yacht steering wheel and the steering checks to make during a sea trial',
  width: 1092,
  height: 1440,
} as const satisfies SurveyTipsImage;

export const checkYachtSteeringArticle = {
  sourceUrl: 'https://www.instagram.com/p/DcN5U6iKSz8/',
  title:
    'Check the Steering Before You Trust It: What Yacht Buyers Should Look For',
  seoTitle: 'Check Yacht Steering Before Purchase | All Yacht Service',
  description:
    'Steering problems may only become apparent when a yacht is underway. Learn which warning signs buyers can observe and what a properly conducted sea trial adds to a pre-purchase survey.',
  metaDescription:
    'Learn which yacht steering warning signs to look for and why a properly conducted sea trial matters before buying a used yacht.',
  slug: 'check-yacht-steering',
  pathname: '/yacht-survey-tips/check-yacht-steering',
  category: 'Pre-Purchase Checks · Steering & Sea Trial',
  status: 'Published',
  publicationDate: '19 August 2026',
  publicationDateTime: '2026-08-19',
  modifiedDateTime: '2026-08-19',
  readingTime: '5-minute read',
  timeRequired: 'PT5M',
  standfirst:
    'A yacht can look excellent at the dock while steering problems remain unnoticed until the system is loaded underway. Wheel response, hydraulic components and rudder behaviour deserve careful attention before a purchase decision.',
  image: articleImage,
  imageCaption:
    'A steering check during a properly conducted sea trial should focus on smooth, predictable and consistent response in both directions.',
  socialImageAlt:
    'All Yacht Service survey tip about checking yacht steering before relying on it',
  author: {
    name: 'Aleksandrs Tolkacovs',
    professionalDescription:
      'IIMS-Certified Yacht and Small Craft Marine Surveyor',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Yacht Survey Tips', href: '/yacht-survey-tips' },
    {
      label: 'Check the Steering Before You Trust It',
      href: '/yacht-survey-tips/check-yacht-steering',
    },
  ],
  introduction: {
    id: 'steering-introduction',
    label: 'Introduction',
    paragraphs: [
      'A yacht can present very well at the dock. Clean decks, an orderly helm and a good cosmetic finish do not, however, confirm how the steering system behaves once the yacht is underway.',
      'Some steering problems only become apparent when the system is loaded. Excessive play, stiff movement, leaking hydraulic components, worn linkages, loose rudder fittings or unusual vibration can point to issues ranging from routine maintenance to potentially serious defects.',
      'The purpose of an initial buyer check is to recognise warning signs and ask the right questions. It is not a substitute for a professional pre-purchase survey or a properly conducted sea trial.',
    ],
  },
  sections: [
    {
      id: 'why-steering-matters',
      title: 'Why Yacht Steering Deserves Particular Attention',
      paragraphs: [
        'Steering is not simply another onboard system. A failure can immediately affect the ability to control the yacht, and repairs involving the rudder, steering gear or hydraulic components can become expensive.',
        'This is why dockside appearance alone is not enough. The steering system should be considered both during the static inspection and, where included in the agreed scope, under operating conditions during a sea trial.',
      ],
    },
    {
      id: 'steering-warning-signs',
      title: 'Steering Warning Signs to Look For',
      paragraphs: [
        'When inspecting a yacht, pay attention to how the wheel feels and to the accessible components associated with the steering system. Relevant observations include:',
      ],
      items: [
        'Excessive free play at the wheel',
        'Hydraulic fluid leaks around pumps, hoses or fittings',
        'Loose, damaged or corroded steering components',
        'Hard spots or uneven resistance when turning',
        'Unusual noises or vibration from the steering or rudder',
      ],
      closingParagraphs: [
        'These signs do not, by themselves, establish the precise cause or repair cost. They indicate that the steering system deserves closer investigation before the buyer relies on it or reaches a final decision.',
      ],
      note: 'A visually tidy helm does not confirm that the complete steering system is operating correctly.',
    },
    {
      id: 'safe-steering-check',
      title: 'One Safe Check During a Properly Conducted Sea Trial',
      paragraphs: [
        'During a properly conducted sea trial, steer gently in both directions at slow and moderate speed. The response should feel smooth, predictable and consistent.',
        'Any unusual resistance, delay, vibration or noise deserves further investigation. The observation should be recorded and considered together with the dockside inspection and the other sea-trial findings.',
      ],
      note: 'The check should form part of a properly planned sea trial, not an improvised test or an attempt to force a system that does not respond normally.',
    },
    {
      id: 'sea-trial-not-demonstration',
      title: 'A Sea Trial Is More Than a Quick Demonstration',
      paragraphs: [
        'A sea trial should not be treated as a brief demonstration that the yacht simply starts, moves and returns to the berth.',
        'Combined with a professional pre-purchase survey, it provides an opportunity to assess steering, propulsion and other systems under operating conditions. This wider context helps distinguish a reassuring dockside impression from evidence of how the yacht actually behaves underway.',
      ],
    },
    {
      id: 'survey-and-further-investigation',
      title: 'What the Survey and Further Investigation Add',
      paragraphs: [
        'A professional survey brings the available steering observations into the wider assessment of the yacht. Accessible components, visible condition and sea-trial behaviour can be considered together rather than as isolated signs.',
        'No single buyer check can confirm every part of a steering installation or diagnose a concealed defect. Where resistance, delay, leakage, vibration, noise or excessive play is observed, further investigation may be appropriate before the purchase is completed.',
      ],
    },
  ],
  keyPoint: {
    id: 'steering-key-point',
    title: 'Surveyor’s Key Point',
    body: 'Steering should feel smooth, predictable and consistent. A yacht that looks excellent at the dock can still reveal steering concerns underway, so unusual play, leakage, resistance, delay, vibration or noise should not be dismissed.',
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
        'Independent valuation and damage reporting for an agreed purpose and professional scope.',
      href: '/valuation-damage-survey',
    },
  ],
  relatedArticles: [
    {
      label: 'Do Not Ignore Yacht Seacocks',
      href: '/yacht-survey-tips/check-yacht-seacocks',
    },
    {
      label: 'All Yacht Survey Tips',
      href: '/yacht-survey-tips',
    },
  ],
  finalCta: {
    heading: 'Buying a Used Yacht?',
    body: 'All Yacht Service provides independent pre-purchase yacht surveys and sea trials to help buyers understand a vessel’s condition before making a final decision. Assignments are available across Costa Blanca and Spain, with Mediterranean work available subject to scope and travel fees.',
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
    title: 'Check the Steering Before You Trust It',
    description:
      'Steering problems may remain hidden at the dock and only appear when the system is loaded underway.',
    href: '/yacht-survey-tips/check-yacht-steering',
    category: 'Pre-Purchase Checks · Steering & Sea Trial',
    status: 'Published',
    publicationDate: '19 August 2026',
    publicationDateTime: '2026-08-19',
    readingTime: '5 minutes',
    image: articleImage,
  } satisfies SurveyTipsArticle,
} as const satisfies SurveyTipArticlePageData;
