import type {
  SurveyTipArticlePageData,
  SurveyTipsArticle,
  SurveyTipsImage,
} from './types';

const articleImage = {
  src: '/images/yacht-survey-tips/yacht-sail-condition-checks.png',
  alt: 'All Yacht Service sail-condition infographic with a close view of stitching and wear on a furling headsail UV cover',
  width: 1080,
  height: 1350,
} as const satisfies SurveyTipsImage;

export const yachtSailConditionChecksArticle = {
  sourceUrl:
    'https://www.allyachtservice.com/yacht-survey-tips/yacht-sail-condition-checks',
  title: 'Yacht Sail Condition: What Buyers Should Check Before Purchase',
  seoTitle: 'Yacht Sail Condition Checks for Buyers | All Yacht Service',
  description:
    'A practical guide to checking sail inventory, stitching, UV protection, chafe, fittings and flying shape before buying a used sailing yacht.',
  metaDescription:
    'Learn how to inspect yacht sails for UV damage, failed stitching, chafe, repairs and poor shape before buying a used sailing yacht.',
  slug: 'yacht-sail-condition-checks',
  pathname: '/yacht-survey-tips/yacht-sail-condition-checks',
  category: 'Pre-Purchase Checks · Rigging & Sails',
  status: 'Published',
  publicationDate: '13 October 2026',
  publicationDateTime: '2026-10-13',
  modifiedDateTime: '2026-10-13',
  readingTime: '6-minute read',
  timeRequired: 'PT6M',
  standfirst:
    'A tidy sail cover or neatly furled genoa tells you little about the sail hidden inside. Before buying a sailing yacht, identify the sails, examine accessible fabric and fittings, and understand what could not be inspected.',
  image: articleImage,
  imageCaption:
    'The original Survey Tip infographic illustrates sail stitching, UV-cover wear and areas worth checking. Its checklist is a starting point, not a diagnosis of any particular sail.',
  socialImageAlt:
    'All Yacht Service infographic on sail stitching, UV covers, chafe and other checks for yacht buyers',
  author: {
    name: 'Aleksandrs Tolkacovs',
    professionalDescription:
      'IIMS-Certified Yacht and Small Craft Marine Surveyor',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Yacht Survey Tips', href: '/yacht-survey-tips' },
    {
      label: 'Yacht Sail Condition',
      href: '/yacht-survey-tips/yacht-sail-condition-checks',
    },
  ],
  introduction: {
    id: 'sail-condition-introduction',
    label: 'Introduction',
    paragraphs: [
      'Yacht sail condition cannot be judged reliably while the sails remain furled or packed in bags. A useful pre-purchase check identifies the working sails, reviews available records and examines both sides where access and conditions permit.',
      'Hoisting a sail, and observing its shape under load during a suitable sea trial, can add information. Neither a clean appearance nor a brief visual check establishes fabric strength, remaining life or performance.',
    ],
  },
  sections: [
    {
      id: 'hidden-wear-in-furled-sails',
      title: 'Why Can Furled Sails Hide Important Wear?',
      paragraphs: [
        'A furled headsail exposes mainly its outer UV cover; seams, panels, chafe and earlier repairs can remain concealed inside the roll. A mainsail cover can likewise hide wear around seams, batten pockets, reef points and the sail body.',
        'The outside still offers clues. A torn or loose UV cover may leave the sailcloth beneath less protected. Stitching can degrade with exposure even when nearby cloth appears clean. Fading alone, however, does not establish the condition of the underlying sail.',
      ],
    },
    {
      id: 'records-to-request',
      title: 'What Sail Records Should a Buyer Request?',
      paragraphs: [
        'Ask the seller or broker for the available sail inventory and identify each sail where possible. Useful context includes:',
      ],
      items: [
        'Sailmaker, approximate age, material and intended use',
        'Service history, sail-loft invoices and known repairs',
        'Storage arrangements and recent photographs under sail',
      ],
      closingParagraphs: [
        'Exposure and use matter as much as a date on an invoice. A sail left furled or uncovered for long periods may have experienced different weathering from one stored dry; frequent passages, charter use or racing may also affect condition. Records provide context, not proof of present serviceability.',
      ],
    },
    {
      id: 'visible-sail-defects',
      title: 'Which Visible Sail Defects Are Worth Checking?',
      paragraphs: [
        'Examine accessible areas on both sides without dismantling or forcing equipment. Note the location and extent of each observation rather than treating one mark as a diagnosis.',
      ],
      subsections: [
        {
          id: 'sail-stitching',
          title: 'Loose or Missing Stitching',
          paragraphs: [
            'Check panel seams, UV covers, leech and foot tapes, reef points and corner reinforcements for broken runs, loose loops, missing thread or fabric beginning to separate. Stitching can fail while the adjacent cloth still looks relatively clean.',
          ],
        },
        {
          id: 'sail-uv-covers',
          title: 'UV-Cover Wear',
          paragraphs: [
            'On a furling headsail, inspect the protective material along the leech and foot for tears, loose edges, failed stitching and weathered areas. These are reasons to investigate the protection and underlying cloth; appearance alone cannot measure fabric strength.',
          ],
        },
        {
          id: 'sail-chafe',
          title: 'Chafe at Contact Points',
          paragraphs: [
            'Look where the sail may touch spreaders, shrouds, stanchions, lifelines, pulpits, the mast or furling hardware. Abrasion, local thinning, broken fibres, holes and patches warrant closer examination of both sides where accessible.',
          ],
        },
        {
          id: 'sail-corners-and-reef-points',
          title: 'Corners, Webbing and Reef Points',
          paragraphs: [
            'The head, tack, clew and reef points carry concentrated loads. Inspect accessible webbing, rings, headboards, reinforcement patches, stitching and reef cringles for distortion, fraying, corrosion or separation.',
          ],
        },
        {
          id: 'sail-luff-and-battens',
          title: 'Luff, Slides and Batten Pockets',
          paragraphs: [
            'Check luff tape, slides or cars, attachments, batten pockets and their closures and ends for missing, loose, worn or damaged parts. Do not operate a suspect track, halyard or furling system merely to complete a checklist.',
          ],
        },
        {
          id: 'sailcloth-and-laminates',
          title: 'Sailcloth, Windows and Laminates',
          paragraphs: [
            'Where fitted, note tears, pinholes, staining, brittle-looking areas, creases, previous repairs, changes in colour or texture, damaged windows or separation between laminate layers. Not every sail has windows or laminated construction, and a visual check cannot establish tensile strength.',
          ],
        },
      ],
    },
    {
      id: 'safe-sail-hoisting',
      title: 'Should a Clean Sail Still Be Hoisted?',
      paragraphs: [
        'Hoisting can reveal material hidden by furling or folding, but it is not an unconditional requirement. Obtain owner or broker permission; use suitable weather and crew; and confirm that the berth or operating area and associated equipment permit safe operation.',
        'Do not force a sail when the furler, halyard, track or other hardware does not work properly. Record the limitation if a sail cannot be opened or hoisted safely.',
      ],
    },
    {
      id: 'assessing-sail-shape',
      title: 'How Can a Buyer Assess Sail Shape?',
      paragraphs: [
        'Shape is most useful to observe when the sail is filled under suitable conditions. Excessive depth, draft set unusually far aft, a hooked or fluttering leech, distorted panels or difficulty obtaining a fair set may warrant a sailmaker’s assessment. An intact-looking sail can still have a poor flying shape.',
        'A dockside hoist may not load the sail enough to judge its working shape. A suitable sea trial may help; recent sailing photographs can add context if no trial is possible, but they cannot prove present condition or performance.',
      ],
    },
    {
      id: 'sail-age-and-service-life',
      title: 'Can Sail Age Predict Remaining Life?',
      paragraphs: [
        'Calendar age is useful context, not a fixed replacement criterion. Material, construction, UV exposure, frequency and type of use, flogging, chafe, storage, maintenance and repairs all affect condition. Two sails made in the same year may be very different today.',
      ],
    },
    {
      id: 'survey-scope-and-limitations',
      title: 'What Can a Pre-Purchase Survey Say About Sails?',
      paragraphs: [
        'Within the agreed scope, a pre-purchase yacht survey may record the sail inventory presented, visible condition, accessible defects, associated equipment, relevant records and inspection limits. If conditions permit, it may also observe sails hoisted or in operation.',
        'The report should distinguish sails examined or hoisted from those left furled, bagged or unavailable. An unexamined sail must not be assumed serviceable. A general survey does not automatically replace a specialist sailmaker’s assessment; further inspection can be recommended when needed.',
      ],
    },
    {
      id: 'opening-every-sail',
      title: 'Should Every Sail Be Opened Before Purchase?',
      paragraphs: [
        'Ideally, identify the sails included in the sale and examine them where access, weather, permission, time and the agreed inspection scope allow. If a sail cannot be checked safely, record that limitation and consider a separate sailmaker inspection before completing the purchase.',
      ],
    },
    {
      id: 'meaning-of-sail-patches',
      title: 'Are Patches Always a Serious Problem?',
      paragraphs: [
        'No. Some patches are routine reinforcements or properly completed repairs. Their significance depends on the reason for the work, surrounding cloth, workmanship, location, loading and overall condition. Several unexplained repairs justify questions, not an automatic defect verdict.',
      ],
    },
    {
      id: 'sail-replacement-quotations',
      title: 'Does a Survey Include Sail Replacement Prices?',
      paragraphs: [
        'Replacement pricing depends on dimensions, material, construction, hardware, sailmaker and the required specification. A general visual survey does not automatically include a detailed quotation. If a sail could affect your purchase decision, obtain a current written estimate from a sailmaker.',
      ],
    },
  ],
  keyPoint: {
    id: 'sail-condition-key-point',
    title: 'Surveyor’s Key Point',
    body: 'A clean or neatly furled sail is not necessarily sound. Identify what was actually examined, what remained inaccessible and when a sailmaker’s specialist assessment is appropriate.',
  },
  relatedServices: [
    {
      title: 'Pre-Purchase Yacht Survey',
      description:
        'An independent assessment of accessible yacht structures, systems and equipment before purchase, within an agreed scope.',
      href: '/pre-purchase-survey',
    },
  ],
  relatedArticles: [
    {
      label: 'Standing Rigging: What to Look for Before Buying',
      href: '/yacht-survey-tips/standing-rigging-warning-signs',
    },
    {
      label: 'Which Documents Should a Yacht Buyer Ask For?',
      href: '/yacht-survey-tips/documents-before-yacht-survey',
    },
    { label: 'All Yacht Survey Tips', href: '/yacht-survey-tips' },
  ],
  finalCta: {
    heading: 'Buying a Sailing Yacht?',
    body: 'All Yacht Service provides independent yacht surveying in the Costa Blanca and throughout Spain, with Mediterranean assignments available. A pre-purchase survey can document the sails presented, visible findings, available records and any need for specialist follow-up within the agreed scope.',
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
    title: 'Yacht Sail Condition: What Buyers Should Check',
    description:
      'Furled sails can conceal UV damage, failed stitching, chafe and repairs. Learn what yacht buyers should inspect before purchase.',
    href: '/yacht-survey-tips/yacht-sail-condition-checks',
    category: 'Pre-Purchase Checks · Rigging & Sails',
    status: 'Published',
    publicationDate: '13 October 2026',
    publicationDateTime: '2026-10-13',
    readingTime: '6 minutes',
    image: articleImage,
  } satisfies SurveyTipsArticle,
} as const satisfies SurveyTipArticlePageData;
