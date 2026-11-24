import type {
  SurveyTipArticlePageData,
  SurveyTipsArticle,
  SurveyTipsImage,
} from './types';

const articleImage = {
  src: '/images/yacht-survey-tips/yacht-winch-checks-before-purchase.png',
  alt: 'All Yacht Service survey tip graphic with a photograph of a sailing yacht winch and four inspection prompts',
  width: 1080,
  height: 1350,
} as const satisfies SurveyTipsImage;

export const yachtWinchChecksBeforePurchaseArticle = {
  sourceUrl:
    'https://www.allyachtservice.com/yacht-survey-tips/yacht-winch-checks-before-purchase',
  title: 'Yacht Winch Checks Before Purchase: Look Beyond the Drum',
  seoTitle: 'Used Yacht Winch Checks: Operation, Pawls and Deck Mounting',
  description:
    'A sail winch that spins by hand may still need service. Learn what to ask to inspect and demonstrate before buying a sailing yacht.',
  metaDescription:
    'A sail winch that spins by hand may still need service. Learn what to ask to inspect and demonstrate before buying a sailing yacht.',
  slug: 'yacht-winch-checks-before-purchase',
  pathname: '/yacht-survey-tips/yacht-winch-checks-before-purchase',
  category: 'Pre-Purchase Checks · Deck Hardware',
  status: 'Published',
  publicationDate: '24 November 2026',
  publicationDateTime: '2026-11-24',
  modifiedDateTime: '2026-11-24',
  readingTime: '5-minute read',
  timeRequired: 'PT5M',
  standfirst:
    'A smooth-looking sail winch still deserves a proper check. Hand-spinning alone cannot confirm the condition of its internal parts or behaviour under load.',
  image: articleImage,
  imageCaption:
    'Graphic using a cropped photograph by Clément Proust / Pexels. Illustrative only; it does not show a defect identified by All Yacht Service. Photo source and license are linked below.',
  socialImageAlt:
    'Winch Survey Tip infographic with a sail winch photograph and checks for gears, pawls, self-tailer and deck mounting',
  author: {
    name: 'Aleksandrs Tolkacovs',
    professionalDescription:
      'IIMS-Certified Yacht and Small Craft Marine Surveyor',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Yacht Survey Tips', href: '/yacht-survey-tips' },
    {
      label: 'Yacht Winch Checks Before Purchase',
      href: '/yacht-survey-tips/yacht-winch-checks-before-purchase',
    },
  ],
  introduction: {
    id: 'winch-introduction',
    label: 'Introduction',
    paragraphs: [
      'A sail-handling winch can look clean and turn freely at the dock while its service history, internal parts and mounting remain unknown. During a pre-purchase viewing, treat a quick hand spin as an introduction to the equipment, not a complete test.',
      'Ask the seller or broker which winches can be demonstrated and whether service records are available. The inspection should cover each relevant unit, including electric winches where fitted. Agree access and testing in advance so a competent operator can control the lines and keep the yacht safe.',
    ],
  },
  sections: [
    {
      id: 'unloaded-check',
      title: 'What Can an Unloaded Check Tell You?',
      paragraphs: [
        'With the yacht secure and the line under control, a competent person can demonstrate normal manual operation. Observe whether the drum turns smoothly in its intended direction, whether the ratchet sounds and feels consistent, and whether the handle fits and engages correctly. Unusual stiffness, grinding, skipping, excess play or a handle that will not seat properly deserve investigation.',
        'An unloaded check has limits. It cannot establish the condition of every pawl, spring, bearing or gear, or show how the winch will behave under every sailing load. Lewmar’s electric/hydraulic winch manual describes stripping, cleaning and checking internal components as servicing; that is separate from a dockside viewing.',
      ],
    },
    {
      id: 'pawls-ratchet',
      title: 'Why Do Pawls and the Ratchet Matter?',
      paragraphs: [
        'Pawls and their springs help the winch hold and transfer load through its ratchet mechanism. If engagement seems uncertain or the drum slips unexpectedly, stop the demonstration and ask for a qualified assessment. Do not try to prove a fault by applying an uncontrolled load.',
        'Lewmar’s published maintenance instructions call for checking internal parts and lightly oiling pawls, while keeping grease away from them. Procedures vary by make and model, so follow the instructions for the winch actually installed. Dismantling and servicing are not implied parts of a viewing or ordinary survey.',
      ],
    },
    {
      id: 'self-tailer-line',
      title: 'What Should You Look For at the Self-Tailer and Line?',
      paragraphs: [
        'Where a self-tailing mechanism is fitted, check its visible jaws and the line that runs through them. Notice cracked or damaged components, heavy wear, poor grip and chafe where the line enters or leaves the winch. The wrong line size or a line in poor condition can affect a demonstration; do not blame the winch automatically for every handling problem.',
        'Ask whether the winch has been serviced and whether self-tailing parts or lines have been replaced. Records give maintenance context; they do not confirm present condition.',
      ],
    },
    {
      id: 'base-deck',
      title: 'Why Inspect the Base and Surrounding Deck?',
      paragraphs: [
        'Look around the winch base for visible movement, cracked sealant, staining, damaged fasteners or changes in the adjacent deck surface. If the underside is accessible, the surveyor may examine the mounting arrangement and signs of water entry. A mark at the base is a clue requiring context, not proof by itself of a loose winch or damaged structure.',
        'The supporting deck matters because the winch transmits line loads into its mounting. A pre-purchase survey can describe accessible observations and recommend more focused inspection if warranted. Do not loosen fasteners or remove the winch without permission and a plan for correct reassembly and sealing.',
      ],
    },
    {
      id: 'electric-winches',
      title: 'What About Electric Winches?',
      paragraphs: [
        'An electric winch adds a motor, controls and electrical protection to the mechanical winch. Ask for a normal demonstration by someone familiar with the equipment. Observe the control response and any unusual noise or movement while keeping people and loose lines clear. A short successful run shows only how the system behaved during that test.',
        'If the electrical installation is inaccessible, record that limit. A specialist may be needed to assess suspected motor, wiring or protection faults. Never use powered operation to force a jammed or slipping winch.',
      ],
    },
    {
      id: 'cannot-test',
      title: 'If a Winch Cannot Be Tested',
      paragraphs: [
        'Note exactly what was and was not observed: which winch, whether it turned by hand, whether a line was used, and whether powered operation was demonstrated. Ask for service invoices or manuals and consider a later controlled demonstration or specialist service inspection before purchase. Do not treat an untested winch as either sound or defective.',
      ],
    },
    {
      id: 'winch-faq',
      title: 'Frequently Asked Questions',
      paragraphs: [],
      subsections: [
        {
          id: 'free-turning',
          title: 'Does a Winch Turning Freely Mean It Is in Good Condition?',
          paragraphs: [
            'No. It is one observation. Internal parts and behaviour under load may still require proper servicing or controlled testing.',
          ],
        },
        {
          id: 'dismantle-viewing',
          title: 'Should a Buyer Dismantle a Winch During the Viewing?',
          paragraphs: [
            'No. Dismantling should be agreed with the owner and carried out by someone competent, using the correct model instructions and allowing for proper reassembly.',
          ],
        },
        {
          id: 'ratchet-slip',
          title: 'What if the Ratchet Seems to Slip?',
          paragraphs: [
            'Stop the demonstration and arrange a qualified assessment. Do not add load to reproduce the behaviour.',
          ],
        },
        {
          id: 'electric-scope',
          title: 'Can a Survey Include Electric Winches?',
          paragraphs: [
            'Yes, within the agreed scope and with safe access and a competent operator. The report should state what was demonstrated and what remained inaccessible.',
          ],
        },
      ],
    },
  ],
  keyPoint: {
    id: 'winch-key-point',
    title: 'Surveyor’s Key Point',
    body: 'A tidy drum is only the visible part of the winch. Check operation, the self-tailer, line and mounting, then use service history and any concerns to decide whether further inspection is needed. An independent survey should make the limits of access and testing clear.',
  },
  authorBio: {
    id: 'winch-author',
    title: 'About the Author',
    paragraphs: [
      'Aleksandrs Tolkacovs is an IIMS-Certified Yacht and Small Craft Marine Surveyor and licensed captain. He has more than 20 years of engineering, quality-assurance and management experience, alongside practical yacht-operation experience.',
    ],
  },
  sources: {
    id: 'winch-sources',
    title: 'Sources and Further Reading',
    links: [
      {
        label:
          'Lewmar — Ocean & EVO Electric/Hydraulic Winches: Installation, Operation and Servicing Manual (B2303 Issue 14)',
        href: 'https://www.lewmar.com/mst_attachment/attachment/click/attachment_id/64/',
      },
      {
        label:
          'Lewmar — EVO Self-Tailing Winch Product and Maintenance Information',
        href: 'https://www.lewmar.com/evo-self-tailing-winch',
      },
      {
        label: 'Clément Proust / Pexels — Original Photograph',
        href: 'https://www.pexels.com/photo/boat-rope-in-close-up-shot-14578355/',
      },
      {
        label: 'Pexels — Image License',
        href: 'https://www.pexels.com/license/',
      },
    ],
  },
  relatedServices: [
    {
      title: 'Pre-Purchase Yacht Survey',
      description:
        'Independent inspection before buying, with winch access and a safe demonstration when agreed and practical.',
      href: '/pre-purchase-survey',
    },
  ],
  relatedArticles: [
    {
      label: 'Standing Rigging Warning Signs',
      href: '/yacht-survey-tips/standing-rigging-warning-signs',
    },
    { label: 'All Yacht Survey Tips', href: '/yacht-survey-tips' },
  ],
  finalCta: {
    heading: 'Planning to Buy a Yacht in Spain or the Mediterranean?',
    body: 'All Yacht Service provides independent pre-purchase yacht surveys. Access to sail-handling equipment and a safe demonstration can be included in the agreed survey scope.',
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
    title: 'Yacht Winch Checks: Look Beyond the Drum',
    description:
      'A smooth hand spin cannot reveal every winch fault. Learn what to check in the mechanism, line, self-tailer and deck mounting.',
    href: '/yacht-survey-tips/yacht-winch-checks-before-purchase',
    category: 'Pre-Purchase Checks · Deck Hardware',
    status: 'Published',
    publicationDate: '24 November 2026',
    publicationDateTime: '2026-11-24',
    readingTime: '5 minutes',
    image: articleImage,
  } satisfies SurveyTipsArticle,
} as const satisfies SurveyTipArticlePageData;
