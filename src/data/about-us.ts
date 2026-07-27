import { siteConfig } from './site';
import { createContactHref } from '../utils/contact';

export const aboutUsPage = {
  title: 'About All Yacht Service | Yacht Surveyor in Spain',
  description:
    'Meet Aleksandrs Tolkacovs, an IIMS-certified yacht and small craft marine surveyor and licensed captain based in Altea, Spain.',
  pathname: '/about-us',
  eyebrow: 'Professional yacht services',
  heading: 'About All Yacht Service',
  summary:
    'Independent yacht surveying, technical support and professional yacht delivery based at Marina Greenwich in Altea, Spain.',
  // TODO: Replace this stock-style image with an approved real marine-services photograph.
  heroImage: {
    src: '/images/about-all-yacht-service.webp',
    alt: 'Marine yacht services and technical support in Spain',
    width: 1280,
    height: 719,
  },
  socialImageAlt:
    'All Yacht Service yacht surveying and technical support in Spain',
  // TODO: Replace this stock-style image with an approved photograph of professional work or Aleksandrs.
  profileImage: {
    src: '/images/why-choose-all-yacht-service.webp',
    alt: 'Professional consultation and agreement between two people',
    width: 1280,
    height: 719,
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'About All Yacht Service', href: '/about-us' },
  ],
  primaryCta: {
    label: 'Discuss Your Requirements',
    href: createContactHref({ source: 'about-us-hero' }),
  },
  secondaryCta: {
    label: 'WhatsApp Us',
    href: siteConfig.contact.whatsappHref,
    external: true,
  },
  operatingAreas: [
    'The Mediterranean',
    'The Baltic Sea',
    'The English Channel',
    'The Bay of Biscay',
  ],
  qualifications: [
    {
      title: 'IIMS Certification',
      description: 'IIMS-Certified Yacht and Small Craft Marine Surveyor.',
    },
    {
      title: 'Yacht & Small Craft Professional Qualification',
      description:
        'Professional training focused on yacht and small-craft surveying.',
    },
    {
      title: 'Licensed Captain',
      description:
        'Qualified to operate sailing and motor yachts within the confirmed licence scope.',
    },
    {
      title: 'Engineering Background',
      description:
        'More than 20 years of experience involving engineering, technical processes and practical problem-solving.',
    },
    {
      title: 'Quality Assurance',
      description:
        'Extensive experience in structured inspection, evidence gathering, defect analysis, risk assessment and reporting.',
    },
    {
      title: 'Management Experience',
      description:
        'Experience coordinating people, priorities, quality standards and complex technical work.',
    },
    {
      title: 'Yacht Delivery and Regatta Experience',
      description:
        'Practical experience operating yachts during deliveries, passages and regattas.',
    },
  ],
  services: [
    {
      title: 'Pre-Purchase Yacht Surveys',
      description:
        'Independent assessment of a yacht’s accessible structure, systems, machinery, equipment and general condition before purchase.',
      href: '/pre-purchase-survey',
    },
    {
      title: 'Insurance Condition Yacht Surveys',
      description:
        'Condition assessment and professional reporting for insurance applications, policy renewals and changes of ownership.',
      href: '/insurance-survey',
    },
    {
      title: 'Yacht Buyer Representation',
      description:
        'Independent technical support before, during and after the purchase of a yacht.',
      href: '/buyer-representation',
    },
    {
      title: 'Professional Yacht Delivery',
      description:
        'Carefully planned relocation of sailing yachts, motor yachts and catamarans throughout Spain and the Mediterranean.',
      href: '/yacht-delivery',
    },
    {
      title: 'Valuation and Damage Assessment',
      description:
        'Independent valuation and assessment of vessel condition or damage where included in the agreed professional scope.',
    },
  ],
  approachPoints: [
    'Clear agreement on the scope before the assignment',
    'Independent and practical technical assessment',
    'Careful inspection of safely accessible areas',
    'Photographic evidence where relevant',
    'Clear explanation of important findings',
    'Prioritised recommendations',
    'Transparent limitations',
    'Practical communication before and after the inspection',
    'Reports normally issued within 48 hours where applicable',
  ],
  supportedClients: [
    'Private yacht buyers',
    'Current yacht owners',
    'International buyers purchasing in Spain or the Mediterranean',
    'Insurance clients',
    'Insurance brokers and underwriters',
    'Yacht brokers requiring independent survey support',
    'Boatyards and repair facilities where an independent report is required',
    'Owners arranging yacht relocation',
    'Buyers planning repair, maintenance or refit work',
  ],
  coverage: [
    'Altea',
    'Alicante',
    'Calpe',
    'Dénia',
    'Jávea',
    'Moraira',
    'Torrevieja',
    'Valencia',
    'Barcelona',
    'Costa Blanca',
    'The Spanish Mediterranean coast',
    'Mainland Spain',
    'The Balearic Islands where required',
  ],
  whyChoose: [
    'Independent, client-focused approach',
    'IIMS-Certified Yacht and Small Craft Marine Surveyor',
    'Yacht & Small Craft Professional Qualification',
    'Licensed captain',
    'Yacht delivery and regatta experience',
    'More than 20 years of engineering, quality-assurance and management experience',
    'Clear, detailed and practical reporting',
    'Transparent scope and limitations',
    'Relevant commercial relationships disclosed before appointment',
    'Based at Marina Greenwich in Altea',
    'Operating throughout Spain and the Mediterranean',
    'European and international assignments available by arrangement',
  ],
  relatedServices: [
    {
      title: 'Pre-Purchase Yacht Survey',
      description:
        'Independent assessment of a yacht’s condition before completing a purchase.',
      href: '/pre-purchase-survey',
    },
    {
      title: 'Insurance Condition Yacht Survey',
      description:
        'Condition assessment and reporting for insurance applications and policy renewals.',
      href: '/insurance-survey',
    },
    {
      title: 'Yacht Buyer Representation',
      description:
        'Technical support before, during and after the purchase of a yacht.',
      href: '/buyer-representation',
    },
    {
      title: 'Yacht Delivery',
      description:
        'Professional yacht relocation throughout Spain and the Mediterranean.',
      href: '/yacht-delivery',
    },
  ],
  finalCta: {
    heading: 'Discuss Your Yacht Requirements',
    body: 'Tell us about the yacht, its location and the service you require. We will review the available information and provide a tailored quotation.',
    links: [
      {
        label: 'Contact All Yacht Service',
        href: createContactHref({ source: 'about-us-final-cta' }),
      },
      {
        label: `WhatsApp ${siteConfig.contact.whatsapp}`,
        href: siteConfig.contact.whatsappHref,
        external: true,
      },
      {
        label: siteConfig.contact.email,
        href: siteConfig.contact.emailHref,
      },
    ],
  },
  person: {
    id: '/about-us#aleksandrs-tolkacovs',
    name: siteConfig.surveyor,
    jobTitle:
      'IIMS-Certified Yacht and Small Craft Marine Surveyor and Licensed Captain',
    knowsAbout: [
      'Yacht surveying',
      'Pre-purchase yacht surveys',
      'Insurance condition yacht surveys',
      'Yacht buyer representation',
      'Yacht delivery',
      'Yacht condition assessment',
      'Marine quality assurance',
    ],
  },
} as const;
