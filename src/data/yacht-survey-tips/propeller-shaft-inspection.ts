import type {
  SurveyTipArticlePageData,
  SurveyTipsArticle,
  SurveyTipsImage,
} from './types';

const articleImage = {
  src: '/images/yacht-survey-tips/propeller-shaft-inspection.png',
  alt: 'All Yacht Service survey-tip graphic showing a bronze yacht propeller photographed during haul-out',
  width: 1080,
  height: 1350,
} as const satisfies SurveyTipsImage;

export const propellerShaftInspectionArticle = {
  sourceUrl:
    'https://www.allyachtservice.com/yacht-survey-tips/propeller-shaft-inspection',
  title: 'Propeller and Shaft Inspection: What Yacht Buyers Should Check',
  seoTitle: 'Yacht Propeller and Shaft Checks Before Purchase',
  description:
    'Learn what to check around a yacht propeller, shaft, bearing and shaft seal during haul-out and sea trial before buying a used yacht.',
  metaDescription:
    'Learn what to check around a yacht propeller, shaft, bearing and shaft seal during haul-out and sea trial before buying a used yacht.',
  slug: 'propeller-shaft-inspection',
  pathname: '/yacht-survey-tips/propeller-shaft-inspection',
  category: 'Pre-Purchase Checks · Underwater Gear',
  status: 'Published',
  publicationDate: '20 October 2026',
  publicationDateTime: '2026-10-20',
  modifiedDateTime: '2026-10-20',
  readingTime: '6-minute read',
  timeRequired: 'PT6M',
  standfirst:
    'A useful propeller and shaft inspection combines a close look at the underwater gear during haul-out with the accessible inboard installation, maintenance records and behaviour during a properly conducted sea trial.',
  image: articleImage,
  imageCaption:
    'The original Survey Tip graphic includes a real propeller photograph and a visual checklist. It does not establish the condition of any particular drivetrain.',
  socialImageAlt:
    'All Yacht Service infographic on propeller blade damage, shaft wear, bearing play, seals and vibration checks',
  author: {
    name: 'Aleksandrs Tolkacovs',
    professionalDescription:
      'IIMS-Certified Yacht and Small Craft Marine Surveyor',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Yacht Survey Tips', href: '/yacht-survey-tips' },
    {
      label: 'Propeller and Shaft Inspection',
      href: '/yacht-survey-tips/propeller-shaft-inspection',
    },
  ],
  introduction: {
    id: 'propeller-shaft-introduction',
    label: 'Introduction',
    paragraphs: [
      'Small blade damage, trapped line, corrosion, bearing wear or shaft-seal concerns may be easy to miss when each item is viewed on its own. Compare visible findings with records and the yacht’s behaviour under way rather than assigning a cause from appearance alone.',
    ],
  },
  sections: [
    {
      id: 'inspect-out-of-water',
      title: 'Why Inspect the Propeller and Shaft Out of the Water?',
      paragraphs: [
        'The propeller, shaft, external bearing and underwater anodes cannot be assessed properly while hidden below the waterline. Haul-out gives a direct view of blade shape, exposed shaft surfaces, the bearing area and nearby hull fittings.',
        'A nicked blade alongside reported vibration has a different context from an isolated surface mark on a smooth-running system. The aim is to identify evidence that warrants further investigation, not diagnose every possible cause by sight.',
      ],
    },
    {
      id: 'visible-propeller-damage',
      title: 'What Visible Propeller Damage Should a Buyer Look For?',
      paragraphs: [
        'Inspect every blade from several angles and compare it with the others. Relevant observations include:',
      ],
      items: [
        'Chipped, dented, cracked or distorted blade edges; a blade with a different apparent pitch or angle',
        'Pitting, erosion, cavitation damage, corrosion or widespread roughness',
        'Damaged paint or protective coating and loose folding or feathering components',
        'Damage around the hub, retaining hardware or keyway, and signs of grinding, welding or earlier repair',
      ],
      closingParagraphs: [
        'Propeller geometry and balance matter. Volvo Penta explains that precise balancing helps minimise vibration and driveline wear, and that incorrect folding-blade assembly can cause imbalance. Symmetry, correct blade movement and repair records therefore deserve attention.',
        'A small mark does not automatically make a propeller unserviceable. An apparently bent, cracked, badly eroded or repaired blade may need measurement, testing and rebalancing by a propeller specialist.',
      ],
    },
    {
      id: 'line-around-shaft',
      title: 'Why Is Fishing Line Around the Shaft a Concern?',
      paragraphs: [
        'Fishing line, netting or other debris can wind tightly around the shaft behind the propeller hub. Thin strands may be hard to see until the area is cleaned. Wrapped line can damage a shaft seal or cause heat and wear nearby; inspect behind the hub, along the exposed shaft and at the accessible inboard seal for related leakage or damage.',
        'Do not pull or cut debris, or rotate machinery, without the owner’s permission and a safe isolation procedure. Removal may release water, expose sharp material or disturb evidence a technician should examine.',
      ],
    },
    {
      id: 'shaft-and-bearing',
      title: 'How Are the Shaft and External Bearing Checked?',
      paragraphs: [
        'Examine the exposed shaft for scoring, pitting, corrosion, impact marks and unusual polishing, especially near the bearing and seal. Local wear may show contact with another surface.',
        'With the yacht safely supported and machinery isolated, a trained surveyor may check for movement at the accessible external bearing. Play must be interpreted against the installation, shaft diameter and maker’s guidance. There is no useful universal clearance for every yacht.',
        'Visible wear cannot prove shaft straightness. Run-out, coupling condition and engine alignment may require measurements by a suitably equipped technician. A propeller concern should be considered alongside the inboard installation.',
      ],
    },
    {
      id: 'inboard-shaft-seal',
      title: 'What Should Be Checked Around the Inboard Shaft Seal?',
      paragraphs: [
        'Inspect the accessible seal, stern tube area, hose connections, clamps and bilge below for active drips, salt deposits, water tracks, corrosion, damaged rubber or signs of repeated adjustment.',
        'Seal requirements depend on the manufacturer and model. PYI’s PSS instructions, for example, call for bellows inspection and explain how deterioration, contamination or inadequate compression can lead to leakage. Identify the installed equipment and consult its own manual; a dry bilge at one viewing does not prove the seal stays dry under way.',
      ],
    },
    {
      id: 'anodes-and-corrosion',
      title: 'What Do Anodes and Corrosion Patterns Reveal?',
      paragraphs: [
        'Check whether shaft, propeller or drive anodes are present, secure and evenly consumed. An almost spent anode may no longer protect adequately. No apparent consumption may raise questions about contact, material choice or suitability for the yacht’s operating water.',
        'Consider corrosion across the underwater installation. Metals, coatings, bonding and shore-power history all affect observations. Anode appearance is evidence to interpret, not an electrolysis diagnosis; unusual or severe corrosion may call for electrical testing.',
      ],
    },
    {
      id: 'sea-trial',
      title: 'What Should a Sea Trial Add?',
      paragraphs: [
        'During a properly conducted trial, note vibration, noise and changes as engine speed rises. Observe ahead and astern operation where safe and appropriate, the expected operating range and drivetrain behaviour during acceleration and steady running.',
        'Vibration has many possible sources: propeller damage or fouling, alignment, bearing wear, engine mounts, coupling condition and installation geometry. Record and investigate the symptom instead of attributing it to one part without supporting evidence.',
      ],
    },
    {
      id: 'records-to-request',
      title: 'Which Records Should the Buyer Request?',
      paragraphs: [
        'Ask the seller or broker for records explaining the propulsion system’s history:',
      ],
      items: [
        'Grounding, impact, rope-strike or entanglement incidents',
        'Propeller removal, repair, pitch adjustment and balancing',
        'Shaft straightness checks or replacement, coupling work and alignment reports',
        'External bearing and shaft-seal installation, inspection or replacement',
        'Anode replacements, vibration complaints, invoices and earlier survey findings',
      ],
      closingParagraphs: [
        'Compare dates, engine hours, component details and invoices. A gap or inconsistency is a reason to ask further questions, not proof of a defect.',
      ],
    },
    {
      id: 'visual-inspection-limits',
      title: 'Can a Visual Inspection Confirm the Drivetrain Is Sound?',
      paragraphs: [
        'No. A visual check can identify damage, wear, leakage, corrosion and repair evidence, but cannot alone confirm propeller balance, shaft straightness, precise alignment, hidden bearing condition or loaded performance.',
        'A stronger pre-purchase picture combines haul-out, accessible inboard inspection, records and sea-trial behaviour. If the evidence conflicts, specialist testing may be appropriate before a purchase decision.',
      ],
    },
    {
      id: 'propeller-shaft-faq',
      title: 'Frequently Asked Questions',
      paragraphs: [],
      subsections: [
        {
          id: 'damaged-propeller-vibration',
          title: 'Does a Damaged Propeller Always Cause Vibration?',
          paragraphs: [
            'Not necessarily. The effect depends on the type and extent of damage, propeller design, speed and the rest of the drivetrain. Visible damage together with unusual vibration is stronger evidence for investigation than either sign alone.',
          ],
        },
        {
          id: 'checking-bearing-play',
          title: 'Can Bearing Play Be Checked by Moving the Propeller?',
          paragraphs: [
            'A trained person may check for movement when the yacht is safely ashore and machinery is isolated. Compare the result with installation and manufacturer guidance; do not force the shaft or apply a generic clearance figure.',
          ],
        },
        {
          id: 'sea-trial-before-purchase',
          title: 'Should a Sea Trial Be Completed Before Buying?',
          paragraphs: [
            'Where practical and within the agreed scope, a sea trial helps assess propulsion, steering, vibration and noise in operation. It complements static and haul-out inspections.',
          ],
        },
        {
          id: 'suspected-shaft-or-propeller-damage',
          title:
            'Who Should Inspect a Suspected Bent Shaft or Damaged Propeller?',
          paragraphs: [
            'A marine engineer or propeller specialist can carry out measurements, non-destructive testing, straightness checks and balancing when the survey evidence justifies it.',
          ],
        },
      ],
    },
  ],
  keyPoint: {
    id: 'propeller-shaft-key-point',
    title: 'Surveyor’s Key Point',
    body: 'Do not stop at the blades. Follow the running gear from propeller hub to shaft, external bearing, seal and coupling, then compare physical condition with records and sea-trial behaviour. Small clues become meaningful when considered together.',
  },
  authorBio: {
    id: 'propeller-shaft-author',
    title: 'About the Author',
    paragraphs: [
      'Aleksandrs Tolkacovs is an IIMS-Certified Yacht and Small Craft Marine Surveyor, licensed captain and founder of All Yacht Service. His work draws on more than 20 years of experience in engineering, quality assurance, yacht operation and management.',
    ],
  },
  sources: {
    id: 'propeller-shaft-sources',
    title: 'Sources and Further Reading',
    links: [
      {
        label: 'Volvo Penta Propeller Guide',
        href: 'https://www.volvopenta.com/-/media/volvopenta/parts/propellers/documents/propeller-guide.pdf',
      },
      {
        label: 'Volvo Penta Marine Maintenance Parts and Anodes',
        href: 'https://www.volvopenta.com/en-us/marine/parts/maintenance-parts/',
      },
      {
        label: 'PYI PSS Type B Shaft Seal Installation Instructions',
        href: 'https://www.pyiinc.com/downloads/pss-shaft-seal/pss-type-b-installation-instructions.pdf',
      },
    ],
  },
  relatedServices: [
    {
      title: 'Pre-Purchase Yacht Survey',
      description:
        'Independent inspection of accessible yacht systems and equipment before purchase, within an agreed scope.',
      href: '/pre-purchase-survey',
    },
  ],
  relatedArticles: [
    {
      label: 'Engine Mounts: Small Parts, Expensive Consequences',
      href: '/yacht-survey-tips/yacht-engine-mounts',
    },
    {
      label: 'Before the Survey, Ask for the Documents',
      href: '/yacht-survey-tips/documents-before-yacht-survey',
    },
    { label: 'All Yacht Survey Tips', href: '/yacht-survey-tips' },
  ],
  finalCta: {
    heading: 'Planning to Buy a Yacht in Spain or the Mediterranean?',
    body: 'All Yacht Service provides independent pre-purchase surveys. Accessible propulsion components can be examined during haul-out and sea trial where included in the agreed scope; concerns may warrant a specialist follow-up.',
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
      {
        label: 'Email info@allyachtservice.com',
        href: 'mailto:info@allyachtservice.com',
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
    title: 'Propeller and Shaft Inspection: What Yacht Buyers Should Check',
    description:
      'What to inspect around the propeller, shaft, bearing and seal during haul-out and sea trial before buying a yacht.',
    href: '/yacht-survey-tips/propeller-shaft-inspection',
    category: 'Pre-Purchase Checks · Underwater Gear',
    status: 'Published',
    publicationDate: '20 October 2026',
    publicationDateTime: '2026-10-20',
    readingTime: '6 minutes',
    image: articleImage,
  } satisfies SurveyTipsArticle,
} as const satisfies SurveyTipArticlePageData;
