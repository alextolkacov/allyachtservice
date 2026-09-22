import type {
  SurveyTipArticlePageData,
  SurveyTipsArticle,
  SurveyTipsImage,
} from './types';

const articleImage = {
  src: '/images/yacht-survey-tips/yacht-engine-mounts.png',
  alt: 'All Yacht Service infographic showing engine-mount warning signs and an engine-off visual check for yacht buyers',
  width: 1092,
  height: 1440,
} as const satisfies SurveyTipsImage;

export const yachtEngineMountsArticle = {
  sourceUrl:
    'https://www.allyachtservice.com/yacht-survey-tips/yacht-engine-mounts',
  title: 'Engine Mounts on Yachts: Warning Signs Buyers Should Look For',
  seoTitle: 'Yacht Engine Mounts: Warning Signs for Buyers | All Yacht Service',
  description:
    'Engine mounts support the engine and help limit transmitted vibration. Learn which visible signs may warrant closer investigation before buying a yacht, and what a safe visual check can—and cannot—tell you.',
  metaDescription:
    'Learn how to spot visible yacht engine-mount deterioration, vibration and loose hardware before purchase, without mistaking observations for a diagnosis.',
  slug: 'yacht-engine-mounts',
  pathname: '/yacht-survey-tips/yacht-engine-mounts',
  category: 'Pre-Purchase Checks · Machinery & Propulsion',
  status: 'Published',
  publicationDate: '22 September 2026',
  publicationDateTime: '2026-09-22',
  modifiedDateTime: '2026-09-22',
  readingTime: '5-minute read',
  timeRequired: 'PT5M',
  standfirst:
    'Engine mounts are small parts of a yacht’s machinery installation, but their condition can matter well beyond comfort. Here is what a buyer can observe safely—and when a specialist should look further.',
  image: articleImage,
  imageCaption:
    'The original Survey Tip infographic highlights visible warning signs. The image is a guide to observations, not a diagnosis of this or any other installation.',
  socialImageAlt:
    'All Yacht Service guide to yacht engine-mount warning signs and a safe visual check before purchase',
  author: {
    name: 'Aleksandrs Tolkacovs',
    professionalDescription:
      'IIMS-Certified Yacht and Small Craft Marine Surveyor',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Yacht Survey Tips', href: '/yacht-survey-tips' },
    {
      label: 'Yacht Engine Mounts',
      href: '/yacht-survey-tips/yacht-engine-mounts',
    },
  ],
  introduction: {
    id: 'engine-mounts-introduction',
    label: 'Introduction',
    paragraphs: [
      'Engine mounts are easy to overlook during a yacht viewing. Their job is to support the engine, reduce vibration transmitted into the boat and help keep the engine installation in its intended position. As rubber elements age or become contaminated, their visible condition can change.',
      'A vibration, a cracked mount or an uneven-looking installation is a reason to ask questions—not proof of a particular alignment or gearbox defect. The observations below help a buyer decide when further investigation is worthwhile.',
    ],
  },
  sections: [
    {
      id: 'what-engine-mounts-do',
      title: 'What Do Yacht Engine Mounts Do?',
      paragraphs: [
        'Marine engine mounts support the engine and help isolate vibration from the hull. They also contribute to keeping the engine in its intended position relative to the gearbox and shaft. Rubber elements can harden, crack, compress or deteriorate, while oil or fuel contamination may affect their condition.',
        'A mount can look tidy without proving that the engine is correctly aligned. Conversely, one visible concern does not establish the condition of the whole propulsion system.',
      ],
    },
    {
      id: 'engine-mount-warning-signs',
      title: 'Warning Signs Worth Looking For',
      paragraphs: [
        'Compare the accessible mounts and note both their physical condition and any symptoms reported or observed during an agreed demonstration:',
      ],
      items: [
        'Excessive or increasing vibration',
        'Cracked, compressed, deformed or deteriorated rubber elements',
        'Oil or fuel contamination around the mounts',
        'Loose or damaged mounting fasteners',
        'An engine that appears unevenly supported',
        'Unusual vibration or noises when engaging gear',
      ],
      closingParagraphs: [
        'These signs deserve context. Visible condition alone cannot establish the mount’s full mechanical condition or the cause of vibration.',
      ],
    },
    {
      id: 'why-deterioration-matters',
      title: 'Why Deterioration Can Matter Beyond Comfort',
      paragraphs: [
        'A deteriorated mount may allow unwanted movement or contribute to an installation being out of its intended position. Depending on the installation, movement or incorrect alignment may place additional load on the shaft, coupling, gearbox, bearings or stern gear.',
        'That is a reason to investigate, not a conclusion that those components are damaged. The cause and extent of any problem require appropriate examination.',
      ],
    },
    {
      id: 'one-safe-visual-check',
      title: 'One Safe Visual Check With the Engine Off',
      paragraphs: [
        'With the engine switched off, visually inspect only the mounts that are safely accessible. Compare them with one another for cracking, deformation, compression, contamination, obviously loose or damaged hardware, and obvious differences in how they support the engine.',
        'Make a note or take photographs if permitted, then ask for the maintenance history. Do not touch moving machinery or carry out an inspection while the engine is running.',
      ],
    },
    {
      id: 'leave-adjustments-to-qualified-people',
      title: 'What Not to Adjust Yourself',
      paragraphs: [
        'Do not loosen or tighten mounts, change their height, move the engine, disconnect the coupling or attempt to alter shaft alignment during a viewing. Do not attempt to adjust alignment or tighten mounts unless you have the appropriate technical knowledge and authority to do so.',
        'An apparently simple adjustment can change the installation and obscure the condition that needed assessment. Record the concern and arrange a suitable professional check instead.',
      ],
    },
    {
      id: 'pre-purchase-survey-scope',
      title: 'What a Pre-Purchase Yacht Survey Can Assess',
      paragraphs: [
        'Within the agreed scope and subject to access, a pre-purchase survey can record the visible condition of the engine installation, accessible mounts and surrounding propulsion components. The surveyor can consider those observations alongside available history and other visible signs, and identify where further investigation is appropriate.',
        'A general survey does not automatically include internal engine or gearbox diagnostics, dismantling, precision shaft-alignment measurements, vibration analysis, oil analysis or manufacturer diagnostic testing. Those require a separately agreed scope or an appropriate specialist.',
      ],
    },
    {
      id: 'when-to-seek-marine-engineer',
      title: 'When Further Mechanical Investigation May Be Appropriate',
      paragraphs: [
        'If mounts appear deteriorated, contaminated or uneven, fasteners are visibly compromised, or vibration or noises are reported when engaging gear, ask for an explanation and relevant maintenance records. A qualified marine engineer or other appropriate specialist may need to examine the installation and determine whether testing or adjustment is required.',
        'Do not accept a clean-looking mount as proof of correct alignment, or infer damage elsewhere from appearance alone. The next step should match the symptoms, access and agreed survey scope.',
      ],
    },
  ],
  keyPoint: {
    id: 'engine-mounts-key-point',
    title: 'Surveyor’s Key Point',
    body: 'Engine-mount condition is a useful clue, not a stand-alone diagnosis. Compare accessible mounts with the engine off, note visible differences and symptoms, and seek qualified mechanical investigation when the evidence calls for it.',
  },
  relatedServices: [
    {
      title: 'Pre-Purchase Yacht Survey',
      description:
        'An independent assessment of accessible yacht structures, systems and machinery before purchase, within an agreed scope.',
      href: '/pre-purchase-survey',
    },
    {
      title: 'Insurance Condition Survey',
      description:
        'An independent condition assessment and report for an insurer’s stated purpose and agreed scope.',
      href: '/insurance-survey',
    },
  ],
  relatedArticles: [
    {
      label: 'Check the Bilge Before You Trust the Boat',
      href: '/yacht-survey-tips/check-yacht-bilge',
    },
    {
      label: 'Electrical Corrosion on Yachts',
      href: '/yacht-survey-tips/yacht-electrical-corrosion',
    },
    { label: 'All Yacht Survey Tips', href: '/yacht-survey-tips' },
  ],
  finalCta: {
    heading: 'Buying a Used Yacht?',
    body: 'An independent pre-purchase survey can record accessible engine-mount and propulsion observations within the agreed scope, explain limitations and recommend specialist investigation where appropriate.',
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
    title: 'Engine Mounts: Small Components, Expensive Consequences',
    description:
      'See which visible engine-mount warning signs buyers can check safely and when vibration or deterioration warrants a closer look.',
    href: '/yacht-survey-tips/yacht-engine-mounts',
    category: 'Pre-Purchase Checks · Machinery & Propulsion',
    status: 'Published',
    publicationDate: '22 September 2026',
    publicationDateTime: '2026-09-22',
    readingTime: '5 minutes',
    image: articleImage,
  } satisfies SurveyTipsArticle,
} as const satisfies SurveyTipArticlePageData;
