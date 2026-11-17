import type {
  SurveyTipArticlePageData,
  SurveyTipsArticle,
  SurveyTipsImage,
} from './types';

const articleImage = {
  src: '/images/yacht-survey-tips/yacht-anchoring-gear-before-purchase.png',
  alt: 'All Yacht Service anchoring-gear infographic showing anchor chain, rope and stainless-steel deck fittings on a yacht',
  width: 1080,
  height: 1350,
} as const satisfies SurveyTipsImage;

export const yachtAnchoringGearBeforePurchaseArticle = {
  sourceUrl:
    'https://www.allyachtservice.com/yacht-survey-tips/yacht-anchoring-gear-before-purchase',
  title: 'Yacht Anchoring Gear Before Purchase: Check the Whole System',
  seoTitle: 'Pre-Purchase Yacht Anchor Gear Checks: Rode, Windlass and Locker',
  description:
    'A tidy anchor on the bow does not reveal the condition of the full rode, connections, windlass or locker. Learn what to ask to inspect before buying a yacht.',
  metaDescription:
    'A tidy anchor on the bow does not reveal the condition of the full rode, connections, windlass or locker. Learn what to ask to inspect before buying a yacht.',
  slug: 'yacht-anchoring-gear-before-purchase',
  pathname: '/yacht-survey-tips/yacht-anchoring-gear-before-purchase',
  category: 'Pre-Purchase Checks · Anchoring',
  status: 'Published',
  publicationDate: '17 November 2026',
  publicationDateTime: '2026-11-17',
  modifiedDateTime: '2026-11-17',
  readingTime: '5-minute read',
  timeRequired: 'PT5M',
  standfirst:
    'The anchor, rode, connections, windlass and locker work as one system. A neat bow reveals only part of what a buyer needs to know.',
  image: articleImage,
  imageCaption:
    'Graphic using a cropped photograph by ROMAN ODINTSOV / Pexels. Illustrative only; it does not show a defect found during an All Yacht Service inspection. Photo source and license are linked below.',
  socialImageAlt:
    'Anchoring-gear Survey Tip infographic with yacht anchor chain, rope, deck fittings and a checklist for the complete system',
  author: {
    name: 'Aleksandrs Tolkacovs',
    professionalDescription:
      'IIMS-Certified Yacht and Small Craft Marine Surveyor',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Yacht Survey Tips', href: '/yacht-survey-tips' },
    {
      label: 'Yacht Anchoring Gear Before Purchase',
      href: '/yacht-survey-tips/yacht-anchoring-gear-before-purchase',
    },
  ],
  introduction: {
    id: 'anchoring-gear-introduction',
    label: 'Introduction',
    paragraphs: [
      'The anchor visible at a yacht’s bow is only one part of its anchoring system. Chain or rope may be hidden in a locker, while the windlass motor, connections and mounting may be below deck. A neat bow therefore gives a buyer only a limited view of the gear that will be relied on at anchor.',
      'Before a pre-purchase survey, ask the seller or broker whether the anchor rode can be laid out and the locker opened. Agree how any powered equipment will be demonstrated safely. The goal is to see the system as a whole and record parts that remain inaccessible.',
    ],
  },
  sections: [
    {
      id: 'beyond-anchor',
      title: 'Why Look Beyond the Anchor?',
      paragraphs: [
        'An anchoring system includes the anchor, rode, connections, bow roller, windlass if fitted, locker, securing points and the way loads are transferred to the yacht. A weak or damaged component can limit the usefulness of otherwise sound gear. BoatUS recommends inspecting not only the anchor and rode but also the fittings that form the load path.',
        'The appropriate anchor and rode depend on the yacht, intended use and local bottom and weather conditions. A pre-purchase survey can describe what is present and its visible condition; it does not prove that the setup will hold in every anchorage.',
      ],
    },
    {
      id: 'anchor-itself',
      title: 'What Should Be Checked on the Anchor Itself?',
      paragraphs: [
        'Look for visible distortion of the shank or flukes, cracks, heavy corrosion, damaged galvanising and signs that moving parts do not operate as designed. Confirm the make, model and size where markings or records allow. If the anchor is stored on a roller, check how it is secured for passage and whether the roller and adjacent fittings show movement or damage.',
        'A surface mark is not by itself a diagnosis. A suspect bend, weld or connection needs closer assessment against the manufacturer’s design and any available history.',
      ],
    },
    {
      id: 'full-rode',
      title: 'Why Ask to See the Full Rode?',
      paragraphs: [
        'The short section of chain or rope visible at the bow may be the best-looking part. Ask for enough of the rode to be paid out or laid out safely to inspect its full length, including the section normally stored at the bottom of the locker. This may need a suitable space, time and a competent operator.',
        'For chain, look for severe rust, worn or distorted links, damaged coatings and repairs or joins. For rope, look for chafe, cut strands, hard spots, discolouration, damaged eyes and suspect splices. Pay attention to where the rode passes through the bow roller, hawsehole and windlass. BoatUS advises laying out the rode for a thorough examination and checking fittings that can chafe it.',
        'Ask for the stated chain or rope length and size, and compare them with markings, records and the windlass manufacturer’s requirements. Do not assume that a chain of the wrong size will feed correctly through a gypsy simply because the windlass runs without load.',
      ],
    },
    {
      id: 'connections',
      title: 'Which Connections Deserve Attention?',
      paragraphs: [
        'The rode is joined to the anchor through a shackle, and may include a swivel, a rope-to-chain splice or other connections. Inspect accessible pins and fastenings for security, corrosion, distortion and signs of movement. Check the rope-to-chain transition where applicable, because it experiences repeated passage through the windlass and bow fittings.',
        'At the opposite end, ask how the rode’s bitter end is attached inside the locker. That attachment is intended to prevent accidental loss of the rode, not to become the normal anchoring load point. If the end is inaccessible, record the limitation instead of assuming it is secure. Do not disconnect it merely to inspect it.',
      ],
    },
    {
      id: 'windlass-demonstration',
      title: 'What Can a Windlass Demonstration Show?',
      paragraphs: [
        'With the owner’s permission, a competent owner, skipper or appointed operator can demonstrate normal windlass retrieval or deployment when the vessel is safely secured and the operation has been planned. The buyer and surveyor can observe whether the chain feeds smoothly, the gypsy grips the correct rode and the unit operates without unusual noise or obvious movement. Stop the demonstration if it creates an unsafe situation.',
        'Inspect accessible mounting, deck bedding, foot switches or remote controls, and the motor and electrical installation where safely visible. Corrosion, water staining, loose fasteners, damaged wiring or a wet motor compartment merit investigation. BoatUS includes these areas in its windlass inspection guidance. A short dockside run does not establish performance under every anchoring load.',
        'Keep hands, clothing and loose lines clear of the moving chain, gypsy and bow roller; never stand in or reach into the locker during powered movement. The operator should follow the instructions for the actual windlass installed. Do not open live connections, bypass safety controls, dismantle or adjust the equipment during a viewing.',
      ],
    },
    {
      id: 'locker-load-points',
      title: 'Why Do the Locker and Load Points Matter?',
      paragraphs: [
        'The anchor locker should be accessible enough to inspect its visible structure, drainage and stored rode. Standing water, blocked drains, corrosion or water entering adjacent spaces are reasons for closer examination. Check the bow roller, cleats, chocks and their accessible fastenings for movement, wear and chafe points.',
        'Where the yacht uses all-chain rode, ask how a snubber or bridle takes the anchoring load and adds elasticity. The windlass should not be treated as the permanent load-bearing point. BoatUS explains the role of a snubber in an all-chain setup.',
      ],
    },
    {
      id: 'cannot-demonstrate',
      title: 'What if the Gear Cannot Be Demonstrated?',
      paragraphs: [
        'Record the exact limitation: for example, only a short length of chain was visible, the locker could not be opened, or the windlass was not operated. Ask for service records, invoices and any information about previous anchoring problems, but treat those as context rather than proof of present condition.',
        'A buyer can arrange another viewing, specialist inspection or demonstration before committing to purchase. The scope of an independent survey should distinguish observed condition from inaccessible equipment and from conclusions that would need further testing.',
      ],
    },
    {
      id: 'anchoring-faq',
      title: 'Frequently Asked Questions',
      paragraphs: [],
      subsections: [
        {
          id: 'clean-anchor',
          title: 'Is a Clean-Looking Anchor Enough to Judge the System?',
          paragraphs: [
            'No. Much of the rode and the windlass installation may be hidden. The anchor’s appearance is only one observation.',
          ],
        },
        {
          id: 'buyer-operate',
          title: 'Should the Buyer Operate the Windlass?',
          paragraphs: [
            'A competent owner, skipper or appointed operator should demonstrate it with permission and safe control. The buyer and surveyor can observe and ask questions.',
          ],
        },
        {
          id: 'short-test',
          title: 'Does a Short Windlass Test Prove That It Works Properly?',
          paragraphs: [
            'No. It shows how the unit operated during that demonstration. It may not reveal intermittent faults, incorrect chain matching or performance under different loads.',
          ],
        },
        {
          id: 'rode-not-laid-out',
          title: 'What if the Full Rode Cannot Be Laid Out?',
          paragraphs: [
            'Record the portion inspected and the portion unseen. Consider a later inspection or specialist check if the anchoring gear is important to the purchase decision.',
          ],
        },
      ],
    },
  ],
  keyPoint: {
    id: 'anchoring-key-point',
    title: 'Surveyor’s Key Point',
    body: 'Inspect the whole anchoring system, not just the anchor at the bow. The full rode, its connections, windlass, locker and load points each answer a different part of the buyer’s question. If one part cannot be seen or demonstrated, make that limitation explicit.',
  },
  authorBio: {
    id: 'anchoring-author',
    title: 'About the Author',
    paragraphs: [
      'Aleksandrs Tolkacovs is an IIMS-Certified Yacht and Small Craft Marine Surveyor and licensed captain. He has more than 20 years of engineering, quality-assurance and management experience, alongside practical yacht-operation experience.',
    ],
  },
  sources: {
    id: 'anchoring-sources',
    title: 'Sources and Further Reading',
    links: [
      {
        label: 'BoatUS — Ground Tackle Upkeep',
        href: 'https://www.boatus.com/expert-advice/expert-advice-archive/2021/june/ground-tackle-upkeep',
      },
      {
        label: 'BoatUS — How to Anchor',
        href: 'https://www.boatus.com/expert-advice/expert-advice-archive/2021/june/how-to-anchor',
      },
      {
        label: 'ROMAN ODINTSOV / Pexels — Original Photograph',
        href: 'https://www.pexels.com/photo/close-up-of-anchor-line-on-ship-8356419/',
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
        'An independent inspection before buying, with anchoring-gear access and a safe demonstration included when agreed and practical.',
      href: '/pre-purchase-survey',
    },
  ],
  relatedArticles: [
    {
      label: 'Documents to Request Before a Yacht Survey',
      href: '/yacht-survey-tips/documents-before-yacht-survey',
    },
    { label: 'All Yacht Survey Tips', href: '/yacht-survey-tips' },
  ],
  finalCta: {
    heading: 'Planning to Buy a Yacht in Spain or the Mediterranean?',
    body: 'All Yacht Service provides independent pre-purchase yacht surveys. Access to the anchoring gear and a safe demonstration can be included in the agreed survey scope.',
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
    title: 'Yacht Anchoring Gear: Check the Whole System',
    description:
      'A tidy anchor tells only part of the story. Learn what yacht buyers should check in the chain, rope, windlass, locker and anchoring connections.',
    href: '/yacht-survey-tips/yacht-anchoring-gear-before-purchase',
    category: 'Pre-Purchase Checks · Anchoring',
    status: 'Published',
    publicationDate: '17 November 2026',
    publicationDateTime: '2026-11-17',
    readingTime: '5 minutes',
    image: articleImage,
  } satisfies SurveyTipsArticle,
} as const satisfies SurveyTipArticlePageData;
