import { buyerRepresentationPage } from '../buyer-representation';
import { legalConfig } from '../legal';
import { siteConfig } from '../site';
import { createContactHref } from '../../utils/contact';
import type { LocalizedSection } from './types';

const buyerTypes = [
  {
    title: 'Compradores internacionales',
    description:
      'Para quienes compran un yate en España o el Mediterráneo mientras residen en otro país.',
  },
  {
    title: 'Compradores de su primer yate',
    description:
      'Para quienes necesitan orientación práctica al evaluar el estado técnico y las necesidades futuras de un yate.',
  },
  {
    title: 'Compradores a distancia',
    description:
      'Para clientes que no pueden asistir personalmente a todas las visitas, inspecciones, pruebas de mar o citas en el varadero.',
  },
  {
    title: 'Compradores que comparan varios yates',
    description:
      'Para clientes que necesitan ayuda para identificar diferencias técnicas, riesgos y probables necesidades de mantenimiento.',
  },
  {
    title: 'Compradores que planifican un reacondicionamiento',
    description:
      'Para quienes consideran un yate que necesitará reparaciones, mejoras, mantenimiento o renovación después de la compra.',
  },
  {
    title: 'Compradores que necesitan asistencia continuada',
    description:
      'Para clientes que necesitan ayuda después de la compra con la planificación de reparaciones, la coordinación del varadero o la entrega del yate.',
  },
] as const;

const serviceItems = [
  {
    title: 'Revisión de la información disponible',
    description:
      'Revisión de especificaciones, listas de equipos, fotografías, información de mantenimiento y otros documentos facilitados por el vendedor o el bróker.',
  },
  {
    title: 'Inspección técnica previa a la oferta',
    description:
      'Inspección preliminar destinada a identificar defectos evidentes y señales de alerta importantes antes de que el comprador presente una oferta o encargue una inspección completa.',
  },
  {
    title: 'Planificación de la inspección',
    description:
      'Asesoramiento sobre el alcance adecuado, la varada, la prueba de mar y las inspecciones especializadas que puedan resultar necesarias.',
  },
  {
    title: 'Inspección precompra',
    description:
      'Coordinación o realización de una inspección precompra independiente antes de formalizar la operación.',
  },
  {
    title: 'Interpretación del informe de inspección',
    description:
      'Explicación clara de los hallazgos, las prioridades de defectos, las limitaciones y los siguientes pasos recomendados.',
  },
  {
    title: 'Asistencia técnica durante la negociación',
    description:
      'Información técnica práctica que puede ayudar al comprador a tratar reparaciones, ajustes de precio o condiciones de cierre con el vendedor o el bróker.',
  },
  {
    title: 'Planificación de reparaciones y reacondicionamiento',
    description:
      'Planificación y priorización inicial de reparaciones, mantenimiento, mejoras o trabajos de reacondicionamiento identificados durante el proceso de compra.',
  },
  {
    title: 'Coordinación de varadero y reparaciones',
    description:
      'Comunicación con varaderos, contratistas o especialistas técnicos cuando esté incluida en el alcance acordado.',
  },
  {
    title: 'Asistencia durante la prueba de mar',
    description:
      'Asistencia presencial o técnica durante una prueba de mar cuando se haya organizado e incluido.',
  },
  {
    title: 'Entrega tras la compra',
    description:
      'Asistencia con la recepción práctica del yate, la revisión de documentación y las prioridades técnicas inmediatas después de formalizar la operación.',
  },
  {
    title: 'Entrega profesional del yate',
    description:
      'Traslado profesional del yate a su nuevo puerto deportivo o destino después de la compra.',
  },
] as const;

const preOfferItems = [
  'Inspección visual de las zonas accesibles con seguridad',
  'Revisión del estado general del yate',
  'Identificación de defectos evidentes y señales de alerta',
  'Revisión inicial de la información de mantenimiento disponible',
  'Asesoramiento sobre el alcance adecuado de la inspección completa',
  'Resumen escrito breve o explicación práctica de los hallazgos',
] as const;

const surveySupportItems = [
  'Definición del alcance de la inspección',
  'Coordinación del acceso, la varada y la prueba de mar',
  'Revisión de los hallazgos principales',
  'Explicación de la importancia práctica de los defectos identificados',
  'Identificación de zonas que requieren una investigación especializada',
  'Priorización de reparaciones y mantenimiento',
  'Obtención o revisión de información sobre reparaciones cuando se haya acordado',
  'Asistencia técnica durante las conversaciones con el vendedor o el bróker',
  'Ayuda para comprender las necesidades inmediatas probables después de la compra',
] as const;

const negotiationItems = [
  'Preparación de un resumen claro de los hallazgos importantes',
  'Diferenciación entre cuestiones urgentes de seguridad y mantenimiento rutinario',
  'Identificación de defectos que pueden requerir presupuestos especializados',
  'Revisión de propuestas de reparación o presupuestos disponibles',
  'Apoyo en conversaciones técnicas con el vendedor, el bróker o el varadero',
  'Ayuda para definir prioridades prácticas antes de formalizar la compra',
] as const;

const postPurchaseItems = [
  'Planificación de reparaciones y mantenimiento',
  'Priorización de las recomendaciones del informe',
  'Coordinación con varaderos y contratistas',
  'Revisión de los alcances de reparación propuestos',
  'Planificación de trabajos de reacondicionamiento',
  'Preparación para el traslado',
  'Asistencia práctica durante la entrega y recepción de la embarcación',
] as const;

const internationalBuyerItems = [
  'Reducir viajes innecesarios durante la fase inicial de evaluación',
  'Organizar y asistir a inspecciones técnicas',
  'Coordinarse con brókeres, propietarios, puertos deportivos y varaderos',
  'Recibir información escrita y fotográfica clara',
  'Comprender los hallazgos y las prioridades de reparación',
  'Planificar reparaciones, recepción y entrega después de la compra',
] as const;

const processSteps = [
  {
    title: 'Consulta inicial',
    description:
      'Comentamos el tipo de yate considerado, su ubicación, la fase de la compra y el nivel de asistencia técnica requerido.',
  },
  {
    title: 'Alcance y presupuesto',
    description:
      'El alcance acordado puede cubrir una única inspección, la coordinación del informe o una asistencia continuada durante varias fases de la compra.',
  },
  {
    title: 'Revisión técnica',
    description:
      'La información disponible de la embarcación, los hallazgos de la inspección y las cuestiones técnicas pertinentes se revisan conforme al alcance acordado.',
  },
  {
    title: 'Inspección y apoyo a la decisión',
    description:
      'Los hallazgos, las prioridades de reparación y las áreas que requieren investigación especializada se explican claramente al comprador.',
  },
  {
    title: 'Cierre y asistencia posterior a la compra',
    description:
      'Cuando sea necesario, la asistencia puede continuar con la planificación de reparaciones, la coordinación del varadero, la recepción o la entrega del yate.',
  },
] as const;

const whyChoose = [
  'Enfoque técnico independiente y centrado en el comprador',
  'Inspector naval de yates y embarcaciones menores certificado por IIMS',
  'Yacht & Small Craft Professional Qualification',
  'Capitán titulado con experiencia en entrega de yates y regatas',
  'Más de 20 años de experiencia en ingeniería, control de calidad y gestión',
  'Explicación clara de los hallazgos técnicos y sus prioridades',
  'Asistencia práctica antes, durante y después de la compra',
  'Con base en Marina Greenwich, Altea',
  'Servicios en toda España y el Mediterráneo',
  'Divulgación de relaciones comerciales y posibles conflictos antes de aceptar el encargo',
] as const;

export const spanishBuyerRepresentationPage = {
  title: 'Representación para compradores de yates | All Yacht Service',
  description:
    'Asistencia técnica independiente para compradores de yates antes, durante y después de la compra en España y el Mediterráneo.',
  schemaDescription:
    'Asistencia técnica independiente para compradores de yates antes, durante y después de la compra en España y el Mediterráneo.',
  pathname: '/es/buyer-representation',
  eyebrow: 'Asistencia técnica independiente para la compra',
  heading: 'Representación independiente para compradores de yates',
  summary:
    'Asistencia técnica práctica antes, durante y después de la compra de un velero, yate a motor o catamarán.',
  heroImage: {
    ...buyerRepresentationPage.heroImage,
    alt: 'Asistencia técnica independiente durante la compra de un yate',
  },
  socialImageAlt: 'Asistencia técnica independiente para compradores de yates',
  breadcrumbs: [
    { label: 'Inicio', href: '/es' },
    {
      label: 'Representación del comprador',
      href: '/es/buyer-representation',
    },
  ],
  primaryCta: {
    label: 'Comentar la compra de su yate',
    href: createContactHref({
      locale: 'es',
      service: 'buyer-representation',
      source: 'buyer-representation-hero',
    }),
  },
  secondaryCta: {
    label: 'Contactar por WhatsApp',
    href: siteConfig.contact.whatsappHref,
    external: true,
  },
  sections: [
    {
      id: 'asistencia-independiente',
      heading: 'Asistencia independiente para compradores de yates',
      blocks: [
        {
          type: 'paragraph',
          content:
            'La compra de un yate implica decisiones técnicas, económicas y prácticas que pueden ser difíciles de valorar únicamente con la información comercial.',
        },
        {
          type: 'paragraph',
          content:
            'All Yacht Service ofrece asistencia técnica independiente antes, durante y después de la compra de veleros, yates a motor y catamaranes.',
        },
        {
          type: 'paragraph',
          content:
            'El servicio resulta especialmente útil para compradores internacionales que adquieren un yate en España u otros puntos del Mediterráneo, así como para quienes no pueden asistir personalmente a cada visita, inspección, prueba de mar o cita en el varadero.',
        },
        {
          type: 'paragraph',
          content:
            'La asistencia la presta Aleksandrs Tolkacovs, Inspector naval de yates y embarcaciones menores certificado por IIMS y capitán titulado, con más de 20 años de experiencia en ingeniería, control de calidad y gestión.',
        },
        {
          type: 'paragraph',
          style: 'note',
          content:
            'El alcance exacto se acuerda individualmente según el yate, la ubicación, la fase del proceso de compra y el nivel de asistencia necesario.',
        },
      ],
    },
    {
      id: 'quien-puede-beneficiarse',
      heading: '¿Quién puede beneficiarse de la representación del comprador?',
      blocks: [
        {
          type: 'paragraph',
          content:
            'La representación del comprador puede resultar útil en los siguientes casos:',
        },
        { type: 'cards', items: buyerTypes },
        {
          type: 'paragraph',
          style: 'note',
          content:
            'El servicio aporta asistencia técnica y práctica. No garantiza que se encuentre o se compre un yate adecuado.',
        },
      ],
    },
    {
      id: 'alcance-representacion',
      heading: 'Qué puede incluir la representación del comprador',
      blocks: [
        {
          type: 'paragraph',
          content:
            'El servicio puede adaptarse a la fase de la compra y a las necesidades del cliente. Según el alcance acordado, puede incluir:',
        },
        { type: 'cards', items: serviceItems },
        {
          type: 'paragraph',
          style: 'note',
          content:
            'Los servicios se limitan al alcance técnico y práctico acordado. Los asuntos jurídicos, fiscales, financieros, registrales y contractuales deben ser revisados por profesionales debidamente cualificados.',
        },
      ],
    },
    {
      id: 'antes-oferta',
      heading: 'Asistencia técnica antes de presentar una oferta',
      blocks: [
        {
          type: 'paragraph',
          content:
            'Antes de presentar una oferta, el comprador puede querer comprender inicialmente el estado aparente del yate y sus principales riesgos técnicos.',
        },
        {
          type: 'paragraph',
          content:
            'Una inspección técnica previa a la oferta puede ayudar a identificar problemas evidentes antes de asumir el tiempo y el coste de una inspección completa.',
        },
        {
          type: 'paragraph',
          content: 'Según el alcance acordado, puede incluir:',
        },
        { type: 'list', style: 'check', items: preOfferItems },
        {
          type: 'paragraph',
          style: 'note',
          content: [
            'Una inspección previa a la oferta tiene un alcance limitado y no sustituye una ',
            {
              text: 'inspección precompra completa',
              href: '/es/pre-purchase-survey',
            },
            '.',
          ],
        },
      ],
    },
    {
      id: 'durante-inspeccion-compra',
      heading: 'Asistencia durante la inspección y el proceso de compra',
      blocks: [
        {
          type: 'paragraph',
          content:
            'Una inspección completa puede generar una cantidad considerable de información técnica. La representación del comprador ayuda a comprender qué hallazgos son más importantes y cómo pueden afectar a la seguridad, el mantenimiento, la planificación de reparaciones y la decisión de continuar.',
        },
        { type: 'paragraph', content: 'La asistencia puede incluir:' },
        { type: 'list', style: 'check', items: surveySupportItems },
        {
          type: 'paragraph',
          style: 'note',
          content:
            'Todas las decisiones comerciales corresponden al comprador. All Yacht Service no garantiza el resultado de las negociaciones ni la formalización de la compra.',
        },
      ],
    },
    {
      id: 'hallazgos-negociacion',
      heading: 'Uso de los hallazgos durante la negociación',
      blocks: [
        {
          type: 'paragraph',
          content:
            'Los hallazgos de la inspección pueden ofrecer al comprador una base más clara para hablar de reparaciones, condiciones de cierre o precio de compra.',
        },
        {
          type: 'paragraph',
          content:
            'All Yacht Service puede explicar la importancia técnica y la prioridad probable de los defectos identificados para que el comprador tome decisiones informadas y se comunique con mayor eficacia con el vendedor o el bróker.',
        },
        {
          type: 'paragraph',
          content:
            'Cuando se solicite y resulte adecuado, la asistencia puede incluir:',
        },
        { type: 'list', style: 'check', items: negotiationItems },
        {
          type: 'paragraph',
          style: 'note',
          content:
            'El servicio proporciona información técnica y apoyo práctico. No incluye asesoramiento jurídico, representación contractual ni garantía de que el vendedor acepte reparaciones, descuentos u otras condiciones solicitadas.',
        },
      ],
    },
    {
      id: 'despues-compra',
      heading: 'Asistencia técnica después de la compra',
      blocks: [
        {
          type: 'paragraph',
          content:
            'La asistencia puede continuar una vez formalizada la compra.',
        },
        {
          type: 'paragraph',
          content: 'Según las necesidades del comprador, puede incluir:',
        },
        {
          type: 'list',
          style: 'check',
          items: [
            ...postPurchaseItems,
            [
              {
                text: 'Entrega profesional del yate',
                href: '/es/yacht-delivery',
              },
              ' hasta su nuevo puerto deportivo o destino',
            ],
          ],
        },
        {
          type: 'paragraph',
          style: 'note',
          content:
            'All Yacht Service puede coordinar los trabajos acordados y a especialistas técnicos, pero ello no implica que realice directamente todas las reparaciones o tareas especializadas.',
        },
      ],
    },
    {
      id: 'compradores-internacionales',
      heading: 'Asistencia para compradores internacionales',
      blocks: [
        {
          type: 'paragraph',
          content:
            'Comprar un yate en otro país puede plantear dificultades adicionales relacionadas con viajes, idioma, acceso al puerto deportivo, contratistas locales, documentación y coordinación entre varias partes.',
        },
        {
          type: 'paragraph',
          content:
            'Con base en Marina Greenwich, Altea, All Yacht Service puede actuar como contacto técnico independiente del comprador en España y otros destinos del Mediterráneo.',
        },
        {
          type: 'paragraph',
          content:
            'El servicio puede ayudar a los compradores internacionales a:',
        },
        { type: 'list', style: 'check', items: internationalBuyerItems },
        {
          type: 'paragraph',
          style: 'note',
          content:
            'La titularidad jurídica, el registro, la fiscalidad, las aduanas y los asuntos contractuales siguen siendo responsabilidad del comprador y de sus asesores profesionales debidamente cualificados.',
        },
      ],
    },
    {
      id: 'independencia-conflictos',
      heading: 'Asesoramiento independiente y divulgación de conflictos',
      blocks: [
        {
          type: 'paragraph',
          content:
            'La representación del comprador pretende aportar información técnica clara en interés del cliente que encarga el servicio.',
        },
        {
          type: 'paragraph',
          content:
            'Cualquier relación comercial o posible conflicto de interés relacionado con una embarcación se comunicará antes de aceptar el encargo.',
        },
        {
          type: 'paragraph',
          content:
            'Cuando un conflicto pueda impedir prestar un servicio independiente, el encargo podrá rechazarse o sus limitaciones se acordarán claramente con el cliente.',
        },
        {
          type: 'paragraph',
          style: 'note',
          content:
            'All Yacht Service no recibe autoridad para tomar la decisión final de compra en nombre del cliente, salvo que se haya establecido por separado un acuerdo escrito jurídicamente adecuado.',
        },
      ],
    },
    {
      id: 'representacion-brokerage',
      heading: 'Representación del comprador y corretaje de yates',
      blocks: [
        {
          type: 'paragraph',
          content:
            'Un bróker de yates suele ocuparse de la comercialización, la presentación de compradores y vendedores, la organización de visitas y el avance de la operación comercial.',
        },
        {
          type: 'paragraph',
          content:
            'La representación del comprador de All Yacht Service se centra en la asistencia técnica independiente, el estado de la embarcación, los hallazgos, las prioridades de reparación y las decisiones prácticas de compra.',
        },
        {
          type: 'paragraph',
          content:
            'El servicio no sustituye al asesor jurídico, fiscal o registral del comprador ni a ningún otro profesional debidamente cualificado.',
        },
        {
          type: 'paragraph',
          content: `All Yacht Service y Premium Yachts Spain son marcas comerciales y áreas de servicio separadas operadas por ${legalConfig.legalOperatorName}. Cuando un yate tenga una relación comercial con cualquiera de ellas u otra parte asociada, dicha relación se comunicará antes de aceptar el encargo. Las conclusiones técnicas mantendrán su independencia profesional; el cliente podrá designar a otro inspector naval y el encargo podrá rechazarse si la relación no puede comunicarse o gestionarse adecuadamente.`,
        },
      ],
    },
    {
      id: 'proceso-representacion',
      heading: 'Cómo funciona la representación del comprador',
      blocks: [{ type: 'process', steps: processSteps }],
    },
    {
      id: 'cobertura-representacion',
      heading: 'Representación de compradores en España y el Mediterráneo',
      blocks: [
        {
          type: 'paragraph',
          content:
            'Con base en Marina Greenwich, Altea, All Yacht Service ofrece representación del comprador y asistencia técnica durante la compra en Alicante, Costa Blanca, Valencia, Barcelona, la costa mediterránea española y otros puntos de la España peninsular.',
        },
        {
          type: 'paragraph',
          content:
            'También puede organizarse asistencia en las Islas Baleares, Francia, Italia, Grecia y otros destinos europeos o internacionales, según la ubicación del yate y el alcance requerido.',
        },
        {
          type: 'paragraph',
          content:
            'La revisión documental a distancia y la consulta técnica también pueden estar disponibles cuando no sea necesaria una inspección física inmediata.',
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
        'Evaluación independiente y completa del yate antes de formalizar la compra.',
      href: '/es/pre-purchase-survey',
      linkLabel: 'Ver inspección precompra',
    },
    {
      title: 'Inspección de condición para seguro',
      description:
        'Evaluación del estado e informe para solicitudes o renovaciones de seguro.',
      href: '/es/insurance-survey',
      linkLabel: 'Ver inspección para seguro',
    },
    {
      title: 'Entrega profesional de yates',
      description:
        'Traslado profesional de veleros, yates a motor y catamaranes después de la compra.',
      href: '/es/yacht-delivery',
      linkLabel: 'Ver entrega de yates',
    },
  ],
  finalCta: {
    heading: '¿Está pensando en comprar un yate?',
    body: 'Indíquenos qué tipo de yate está considerando, su ubicación y la fase actual del proceso de compra. Revisaremos la asistencia necesaria y prepararemos un presupuesto a medida.',
    links: [
      {
        label: 'Comentar la compra de su yate',
        href: createContactHref({
          locale: 'es',
          service: 'buyer-representation',
          source: 'buyer-representation-final-cta',
        }),
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
  areaServed: buyerRepresentationPage.areaServed,
} as const;
