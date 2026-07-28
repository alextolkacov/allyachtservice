import { siteConfig } from './site';

interface PageImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface BrokerageDestination {
  title: string;
  description: string;
  label: string;
  href: string;
  image: PageImage;
}

interface ContentItem {
  title: string;
  description: string;
}

export const yachtsForSalePage = {
  title: 'Yachts for Sale and Buyer Support | All Yacht Service',
  description:
    'Browse yachts for sale through Premium Yachts Spain and arrange independent buyer representation or a pre-purchase yacht survey.',
  pathname: '/yachts-for-sale',
  pageClass: 'yachts-for-sale-page',
  eyebrow: 'Yacht search and technical purchase support',
  heading: 'Yachts for Sale and Independent Buyer Support',
  summary:
    'Browse selected sailing yachts and motor yachts through Premium Yachts Spain, with independent survey and technical support available from All Yacht Service before purchase.',
  heroImage: {
    src: '/images/yachts-for-sale-marina.jpg',
    alt: 'Yachts in a Mediterranean marina available for professional buyer inspection',
    width: 2048,
    height: 1536,
  },
  socialImageAlt:
    'Yachts in a Mediterranean marina with independent buyer support available',
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Yachts for Sale', href: '/yachts-for-sale' },
  ],
  primaryCta: {
    label: 'Browse Yachts for Sale',
    href: 'https://www.premiumyachts.es/yacht-brokerage',
    external: true,
  },
  secondaryCta: {
    label: 'Request Buyer Support',
    href: '/contact?service=buyer-representation',
  },
  brokerageDestinations: [
    {
      title: 'All Brokerage Yachts',
      description:
        'View the current brokerage overview and access the full selection presented by Premium Yachts Spain.',
      label: 'View Yacht Brokerage',
      href: 'https://www.premiumyachts.es/yacht-brokerage',
      image: {
        src: '/images/yachts-for-sale-marina.jpg',
        alt: 'Sailing yachts and motor yachts moored in a Mediterranean marina',
        width: 2048,
        height: 1536,
      },
    },
    {
      title: 'Sailing Yachts for Sale',
      description:
        'Browse selected cruising yachts, performance sailing yachts and sailing catamarans currently presented by Premium Yachts Spain.',
      label: 'Browse Sailing Yachts',
      href: 'https://www.premiumyachts.es/yacht-brokerage/sailing-boats',
      image: {
        src: '/images/yachts-for-sale-sailing.jpg',
        alt: 'Sailing yacht anchored in a Mediterranean bay',
        width: 1280,
        height: 719,
      },
    },
    {
      title: 'Motor Yachts and Power Boats',
      description:
        'Browse selected motor yachts, power boats and motor catamarans currently presented by Premium Yachts Spain.',
      label: 'Browse Power Boats',
      href: 'https://www.premiumyachts.es/yacht-brokerage/power-boats',
      image: {
        src: '/images/yachts-for-sale-power.jpg',
        alt: 'Motor yacht cruising near a Mediterranean coastline',
        width: 1100,
        height: 618,
      },
    },
  ] satisfies readonly BrokerageDestination[],
  buyerSupportItems: [
    'Initial review of yacht particulars',
    'Technical questions before viewing',
    'Buyer-side inspection planning',
    'Attendance at a yacht viewing',
    'Pre-purchase yacht survey',
    'Haul-out inspection',
    'Sea trial support',
    'Machinery and system observations',
    'Review of available maintenance information',
    'Identification of areas requiring specialist inspection',
    'Explanation of material findings',
    'Support in understanding repair implications',
    'Post-survey technical consultation',
  ],
  conflictItems: [
    'The commercial relationship is disclosed before appointment',
    'The commissioning client and intended purpose are confirmed',
    'The survey scope and report reliance are agreed',
    'Relevant commercial interests are recorded where appropriate',
    'Technical findings are reported according to the agreed survey scope',
    'The buyer may choose another surveyor',
    'The appointment may be declined where independence cannot be appropriately maintained',
  ],
  buyerJourney: [
    {
      title: 'Browse Available Yachts',
      description:
        'Review the current listings on the Premium Yachts Spain website or through another broker.',
    },
    {
      title: 'Request Initial Buyer Support',
      description:
        'Send All Yacht Service the yacht link, location and your intended purchase timetable.',
    },
    {
      title: 'Define the Technical Scope',
      description:
        'Agree whether you require buyer representation, a pre-purchase survey, haul-out, sea trial or specialist support.',
    },
    {
      title: 'Inspect and Review',
      description:
        'The yacht is inspected according to the agreed scope, with material findings documented and explained.',
    },
    {
      title: 'Make Your Own Purchase Decision',
      description:
        'Use the survey report, specialist advice, commercial information and legal documentation to make an informed decision.',
    },
  ] satisfies readonly ContentItem[],
  documentItems: [
    'Vessel registration',
    'Ownership information where available',
    'Builder and model details',
    'Hull identification information',
    'Engine and machinery records',
    'Maintenance history',
    'Refit invoices',
    'Previous survey reports where released',
    'Evidence of major repairs',
    'Insurance-claim information where disclosed',
    'Equipment inventory',
    'VAT or tax documentation where relevant',
    'CE documentation where applicable',
    'Manuals and service records',
    'Current listing particulars',
  ],
  surveyReasons: [
    'Listing particulars may be incomplete or outdated',
    'Cosmetic presentation does not confirm structural condition',
    'Equipment may not operate as described',
    'Previous repairs may require further review',
    'Maintenance requirements may affect ownership cost',
    'Haul-out may reveal findings not visible afloat',
    'Sea trial may identify operational concerns',
    'A written report helps the buyer understand material findings',
  ],
  relatedServices: [
    {
      title: 'Buyer Representation',
      description:
        'Independent technical support throughout the yacht-purchase process.',
      href: '/buyer-representation',
      linkLabel: 'Learn about buyer representation',
    },
    {
      title: 'Pre-Purchase Yacht Survey',
      description:
        'An independent assessment of the accessible condition of a yacht before purchase.',
      href: '/pre-purchase-survey',
      linkLabel: 'View pre-purchase surveys',
    },
    {
      title: 'Pre-Purchase Survey Cost Calculator',
      description:
        'Prepare an initial survey-cost estimate before requesting a quotation.',
      href: '/pre-purchase-survey-calculator',
      linkLabel: 'Calculate survey cost',
    },
    {
      title: 'Yacht Valuation and Damage Assessment',
      description:
        'Condition-based valuation and damage reporting for an agreed purpose.',
      href: '/valuation-damage-survey',
      linkLabel: 'View valuation services',
    },
    {
      title: 'Yacht Survey Tips',
      description:
        'Practical technical guidance for buyers preparing to inspect a yacht.',
      href: '/yacht-survey-tips',
      linkLabel: 'Read survey tips',
    },
  ],
  finalCta: {
    heading: 'Found a Yacht You Would Like to Inspect?',
    body: 'Send us the yacht listing link, vessel type, length, location and your preferred inspection timeframe. We will review the request and propose an appropriate buyer-support or survey scope.',
    note: 'Live listings, prices and availability remain controlled by the listing broker.',
    links: [
      {
        label: 'Request Buyer Support',
        href: '/contact?service=buyer-representation',
      },
      {
        label: 'Request a Pre-Purchase Survey',
        href: '/contact?service=pre-purchase-survey',
      },
      {
        label: `WhatsApp ${siteConfig.contact.whatsapp}`,
        href: siteConfig.contact.whatsappHref,
        external: true,
      },
      {
        label: 'Browse Current Yachts',
        href: 'https://www.premiumyachts.es/yacht-brokerage',
        external: true,
      },
    ],
  },
} as const;
