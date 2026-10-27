import type {
  SurveyTipArticlePageData,
  SurveyTipsArticle,
  SurveyTipsImage,
} from './types';

const articleImage = {
  src: '/images/yacht-survey-tips/yacht-generator-checks-before-purchase.png',
  alt: 'All Yacht Service infographic showing a marine generator, seawater strainer and a checklist for observing operation under load',
  width: 1080,
  height: 1350,
} as const satisfies SurveyTipsImage;

export const yachtGeneratorChecksBeforePurchaseArticle = {
  sourceUrl:
    'https://www.allyachtservice.com/yacht-survey-tips/yacht-generator-checks-before-purchase',
  title: 'Yacht Generator Checks Before Purchase: Why a Start-Up Is Not Enough',
  seoTitle: 'Yacht Generator Checks Before Buying a Used Boat',
  description:
    'A generator that starts is not necessarily ready for the yacht’s normal electrical demand. Compare its records, installation, cooling and exhaust with a safely conducted demonstration under suitable loads.',
  metaDescription:
    'Learn what to ask and observe when a used yacht’s marine generator is demonstrated, including service records, cooling, exhaust, leaks and operation under load.',
  slug: 'yacht-generator-checks-before-purchase',
  pathname: '/yacht-survey-tips/yacht-generator-checks-before-purchase',
  category: 'Pre-Purchase Checks · Machinery & Onboard Systems',
  status: 'Published',
  publicationDate: '27 October 2026',
  publicationDateTime: '2026-10-27',
  modifiedDateTime: '2026-10-27',
  readingTime: '6-minute read',
  timeRequired: 'PT6M',
  standfirst:
    'A prompt start is only one observation. Ask to see the generator run with suitable normal onboard loads, and compare its behaviour with service records, cooling, exhaust and any leaks or alarms.',
  image: articleImage,
  imageCaption:
    'The original Survey Tip infographic shows a marine generator and a visual checklist. It does not establish the condition of any particular installation.',
  socialImageAlt:
    'All Yacht Service generator survey-tip infographic showing service records, raw-water strainer, hoses, leaks and operation under load',
  author: {
    name: 'Aleksandrs Tolkacovs',
    professionalDescription:
      'IIMS-Certified Yacht and Small Craft Marine Surveyor',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Yacht Survey Tips', href: '/yacht-survey-tips' },
    {
      label: 'Yacht Generator Checks',
      href: '/yacht-survey-tips/yacht-generator-checks-before-purchase',
    },
  ],
  introduction: {
    id: 'generator-introduction',
    label: 'Introduction',
    paragraphs: [
      'A marine generator that starts promptly has passed only one part of a pre-purchase check. Ask to see it operate with suitable normal onboard loads, and consider the result alongside its service records, cooling-water system, exhaust installation and any leaks or alarms. The seller or a competent operator should run the demonstration according to the manual for the installed model.',
    ],
  },
  sections: [
    {
      id: 'brief-idle-run',
      title: 'Why Is a Brief Idle Run Not Enough?',
      paragraphs: [
        'Starting shows that the set can turn over and run at that moment. It does not show how it responds when onboard equipment draws power or whether cooling and exhaust remain sound as the unit warms up.',
        'For its MDKDK–MDKDN marine generator models, Cummins Onan’s operator manual discusses loading within the set’s rated capacity, minimising no-load operation and inspecting the exhaust for leaks. These are model-specific instructions, not a universal test procedure. The useful buyer question is whether the installed unit has been demonstrated in accordance with its own manual.',
      ],
    },
    {
      id: 'generator-documents',
      title: 'Which Generator Documents Should the Buyer Request?',
      paragraphs: [
        'Ask the seller or broker for the make, model, serial number, indicated hours, operator manual, service history, maintenance logs and invoices. Relevant records may cover:',
      ],
      items: [
        'Oil and oil-filter changes, fuel-filter servicing and coolant work',
        'Raw-water pump impeller replacement and anode inspections where fitted',
        'Exhaust repairs and starting-battery replacement',
        'Earlier overheating, shutdown alarms and water-ingress repairs',
      ],
      closingParagraphs: [
        'Compare recorded hours and dates where possible. Maintenance intervals depend on the model; an hour-meter reading alone does not confirm that scheduled work was done. A gap in records calls for questions, not an automatic finding that the generator is defective.',
      ],
    },
    {
      id: 'before-running',
      title: 'What Can Be Observed Before the Generator Runs?',
      paragraphs: [
        'With the generator stopped and safely accessible, look beyond a clean sound enclosure. The hoses, seawater intake and bilge beneath it may tell a different story. Visible observations include:',
      ],
      items: [
        'Oil, fuel, coolant or seawater around the set; salt deposits, corrosion or staining near connections',
        'Cracked, soft, chafed or poorly supported hoses; loose-looking clamps or damaged exhaust hose',
        'A dirty or inaccessible raw-water strainer, obstructed ventilation or items stored inappropriately nearby',
        'Corroded battery connections, poorly supported cables, damaged mounts or signs of movement',
      ],
      closingParagraphs: [
        'Do not remove covers, open cooling systems or handle electrical connections during a casual viewing. A surveyor or technician should decide what can safely be inspected within the agreed scope.',
      ],
    },
    {
      id: 'cooling-and-exhaust',
      title: 'Why Do Cooling and Exhaust Deserve Special Attention?',
      paragraphs: [
        'Many marine sets draw seawater through a seacock and strainer, circulate it through a pump and heat exchanger, and discharge it with the exhaust. A blockage, defective impeller, leaking hose or restricted outlet may affect cooling. Exhaust components can also leak gas or water into the vessel.',
        'The Cummins Onan MDKDK–MDKDN manual includes raw-water and exhaust-system checks, including leaks and hose connections. Arrangements differ by installation. A competent operator familiar with the yacht should confirm the relevant intake is correctly configured and the cooling-water discharge is normal for that particular set; not every outlet has the same visible pattern.',
        'An alarm, abnormal temperature or absence of expected cooling-water discharge warrants stopping the demonstration safely and investigating. Do not continue running a faulty unit to complete a viewing.',
      ],
    },
    {
      id: 'demonstration-under-load',
      title: 'What Should a Demonstration Under Load Show?',
      paragraphs: [
        'The operator should start and stabilise the generator as its manual directs, then apply suitable normal onboard loads without exceeding its rated capacity. Watch how it behaves as those loads are added or removed.',
      ],
      items: [
        'Stable or unstable running, surging, vibration and abnormal noise',
        'Unusual exhaust smoke, leaks, alarms or unexpected shutdowns',
        'Changes in indicated voltage or frequency where the installed controls display them',
      ],
      closingParagraphs: [
        'The operator can record available display readings. A qualified marine electrician should assess questionable output or perform electrical measurements. A very short run may miss a concern that appears as the set warms up; allow sufficient observation time under the maker’s instructions without imposing a universal duration or forcing full load.',
      ],
    },
    {
      id: 'further-investigation',
      title: 'Which Observations Call for Further Investigation?',
      paragraphs: [
        'A symptom is not a diagnosis. A shutdown under load could involve fuel supply, cooling, overload protection, controls or another mechanical or electrical issue. Salt deposits could mark an old repaired leak or a current one.',
        'Repeated alarms, shutdowns, abnormal smoke, unusual knocking or vibration, seawater or coolant leaks, overheating indications and abnormal exhaust temperatures warrant further investigation. Record what happened, when, the approximate loads and running time, indicated hours and any displayed fault information. Ask for earlier fault reports and repair invoices.',
        'A qualified marine engineer or electrician can use that evidence to decide which further tests are appropriate.',
      ],
    },
    {
      id: 'survey-scope',
      title: 'What Can a Pre-Purchase Survey Confirm?',
      paragraphs: [
        'Within an agreed scope, an independent pre-purchase survey may review safely accessible generator components, visible installation condition, available maintenance records and an operational demonstration where it can be performed safely. The report may record observable leaks, corrosion, other concerns and limitations of access or testing.',
        'The surveyor may recommend specialist mechanical or electrical checks. A standard visual and operational survey cannot guarantee remaining service life or identify every concealed engine, electrical or heat-exchanger defect. One successful demonstration does not establish that the unit is defect-free.',
      ],
    },
    {
      id: 'generator-faq',
      title: 'Frequently Asked Questions',
      paragraphs: [],
      subsections: [
        {
          id: 'starts-at-dock',
          title: 'Is It Enough If the Generator Starts at the Dock?',
          paragraphs: [
            'No. That confirms only that it ran at that moment. A demonstration with suitable normal loads may reveal alarms, unstable output, unusual noise or cooling concerns not evident during a brief idle run.',
          ],
        },
        {
          id: 'buyer-switches-loads',
          title: 'Should a Buyer Switch On Loads Personally?',
          paragraphs: [
            'The seller or a competent operator should conduct the demonstration under the installed generator’s manual. The buyer can observe and record what happens. Leave live AC work and measurements to qualified personnel.',
          ],
        },
        {
          id: 'low-hour-meter',
          title: 'Does a Low Hour-Meter Reading Mean Good Condition?',
          paragraphs: [
            'No. Age, storage, maintenance, installation and use also matter. Compare the indicated hours with records and observed operation.',
          ],
        },
        {
          id: 'cannot-demonstrate',
          title: 'What If the Generator Cannot Be Demonstrated?',
          paragraphs: [
            'Record the limitation and ask why. Review service evidence and consider a later demonstration or specialist inspection before relying on the unit in a purchase decision.',
          ],
        },
      ],
    },
  ],
  keyPoint: {
    id: 'generator-key-point',
    title: 'Surveyor’s Key Point',
    body: 'Ask for the generator to be demonstrated as part of the yacht’s onboard systems. A clean casing and easy start are useful observations, but cooling, exhaust and electrical operation deserve attention with suitable normal loads applied.',
  },
  authorBio: {
    id: 'generator-author',
    title: 'About the Author',
    paragraphs: [
      'Aleksandrs Tolkacovs is an IIMS-Certified Yacht and Small Craft Marine Surveyor and licensed captain. He has more than 20 years of engineering, quality-assurance and management experience, alongside practical yacht-operation experience.',
    ],
  },
  sources: {
    id: 'generator-sources',
    title: 'Source and Further Reading',
    links: [
      {
        label: 'Cummins Onan MDKDK–MDKDN Marine Generator Operator Manual',
        href: 'https://www.cummins.com/sites/default/files/2024-07/cummins-onan-manual-mdkdk-lmn.pdf',
      },
    ],
  },
  relatedServices: [
    {
      title: 'Pre-Purchase Yacht Survey',
      description:
        'Independent review of accessible yacht systems, records and agreed demonstrations before purchase.',
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
    body: 'All Yacht Service provides independent pre-purchase yacht surveys. The agreed scope may include accessible generator components, records and a safe operational demonstration; concerns may warrant specialist follow-up.',
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
    title: 'Yacht Generator Checks: Why Starting Is Not Enough',
    description:
      'A prompt start can hide cooling, exhaust or electrical concerns. Review records, installation and operation with suitable onboard loads.',
    href: '/yacht-survey-tips/yacht-generator-checks-before-purchase',
    category: 'Pre-Purchase Checks · Machinery & Onboard Systems',
    status: 'Published',
    publicationDate: '27 October 2026',
    publicationDateTime: '2026-10-27',
    readingTime: '6 minutes',
    image: articleImage,
  } satisfies SurveyTipsArticle,
} as const satisfies SurveyTipArticlePageData;
