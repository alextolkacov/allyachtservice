import { siteConfig } from './site';

export const yachtDeliveryCalculatorPage = {
  title: 'Yacht Delivery Cost Calculator | All Yacht Service',
  description:
    'Calculate an approximate sea-route distance and starting professional yacht delivery fee across Spain and the Mediterranean.',
  pathname: '/yacht-delivery-calculator',
  eyebrow: 'Delivery planning tool',
  heading: 'Yacht Delivery Cost Calculator',
  summary:
    'Calculate an approximate sea-route distance and starting professional delivery fee for a yacht passage across Spain and the Mediterranean.',
  heroImage: {
    src: '/images/yacht-delivery.webp',
    alt: 'Yacht passage planning for professional delivery in the Mediterranean',
    width: 1280,
    height: 719,
  },
  socialImageAlt:
    'Yacht delivery route and cost planning across the Mediterranean',
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Yacht Delivery', href: '/yacht-delivery' },
    {
      label: 'Delivery Cost Calculator',
      href: '/yacht-delivery-calculator',
    },
  ],
  primaryCta: {
    label: 'Calculate Delivery Cost',
    href: '#delivery-calculator',
    analyticsEvent: 'delivery-calculator-start',
  },
  secondaryCta: {
    label: 'View Yacht Delivery Service',
    href: '/yacht-delivery',
  },
  quotationFactors: [
    'Exact yacht length and type',
    'Yacht condition and readiness',
    'Average operational performance',
    'Fuel capacity and range',
    'Required delivery crew',
    'Route and offshore exposure',
    'Seasonal weather',
    'Port and border formalities',
    'Preparation and handover requirements',
    'Urgency',
    'Crew travel',
    'Marina access',
    'Waiting time',
    'Repairs or technical support required before departure',
  ],
  separatelyQuoted: [
    'Fuel and lubricants',
    'Provisions',
    'Berthing and marina fees',
    'Crew travel and accommodation',
    'Customs, permits and agents',
    'Canal and lock fees',
    'Weather or owner-requested waiting time',
    'Repairs, spare parts and technical work',
    'Haul-out and third-party services',
  ],
  nextSteps: [
    {
      title: 'Calculate the approximate route and starting fee',
      description:
        'Select the departure, destination, yacht details and expected delivery conditions.',
    },
    {
      title: 'Review the route assumptions and exclusions',
      description:
        'Check the approximate corridor, distance, fee and the costs quoted separately.',
    },
    {
      title: 'Transfer the result to the Contact form',
      description:
        'Request a formal quotation and provide the remaining yacht and scheduling details.',
    },
  ],
  relatedServices: [
    {
      title: 'Yacht Delivery',
      description:
        'Professional yacht delivery and relocation throughout Spain and the Mediterranean.',
      href: '/yacht-delivery',
      linkLabel: 'View service',
    },
    {
      title: 'Pre-Purchase Yacht Survey',
      description:
        'Independent inspection and practical reporting before completing a yacht purchase.',
      href: '/pre-purchase-survey',
      linkLabel: 'View service',
    },
    {
      title: 'Yacht Buyer Representation',
      description:
        'Independent technical support before, during and after the yacht-buying process.',
      href: '/buyer-representation',
      linkLabel: 'View service',
    },
    {
      title: 'Pre-Purchase Survey Cost Calculator',
      description:
        'Calculate an approximate professional fee for a pre-purchase yacht survey.',
      href: '/pre-purchase-survey-calculator',
      linkLabel: 'Open calculator',
    },
  ],
  relatedHeading: 'Related Services and Tools',
  finalCta: {
    heading: 'Ready to Plan Your Yacht Delivery?',
    body: 'Transfer your calculator result to the enquiry form and provide the yacht details. We will review the route, vessel condition, required crew and timing before confirming the formal delivery scope and quotation.',
    links: [
      {
        label: 'Request a Formal Quotation',
        href: '/contact?service=yacht-delivery',
        analyticsEvent: 'delivery-calculator-quote-request',
        deliveryQuoteLink: true,
      },
      {
        label: `WhatsApp ${siteConfig.contact.whatsapp}`,
        href: siteConfig.contact.whatsappHref,
        external: true,
        analyticsEvent: 'delivery-calculator-whatsapp',
      },
    ],
  },
} as const;
