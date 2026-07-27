import { siteConfig } from './site';

export const prePurchaseSurveyCalculatorPage = {
  title: 'Yacht Survey Cost Calculator | All Yacht Service',
  description:
    'Calculate an approximate pre-purchase yacht survey cost based on vessel length, yacht type, inspection scope and selected services.',
  pathname: '/pre-purchase-survey-calculator',
  eyebrow: 'Survey planning tool',
  heading: 'Pre-Purchase Yacht Survey Cost Calculator',
  summary:
    'Calculate an approximate survey fee based on yacht length, vessel type and the required inspection scope.',
  heroImage: {
    src: '/images/pre-purchase-survey.webp',
    alt: 'Marine surveyor checking a yacht during a pre-purchase inspection',
    width: 1200,
    height: 674,
  },
  socialImageAlt:
    'Pre-purchase yacht survey cost calculator and inspection planning',
  breadcrumbs: [
    { label: 'Home', href: '/' },
    {
      label: 'Pre-Purchase Yacht Survey',
      href: '/pre-purchase-survey',
    },
    {
      label: 'Survey Cost Calculator',
      href: '/pre-purchase-survey-calculator',
    },
  ],
  primaryCta: {
    label: 'Start Calculation',
    href: '#survey-calculator',
    analyticsEvent: 'survey-calculator-start',
  },
  secondaryCta: {
    label: 'View Pre-Purchase Survey Service',
    href: '/pre-purchase-survey',
  },
  includedItems: [
    'Base pre-purchase condition survey',
    'Afloat or hull-out inspection',
    'Sea trial',
    'Engine inspection',
    'Rigging and sails inspection for sailing yachts',
    'Full inspection package with the approved package discount',
  ],
  quotationFactors: [
    'Vessel age',
    'Construction material',
    'Number and type of engines',
    'Unusual or complex systems',
    'Catamaran or multihull configuration',
    'Rig access',
    'Vessel accessibility',
    'Location and travel',
    'Marina and boatyard arrangements',
    'Specialist inspections',
    'Survey urgency',
    'Documentation requirements',
    'Vessel condition before inspection',
  ],
  nextSteps: [
    {
      title: 'Calculate the estimate',
      description:
        'Enter the yacht length, vessel type and the inspection scope you are considering.',
    },
    {
      title: 'Review the selected survey scope',
      description:
        'Check the approximate fee, included inspections, exclusions and estimate reference.',
    },
    {
      title: 'Request a formal quotation',
      description:
        'Transfer the result to the Contact form and add the remaining yacht and scheduling details.',
    },
  ],
  relatedServices: [
    {
      title: 'Pre-Purchase Yacht Survey',
      description:
        'Independent inspection and practical reporting before completing a yacht purchase.',
      href: '/pre-purchase-survey',
    },
    {
      title: 'Yacht Buyer Representation',
      description:
        'Independent technical support before, during and after the yacht-buying process.',
      href: '/buyer-representation',
    },
    {
      title: 'Insurance Condition Yacht Survey',
      description:
        'Condition assessment and reporting for insurance applications and policy renewals.',
      href: '/insurance-survey',
    },
  ],
  finalCta: {
    heading: 'Ready to Arrange Your Yacht Survey?',
    body: 'Transfer your calculator result to the enquiry form and send us the yacht details. We will review the requirements and confirm the formal scope and quotation.',
    links: [
      {
        label: 'Request a Formal Quotation',
        href: '/contact?service=pre-purchase-survey',
        analyticsEvent: 'survey-calculator-quote-request',
        surveyQuoteLink: true,
      },
      {
        label: `WhatsApp ${siteConfig.contact.whatsapp}`,
        href: siteConfig.contact.whatsappHref,
        external: true,
        analyticsEvent: 'survey-calculator-whatsapp',
      },
    ],
  },
} as const;
