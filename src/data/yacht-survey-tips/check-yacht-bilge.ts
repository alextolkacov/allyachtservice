import type {
  SurveyTipArticlePageData,
  SurveyTipsArticle,
  SurveyTipsImage,
} from './types';

const articleImage = {
  src: '/images/yacht-survey-tips/check-yacht-bilge.png',
  alt: 'Survey tip graphic explaining visible bilge warning signs and a safe check for used-yacht buyers',
  width: 1122,
  height: 1402,
} as const satisfies SurveyTipsImage;

export const checkYachtBilgeArticle = {
  sourceUrl:
    'https://www.allyachtservice.com/yacht-survey-tips/check-yacht-bilge',
  title:
    'Check the Bilge Before You Trust the Boat: What Yacht Buyers Should Look For',
  seoTitle: 'Yacht Bilge Checks for Used-Boat Buyers | All Yacht Service',
  description:
    'The bilge can reveal unexplained water, fluid residue, corrosion and maintenance concerns that may not be visible in a clean cabin. Learn what used-yacht buyers can check safely.',
  metaDescription:
    'Learn what standing water, fluid residue, corrosion and bilge-pump condition may reveal when inspecting a used yacht before purchase.',
  slug: 'check-yacht-bilge',
  pathname: '/yacht-survey-tips/check-yacht-bilge',
  category: 'Pre-Purchase Checks · Bilge & Onboard Systems',
  status: 'Published',
  publicationDate: '8 September 2026',
  publicationDateTime: '2026-09-08',
  modifiedDateTime: '2026-09-08',
  readingTime: '5-minute read',
  timeRequired: 'PT5M',
  standfirst:
    'A clean cabin does not mean a dry boat. Accessible bilge compartments can reveal standing water, fluid residue, corrosion and other visible evidence that deserves context before a used-yacht purchase.',
  image: articleImage,
  imageCaption:
    'Standing water, oil or fuel residue, corrosion and neglected bilge pumps are visible observations that may warrant further investigation.',
  socialImageAlt:
    'All Yacht Service survey tip about checking a yacht bilge before purchase',
  author: {
    name: 'Aleksandrs Tolkacovs',
    professionalDescription:
      'IIMS-Certified Yacht and Small Craft Marine Surveyor',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Yacht Survey Tips', href: '/yacht-survey-tips' },
    {
      label: 'Check the Bilge',
      href: '/yacht-survey-tips/check-yacht-bilge',
    },
  ],
  introduction: {
    id: 'bilge-introduction',
    label: 'Introduction',
    paragraphs: [
      'A yacht can have a clean, well-presented cabin while accessible spaces below the floorboards tell a different story. The bilge can collect water or other fluids and may show how drainage, machinery spaces and routine maintenance have been managed.',
      'Standing water, oil residue, rust staining, unpleasant odours or evidence of frequent bilge-pump operation may point to a condition that needs explanation. These are observations, not diagnoses, and each should be considered alongside the vessel’s systems, history and accessibility.',
      'A cautious visual check during a viewing can help a buyer identify questions to ask. It cannot prove that the yacht has no leaks or reveal every concealed problem.',
    ],
  },
  sections: [
    {
      id: 'why-bilge-condition-matters',
      title: 'Why the Bilge Can Reveal Maintenance Problems',
      paragraphs: [
        'Accessible bilge areas may contain evidence that is not obvious in the accommodation. Their condition can show whether water drains as expected, whether fluid contamination is present and whether pumps, hoses and connections appear to have received routine attention.',
        'A dry, clean bilge is a useful observation, but it does not prove that every system is leak-free. Likewise, some water is not automatically evidence of a serious defect. The condition needs to be understood in context.',
      ],
    },
    {
      id: 'bilge-warning-signs',
      title: 'Warning Signs to Look For',
      paragraphs: [
        'When the compartments are safely accessible, relevant observations include:',
      ],
      items: [
        'Water sitting in the bilge, especially where its source is unexplained',
        'Oil, diesel or coolant residue',
        'Rust staining around pumps, fittings or fasteners',
        'Loose, damaged or poorly secured hoses',
        'Corroded electrical connections',
        'Bilge pumps that appear neglected or heavily fouled',
        'Evidence that an automatic pump may have been running frequently',
        'Unpleasant odours or visible contamination',
      ],
      closingParagraphs: [
        'A stain, odour or residue can identify an area that deserves closer attention, but it does not confirm the source or the extent of a problem by itself.',
      ],
      note: 'Record visible evidence and ask for an explanation. Do not turn one observation into a diagnosis without further investigation.',
    },
    {
      id: 'why-unexplained-water-matters',
      title: 'Why Unexplained Water Matters',
      paragraphs: [
        'A small amount of water in the bilge is not automatically a serious defect. The more important question is whether the source is expected, explained and consistent with the vessel’s systems and recent use.',
        'Water with no clear explanation may warrant further investigation, particularly where it is accompanied by staining, contamination, corrosion, an odour or indications that a pump has operated repeatedly.',
      ],
    },
    {
      id: 'possible-bilge-water-sources',
      title: 'Possible Sources That May Need Investigation',
      paragraphs: [
        'Depending on the yacht and the circumstances, possible sources can include:',
      ],
      items: [
        'Shaft-seal leakage',
        'Plumbing connections',
        'Deck fittings',
        'Tanks',
        'Cooling systems',
        'Rainwater ingress',
        'Condensation',
      ],
      closingParagraphs: [
        'This list provides possible lines of enquiry, not a diagnosis. Establishing the source may require access, monitoring or specialist testing beyond an ordinary viewing.',
      ],
    },
    {
      id: 'safe-bilge-visual-check',
      title: 'One Safe Visual Check',
      paragraphs: [
        'During a viewing, open only the bilge compartments that are already accessible and inspect them by looking, smelling and observing. Pay attention to unexplained oil, fuel or coolant, excessive standing water, obvious corrosion and the visible condition of accessible pumps, hoses and connections.',
        'If the yacht has an automatic bilge pump, ask the owner or broker when it last operated, whether any leaks are known and whether frequent operation has been observed. The answers should be considered together with the visible condition.',
      ],
      note: 'Keep the check observational. Do not dismantle, bypass or deliberately activate equipment as a viewing test.',
    },
    {
      id: 'what-not-to-disturb',
      title: 'What Not to Disconnect or Disturb',
      paragraphs: [
        'Do not disconnect pumps, electrical wiring or float switches unless you are qualified and authorised to do so. Do not open fuel or cooling systems during an informal viewing.',
        'Interfering with safety or electrical equipment can create a new problem and may make the original condition harder to assess. Where operation or testing is needed, it should be agreed and carried out by an appropriate person.',
      ],
    },
    {
      id: 'bilge-pre-purchase-survey',
      title: 'What a Pre-Purchase Yacht Survey Can Assess',
      paragraphs: [
        'During a pre-purchase yacht survey, accessible bilge areas and associated visible pumps, hoses, connections and surrounding structure may form part of the wider condition assessment. Visible findings, explanations and access limitations can be recorded in context.',
        'Not every bilge compartment is always accessible, and a standard survey cannot guarantee that every leak will be traced. Unexplained findings may justify recommending further investigation by an engine, electrical, plumbing, tank or other appropriate specialist.',
      ],
    },
  ],
  keyPoint: {
    id: 'bilge-key-point',
    title: 'Surveyor’s Key Point',
    body: 'Water in the bilge is not automatically a serious defect, and a dry bilge does not prove that a yacht has no leaks. What matters is whether the condition has a credible explanation and whether the visible evidence is consistent with the vessel’s systems, history and maintenance.',
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
      label: 'Do Not Ignore Seacocks',
      href: '/yacht-survey-tips/check-yacht-seacocks',
    },
    {
      label: 'Electrical Corrosion on Yachts',
      href: '/yacht-survey-tips/yacht-electrical-corrosion',
    },
    {
      label: 'All Yacht Survey Tips',
      href: '/yacht-survey-tips',
    },
  ],
  finalCta: {
    heading: 'Buying a Used Yacht?',
    body: 'An independent pre-purchase yacht survey can assess accessible bilge spaces and associated visible systems within the wider condition of the yacht, document limitations and recommend further investigation where appropriate.',
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
    title: 'Check the Bilge Before You Trust the Boat',
    description:
      'The bilge can reveal unexplained water, fluid residue, corrosion and maintenance problems that may not be visible in a clean cabin.',
    href: '/yacht-survey-tips/check-yacht-bilge',
    category: 'Pre-Purchase Checks · Bilge & Onboard Systems',
    status: 'Published',
    publicationDate: '8 September 2026',
    publicationDateTime: '2026-09-08',
    readingTime: '5 minutes',
    image: articleImage,
  } satisfies SurveyTipsArticle,
} as const satisfies SurveyTipArticlePageData;
