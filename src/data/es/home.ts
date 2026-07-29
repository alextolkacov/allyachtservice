import type { HomeService } from '../home';

export const spanishHomeHero = {
  heading: 'All Yacht Service',
  supportingText:
    'Servicios náuticos de confianza respaldados por experiencia, precisión y atención personalizada',
  serviceLine:
    'Peritajes de precompra, para seguros y de valoración, traslado de yates y representación de compradores en toda España y el Mediterráneo.',
  image: {
    src: '/images/hero-sailing-yacht.webp',
    alt: 'Velero navegando en el mar',
    width: 1277,
    height: 618,
  },
} as const;

export const spanishHomeIntroduction = {
  eyebrow: 'Inspección de yates en España',
  heading: 'Inspector naval independiente en la Costa Blanca, España',
  body: 'Inspecciones precompra, para seguros y de valoración, entrega de yates y representación del comprador en toda España y el Mediterráneo.',
  trustLine:
    'Servicios prestados por un inspector naval de yates y embarcaciones menores certificado por IIMS y capitán titulado.',
} as const;

export const spanishHomeServices = [
  {
    title: 'Inspección precompra',
    description:
      'Inspección independiente del casco, la estructura, los sistemas, la maquinaria y los equipos de seguridad antes de comprar.',
    href: '/es/pre-purchase-survey',
    image: {
      src: '/images/pre-purchase-survey.webp',
      alt: 'Medidor de humedad utilizado durante la inspección del casco de un yate',
      width: 1200,
      height: 674,
    },
  },
  {
    title: 'Inspección de condición para seguro',
    description:
      'Evaluación del estado e informe profesional para solicitudes y renovaciones de seguro.',
    href: '/es/insurance-survey',
    image: {
      src: '/images/insurance-condition-survey.webp',
      alt: 'Veleros evaluados después de daños provocados por una tormenta',
      width: 1280,
      height: 720,
    },
  },
  {
    title: 'Valoración y evaluación de daños',
    description:
      'Valoración independiente basada en el estado y evaluación documentada de daños para un propósito acordado.',
    href: '/es/valuation-damage-survey',
    image: {
      src: '/images/pre-purchase-survey.webp',
      alt: 'Medición de humedad durante una inspección técnica de un yate',
      width: 1200,
      height: 674,
    },
  },
  {
    title: 'Entrega profesional de yates',
    description:
      'Entrega profesional de veleros, yates a motor y catamaranes en España y el Mediterráneo.',
    href: '/es/yacht-delivery',
    image: {
      src: '/images/yacht-delivery.webp',
      alt: 'Tripulación profesional preparando un velero para su entrega',
      width: 1280,
      height: 719,
    },
  },
  {
    title: 'Representación del comprador',
    description:
      'Asistencia técnica independiente antes, durante y después de la compra de un yate.',
    href: '/es/buyer-representation',
    image: {
      src: '/images/buyer-representation.webp',
      alt: 'Comprador revisando documentación con asistencia independiente',
      width: 1280,
      height: 719,
    },
  },
  {
    title: 'Yates en venta',
    description:
      'Consulte los listados actuales y organice una inspección independiente o asistencia técnica antes de la compra.',
    href: '/es/yachts-for-sale',
    image: {
      src: '/images/yachts-for-sale-marina.jpg',
      alt: 'Yates amarrados en un puerto deportivo del Mediterráneo',
      width: 2048,
      height: 1536,
    },
  },
  {
    title: 'Sobre All Yacht Service',
    description:
      'Inspección independiente de yates y asistencia técnica desde Marina Greenwich, Altea.',
    href: '/es/about-us',
    image: {
      src: '/images/about-all-yacht-service.webp',
      alt: 'Trabajo en equipo para coordinar un servicio técnico profesional',
      width: 1280,
      height: 719,
    },
  },
] satisfies readonly HomeService[];

export const spanishOnlineTools = {
  heading: 'Herramientas en línea',
  introduction:
    'Utilice nuestras herramientas de planificación para obtener una estimación inicial antes de contactar con All Yacht Service.',
  items: [
    {
      title: 'Calculadora del coste de una inspección precompra',
      description:
        'Calcule unos honorarios aproximados según la eslora, el tipo de yate y el alcance de la inspección.',
      label: 'Calcular coste de inspección',
      href: '/es/pre-purchase-survey-calculator',
    },
    {
      title: 'Calculadora de entrega profesional de yates',
      description:
        'Calcule una distancia marítima aproximada y los honorarios profesionales iniciales para una entrega.',
      label: 'Calcular coste de entrega',
      href: '/es/yacht-delivery-calculator',
    },
  ],
} as const;

export const spanishKnowledgeResources = [
  {
    title: 'Consejos para la inspección de yates',
    description:
      'Guías profesionales para comprender defectos habituales, métodos de inspección y cuestiones importantes antes de comprar un yate.',
    href: '/es/yacht-survey-tips',
    image: {
      src: '/images/yacht-survey-tips-background.jpg',
      alt: 'Casco de un yate reflejado en el agua de un puerto deportivo',
      width: 1536,
      height: 1024,
    },
  },
] satisfies readonly HomeService[];

export const spanishWhyChooseUs = {
  eyebrow: 'Experiencia náutica independiente',
  heading: '¿Por qué elegir All Yacht Service?',
  introduction:
    'Asesoramiento técnico independiente, experiencia náutica práctica e informes claros para propietarios y compradores de yates.',
  points: [
    'Enfoque independiente centrado en el comprador',
    'Inspector naval de yates y embarcaciones menores certificado por IIMS',
    'Yacht & Small Craft Professional Qualification',
    'Capitán titulado con experiencia en entrega de yates y regatas',
    'Más de 20 años de experiencia en ingeniería, control de calidad y gestión',
    'Informes de inspección claros, detallados y prácticos',
    'Con base en Marina Greenwich, Altea',
    'Servicios en toda España y el Mediterráneo',
    'Inspecciones y entregas de yates en otros lugares de Europa e internacionalmente, previa consulta',
  ],
  image: {
    src: '/images/why-choose-all-yacht-service.webp',
    alt: 'Firma de documentación profesional para la inspección de un yate',
    width: 1280,
    height: 719,
  },
} as const;

export const spanishHomeAbout = {
  eyebrow: 'Sobre All Yacht Service',
  heading: 'Experiencia, precisión y atención personalizada',
  paragraphs: [
    'All Yacht Service está dirigido por Aleksandrs Tolkacovs, inspector naval de yates y embarcaciones menores certificado por IIMS y capitán titulado, con experiencia práctica en la operación de veleros y yates a motor en el Mediterráneo, el mar Báltico, el canal de la Mancha y el golfo de Vizcaya.',
    'Los servicios cuentan con el respaldo de más de 20 años de experiencia en ingeniería, control de calidad y gestión.',
    'Los clientes reciben informes claros, prácticos e imparciales, concebidos para ayudarles a tomar decisiones más seguras y mejor fundamentadas.',
  ],
  image: {
    src: '/images/about-all-yacht-service.webp',
    alt: 'Coordinación de asistencia técnica profesional',
    width: 1280,
    height: 719,
  },
} as const;
