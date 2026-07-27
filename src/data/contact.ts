import { contactServiceOptions } from '../utils/contact';
import { siteConfig } from './site';

export const contactPage = {
  title: 'Contact a Yacht Surveyor in Spain | All Yacht Service',
  description:
    'Contact All Yacht Service in Altea for yacht surveys, buyer representation and yacht delivery across Spain and the Mediterranean.',
  pathname: '/contact',
  heading: 'Contact All Yacht Service',
  eyebrow: 'Survey enquiries and quotations',
  summary:
    'Tell us about the yacht, its location and the service you require. We will review the details and reply with the appropriate next steps.',
  heroImage: {
    src: '/images/hero-sailing-yacht.webp',
    alt: 'Sailing yacht in the Mediterranean near the All Yacht Service area',
    width: 1280,
    height: 853,
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Contact All Yacht Service', href: '/contact' },
  ],
  services: contactServiceOptions,
  responseNote:
    'Enquiries are normally answered during working hours. Survey availability and final quotations are confirmed individually.',
  whatToInclude: [
    'The service you require',
    'Yacht type, length and age where known',
    'Current vessel location',
    'Preferred survey or delivery dates',
    'Any insurer form, listing or relevant photographs',
  ],
  directContact: {
    phone: siteConfig.contact.phone,
    phoneHref: siteConfig.contact.phoneHref,
    whatsapp: siteConfig.contact.whatsapp,
    whatsappHref: siteConfig.contact.whatsappHref,
    email: siteConfig.contact.email,
    emailHref: siteConfig.contact.emailHref,
  },
} as const;
