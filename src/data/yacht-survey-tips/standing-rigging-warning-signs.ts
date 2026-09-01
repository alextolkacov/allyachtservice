import type {
  SurveyTipArticlePageData,
  SurveyTipsArticle,
  SurveyTipsImage,
} from './types';

const articleImage = {
  src: '/images/yacht-survey-tips/standing-rigging-warning-signs.png',
  alt: 'Survey tip graphic showing yacht standing-rigging terminals, turnbuckles and chainplates with visible warning signs to check',
  width: 1092,
  height: 1440,
} as const satisfies SurveyTipsImage;

export const standingRiggingWarningSignsArticle = {
  sourceUrl:
    'https://www.allyachtservice.com/yacht-survey-tips/standing-rigging-warning-signs',
  title:
    'Don’t Judge Standing Rigging by Its Shine: What Yacht Buyers Should Check',
  seoTitle: 'Standing Rigging Warning Signs for Buyers | All Yacht Service',
  description:
    'Polished standing rigging can still show signs of corrosion, cracking, deformation or fatigue in difficult-to-see and highly loaded areas. Learn which visible warning signs buyers can check safely.',
  metaDescription:
    'Learn which standing-rigging warning signs yacht buyers can check safely and why age, service history and specialist inspection may matter.',
  slug: 'standing-rigging-warning-signs',
  pathname: '/yacht-survey-tips/standing-rigging-warning-signs',
  category: 'Pre-Purchase Checks · Rigging & Sails',
  status: 'Published',
  publicationDate: '1 September 2026',
  publicationDateTime: '2026-09-01',
  modifiedDateTime: '2026-09-01',
  readingTime: '5-minute read',
  timeRequired: 'PT5M',
  standfirst:
    'Stainless-steel standing rigging may look clean and polished while defects are developing in areas that are difficult to see. For a sailing-yacht buyer, visible condition, age and service history all deserve careful attention before purchase.',
  image: articleImage,
  imageCaption:
    'Accessible lower terminals, turnbuckles and chainplates can be checked visually for staining, distortion, damaged wire and other differences that warrant investigation.',
  socialImageAlt:
    'All Yacht Service survey tip about warning signs in yacht standing rigging',
  author: {
    name: 'Aleksandrs Tolkacovs',
    professionalDescription:
      'IIMS-Certified Yacht and Small Craft Marine Surveyor',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Yacht Survey Tips', href: '/yacht-survey-tips' },
    {
      label: 'Standing Rigging Warning Signs',
      href: '/yacht-survey-tips/standing-rigging-warning-signs',
    },
  ],
  introduction: {
    id: 'standing-rigging-introduction',
    label: 'Introduction',
    paragraphs: [
      'Stainless-steel standing rigging can create a reassuring first impression. Clean shrouds, stays and polished fittings do not, however, establish the condition of components that are difficult to see or subjected to significant loads.',
      'Corrosion, cracking, deformation or fatigue may develop around terminals, swages, toggles, chainplates and other areas even when the visible surfaces appear tidy. A standing-rigging failure can result in the loss of the mast and potentially more serious consequences.',
      'A buyer can make a cautious visual check from deck level and ask for the rigging history. This is not a complete rig inspection and cannot identify every hidden defect, but it can reveal observations that justify closer investigation before purchase.',
    ],
  },
  sections: [
    {
      id: 'why-rigging-appearance-can-mislead',
      title: 'Why Appearance Can Be Misleading',
      paragraphs: [
        'Shrouds, stays, terminals, swages, toggles and chainplates may look clean externally while concerns are developing in less visible or highly loaded areas. A polished surface is therefore an observation about appearance, not evidence of known condition.',
        'Visible staining or distortion can help identify where further attention is needed, but appearance alone cannot establish the cause, extent or remaining condition of a component. The yacht’s history and the accessibility of the rigging also affect what can be assessed.',
      ],
    },
    {
      id: 'standing-rigging-warning-signs',
      title: 'Warning Signs to Look For',
      paragraphs: [
        'From a safe position on deck, buyers can look for visible differences or damage around accessible standing-rigging components. Relevant observations include:',
      ],
      items: [
        'Broken or distorted wire strands',
        'Rust staining around terminals or fittings',
        'Cracks around swages, toggles or chainplates',
        'Bent or apparently overloaded fittings',
        'Loose split pins or missing securing devices',
        'Corrosion where stainless-steel fittings enter or disappear into the deck',
        'Movement, cracking or water staining around chainplates',
      ],
      closingParagraphs: [
        'These signs do not diagnose a defect by themselves. They should be recorded and considered in context, and they may warrant further investigation by an appropriately qualified specialist.',
      ],
      note: 'Staining may indicate an area that needs attention, but it does not by itself confirm the cause or extent of corrosion or cracking.',
    },
    {
      id: 'safe-standing-rigging-check',
      title: 'One Safe Visual Check',
      paragraphs: [
        'Stand on deck and visually follow each stay and shroud from deck level upward. Pay particular attention to accessible lower terminals, turnbuckles and chainplates, comparing nearby fittings for staining, distortion, damaged wire or anything that looks different.',
        'Keep the check visual and remain within safe deck-level access. Do not attempt to dismantle loaded rigging or climb the mast without appropriate equipment and experience.',
      ],
      note: 'A deck-level visual check cannot confirm the condition of concealed components or areas that are not safely accessible.',
    },
    {
      id: 'standing-rigging-age-and-history',
      title: 'Why Rigging Age and History Matter',
      paragraphs: [
        'Even when no obvious defect is visible, the age and service history of the standing rigging remain important. Ask the seller for evidence rather than relying only on the current appearance.',
      ],
      items: [
        'When was the standing rigging last replaced?',
        'Are invoices or installation records available?',
        'Has the yacht experienced a dismasting, grounding or significant rigging load?',
        'When were the mast and rigging last professionally inspected?',
      ],
      closingParagraphs: [
        'The answers, supporting records and any gaps in the history should be considered alongside the visible condition. No visible problem is not the same as known condition.',
      ],
    },
    {
      id: 'standing-rigging-pre-purchase-survey',
      title: 'What a Pre-Purchase Yacht Survey Can Assess',
      paragraphs: [
        'During a pre-purchase yacht survey, accessible standing rigging, terminals, chainplates and associated structure may be assessed alongside the rest of the yacht. Visible findings, access limitations and the available history can then be considered within the wider condition assessment.',
        'A standard pre-purchase survey is not automatically a full specialist rigging inspection or a mast-aloft inspection. Where observations, access limitations, age or history justify it, a specialist rigging inspection may be recommended before the buyer makes a final decision.',
      ],
    },
  ],
  keyPoint: {
    id: 'standing-rigging-key-point',
    title: 'Surveyor’s Key Point',
    body: 'A polished fitting is not evidence of known condition. Visible warning signs, age, service history and the limits of access all matter when evaluating standing rigging, and specialist inspection may be appropriate where the findings justify it.',
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
      title: 'Insurance Condition Yacht Survey',
      description:
        'Condition assessment and professional reporting for insurance applications and renewals.',
      href: '/insurance-survey',
    },
  ],
  relatedArticles: [
    {
      label: 'Electrical Corrosion on Yachts',
      href: '/yacht-survey-tips/yacht-electrical-corrosion',
    },
    {
      label: 'Check the Steering Before You Trust It',
      href: '/yacht-survey-tips/check-yacht-steering',
    },
    {
      label: 'All Yacht Survey Tips',
      href: '/yacht-survey-tips',
    },
  ],
  finalCta: {
    heading: 'Buying a Used Sailing Yacht?',
    body: 'An independent pre-purchase yacht survey can assess accessible rigging and associated structure within the wider condition of the yacht, identify limitations and recommend specialist investigation where appropriate.',
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
    title: 'Don’t Judge Standing Rigging by Its Shine',
    description:
      'Polished standing rigging can still hide signs of corrosion, cracking, deformation or fatigue. Learn what buyers can safely inspect before purchase.',
    href: '/yacht-survey-tips/standing-rigging-warning-signs',
    category: 'Pre-Purchase Checks · Rigging & Sails',
    status: 'Published',
    publicationDate: '1 September 2026',
    publicationDateTime: '2026-09-01',
    readingTime: '5 minutes',
    image: articleImage,
  } satisfies SurveyTipsArticle,
} as const satisfies SurveyTipArticlePageData;
