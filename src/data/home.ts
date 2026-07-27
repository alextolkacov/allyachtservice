export interface HomeImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface HomeService {
  title: string;
  description: string;
  href?: string;
  image: HomeImage;
}

export const homeContent = {
  hero: {
    heading: 'All Yacht Service',
    supportingText:
      'Trusted Yacht Services Backed by Experience, Precision and Personal Attention',
    serviceLine:
      'Pre-purchase, insurance and valuation surveys, yacht delivery and buyer representation throughout Spain and the Mediterranean.',
    image: {
      src: '/images/hero-sailing-yacht.webp',
      alt: 'Sailing yacht underway at sea',
      width: 1277,
      height: 618,
    },
  },
  introduction: {
    heading: 'Independent Yacht Surveyor in Costa Blanca, Spain',
    body: 'Pre-purchase, insurance and valuation surveys, yacht delivery and buyer representation throughout Spain and the Mediterranean.',
    trustLine:
      'Services provided by an IIMS-Certified Yacht and Small Craft Marine Surveyor and Licensed Captain.',
  },
  services: [
    {
      title: 'Pre-Purchase Yacht Survey',
      description:
        'Independent inspection of the hull, structure, systems, machinery and safety equipment before purchase.',
      href: '/pre-purchase-survey',
      image: {
        src: '/images/pre-purchase-survey.webp',
        alt: 'Moisture meter used during a yacht hull inspection',
        width: 1200,
        height: 674,
      },
    },
    {
      title: 'Insurance Condition Survey',
      description:
        'Condition assessment and professional reporting prepared for insurance applications and policy renewals.',
      href: '/insurance-survey',
      image: {
        src: '/images/insurance-condition-survey.webp',
        alt: 'Sailing yachts being assessed after storm damage',
        width: 1280,
        height: 720,
      },
    },
    {
      title: 'Yacht Delivery',
      description:
        'Professional delivery of sailing yachts, motor yachts and catamarans throughout Spain and the Mediterranean.',
      href: '/yacht-delivery',
      image: {
        src: '/images/yacht-delivery.webp',
        alt: 'Professional crew preparing a sailing yacht for delivery',
        width: 1280,
        height: 719,
      },
    },
    {
      title: 'Buyer Representation',
      description:
        'Independent technical support before, during and after the purchase of a yacht.',
      href: '/buyer-representation',
      image: {
        src: '/images/buyer-representation.webp',
        alt: 'Buyer completing documentation with independent support',
        width: 1280,
        height: 719,
      },
    },
    {
      title: 'Yachts for Sale',
      description:
        'View selected new and pre-owned yachts available through Premium Yachts Spain.',
      image: {
        src: '/images/yachts-for-sale.webp',
        alt: 'Motor yacht underway near a marina',
        width: 1253,
        height: 853,
      },
    },
    {
      title: 'About All Yacht Service',
      description:
        'Independent yacht surveying and technical support based at Marina Greenwich in Altea.',
      href: '/about-us',
      image: {
        src: '/images/about-all-yacht-service.webp',
        alt: 'Teamwork supporting a coordinated technical service',
        width: 1280,
        height: 719,
      },
    },
  ] satisfies readonly HomeService[],
  onlineTools: {
    heading: 'Online Tools',
    introduction:
      'Use our planning tools to prepare an initial service estimate before contacting All Yacht Service.',
    items: [
      {
        title: 'Pre-Purchase Survey Cost Calculator',
        description:
          'Calculate an approximate survey fee based on yacht length, vessel type and inspection scope.',
        label: 'Calculate Your Survey Cost',
        href: '/pre-purchase-survey-calculator',
      },
      {
        title: 'Yacht Delivery Cost Calculator',
        description:
          'Calculate an approximate sea-route distance and starting professional delivery fee.',
        label: 'Calculate Your Delivery Cost',
        href: '/yacht-delivery-calculator',
      },
    ],
  },
  whyChooseUs: {
    heading: 'Why Choose All Yacht Service?',
    introduction:
      'Independent technical guidance, practical marine experience and clear reporting for yacht owners and buyers.',
    points: [
      'Independent, buyer-focused approach',
      'IIMS-Certified Yacht and Small Craft Marine Surveyor',
      'Yacht & Small Craft Professional Qualification',
      'Licensed captain with yacht delivery and regatta experience',
      'More than 20 years of experience in engineering, quality assurance and management',
      'Clear, detailed and practical survey reports',
      'Based at Marina Greenwich in Altea',
      'Operating throughout Spain and the Mediterranean',
      'Surveys and yacht deliveries elsewhere in Europe and internationally available by arrangement',
    ],
    image: {
      src: '/images/why-choose-all-yacht-service.webp',
      alt: 'Signing professional yacht survey documentation',
      width: 1280,
      height: 719,
    },
  },
  about: {
    heading: 'Experience, Precision and Personal Attention',
    paragraphs: [
      'All Yacht Service is led by Aleksandrs Tolkacovs, an IIMS-Certified Yacht and Small Craft Marine Surveyor and Licensed Captain with practical experience operating sailing and motor yachts in the Mediterranean, Baltic Sea, English Channel and Bay of Biscay.',
      'Services are supported by more than 20 years of experience in engineering, quality assurance and management.',
      'Clients receive clear, practical and unbiased reports designed to support safer and better-informed decisions.',
    ],
    image: {
      src: '/images/about-all-yacht-service.webp',
      alt: 'Coordinated professional technical support',
      width: 1280,
      height: 719,
    },
  },
} as const;
