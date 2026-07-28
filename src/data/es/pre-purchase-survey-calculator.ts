import { siteConfig } from '../site';

export const spanishPrePurchaseSurveyCalculatorPage = {
  title: 'Calculadora de inspección precompra | All Yacht Service',
  description:
    'Calcule una estimación inicial del coste de una inspección precompra de un yate según su eslora, tipo y alcance de inspección.',
  pathname: '/es/pre-purchase-survey-calculator',
  eyebrow: 'Herramienta de planificación de inspecciones',
  heading: 'Calculadora del coste de una inspección precompra',
  summary:
    'Obtenga una estimación inicial de los honorarios de una inspección precompra según la eslora, el tipo de yate y el alcance seleccionado.',
  heroImage: {
    src: '/images/pre-purchase-survey.webp',
    alt: 'Inspector naval revisando un yate durante una inspección precompra',
    width: 1200,
    height: 674,
  },
  socialImageAlt:
    'Calculadora del coste y planificación de una inspección precompra de yate',
  breadcrumbs: [
    { label: 'Inicio', href: '/es' },
    {
      label: 'Inspección precompra',
      href: '/es/pre-purchase-survey',
    },
    {
      label: 'Calculadora de coste',
      href: '/es/pre-purchase-survey-calculator',
    },
  ],
  primaryCta: {
    label: 'Iniciar cálculo',
    href: '#survey-calculator',
    analyticsEvent: 'survey-calculator-start',
  },
  secondaryCta: {
    label: 'Ver el servicio de inspección precompra',
    href: '/es/pre-purchase-survey',
  },
  includedItems: [
    'Inspección precompra básica del estado',
    'Inspección a flote o con varada',
    'Prueba de mar',
    'Inspección de motores',
    'Inspección del aparejo y las velas para yates a vela',
    'Inspección completa con el descuento previsto para el paquete',
  ],
  quotationFactors: [
    'Antigüedad del yate',
    'Material de construcción',
    'Número y tipo de motores',
    'Sistemas poco habituales o complejos',
    'Configuración de catamarán o multicasco',
    'Acceso al aparejo',
    'Accesibilidad del yate',
    'Ubicación y desplazamiento',
    'Organización con el puerto deportivo y el varadero',
    'Inspecciones especializadas',
    'Urgencia de la inspección',
    'Requisitos documentales',
    'Estado del yate antes de la inspección',
  ],
  nextSteps: [
    {
      title: 'Calcule la estimación',
      description:
        'Introduzca la eslora, el tipo de yate y el alcance de inspección que está considerando.',
    },
    {
      title: 'Revise el alcance seleccionado',
      description:
        'Compruebe los honorarios aproximados, las inspecciones incluidas, las exclusiones y la referencia de la estimación.',
    },
    {
      title: 'Solicite un presupuesto formal',
      description:
        'Transfiera el resultado al formulario de contacto y añada los datos restantes del yate y de la programación.',
    },
  ],
  relatedServices: [
    {
      title: 'Inspección precompra',
      description:
        'Inspección independiente e informe práctico antes de completar la compra de un yate.',
      href: '/es/pre-purchase-survey',
    },
    {
      title: 'Representación del comprador',
      description:
        'Asistencia técnica independiente antes, durante y después del proceso de compra.',
      href: '/es/buyer-representation',
    },
    {
      title: 'Inspección de condición para seguro',
      description:
        'Evaluación del estado e informe para solicitudes y renovaciones de seguro.',
      href: '/es/insurance-survey',
    },
  ],
  finalCta: {
    heading: '¿Desea organizar la inspección de su yate?',
    body: 'Transfiera el resultado de la calculadora al formulario de contacto y envíenos los datos del yate. Revisaremos los requisitos y confirmaremos el alcance y el presupuesto formal.',
    links: [
      {
        label: 'Solicitar presupuesto',
        href: '/es/contact?service=pre-purchase-survey',
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
