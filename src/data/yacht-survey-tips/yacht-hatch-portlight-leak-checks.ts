import type {
  SurveyTipArticlePageData,
  SurveyTipsArticle,
  SurveyTipsImage,
} from './types';

const articleImage = {
  src: '/images/yacht-survey-tips/yacht-hatch-portlight-leak-checks.png',
  alt: 'All Yacht Service infographic showing a yacht portlight with a water stain below the frame and a checklist of visible leak clues',
  width: 1080,
  height: 1350,
} as const satisfies SurveyTipsImage;

export const yachtHatchPortlightLeakChecksArticle = {
  sourceUrl:
    'https://www.allyachtservice.com/yacht-survey-tips/yacht-hatch-portlight-leak-checks',
  title: 'Yacht Hatches and Portlights: Follow the Water',
  seoTitle: 'Yacht Hatch and Portlight Leak Checks Before Purchase',
  description:
    'A water mark below a yacht hatch or portlight deserves investigation. Compare the interior mark with seals, frame bedding, acrylic, the surrounding deck and repair records before drawing conclusions.',
  metaDescription:
    'Learn what water marks, worn seals and frame repairs around yacht hatches and portlights can tell a buyer, and why the source of a leak needs tracing.',
  slug: 'yacht-hatch-portlight-leak-checks',
  pathname: '/yacht-survey-tips/yacht-hatch-portlight-leak-checks',
  category: 'Pre-Purchase Checks · Deck & Water Ingress',
  status: 'Published',
  publicationDate: '3 November 2026',
  publicationDateTime: '2026-11-03',
  modifiedDateTime: '2026-11-03',
  readingTime: '6-minute read',
  timeRequired: 'PT6M',
  standfirst:
    'A water mark below a hatch or portlight is a reason to investigate, not proof that the nearest fitting leaks. Follow the possible water path inside and outside before deciding what it means.',
  image: articleImage,
  imageCaption:
    'The original Survey Tip infographic illustrates visible clues around a portlight. It does not diagnose the source or condition of a particular leak.',
  socialImageAlt:
    'All Yacht Service hatches and portlights infographic showing a stained portlight frame and checks for seals, latches, acrylic and repairs',
  author: {
    name: 'Aleksandrs Tolkacovs',
    professionalDescription:
      'IIMS-Certified Yacht and Small Craft Marine Surveyor',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Yacht Survey Tips', href: '/yacht-survey-tips' },
    {
      label: 'Hatch and Portlight Leak Checks',
      href: '/yacht-survey-tips/yacht-hatch-portlight-leak-checks',
    },
  ],
  introduction: {
    id: 'hatch-introduction',
    label: 'Introduction',
    paragraphs: [
      'A water mark below a yacht hatch or portlight deserves investigation before purchase. The opening seal, acrylic, frame bedding or nearby deck may be involved, but water can travel behind a lining before it becomes visible. Inspect both sides of the fitting, ask when the mark appeared and compare the answer with repair records and the surrounding deck condition.',
    ],
  },
  sections: [
    {
      id: 'why-tidy-hatch-can-leak',
      title: 'Why Can a Tidy Hatch Still Leak?',
      paragraphs: [
        'A hatch or portlight has more than one possible water path. Water may pass between the opening lid and its gasket, between the frame and the deck or hull, around the acrylic lens, or through a nearby fitting. A neat bead of fresh sealant does not show which path was addressed or whether the repair worked.',
        'The surrounding deck and the fit of the frame matter as well as the gasket. If the surface moves or the frame does not sit flat, replacing a seal alone may not resolve the problem. The actual construction and installed fitting need to be assessed.',
      ],
    },
    {
      id: 'look-inside',
      title: 'What Should a Buyer Look for Inside the Yacht?',
      paragraphs: [
        'Start at the headlining and trim below each hatch and portlight. Compare both corners rather than focusing only on the most visible stain. Relevant observations include:',
      ],
      items: [
        'Brown water trails, salt crystals or tide marks',
        'Damp or discoloured headlining',
        'Swollen wood veneer, lifting trim or damaged upholstery',
        'Corroded fasteners or hardware',
        'Softness or movement in safely accessible nearby surfaces',
        'Fresh paint or replacement trim limited to one small area',
      ],
      closingParagraphs: [
        'A dry surface during one viewing does not establish that a leak has stopped; the yacht may not have seen rain or spray recently. Conversely, an old stain does not prove that water is still entering. Record its location and ask what happened after the last heavy rain or washdown.',
      ],
    },
    {
      id: 'exterior-areas',
      title: 'Which Exterior Areas Deserve Attention?',
      paragraphs: [
        'On deck, examine the entire perimeter of the frame. Look for gaps, lifted or uneven bedding compound, loose fasteners, corrosion, previous patching and cracks in the surrounding surface. Check whether water drains away or tends to pool beside the fitting.',
        'Inspect the acrylic lens for cracks, surface crazing or signs of separation from its frame. Crazing can be cosmetic; a through-crack or failed bond is a different concern. Identify the make and model before assessing repair options.',
        'For a portlight in the hull or coachroof, also consider the surrounding laminate or panel. The interior drip may be some distance from the point where water entered.',
      ],
    },
    {
      id: 'seals-hinges-latches',
      title: 'How Do Seals, Hinges and Latches Affect the Check?',
      paragraphs: [
        'With the owner’s permission, open and close the fitting gently. Look for a seal that is seated and free of obvious tears, flattening, missing sections or debris. The lid should meet it evenly; hinges and latches should operate without excessive force and hold the intended closed position.',
        'Replacement parts and operating instructions vary by make and model. Lewmar’s hatch and portlight identifier helps owners identify the fitting before ordering spares. The VETUS PA portlight manual, for example, specifies handle positions for closing and gives care instructions for its sealing rubber; those instructions apply to that range, not every portlight.',
        'Do not force a stiff latch. It may reflect an adjustment, seal or frame issue, and forcing it can damage the fitting.',
      ],
    },
    {
      id: 'stain-source',
      title: 'Does a Water Stain Identify the Source?',
      paragraphs: [
        'No. Water can move along a deck core, laminate underside, cable route, timber trim or headlining before it drips into view. A mark below a hatch may originate at the hatch, but it may also come from a handrail base, deck organiser, mast opening or another nearby penetration.',
        'Connect the inside mark with exterior observations, weather history and previous repairs. A controlled water test may help when agreed with the owner and conducted methodically by competent people, but a brief spray that produces no drip cannot rule out every leak. Assess the location in the context of the yacht’s construction.',
      ],
    },
    {
      id: 'repair-history',
      title: 'What Repair History Should the Buyer Request?',
      paragraphs: ['Ask the seller or broker:'],
      items: [
        'When did the stain first appear, and does it recur after rain, washing or sailing in spray?',
        'Was the hatch or portlight rebedded, or was the gasket or acrylic lens replaced?',
        'Are repair invoices, photographs or earlier survey reports available?',
      ],
      closingParagraphs: [
        'Compare repair dates with the current condition of the frame and lining. An invoice for a new seal shows work was done, not that the source was found. A gap in records is a question to investigate rather than proof of a serious defect.',
      ],
    },
    {
      id: 'deck-structure',
      title: 'When Might a Small Leak Involve the Deck Structure?',
      paragraphs: [
        'Repeated water entry near a fitting can affect nearby timber, cored laminate, fasteners or interior finishes. Risk depends on the yacht’s construction, the route of the water and how long it has been present. Softness, raised areas, persistent dampness or movement around an opening may justify further inspection.',
        'A stained headlining alone cannot establish whether a deck core is wet or damaged. A surveyor may use comparative inspection and suitable testing where access and construction allow, and recommend specialist investigation if warranted.',
      ],
    },
    {
      id: 'independent-survey',
      title: 'What Can an Independent Survey Add?',
      paragraphs: [
        'Within an agreed scope, a pre-purchase survey can examine accessible interior and exterior evidence, operate fittings where practical, review repair history and assess nearby deck condition. The report can separate observed facts from possible causes and recommend specialist leak tracing or repair assessment when needed.',
        'No single viewing or water test confirms that every hatch and portlight will remain dry in all weather. The goal is to identify concerns before purchase and understand their possible scope.',
      ],
    },
    {
      id: 'hatch-faq',
      title: 'Frequently Asked Questions',
      paragraphs: [],
      subsections: [
        {
          id: 'fresh-sealant',
          title: 'Does Fresh Sealant Mean a Hatch Leak Has Been Fixed?',
          paragraphs: [
            'No. It may show an attempted repair, but the leak path and quality of the work still need assessment. Ask what was removed, cleaned, rebedded or replaced.',
          ],
        },
        {
          id: 'replace-rubber-seal',
          title: 'Can a Leaking Hatch Be Fixed by Replacing the Rubber Seal?',
          paragraphs: [
            'Sometimes, if the opening gasket is the actual leak path and the frame and lid are sound. Water entering at the frame bedding, acrylic bond or a nearby deck fitting needs a different repair. Use the correct seal for the specific model.',
          ],
        },
        {
          id: 'old-stain',
          title: 'Is an Old Water Stain a Serious Defect?',
          paragraphs: [
            'Not necessarily. It may be historic or it may indicate an active leak. Surrounding material, repair evidence and behaviour after rain or washing determine what further investigation is appropriate.',
          ],
        },
        {
          id: 'hose-test',
          title: 'Should a Buyer Hose-Test Every Hatch?',
          paragraphs: [
            'Testing should be agreed with the owner and performed methodically by competent people. A negative result from a quick spray does not rule out leaks that occur only with a different water direction, pressure or duration.',
          ],
        },
      ],
    },
  ],
  keyPoint: {
    id: 'hatch-key-point',
    title: 'Surveyor’s Key Point',
    body: 'Follow the water rather than assuming the nearest hatch is to blame. Compare the seal, frame, acrylic and surrounding deck with the mark below, then ask for the repair history. The pattern of evidence matters more than one isolated stain.',
  },
  authorBio: {
    id: 'hatch-author',
    title: 'About the Author',
    paragraphs: [
      'Aleksandrs Tolkacovs is an IIMS-Certified Yacht and Small Craft Marine Surveyor and licensed captain. He has more than 20 years of engineering, quality-assurance and management experience, alongside practical yacht-operation experience.',
    ],
  },
  sources: {
    id: 'hatch-sources',
    title: 'Sources and Further Reading',
    links: [
      {
        label: 'Lewmar Hatch & Portlight Identifier',
        href: 'https://www.lewmar.com/acrylics',
      },
      {
        label: 'VETUS PA Portlight Installation and Owner’s Manual',
        href: 'https://vetus.com/wp-content/uploads/070210.01-r02-2020-10-Patrijspoorten-PA.pdf',
      },
    ],
  },
  relatedServices: [
    {
      title: 'Pre-Purchase Yacht Survey',
      description:
        'Independent assessment of accessible yacht areas, records and agreed checks before purchase.',
      href: '/pre-purchase-survey',
    },
  ],
  relatedArticles: [
    {
      label: 'Deck Moisture and Soft Spots',
      href: '/yacht-survey-tips/deck-moisture-soft-spots',
    },
    {
      label: 'Before the Survey, Ask for the Documents',
      href: '/yacht-survey-tips/documents-before-yacht-survey',
    },
    { label: 'All Yacht Survey Tips', href: '/yacht-survey-tips' },
  ],
  finalCta: {
    heading: 'Planning to Buy a Yacht in Spain or the Mediterranean?',
    body: 'All Yacht Service provides independent pre-purchase yacht surveys. The agreed inspection can include accessible hatches, portlights, nearby deck areas and evidence of water ingress.',
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
    title: 'Yacht Hatches and Portlights: Follow the Water',
    description:
      'Water stains, worn seals and previous repairs around yacht hatches can reveal possible leaks. Learn what buyers should examine and why tracing the source matters.',
    href: '/yacht-survey-tips/yacht-hatch-portlight-leak-checks',
    category: 'Pre-Purchase Checks · Deck & Water Ingress',
    status: 'Published',
    publicationDate: '3 November 2026',
    publicationDateTime: '2026-11-03',
    readingTime: '6 minutes',
    image: articleImage,
  } satisfies SurveyTipsArticle,
} as const satisfies SurveyTipArticlePageData;
