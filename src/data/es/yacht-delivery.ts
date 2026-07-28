import { yachtDeliveryPage } from '../yacht-delivery';
import { siteConfig } from '../site';
import { createContactHref } from '../../utils/contact';
import type { LocalizedSection } from './types';

const serviceItems = [
  'Revisión inicial del yate, la ruta y los requisitos de entrega',
  'Planificación de la travesía y planificación meteorológica de la ruta',
  'Comprobaciones operativas y de seguridad antes de la salida',
  'Coordinación de combustible, provisiones y puertos deportivos',
  'Coordinación de la tripulación cuando sea necesaria',
  'Comunicación sobre el progreso durante la travesía',
  'Comprobaciones a la llegada y coordinación de la entrega y recepción de la embarcación',
  'Informe claro de entrega a la llegada',
] as const;

const processSteps = [
  {
    title: 'Alcance y presupuesto',
    description:
      'Revisamos el tipo, la eslora y la ubicación actual del yate, el destino, las fechas preferidas y cualquier cuestión técnica conocida.',
  },
  {
    title: 'Preparación de la travesía',
    description:
      'Antes de la salida se evalúan la ruta, la meteorología, el combustible, el equipamiento, los puertos deportivos y las necesidades de tripulación.',
  },
  {
    title: 'Entrega del yate',
    description:
      'La travesía se realiza con las comprobaciones operativas, la comunicación y el cuidado práctico adecuados para la embarcación.',
  },
  {
    title: 'Llegada y entrega',
    description:
      'El yate se comprueba a la llegada y se entrega en el destino acordado con un resumen claro de la travesía.',
  },
] as const;

const whyChoose = [
  'Inspector naval de yates y embarcaciones menores certificado por IIMS',
  'Capitán titulado con experiencia práctica en entrega de yates',
  'Experiencia operando veleros y yates a motor en distintas zonas marítimas europeas',
  'Experiencia en ingeniería y control de calidad',
  'Preparación cuidadosa de la travesía',
  'Comunicación clara e informe práctico de entrega',
  'Con base en Altea y servicios en toda España y el Mediterráneo',
] as const;

export const spanishYachtDeliveryPage = {
  title: 'Entrega profesional de yates en el Mediterráneo | All Yacht Service',
  description:
    'Servicio profesional de entrega de yates en España y el Mediterráneo, con planificación, preparación y asistencia técnica.',
  schemaDescription:
    'Servicio profesional de entrega y traslado de yates en España y el Mediterráneo.',
  pathname: '/es/yacht-delivery',
  eyebrow: 'Entrega y traslado de yates',
  heading: 'Entrega profesional de yates en España y el Mediterráneo',
  summary:
    'Traslados cuidadosamente planificados para veleros, yates a motor y catamaranes de hasta 40 metros.',
  heroImage: {
    ...yachtDeliveryPage.heroImage,
    alt: 'Velero navegando durante una entrega profesional de yates',
  },
  socialImageAlt: 'Entrega profesional de un yate en España y el Mediterráneo',
  breadcrumbs: [
    { label: 'Inicio', href: '/es' },
    { label: 'Entrega de yates', href: '/es/yacht-delivery' },
  ],
  primaryCta: {
    label: 'Solicitar presupuesto de entrega',
    href: createContactHref({
      locale: 'es',
      service: 'yacht-delivery',
      source: 'yacht-delivery-hero',
    }),
  },
  secondaryCta: {
    label: 'Contactar por WhatsApp',
    href: siteConfig.contact.whatsappHref,
    external: true,
  },
  sections: [
    {
      id: 'entrega-profesional',
      heading: 'Entrega profesional de yates',
      blocks: [
        {
          type: 'paragraph',
          content:
            'All Yacht Service ofrece servicios profesionales de entrega y traslado de yates en España y el Mediterráneo. Cada travesía se planifica teniendo en cuenta el estado del yate, la ruta, la meteorología, las necesidades de tripulación y las condiciones de entrega y recepción de la embarcación.',
        },
        {
          type: 'paragraph',
          content:
            'Las entregas están dirigidas por Aleksandrs Tolkacovs, Inspector naval de yates y embarcaciones menores certificado por IIMS y capitán titulado, con experiencia práctica operando veleros y yates a motor en el Mediterráneo, el mar Báltico, el canal de la Mancha y el golfo de Vizcaya.',
        },
      ],
    },
    {
      id: 'calculadora-entrega',
      type: 'tool',
      heading: 'Calcule un coste inicial de entrega',
      description:
        'Estime la distancia marítima aproximada y los honorarios profesionales iniciales antes de solicitar un presupuesto formal.',
      link: {
        label: 'Calcular el coste de la entrega',
        href: '/es/yacht-delivery-calculator',
        analyticsEvent: 'delivery-calculator-start',
      },
    },
    {
      id: 'contenido-entrega',
      heading: 'Qué incluye el servicio de entrega de yates',
      blocks: [
        {
          type: 'paragraph',
          content:
            'El alcance exacto se acuerda para cada embarcación y travesía. Según los requisitos, el servicio puede incluir:',
        },
        { type: 'list', style: 'check', items: serviceItems },
        {
          type: 'paragraph',
          style: 'note',
          content:
            'Las comprobaciones operativas previas a la salida están destinadas a preparar el yate para la travesía. No sustituyen una inspección precompra ni una inspección de condición independiente.',
        },
      ],
    },
    {
      id: 'proceso-entrega',
      heading: 'Cómo funciona el proceso de entrega',
      blocks: [{ type: 'process', steps: processSteps }],
    },
    {
      id: 'yates-zonas-entrega',
      heading: 'Yates y zonas de entrega',
      blocks: [
        {
          type: 'paragraph',
          content:
            'El servicio está disponible para veleros, yates a motor y catamaranes de hasta 40 metros.',
        },
        {
          type: 'paragraph',
          content:
            'Con base en Marina Greenwich, Altea, All Yacht Service organiza entregas en la España peninsular, la costa mediterránea española y las Islas Baleares.',
        },
        {
          type: 'paragraph',
          content:
            'También pueden organizarse entregas en Francia, Italia, Grecia y otros destinos europeos o internacionales, según la ubicación, la ruta y las necesidades operativas de la embarcación.',
        },
      ],
    },
    {
      id: 'limitaciones-entrega',
      heading: 'Planificación, meteorología y limitaciones operativas',
      blocks: [
        {
          type: 'paragraph',
          content:
            'La ruta y las fechas previstas se revisan según el estado real del yate, la meteorología, la disponibilidad de tripulación, las restricciones portuarias y otros requisitos operativos.',
        },
        {
          type: 'paragraph',
          content:
            'La seguridad de la embarcación y de la tripulación tiene prioridad. Las condiciones meteorológicas, las necesidades técnicas, las formalidades o las esperas en puerto pueden modificar la ruta o el calendario, por lo que no se garantiza una fecha exacta de llegada.',
        },
        {
          type: 'paragraph',
          content:
            'La planificación de la travesía se prepara para la entrega concreta y no constituye una garantía de navegación ni elimina los riesgos propios de una travesía marítima.',
        },
        {
          type: 'paragraph',
          style: 'note',
          content:
            'El combustible, las provisiones, los amarres, los viajes y el alojamiento de la tripulación, los agentes, los permisos, las reparaciones y otros costes de terceros no están incluidos automáticamente, salvo que el presupuesto lo indique expresamente.',
        },
      ],
    },
    {
      id: 'entrega-inspeccion',
      heading: 'Combinar la entrega con una inspección precompra',
      blocks: [
        {
          type: 'paragraph',
          content: [
            'Cuando se está comprando un yate, la entrega puede organizarse después de una ',
            {
              text: 'inspección precompra independiente',
              href: '/es/pre-purchase-survey',
            },
            '. La combinación de ambos servicios aporta continuidad desde la revisión técnica hasta la llegada de la embarcación a su nueva ubicación y puede reducir desplazamientos y preparativos duplicados.',
          ],
        },
      ],
    },
    {
      id: 'elegir-all-yacht-service',
      heading: '¿Por qué elegir All Yacht Service?',
      blocks: [{ type: 'list', style: 'check', items: whyChoose }],
    },
  ] satisfies readonly LocalizedSection[],
  relatedServices: [
    {
      title: 'Inspección precompra',
      description:
        'Inspección independiente del estado del yate antes de completar una compra.',
      href: '/es/pre-purchase-survey',
      linkLabel: 'Ver inspección precompra',
    },
    {
      title: 'Representación del comprador',
      description:
        'Asistencia técnica independiente antes, durante y después de la compra de un yate.',
      href: '/es/buyer-representation',
      linkLabel: 'Ver representación del comprador',
    },
  ],
  finalCta: {
    heading: '¿Está planificando la entrega de un yate?',
    body: 'Indíquenos el tipo y la eslora del yate, su ubicación actual, el destino y las fechas preferidas. Revisaremos la ruta y los requisitos de entrega y prepararemos un presupuesto a medida.',
    links: [
      {
        label: 'Solicitar presupuesto de entrega',
        href: createContactHref({
          locale: 'es',
          service: 'yacht-delivery',
          source: 'yacht-delivery-final-cta',
        }),
      },
      {
        label: `WhatsApp ${siteConfig.contact.whatsapp}`,
        href: siteConfig.contact.whatsappHref,
        external: true,
      },
      {
        label: `Correo electrónico ${siteConfig.contact.email}`,
        href: siteConfig.contact.emailHref,
      },
    ],
  },
  areaServed: yachtDeliveryPage.areaServed,
} as const;
