import type {
  SurveyTipArticlePageData,
  SurveyTipsArticle,
  SurveyTipsImage,
} from './types';

const articleImage = {
  src: '/images/yacht-survey-tips/documents-before-yacht-survey.png',
  alt: 'All Yacht Service infographic listing documents and maintenance records to request before a yacht survey',
  width: 1080,
  height: 1350,
} as const satisfies SurveyTipsImage;

export const documentsBeforeYachtSurveyArticle = {
  sourceUrl:
    'https://www.allyachtservice.com/yacht-survey-tips/documents-before-yacht-survey',
  title: 'Before a Yacht Survey: Which Documents Should a Buyer Ask For?',
  seoTitle:
    'Yacht Documents to Check Before a Pre-Purchase Survey | All Yacht Service',
  description:
    'A practical guide to the ownership, maintenance, repair and survey records worth requesting before a pre-purchase yacht survey—and how to interpret gaps without jumping to conclusions.',
  metaDescription:
    'Learn which yacht documents and maintenance records to request before a pre-purchase survey, what to compare and how records support an inspection.',
  slug: 'documents-before-yacht-survey',
  pathname: '/yacht-survey-tips/documents-before-yacht-survey',
  category: 'Pre-Purchase Checks · Documentation & History',
  status: 'Published',
  publicationDate: '29 September 2026',
  publicationDateTime: '2026-09-29',
  modifiedDateTime: '2026-09-29',
  readingTime: '6-minute read',
  timeRequired: 'PT6M',
  standfirst:
    'Documents can explain how a yacht has been owned, maintained and repaired. Asking for them before the survey gives the buyer and surveyor useful context, while keeping clear that records do not prove the yacht’s present condition.',
  image: articleImage,
  imageCaption:
    'The original Survey Tip infographic summarises records worth requesting before a yacht survey. Its embedded English text is retained exactly as supplied.',
  socialImageAlt:
    'All Yacht Service guide to documents and maintenance records buyers should request before a yacht survey',
  author: {
    name: 'Aleksandrs Tolkacovs',
    professionalDescription:
      'IIMS-Certified Yacht and Small Craft Marine Surveyor',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Yacht Survey Tips', href: '/yacht-survey-tips' },
    {
      label: 'Documents Before a Yacht Survey',
      href: '/yacht-survey-tips/documents-before-yacht-survey',
    },
  ],
  introduction: {
    id: 'documents-before-survey-introduction',
    label: 'Introduction',
    paragraphs: [
      'A yacht’s paperwork can reveal how its identity, ownership, machinery and maintenance history have been recorded. Requesting the available documents before an inspection helps a buyer prepare better questions and allows relevant records to be considered alongside what is seen on board.',
      'The aim is not to treat paperwork as proof that a yacht is sound. Records provide context. A missing entry or inconsistency is a question to investigate, not by itself evidence of a defect or wrongdoing.',
    ],
  },
  sections: [
    {
      id: 'why-documents-matter-before-survey',
      title: 'Why Documents Matter Before a Survey',
      paragraphs: [
        'Documents can help establish the vessel details being represented, show when selected equipment was serviced and identify previous work that may deserve attention. They can also help the surveyor understand which systems, dates or repair areas should be discussed during the agreed inspection.',
        'Receiving records in advance gives the buyer time to organise them and note questions. It does not change the limits of access, testing or scope agreed for the survey.',
      ],
    },
    {
      id: 'documents-worth-requesting',
      title: 'Documents Worth Requesting',
      paragraphs: [
        'Ask the seller or broker which records are available and relevant to the yacht. Depending on the vessel, useful documents may include:',
      ],
      items: [
        'Ownership and registration documents, with vessel particulars that can be compared with the yacht',
        'Engine and generator service records, including recorded dates and engine hours',
        'Rigging, saildrive and steering service or replacement records where applicable',
        'Invoices for major repairs, refits or equipment replacement and any available information about previous claims',
        'Previous survey reports together with evidence of repairs made in response to identified findings',
        'Safety-equipment service certificates and expiry dates where relevant',
      ],
      closingParagraphs: [
        'Record availability varies with the yacht, its age, previous ownership and the type of work carried out. Not every document will exist or apply to every vessel.',
      ],
    },
    {
      id: 'what-to-compare-in-the-records',
      title: 'What to Compare in the Records',
      paragraphs: [
        'Look for details that should remain consistent across documents and with the yacht itself. Useful comparisons include service dates, recorded engine hours, model designations, serial numbers and the description of reported repairs.',
        'A sequence of invoices may help explain when equipment was fitted or replaced. A previous survey may identify an issue, but the corresponding invoice, photograph or later record is what may help show how the matter was addressed.',
      ],
    },
    {
      id: 'gaps-and-inconsistencies',
      title: 'How to Treat Gaps and Inconsistencies',
      paragraphs: [
        'A gap in service history, a date that does not align or a different serial number should lead to a calm request for clarification. Records may be incomplete because ownership changed, work was completed in another country or older paperwork was not retained.',
        'An inconsistency can be important, but it is not proof of a defect. Note the point, ask for supporting information and consider whether it changes the survey scope or calls for a specialist check.',
      ],
    },
    {
      id: 'records-do-not-prove-present-condition',
      title: 'Records Do Not Prove Present Condition',
      paragraphs: [
        'A recent invoice confirms that work was recorded; it does not establish the present condition, quality of workmanship or performance of the related system. Likewise, an old survey describes observations made at a particular time and within that survey’s scope.',
        'Documents should be read together with an independent inspection, any agreed demonstrations or tests, and specialist input where needed. They do not replace access to the yacht or a current assessment.',
      ],
    },
    {
      id: 'how-records-support-the-survey',
      title: 'How Records Can Support the Survey',
      paragraphs: [
        'Before the appointment, share organised copies of relevant records if the seller permits it. A short index by system or date can make the information easier to review. Keep originals secure and avoid altering the files.',
        'Within the agreed scope, the surveyor can consider relevant information alongside accessible observations and identify matters that warrant clarification or further investigation. Verification of title, legal ownership, finance, tax status or document authenticity is separate from a condition survey unless specifically agreed with an appropriate professional.',
      ],
    },
    {
      id: 'questions-for-the-seller-or-broker',
      title: 'Questions for the Seller or Broker',
      paragraphs: [
        'A concise written request helps keep the exchange factual. Useful questions include:',
      ],
      items: [
        'Which ownership, registration and equipment documents are available?',
        'Do service dates and recorded hours align with the current engine and generator meters?',
        'What major repairs, replacements or refits have been completed, and are invoices available?',
        'Were findings from previous surveys addressed, and is supporting evidence available?',
        'Are there missing periods in the records, and can the seller explain them?',
      ],
    },
  ],
  keyPoint: {
    id: 'documents-before-survey-key-point',
    title: 'Surveyor’s Key Point',
    body: 'Records provide context. A gap or inconsistency is a question to investigate, not proof of a defect, and paperwork does not confirm present condition or replace an independent inspection.',
  },
  relatedServices: [
    {
      title: 'Pre-Purchase Yacht Survey',
      description:
        'An independent assessment of accessible yacht structures, systems and machinery before purchase, within an agreed scope.',
      href: '/pre-purchase-survey',
    },
    {
      title: 'Yacht Buyer Representation',
      description:
        'Independent support through selected stages of a yacht purchase, with the role and scope agreed in advance.',
      href: '/buyer-representation',
    },
  ],
  relatedArticles: [
    {
      label: 'Engine Mounts on Yachts: Warning Signs Buyers Should Look For',
      href: '/yacht-survey-tips/yacht-engine-mounts',
    },
    {
      label: 'Antifouling Tells a Story: What Used-Yacht Buyers Should Check',
      href: '/yacht-survey-tips/antifouling-tells-a-story',
    },
    { label: 'All Yacht Survey Tips', href: '/yacht-survey-tips' },
  ],
  finalCta: {
    heading: 'Preparing to Buy a Yacht?',
    body: 'If you are arranging a pre-purchase survey, gathering the available records in advance can help frame useful questions and support an efficient inspection within the agreed scope.',
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
    title: 'Before the Survey, Ask for the Documents',
    description:
      'Which ownership, maintenance, repair and survey records should a buyer request—and what can gaps or inconsistencies really tell you?',
    href: '/yacht-survey-tips/documents-before-yacht-survey',
    category: 'Pre-Purchase Checks · Documentation & History',
    status: 'Published',
    publicationDate: '29 September 2026',
    publicationDateTime: '2026-09-29',
    readingTime: '6 minutes',
    image: articleImage,
  } satisfies SurveyTipsArticle,
} as const satisfies SurveyTipArticlePageData;
