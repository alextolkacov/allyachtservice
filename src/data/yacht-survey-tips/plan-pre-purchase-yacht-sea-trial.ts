import type {
  SurveyTipArticlePageData,
  SurveyTipsArticle,
  SurveyTipsImage,
} from './types';

const articleImage = {
  src: '/images/yacht-survey-tips/plan-pre-purchase-yacht-sea-trial.png',
  alt: 'All Yacht Service sea-trial planning infographic with a yacht steering wheel, helm instruments and a five-point preparation checklist',
  width: 1080,
  height: 1350,
} as const satisfies SurveyTipsImage;

export const planPrePurchaseYachtSeaTrialArticle = {
  sourceUrl:
    'https://www.allyachtservice.com/yacht-survey-tips/plan-pre-purchase-yacht-sea-trial',
  title:
    'Planning a Pre-Purchase Yacht Sea Trial: Agree the Checks Before You Go',
  seoTitle: 'How to Plan a Yacht Sea Trial Before Purchase',
  description:
    'A useful pre-purchase sea trial begins before departure. Agree the checks, operator, route and weather limits so the observations can be interpreted alongside the survey and haul-out findings.',
  metaDescription:
    'Prepare a useful pre-purchase yacht sea trial by agreeing the scope, skipper, route, weather limits and observations before leaving the berth.',
  slug: 'plan-pre-purchase-yacht-sea-trial',
  pathname: '/yacht-survey-tips/plan-pre-purchase-yacht-sea-trial',
  category: 'Pre-Purchase Checks · Sea Trial Preparation',
  status: 'Published',
  publicationDate: '10 November 2026',
  publicationDateTime: '2026-11-10',
  modifiedDateTime: '2026-11-10',
  readingTime: '6-minute read',
  timeRequired: 'PT6M',
  standfirst:
    'A useful pre-purchase sea trial starts with an agreed plan: what can be observed, who will operate the yacht, where it will go and when conditions may limit the run.',
  image: articleImage,
  imageCaption:
    'The original Survey Tip infographic illustrates a sea-trial planning checklist; the helm photograph is not evidence of any particular yacht’s condition.',
  socialImageAlt:
    'Sea-trial planning infographic with a yacht helm and a checklist for scope, skipper, weather, safety and observation time',
  author: {
    name: 'Aleksandrs Tolkacovs',
    professionalDescription:
      'IIMS-Certified Yacht and Small Craft Marine Surveyor',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Yacht Survey Tips', href: '/yacht-survey-tips' },
    {
      label: 'Plan a Pre-Purchase Yacht Sea Trial',
      href: '/yacht-survey-tips/plan-pre-purchase-yacht-sea-trial',
    },
  ],
  introduction: {
    id: 'sea-trial-introduction',
    label: 'Introduction',
    paragraphs: [
      'A useful pre-purchase sea trial begins before the yacht leaves the berth. The buyer, surveyor, seller or broker should agree what can be observed, who will operate the yacht, the expected route and duration, and the conditions under which the trial will be postponed or shortened. This makes the evidence easier to interpret and helps avoid discovering too late that an important system was never demonstrated.',
    ],
  },
  sections: [
    {
      id: 'purpose',
      title: 'What Is the Purpose of a Pre-Purchase Sea Trial?',
      paragraphs: [
        'A sea trial lets a buyer and surveyor observe selected systems while the yacht is operating. Depending on the vessel and agreed scope, that may include propulsion, steering, controls, instruments, charging, navigation equipment and, for a sailing yacht, sail handling. It can reveal noises, vibration, alarms, poor response or leaks that were not evident during a static inspection.',
        'All Yacht Service describes the sea trial as a way to assess propulsion, steering, instrumentation and selected systems under realistic operating conditions. The Royal Yachting Association also treats a sea trial as a distinct step in buying a second-hand boat.',
        'The trial is a sample of operation on one day. It does not establish how every system will behave in all conditions, and it does not replace an afloat survey or haul-out inspection when those are part of the agreed assessment.',
      ],
    },
    {
      id: 'agree-in-advance',
      title: 'What Should Be Agreed Before the Day?',
      paragraphs: [
        'Confirm the practical scope with the surveyor and the person arranging access to the yacht. A short written list is useful. It should identify which engines and controls will be run; whether a cold start is to be observed; which instruments and onboard systems are to be demonstrated; and whether sails will be hoisted if the vessel is a sailing yacht.',
        'Also agree who will be aboard, who will operate the vessel, the likely route and time available, and who will arrange fuel, marina access and any operating costs. The seller or a competent appointed skipper should operate the yacht. The buyer and surveyor can observe, ask questions and record findings without taking control of an unfamiliar vessel.',
        'Some checks may require specialist equipment or a marine engineer. Agree that need in advance rather than expecting a general sea trial to provide a full mechanical diagnosis.',
      ],
    },
    {
      id: 'weather-route-traffic',
      title: 'Why Do Weather, Route and Traffic Matter?',
      paragraphs: [
        'Wind, sea state, current, visibility and traffic affect both safety and what can be tested. A smooth-water trial may be suitable for observing engine temperatures and steering response but may tell little about behaviour in a seaway. Strong wind or heavy traffic may limit manoeuvres or sail handling.',
        'The RYA’s passage-planning guidance recommends considering route hazards, currents, weather, refuge, vessel limits and crew before departure, even for a short passage. In Spain, AEMET publishes coastal and high-seas marine forecasts that can help with the weather part of the plan. The skipper remains responsible for the operational decision on the day.',
        'Set a realistic operating area and an agreed point at which the trial will be stopped if conditions or a fault make continuing unwise. A postponed or limited trial should be documented as a limitation, not quietly treated as a complete check.',
      ],
    },
    {
      id: 'before-departure',
      title: 'What Should Be Ready Before Leaving the Berth?',
      paragraphs: [
        'The operator should confirm that the yacht is safe and prepared for the proposed run. This includes adequate fuel, suitable safety equipment, communications, a planned route and access to the systems to be demonstrated. Any known fault that affects safe operation should be disclosed and considered before departure.',
        'The surveyor may wish to see the engine compartment and bilges before starting, then compare them after the run for new leaks, fluid movement or unusual heat. If a cold start is part of the agreed scope, the engine should not be warmed beforehand without that being recorded. Do not turn a trial into an improvised repair session at the dock.',
      ],
    },
    {
      id: 'useful-observations',
      title: 'Which Observations Make the Trial Useful?',
      paragraphs: [
        'The exact sequence depends on the yacht, weather and skipper, but a planned trial can allow observation of:',
      ],
      items: [
        'Engine starting, idle quality and instrument indications',
        'Ahead and astern engagement and low-speed manoeuvring',
        'Steering response in both directions',
        'Engine behaviour at suitable steady operating speeds',
        'Changes in noise, vibration, smoke or temperature',
        'Alarms, gauges and navigation equipment',
        'Charging and other selected onboard systems',
        'Sail hoisting and handling, if agreed and conditions permit',
      ],
      closingParagraphs: [
        'Record when a concern occurs: the approximate speed or engine setting, direction of turn, load, sea state and duration may all help a specialist investigate later. A single symptom does not establish a cause. For example, vibration may involve a propeller, shaft, engine mounts, alignment or another component.',
      ],
    },
    {
      id: 'duration',
      title: 'How Long Should a Sea Trial Last?',
      paragraphs: [
        'There is no useful universal duration for every yacht. The plan should allow enough time for the agreed observations and for machinery to reach normal operation, while staying within safe weather and traffic conditions. A brief harbour loop may be all that is possible on a particular day, but its limited scope should be clear in the report.',
        'The purpose is not to force the yacht through extreme conditions. The skipper should operate within the vessel’s limits and stop a test that creates an avoidable risk. If a system cannot be assessed under the available conditions, the buyer can consider a later demonstration or specialist check.',
      ],
    },
    {
      id: 'after-return',
      title: 'What Should Be Recorded After Returning?',
      paragraphs: [
        'Compare the pre-departure and post-trial condition of accessible machinery spaces and bilges. Note any new fluid, odour, heat, alarm, vibration or control problem. Record the weather, sea state, route, approximate running time and which agreed checks were completed.',
        'Ask the surveyor to distinguish observations from explanations. “Vibration increased at a particular engine setting” is an observation; a bent shaft is only one possible explanation and would need supporting evidence. Keep a list of tests that were not carried out and why.',
      ],
    },
    {
      id: 'whole-survey',
      title: 'How Does the Sea Trial Fit with the Rest of the Survey?',
      paragraphs: [
        'The static inspection, haul-out and sea trial answer different questions. An afloat inspection gives access to internal structure and onboard systems. Haul-out exposes the underwater hull and appendages. The sea trial shows how selected systems behave while operating. All Yacht Service recommends considering afloat and out-of-water access together where possible for a comprehensive pre-purchase assessment.',
        'A clear scope prevents the buyer from assuming that a successful sea trial proves the yacht is free of hidden defects. The survey report should state what was observed, what was inaccessible and what deserves further investigation before purchase.',
      ],
    },
    {
      id: 'sea-trial-faq',
      title: 'Frequently Asked Questions',
      paragraphs: [],
      subsections: [
        {
          id: 'who-operates',
          title:
            'Should the Buyer Steer or Operate the Yacht During the Sea Trial?',
          paragraphs: [
            'The seller or a competent appointed skipper should normally operate the yacht. The buyer and surveyor can observe and discuss findings. Any change in who operates the vessel should be agreed before the trial.',
          ],
        },
        {
          id: 'haul-out',
          title: 'Can a Sea Trial Replace a Haul-Out Survey?',
          paragraphs: [
            'No. A sea trial cannot show the underwater hull, keel, propeller, shaft or other submerged components in the way a haul-out inspection can. The two assessments provide different evidence.',
          ],
        },
        {
          id: 'bad-weather',
          title: 'What if the Weather Is Unsuitable?',
          paragraphs: [
            'The skipper should decide whether departure is safe. If conditions prevent an agreed check, record the limitation and consider rescheduling or arranging a later demonstration.',
          ],
        },
        {
          id: 'reliability',
          title: 'Does a Trouble-Free Trial Prove the Yacht Is Reliable?',
          paragraphs: [
            'No. It shows how the observed systems behaved during that trial. Hidden defects, intermittent faults and future failures may still exist.',
          ],
        },
      ],
    },
  ],
  keyPoint: {
    id: 'sea-trial-key-point',
    title: 'Surveyor’s Key Point',
    body: 'Agree the sea-trial plan before departure. Know who will operate the yacht, what will be demonstrated, what conditions would limit the run and how missing checks will be recorded. The trial is most useful when its observations can be compared with the static survey, haul-out findings and maintenance records.',
  },
  authorBio: {
    id: 'sea-trial-author',
    title: 'About the Author',
    paragraphs: [
      'Aleksandrs Tolkacovs is an IIMS-Certified Yacht and Small Craft Marine Surveyor and licensed captain. He has more than 20 years of engineering, quality-assurance and management experience, alongside practical yacht-operation experience.',
    ],
  },
  sources: {
    id: 'sea-trial-sources',
    title: 'Sources and Further Reading',
    links: [
      {
        label: 'RYA — Boat Buying Made Easy',
        href: 'https://www.rya.org.uk/members-legal-advice/buying-owning/boat-buying-made-easy/',
      },
      {
        label: 'RYA — Passage Planning',
        href: 'https://www.rya.org.uk/water-safety/passage-planning-and-navigation/passage-planning/',
      },
      {
        label: 'AEMET — Marine Forecasts',
        href: 'https://www.aemet.es/en/eltiempo/prediccion/maritima?area=and2&opc3=0',
      },
    ],
  },
  relatedServices: [
    {
      title: 'Pre-Purchase Yacht Survey',
      description:
        'Independent assessment of a yacht before purchase, with an agreed sea-trial scope when practical.',
      href: '/pre-purchase-survey',
    },
  ],
  relatedArticles: [
    {
      label: 'Check Yacht Steering Before You Trust It',
      href: '/yacht-survey-tips/check-yacht-steering',
    },
    {
      label: 'Propeller and Shaft Inspection',
      href: '/yacht-survey-tips/propeller-shaft-inspection',
    },
    { label: 'All Yacht Survey Tips', href: '/yacht-survey-tips' },
  ],
  finalCta: {
    heading: 'Planning to Buy a Yacht in Spain or the Mediterranean?',
    body: 'All Yacht Service provides independent pre-purchase yacht surveys. A sea trial can be included in the agreed scope when access, crew and conditions permit.',
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
    title: 'Planning a Pre-Purchase Yacht Sea Trial',
    description:
      'Agree scope, skipper, route and weather limits before departure so a pre-purchase sea trial provides useful, clearly bounded observations.',
    href: '/yacht-survey-tips/plan-pre-purchase-yacht-sea-trial',
    category: 'Pre-Purchase Checks · Sea Trial Preparation',
    status: 'Published',
    publicationDate: '10 November 2026',
    publicationDateTime: '2026-11-10',
    readingTime: '6 minutes',
    image: articleImage,
  } satisfies SurveyTipsArticle,
} as const satisfies SurveyTipArticlePageData;
