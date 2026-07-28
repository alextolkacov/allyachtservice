import { siteConfig } from '../site';

export const spanishYachtDeliveryCalculatorPage = {
  title: 'Calculadora de entrega de yates | All Yacht Service',
  description:
    'Calcule una estimación inicial de la distancia marítima y los honorarios profesionales para la entrega de un yate en el Mediterráneo.',
  pathname: '/es/yacht-delivery-calculator',
  eyebrow: 'Herramienta de planificación de entregas',
  heading: 'Calculadora de entrega profesional de yates',
  summary:
    'Calcule una distancia marítima aproximada y los honorarios profesionales iniciales estimados para una entrega en España y el Mediterráneo.',
  heroImage: {
    src: '/images/yacht-delivery.webp',
    alt: 'Planificación de una travesía para la entrega profesional de un yate en el Mediterráneo',
    width: 1280,
    height: 719,
  },
  socialImageAlt:
    'Calculadora de ruta y coste de entrega profesional de yates en el Mediterráneo',
  breadcrumbs: [
    { label: 'Inicio', href: '/es' },
    { label: 'Entrega de yates', href: '/es/yacht-delivery' },
    {
      label: 'Calculadora de entrega',
      href: '/es/yacht-delivery-calculator',
    },
  ],
  primaryCta: {
    label: 'Calcular coste de entrega',
    href: '#delivery-calculator',
    analyticsEvent: 'delivery-calculator-start',
  },
  secondaryCta: {
    label: 'Ver el servicio de entrega de yates',
    href: '/es/yacht-delivery',
  },
  quotationFactors: [
    'Tipo y eslora exacta del yate',
    'Estado y preparación del yate',
    'Rendimiento operativo medio',
    'Capacidad y autonomía de combustible',
    'Tripulación necesaria para la entrega',
    'Ruta y exposición en alta mar',
    'Meteorología estacional',
    'Formalidades portuarias y fronterizas',
    'Requisitos de preparación y entrega',
    'Urgencia',
    'Desplazamientos de la tripulación',
    'Acceso al puerto deportivo',
    'Tiempo de espera',
    'Reparaciones o asistencia técnica necesarias antes de la salida',
  ],
  separatelyQuoted: [
    'Combustible y lubricantes',
    'Provisiones',
    'Tasas de atraque y puerto deportivo',
    'Viajes y alojamiento de la tripulación',
    'Aduanas, permisos y agentes',
    'Tasas de canales y esclusas',
    'Esperas por meteorología o a petición del propietario',
    'Reparaciones, repuestos y trabajos técnicos',
    'Varada y servicios de terceros',
  ],
  nextSteps: [
    {
      title: 'Calcule la ruta aproximada y los honorarios iniciales',
      description:
        'Seleccione la salida, el destino, los datos del yate y las condiciones previstas para la entrega.',
    },
    {
      title: 'Revise los supuestos y las exclusiones',
      description:
        'Compruebe el corredor, la distancia y los honorarios aproximados, así como los costes presupuestados por separado.',
    },
    {
      title: 'Transfiera el resultado al formulario de contacto',
      description:
        'Solicite un presupuesto formal y facilite los datos restantes del yate y de la programación.',
    },
  ],
  relatedServices: [
    {
      title: 'Entrega profesional de yates',
      description:
        'Entrega y traslado profesional de yates en España y el Mediterráneo.',
      href: '/es/yacht-delivery',
      linkLabel: 'Ver servicio',
    },
    {
      title: 'Inspección precompra',
      description:
        'Inspección independiente e informe práctico antes de completar la compra de un yate.',
      href: '/es/pre-purchase-survey',
      linkLabel: 'Ver servicio',
    },
    {
      title: 'Representación del comprador',
      description:
        'Asistencia técnica independiente antes, durante y después del proceso de compra.',
      href: '/es/buyer-representation',
      linkLabel: 'Ver servicio',
    },
    {
      title: 'Calculadora de inspección precompra',
      description:
        'Calcule una estimación de los honorarios profesionales para una inspección precompra.',
      href: '/es/pre-purchase-survey-calculator',
      linkLabel: 'Abrir calculadora',
    },
  ],
  relatedHeading: 'Servicios y herramientas relacionados',
  finalCta: {
    heading: '¿Desea planificar la entrega de su yate?',
    body: 'Transfiera el resultado de la calculadora al formulario de contacto y facilite los datos del yate. Revisaremos la ruta, el estado del yate, la tripulación necesaria y los plazos antes de confirmar el alcance y el presupuesto formal.',
    links: [
      {
        label: 'Solicitar presupuesto de entrega',
        href: '/es/contact?service=yacht-delivery',
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
