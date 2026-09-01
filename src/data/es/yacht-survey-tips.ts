import type {
  SurveyTipsCategory,
  SurveyTipsImage,
} from '../yacht-survey-tips/types';
import { spanishCheckYachtSeacocksArticle } from './yacht-survey-tips/check-yacht-seacocks';
import { spanishCheckYachtSteeringArticle } from './yacht-survey-tips/check-yacht-steering';
import { spanishDeckMoistureSoftSpotsArticle } from './yacht-survey-tips/deck-moisture-soft-spots';
import { spanishShinyHullArticle } from './yacht-survey-tips/shiny-hull';
import { spanishStandingRiggingWarningSignsArticle } from './yacht-survey-tips/standing-rigging-warning-signs';
import { spanishYachtElectricalCorrosionArticle } from './yacht-survey-tips/yacht-electrical-corrosion';

const surveyInspectionImage = {
  src: '/images/yacht-survey-tips-background.jpg',
  alt: 'Casco de un yate reflejado en el agua tranquila de un puerto deportivo',
  width: 1536,
  height: 1024,
} as const satisfies SurveyTipsImage;

export const spanishYachtSurveyTipsPage = {
  title: 'Consejos para la inspección de yates | All Yacht Service',
  description:
    'Consejos profesionales para compradores y propietarios de yates sobre inspecciones, defectos habituales, mantenimiento y evaluación del estado.',
  pathname: '/es/yacht-survey-tips',
  heading: 'Consejos para la inspección de yates',
  summary:
    'Orientación práctica de un inspector naval independiente para ayudar a propietarios y compradores a comprender mejor el estado de un yate, los defectos habituales y la preparación de una inspección.',
  heroImage: surveyInspectionImage,
  breadcrumbs: [
    { label: 'Inicio', href: '/es' },
    {
      label: 'Consejos para la inspección de yates',
      href: '/es/yacht-survey-tips',
    },
  ],
  primaryCta: {
    label: 'Solicitar presupuesto de inspección',
    href: '/es/contact?service=pre-purchase-survey',
  },
  secondaryCta: {
    label: 'Ver servicios de inspección',
    href: '/es/pre-purchase-survey',
  },
  categories: [
    {
      title: 'Estado estructural',
      description:
        'Casco, cubiertas, humedad, estado del laminado, ósmosis y observaciones estructurales.',
      futureArticles: [
        'Ósmosis en fibra de vidrio',
        'Fundamentos de la inspección del casco',
        'Observaciones sobre la unión entre la quilla y el casco',
      ],
    },
    {
      title: 'Maquinaria y sistemas',
      description:
        'Motores, sistemas eléctricos, fontanería y equipos de a bordo.',
      futureArticles: [
        'Comprobaciones del motor antes de la compra',
        'Problemas eléctricos habituales',
        'Inspección del generador',
      ],
    },
    {
      title: 'Sistemas de los yates a vela',
      description: 'Mástiles, aparejo, velas y herrajes de cubierta.',
      futureArticles: [
        'Inspección del aparejo fijo',
        'Comprobaciones del mástil y la botavara',
        'Evaluación del estado de las velas',
      ],
    },
    {
      title: 'Estado de la obra viva y el casco',
      description:
        'Quillas, timones, hélices, ejes y equipos situados bajo la línea de flotación.',
      futureArticles: [
        'Inspección con varada',
        'Inspección de la hélice y el eje',
        'Consideraciones sobre el antiincrustante',
      ],
    },
    {
      title: 'Preparación de la inspección',
      description:
        'Cómo pueden prepararse propietarios y compradores para una inspección de yates eficaz.',
      futureArticles: [
        'Documentos que deben prepararse',
        'Qué ocurre durante una inspección',
        'Preparación de la prueba de mar',
      ],
    },
  ] satisfies readonly SurveyTipsCategory[],
  latestArticles: [
    spanishStandingRiggingWarningSignsArticle.card,
    spanishYachtElectricalCorrosionArticle.card,
    spanishCheckYachtSteeringArticle.card,
    spanishCheckYachtSeacocksArticle.card,
    spanishShinyHullArticle.card,
    spanishDeckMoistureSoftSpotsArticle.card,
  ],
  guideReasons: [
    'Perspectiva técnica independiente',
    'Experiencia práctica con yates a vela y a motor',
    'Conocimiento de defectos habituales detectados durante las inspecciones',
    'Explicaciones claras sin tecnicismos innecesarios',
    'Orientación para compradores, propietarios y aficionados a la náutica',
  ],
  relatedServices: [
    {
      title: 'Inspección precompra',
      description:
        'Evaluación independiente del estado antes de completar la compra de un yate.',
      href: '/es/pre-purchase-survey',
    },
    {
      title: 'Inspección de condición para seguro',
      description:
        'Inspección profesional e informe para solicitudes y renovaciones de seguro.',
      href: '/es/insurance-survey',
    },
    {
      title: 'Valoración y evaluación de daños',
      description:
        'Valoración independiente e informe de daños para un propósito y alcance acordados.',
      href: '/es/valuation-damage-survey',
    },
  ],
  finalCta: {
    heading: '¿Está planificando una inspección de un yate?',
    body: 'Si está comprando un yate, renovando un seguro o necesita una evaluación independiente, contacte con All Yacht Service para comentar sus necesidades.',
    primaryLink: {
      label: 'Solicitar presupuesto de inspección',
      href: '/es/contact?service=pre-purchase-survey',
    },
    secondaryLink: {
      label: 'Contactar por WhatsApp',
      href: 'https://wa.me/34695718540',
    },
  },
} as const;
