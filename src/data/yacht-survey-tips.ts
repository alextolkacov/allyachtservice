import { checkYachtSeacocksArticle } from './yacht-survey-tips/check-yacht-seacocks';
import { checkYachtSteeringArticle } from './yacht-survey-tips/check-yacht-steering';
import { deckMoistureSoftSpotsArticle } from './yacht-survey-tips/deck-moisture-soft-spots';
import { shinyHullArticle } from './yacht-survey-tips/shiny-hull';
import type {
  SurveyTipsCategory,
  SurveyTipsImage,
} from './yacht-survey-tips/types';

const surveyInspectionImage = {
  src: '/images/yacht-survey-tips-background.jpg',
  alt: 'Yacht hull reflected in calm marina water',
  width: 1536,
  height: 1024,
} as const satisfies SurveyTipsImage;

export const yachtSurveyTipsPage = {
  title: 'Yacht Survey Tips and Expert Advice | All Yacht Service',
  description:
    'Practical yacht survey tips covering common defects, inspection methods and buying advice from an independent yacht surveyor in Spain.',
  pathname: '/yacht-survey-tips',
  heading: 'Yacht Survey Tips and Expert Advice',
  summary:
    'Practical guidance from an independent yacht surveyor to help owners and buyers better understand yacht condition, common defects and survey preparation.',
  heroImage: surveyInspectionImage,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Yacht Survey Tips', href: '/yacht-survey-tips' },
  ],
  primaryCta: {
    label: 'Request a Yacht Survey Quote',
    href: '/contact?service=pre-purchase-survey',
  },
  secondaryCta: {
    label: 'View Survey Services',
    href: '/pre-purchase-survey',
  },
  featuredArticle: deckMoistureSoftSpotsArticle.card,
  categories: [
    {
      title: 'Structural Condition',
      description:
        'Hull, decks, moisture, laminate condition, osmosis and structural observations.',
      futureArticles: [
        'Fiberglass osmosis',
        'Hull inspection basics',
        'Keel-to-hull joint observations',
      ],
    },
    {
      title: 'Machinery and Systems',
      description:
        'Engines, electrical systems, plumbing and onboard equipment.',
      futureArticles: [
        'Engine checks before purchase',
        'Common electrical issues',
        'Generator inspection',
      ],
    },
    {
      title: 'Sailing Yacht Systems',
      description: 'Masts, rigging, sails and deck hardware.',
      futureArticles: [
        'Standing rigging inspection',
        'Mast and boom checks',
        'Sail condition assessment',
      ],
    },
    {
      title: 'Underwater and Hull Condition',
      description:
        'Keels, rudders, propellers, shafts and underwater equipment.',
      futureArticles: [
        'Hull-out survey',
        'Propeller and shaft inspection',
        'Antifouling considerations',
      ],
    },
    {
      title: 'Survey Preparation',
      description:
        'How owners and buyers can prepare for a successful yacht survey.',
      futureArticles: [
        'Documents to prepare',
        'What happens during a survey',
        'Sea trial preparation',
      ],
    },
  ] satisfies readonly SurveyTipsCategory[],
  latestArticles: [
    checkYachtSteeringArticle.card,
    checkYachtSeacocksArticle.card,
    shinyHullArticle.card,
    deckMoistureSoftSpotsArticle.card,
  ],
  guideReasons: [
    'Independent technical perspective',
    'Practical experience with sailing and motor yachts',
    'Understanding of common defects found during inspections',
    'Clear explanations without unnecessary technical language',
    'Guidance for buyers, owners and yacht enthusiasts',
  ],
  relatedServices: [
    {
      title: 'Pre-Purchase Yacht Survey',
      description:
        'An independent condition assessment before completing the purchase of a yacht.',
      href: '/pre-purchase-survey',
    },
    {
      title: 'Insurance Condition Survey',
      description:
        'Professional inspection and reporting for insurance applications and renewals.',
      href: '/insurance-survey',
    },
    {
      title: 'Yacht Valuation and Damage Assessment',
      description:
        'Independent valuation and damage reporting for an agreed purpose and scope.',
      href: '/valuation-damage-survey',
    },
  ],
  finalCta: {
    heading: 'Planning a Yacht Survey?',
    body: 'If you are buying a yacht, renewing insurance or need an independent assessment, contact All Yacht Service to discuss your requirements.',
    primaryLink: {
      label: 'Request a Survey Quote',
      href: '/contact?service=pre-purchase-survey',
    },
    secondaryLink: {
      label: 'WhatsApp Us',
      href: 'https://wa.me/34695718540',
    },
  },
} as const;
