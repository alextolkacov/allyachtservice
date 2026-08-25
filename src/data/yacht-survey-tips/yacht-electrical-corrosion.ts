import type {
  SurveyTipArticlePageData,
  SurveyTipsArticle,
  SurveyTipsImage,
} from './types';

const articleImage = {
  src: '/images/yacht-survey-tips/electrical-corrosion-on-yachts.png',
  alt: 'Survey tip graphic showing corrosion on yacht battery terminals and visible electrical warning signs',
  width: 1122,
  height: 1402,
} as const satisfies SurveyTipsImage;

export const yachtElectricalCorrosionArticle = {
  sourceUrl: 'https://www.instagram.com/p/DcdHZXIKMav/',
  title:
    'Electrical Corrosion on Yachts: Warning Signs Buyers and Owners Should Know',
  seoTitle: 'Electrical Corrosion on Yachts | All Yacht Service',
  description:
    'Electrical corrosion can begin as a small visible deposit around a terminal and develop into unreliable equipment, voltage drop or overheating. Learn which warning signs yacht buyers and owners can observe safely.',
  metaDescription:
    'Learn the visible signs of electrical corrosion on yachts, why they matter and which safe checks buyers and owners can make without opening equipment.',
  slug: 'yacht-electrical-corrosion',
  pathname: '/yacht-survey-tips/yacht-electrical-corrosion',
  category: 'Electrical Systems · Corrosion & Water Ingress',
  status: 'Published',
  publicationDate: '25 August 2026',
  publicationDateTime: '2026-08-25',
  modifiedDateTime: '2026-08-25',
  readingTime: '5-minute read',
  timeRequired: 'PT5M',
  standfirst:
    'A small white or green deposit around a battery terminal can be easy to dismiss during a yacht viewing. It may, however, be an early sign that moisture, salt or a poor connection is affecting an electrical installation and deserves closer investigation.',
  image: articleImage,
  imageCaption:
    'White or green deposits, loose connections, water ingress and visible heat damage are observations that deserve closer investigation.',
  socialImageAlt:
    'All Yacht Service survey tip about electrical corrosion and battery-terminal checks on yachts',
  author: {
    name: 'Aleksandrs Tolkacovs',
    professionalDescription:
      'IIMS-Certified Yacht and Small Craft Marine Surveyor',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Yacht Survey Tips', href: '/yacht-survey-tips' },
    {
      label: 'Electrical Corrosion on Yachts',
      href: '/yacht-survey-tips/yacht-electrical-corrosion',
    },
  ],
  introduction: {
    id: 'electrical-corrosion-introduction',
    label: 'Introduction',
    paragraphs: [
      'Electrical corrosion is easy to overlook during a yacht viewing. A small amount of white or green residue around a terminal may appear to be a minor maintenance detail, but it can be an early warning that an electrical connection or its surrounding environment needs attention.',
      'Salt, moisture, poor connections and water ingress can affect terminals, cables, fuses, busbars and distribution equipment. As corrosion develops, electrical resistance can increase and contribute to voltage drop, unreliable equipment or overheating. Damaged connections can, in more serious cases, contribute to system failure or an electrical fire.',
      'A buyer or owner can record visible warning signs without dismantling equipment. Those observations do not establish the cause, extent or required repair and do not replace a professional survey or investigation by a competent electrical specialist.',
    ],
  },
  sections: [
    {
      id: 'why-electrical-corrosion-matters',
      title: 'Why Electrical Corrosion Deserves Attention',
      paragraphs: [
        'An electrical connection depends on clean, secure contact. Corrosion or a poor connection can increase resistance, which may contribute to voltage drop, intermittent operation and heat at the affected point.',
        'The visible deposit is therefore an observation rather than a complete diagnosis. The important question is whether it is an isolated maintenance issue or evidence of moisture, water ingress, heat damage or a wider installation concern.',
      ],
    },
    {
      id: 'electrical-corrosion-warning-signs',
      title: 'Visible Warning Signs to Look For',
      paragraphs: [
        'Without opening electrical equipment or touching unfamiliar components, buyers and owners can look for visible or sensory warning signs around accessible installations:',
      ],
      items: [
        'White or green deposits on battery terminals and cable connections',
        'Loose, damaged or visibly overheated connections',
        'Corrosion around accessible fuses, busbars or distribution panels',
        'Evidence of moisture or water ingress in electrical compartments',
        'Burnt smells, heat damage or discoloured components',
      ],
      closingParagraphs: [
        'None of these signs confirms the full condition of the electrical system by itself. Each is a reason to record the location and arrange closer investigation appropriate to the finding.',
      ],
      note: 'A clean battery box or electrical panel exterior does not confirm the condition of every connection or concealed component.',
    },
    {
      id: 'safe-visual-electrical-check',
      title: 'One Safe Visual Check',
      paragraphs: [
        'With the yacht’s systems in their normal safe condition, visually inspect accessible battery terminals and electrical compartments. Look for deposits, moisture, staining and obvious heat damage without disturbing the installation.',
        'Do not remove electrical covers or touch unfamiliar AC or DC equipment. If a connection is loose, hot, damaged, discoloured or surrounded by corrosion products, stop at the observation and refer it to a competent professional.',
      ],
      note: 'A visual check should remain visual. It is not permission to energise, dismantle, clean or test unfamiliar electrical equipment.',
    },
    {
      id: 'observation-not-diagnosis',
      title: 'An Observation Is Not a Diagnosis',
      paragraphs: [
        'White or green deposits can identify the location of a concern, but appearance alone cannot establish why the corrosion developed, how far it extends or which repair is appropriate.',
        'Access can also be limited. Connections may be concealed behind covers or within equipment that should only be opened or tested by a competent person under an agreed scope. Further investigation may therefore be recommended before a buyer or owner makes a decision.',
      ],
    },
    {
      id: 'pre-purchase-survey-electrical-context',
      title: 'Electrical Corrosion in a Pre-Purchase Survey',
      paragraphs: [
        'During a professional pre-purchase or condition survey, accessible electrical installations are considered alongside the yacht’s structure, machinery and other onboard systems. This wider context helps determine whether a visible concern appears isolated or forms part of a broader pattern that needs investigation.',
        'A survey does not make every concealed connection visible and does not replace specialist electrical testing where the findings justify it. It does, however, help identify observations, limitations and recommendations before the buyer commits to the purchase.',
      ],
    },
  ],
  keyPoint: {
    id: 'electrical-corrosion-key-point',
    title: 'Surveyor’s Key Point',
    body: 'Corrosion often starts with a small visible sign. Record deposits, moisture, heat damage, discolouration or burnt smells, but do not dismantle or touch unfamiliar electrical equipment. The finding should be investigated in the context of the yacht’s wider electrical installation.',
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
      label: 'Do Not Ignore Yacht Seacocks',
      href: '/yacht-survey-tips/check-yacht-seacocks',
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
    heading: 'Buying or Insuring a Yacht?',
    body: 'All Yacht Service provides independent pre-purchase and insurance condition surveys to help clients understand visible concerns across a yacht’s accessible systems before making important decisions.',
    links: [
      {
        label: 'Request a Yacht Survey Quote',
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
    finalCtaEyebrow: 'Independent survey support',
  },
  card: {
    title: 'Electrical Corrosion on Yachts: What to Look For',
    description:
      'Small deposits, moisture or heat damage around accessible electrical connections can indicate a concern that deserves investigation.',
    href: '/yacht-survey-tips/yacht-electrical-corrosion',
    category: 'Electrical Systems · Corrosion & Water Ingress',
    status: 'Published',
    publicationDate: '25 August 2026',
    publicationDateTime: '2026-08-25',
    readingTime: '5 minutes',
    image: articleImage,
  } satisfies SurveyTipsArticle,
} as const satisfies SurveyTipArticlePageData;
