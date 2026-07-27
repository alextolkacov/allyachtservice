import { siteConfig } from './site';

export const yachtDeliveryPage = {
  title: 'Yacht Delivery in Spain & the Mediterranean | All Yacht Service',
  description:
    'Professional yacht delivery for sailing yachts, motor yachts and catamarans across Spain and the Mediterranean, led by a licensed captain.',
  pathname: '/yacht-delivery',
  eyebrow: 'Yacht delivery and relocation',
  heading: 'Professional Yacht Delivery in Spain & the Mediterranean',
  summary:
    'Safe, carefully planned transfers for sailing yachts, motor yachts and catamarans up to 24 metres.',
  heroImage: {
    src: '/images/yacht-delivery.webp',
    alt: 'Sailing yacht under way during a professional yacht delivery',
    width: 1280,
    height: 719,
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Yacht Delivery', href: '/yacht-delivery' },
  ],
  primaryCta: {
    label: 'Request a Yacht Delivery Quote',
    href: '/#contact',
  },
  secondaryCta: {
    label: 'WhatsApp Us',
    href: siteConfig.contact.whatsappHref,
    external: true,
  },
  relatedServices: [
    {
      title: 'Pre-Purchase Yacht Survey',
      description:
        'Independent inspection of a yacht’s condition before completing a purchase.',
      href: '/pre-purchase-survey',
    },
    {
      title: 'Buyer Representation',
      description:
        'Independent technical support before, during and after the purchase of a yacht.',
      href: '/buyer-representation',
    },
  ],
  finalCta: {
    heading: 'Planning a Yacht Delivery?',
    body: 'Tell us the yacht type, length, current location, destination and preferred dates. We will review the route and delivery requirements and provide a tailored quotation.',
    links: [
      {
        label: 'Request a Yacht Delivery Quote',
        href: '/#contact',
      },
      {
        label: `WhatsApp ${siteConfig.contact.whatsapp}`,
        href: siteConfig.contact.whatsappHref,
        external: true,
      },
      {
        label: `Email ${siteConfig.contact.email}`,
        href: siteConfig.contact.emailHref,
      },
    ],
  },
  areaServed: [
    'Spain',
    'Balearic Islands',
    'France',
    'Italy',
    'Greece',
    'Mediterranean',
  ],
} as const;
