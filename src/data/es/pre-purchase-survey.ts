import { prePurchaseSurveyPage } from '../pre-purchase-survey';
import { siteConfig } from '../site';
import { createContactHref } from '../../utils/contact';
import type { LocalizedSection } from './types';

const inspectionItems = [
  {
    title: 'Casco, cubierta y superestructura',
    description:
      'Evaluación visual del casco, la cubierta, la superestructura, los herrajes y las zonas estructurales accesibles.',
  },
  {
    title: 'Estado estructural',
    description:
      'Evaluación de indicios de daños, deformaciones, fatiga, reparaciones anteriores o deterioro.',
  },
  {
    title: 'Maquinaria y propulsión',
    description:
      'Inspección visual y operativa de la maquinaria accesible, los componentes de propulsión y los sistemas asociados.',
  },
  {
    title: 'Sistemas eléctricos',
    description:
      'Inspección de los sistemas accesibles de corriente alterna y continua, baterías, equipos de carga, cableado y cuadros de distribución.',
  },
  {
    title: 'Fontanería y sistemas de tanques',
    description:
      'Inspección de bombas, tuberías, grifos de fondo, tanques y sistemas de agua accesibles a bordo.',
  },
  {
    title: 'Gobierno y controles',
    description:
      'Inspección de los equipos de gobierno, controles y componentes asociados que sean accesibles.',
  },
  {
    title: 'Equipos de seguridad',
    description:
      'Revisión de los equipos accesibles de seguridad, lucha contra incendios y salvamento.',
  },
  {
    title: 'Equipos de navegación',
    description:
      'Comprobaciones operativas de los equipos accesibles de navegación y comunicación cuando resulte práctico.',
  },
  {
    title: 'Aparejo y velas',
    description:
      'Inspección visual desde cubierta del aparejo fijo y de labor y de las velas accesibles en veleros, cuando estén incluidos en el alcance acordado.',
  },
  {
    title: 'Evaluación de humedad',
    description:
      'Lecturas con medidor de humedad y evaluación adicional cuando sean adecuadas para la construcción de la embarcación y las condiciones de inspección.',
  },
  {
    title: 'Componentes sumergidos',
    description:
      'Inspección del casco bajo la línea de flotación, quilla, timón, hélices, ejes, saildrives y accesorios cuando el yate está varado.',
  },
  {
    title: 'Prueba de mar',
    description:
      'Evaluación operativa de la propulsión, el gobierno, los instrumentos y los sistemas de a bordo durante la navegación cuando se incluya una prueba de mar y las condiciones lo permitan.',
  },
  {
    title: 'Informe escrito',
    description:
      'Informe detallado con fotografías, hallazgos, prioridades de defectos y recomendaciones prácticas.',
  },
] as const;

const reportUses = [
  'Negociaciones de compra',
  'Solicitudes de reparación antes de formalizar la compra',
  'Planificación del presupuesto para mantenimiento y trabajos de reacondicionamiento',
  'Solicitudes de seguro',
  'Decisión de continuar con la compra o desistir de ella',
] as const;

const commonDefects = [
  'Entrada de humedad en cubiertas, estructuras del casco y mamparos',
  'Zonas blandas o deslaminadas en la cubierta',
  'Fatiga estructural o reparaciones anteriores',
  'Indicios relacionados con ósmosis en cascos de PRFV',
  'Corrosión de tanques, accesorios y componentes sumergidos',
  'Grifos de fondo, mangueras y abrazaderas deteriorados',
  'Deficiencias en la instalación eléctrica',
  'Baterías y equipos de carga envejecidos',
  'Fugas de maquinaria o necesidades de mantenimiento',
  'Desgaste del sistema de gobierno',
  'Deficiencias en los equipos de seguridad',
  'Modificaciones mal ejecutadas o sin documentar',
  'Problemas en el aparejo o el estado de las velas',
  'Indicios de varada accidental, colisión o entrada de agua',
] as const;

const processSteps = [
  {
    title: 'Consulta inicial y alcance',
    description:
      'Revisamos el tipo, la eslora, la antigüedad, la construcción y la ubicación del yate, así como los requisitos previstos para la inspección. También pueden comentarse la documentación disponible y cualquier preocupación conocida antes de preparar el presupuesto.',
  },
  {
    title: 'Preparación de la inspección',
    description:
      'El acceso se coordina con el propietario, el bróker, el puerto deportivo o el varadero. Cuando sea posible, la inspección puede incluir una revisión a flote, la varada y una prueba de mar.',
  },
  {
    title: 'Inspección detallada',
    description:
      'Se examinan la estructura, los sistemas, la maquinaria, los equipos y las disposiciones de seguridad accesibles de la embarcación conforme al alcance acordado.',
  },
  {
    title: 'Prueba de mar y varada',
    description:
      'Cuando están incluidas, la prueba de mar permite evaluar sistemas esenciales en condiciones de funcionamiento, mientras que la varada facilita el acceso al casco sumergido y a sus apéndices.',
  },
  {
    title: 'Informe y recomendaciones',
    description:
      'El cliente recibe un informe de inspección claro con fotografías, hallazgos, prioridades de defectos y recomendaciones prácticas.',
  },
] as const;

const preOfferItems = [
  'Inspección visual de las zonas accesibles con seguridad',
  'Identificación de defectos evidentes y señales de alerta importantes',
  'Revisión del estado general de la embarcación',
  'Resumen escrito breve',
  'Orientación sobre la conveniencia de una inspección completa o una revisión especializada',
] as const;

const whyChoose = [
  'Enfoque independiente y centrado en el comprador',
  'Inspector naval de yates y embarcaciones menores certificado por IIMS',
  'Yacht & Small Craft Professional Qualification',
  'Capitán titulado con experiencia en entrega de yates y regatas',
  'Más de 20 años de experiencia en ingeniería, control de calidad y gestión',
  'Informes de inspección claros, detallados y prácticos',
  'Informes emitidos normalmente en un plazo de 48 horas',
  'Con base en Marina Greenwich, Altea',
  'Servicios en toda España y el Mediterráneo',
] as const;

export const spanishPrePurchaseSurveyPage = {
  title: 'Inspección precompra de yates en España | All Yacht Service',
  description:
    'Inspección precompra independiente para yates a vela, yates a motor y catamaranes en España y el Mediterráneo.',
  schemaDescription:
    'Inspección precompra independiente y evaluación del estado de yates en España y el Mediterráneo.',
  pathname: '/es/pre-purchase-survey',
  eyebrow: 'Inspección naval independiente',
  heading: 'Inspección precompra de yates en España',
  summary:
    'Inspección independiente de veleros, yates a motor y catamaranes de hasta 40 metros antes de la compra.',
  heroImage: {
    ...prePurchaseSurveyPage.heroImage,
    alt: 'Yate sometido a una inspección precompra independiente',
  },
  socialImageAlt: 'Inspección precompra independiente de un yate en España',
  breadcrumbs: [
    { label: 'Inicio', href: '/es' },
    {
      label: 'Inspección precompra',
      href: '/es/pre-purchase-survey',
    },
  ],
  primaryCta: {
    label: 'Solicitar presupuesto de inspección',
    href: createContactHref({
      locale: 'es',
      service: 'pre-purchase-survey',
      source: 'pre-purchase-survey-hero',
    }),
  },
  secondaryCta: {
    label: 'Contactar por WhatsApp',
    href: siteConfig.contact.whatsappHref,
    external: true,
  },
  sections: [
    {
      id: 'inspeccion-independiente',
      heading: 'Inspección precompra independiente',
      blocks: [
        {
          type: 'paragraph',
          content:
            'La compra de un yate supone un compromiso económico importante. Una inspección precompra profesional ofrece una evaluación independiente del estado de la embarcación antes de que el comprador formalice la operación.',
        },
        {
          type: 'paragraph',
          content:
            'All Yacht Service realiza inspecciones precompra de veleros, yates a motor y catamaranes de hasta 40 metros. La inspección busca identificar defectos visibles, cuestiones de seguridad, necesidades de mantenimiento y zonas que puedan requerir una investigación especializada adicional.',
        },
        {
          type: 'paragraph',
          content:
            'Las inspecciones son realizadas por Aleksandrs Tolkacovs, Inspector naval de yates y embarcaciones menores certificado por IIMS y capitán titulado, con el respaldo de más de 20 años de experiencia en ingeniería, control de calidad y gestión.',
        },
      ],
    },
    {
      id: 'calculadora-inspeccion',
      type: 'tool',
      eyebrow: 'Herramienta de planificación en línea',
      heading: 'Calcule un coste inicial de inspección',
      description:
        'Utilice la eslora, el tipo de embarcación y el alcance de la inspección para obtener una estimación aproximada y no vinculante antes de solicitar un presupuesto formal.',
      link: {
        label: 'Calcular el coste de la inspección',
        href: '/pre-purchase-survey-calculator',
        languageNote: 'calculadora disponible actualmente en inglés',
      },
    },
    {
      id: 'contenido-inspeccion',
      heading: 'Qué incluye una inspección precompra de yates',
      blocks: [
        {
          type: 'paragraph',
          content:
            'El alcance exacto depende de la embarcación, su construcción, equipamiento, ubicación y accesibilidad. Una inspección precompra habitual puede incluir:',
        },
        { type: 'cards', items: inspectionItems },
        {
          type: 'paragraph',
          style: 'note',
          content:
            'La inspección es no destructiva y se limita a las zonas y equipos accesibles con seguridad en el momento de la visita. Cuando se recomiende una investigación mecánica, eléctrica, del aparejo o de laboratorio especializada, quedará indicada en el informe.',
        },
      ],
    },
    {
      id: 'importancia-inspeccion',
      heading:
        'Por qué es importante una inspección profesional antes de comprar',
      blocks: [
        {
          type: 'paragraph',
          content:
            'Muchos defectos graves no resultan evidentes durante una visita informal. Un yate puede parecer bien mantenido y, aun así, presentar problemas estructurales, mecánicos, eléctricos o de seguridad que generen costes de reparación importantes.',
        },
        {
          type: 'paragraph',
          content:
            'Una inspección independiente ayuda al comprador a comprender el estado observado de la embarcación, priorizar los trabajos necesarios y tomar una decisión mejor informada antes de completar la compra.',
        },
        { type: 'paragraph', content: 'El informe también puede servir para:' },
        { type: 'list', style: 'check', items: reportUses },
        {
          type: 'paragraph',
          content: [
            'Si un suscriptor de seguros solicita un informe preparado específicamente para fines de seguro, puede resultar más adecuada una ',
            {
              text: 'inspección de condición para seguro',
              href: '/es/insurance-survey',
            },
            '.',
          ],
        },
      ],
    },
    {
      id: 'defectos-habituales',
      heading: 'Defectos habituales identificados durante las inspecciones',
      blocks: [
        {
          type: 'paragraph',
          content:
            'Incluso los yates aparentemente bien mantenidos pueden presentar defectos o trabajos no documentados. Entre los hallazgos habituales se encuentran:',
        },
        { type: 'list', style: 'defect', items: commonDefects },
      ],
    },
    {
      id: 'proceso-inspeccion',
      heading: 'Cómo funciona el proceso de inspección precompra',
      blocks: [{ type: 'process', steps: processSteps }],
    },
    {
      id: 'varada-prueba-mar',
      heading: 'Varada y prueba de mar',
      blocks: [
        {
          type: 'paragraph',
          content:
            'Una inspección precompra completa suele ser más eficaz cuando el yate puede examinarse tanto a flote como fuera del agua.',
        },
        {
          type: 'paragraph',
          content:
            'La varada permite inspeccionar el casco sumergido, la quilla, el timón, las hélices, los ejes, los saildrives y los accesorios bajo la línea de flotación.',
        },
        {
          type: 'paragraph',
          content:
            'Una prueba de mar permite evaluar la propulsión, el gobierno, la instrumentación y determinados sistemas de a bordo en condiciones reales de funcionamiento.',
        },
        {
          type: 'paragraph',
          content:
            'Los costes de varada, puerto deportivo, combustible y operación de la embarcación se organizan normalmente por separado y no están incluidos automáticamente en los honorarios de inspección, salvo que el presupuesto indique expresamente lo contrario.',
        },
      ],
    },
    {
      id: 'informe-inspeccion',
      heading: 'Informe de inspección claro y recomendaciones prácticas',
      blocks: [
        {
          type: 'paragraph',
          content:
            'El informe de inspección explica el estado observado de la embarcación con un lenguaje claro y práctico. Los hallazgos se apoyan en fotografías y se priorizan para que el comprador pueda distinguir entre problemas importantes de seguridad, necesidades relevantes de mantenimiento y observaciones menos urgentes.',
        },
        {
          type: 'paragraph',
          content:
            'Los informes se emiten normalmente en un plazo de 48 horas desde la finalización de la inspección, sujeto a la embarcación, el alcance y cualquier información adicional necesaria.',
        },
        {
          type: 'paragraph',
          content:
            'El informe se prepara para el cliente que encarga el trabajo y no debe presentarse como garantía del estado futuro ni de ausencia de defectos.',
        },
      ],
    },
    {
      id: 'inspeccion-preoferta',
      heading: 'Visita técnica e inspección previa a la oferta',
      blocks: [
        {
          type: 'paragraph',
          content:
            'Para compradores que todavía no desean encargar una inspección completa, All Yacht Service puede realizar una visita técnica más breve o una inspección previa a la oferta.',
        },
        {
          type: 'paragraph',
          content:
            'Este servicio busca identificar problemas evidentes y señales de alerta importantes antes de que el comprador presente una oferta o contrate una inspección completa.',
        },
        {
          type: 'paragraph',
          content: 'Según el alcance acordado, puede incluir:',
        },
        { type: 'list', style: 'check', items: preOfferItems },
        {
          type: 'paragraph',
          style: 'note',
          content:
            'La visita técnica o inspección previa a la oferta tiene un alcance limitado y no sustituye una inspección precompra completa.',
        },
      ],
    },
    {
      id: 'cobertura-inspeccion',
      heading: 'Inspecciones precompra en España y el Mediterráneo',
      blocks: [
        {
          type: 'paragraph',
          content:
            'Con base en Marina Greenwich, Altea, All Yacht Service realiza inspecciones precompra en Alicante, Costa Blanca, Valencia, Barcelona, la costa mediterránea española y otros puntos de la España peninsular.',
        },
        {
          type: 'paragraph',
          content:
            'También pueden organizarse inspecciones en las Islas Baleares, Francia, Italia, Grecia y otros destinos europeos o internacionales, según la ubicación de la embarcación, los requisitos de acceso y el alcance acordado.',
        },
      ],
    },
    {
      id: 'inspeccion-entrega',
      heading: 'Combinar la inspección con la entrega del yate',
      blocks: [
        {
          type: 'paragraph',
          content: [
            'Una vez completada la compra, All Yacht Service también puede organizar la ',
            {
              text: 'entrega profesional del yate',
              href: '/es/yacht-delivery',
            },
            ' hasta su nuevo puerto deportivo o destino.',
          ],
        },
        {
          type: 'paragraph',
          content:
            'La combinación de la inspección y la entrega aporta continuidad desde la revisión técnica hasta la preparación de la travesía, la llegada y la entrega de la embarcación.',
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
      title: 'Representación del comprador',
      description:
        'Asistencia técnica independiente antes, durante y después de la compra de un yate.',
      href: '/es/buyer-representation',
      linkLabel: 'Ver representación del comprador',
    },
    {
      title: 'Valoración y evaluación de daños',
      description:
        'Valoración independiente y evaluación documentada de daños conforme al alcance acordado.',
      href: '/es/valuation-damage-survey',
      linkLabel: 'Ver valoración y daños',
    },
    {
      title: 'Entrega profesional de yates',
      description:
        'Traslado profesional de veleros, yates a motor y catamaranes en España y el Mediterráneo.',
      href: '/es/yacht-delivery',
      linkLabel: 'Ver entrega de yates',
    },
  ],
  finalCta: {
    heading: '¿Está pensando en comprar un yate?',
    body: 'Indíquenos el tipo, la eslora, la antigüedad y la ubicación actual del yate, así como la fecha de inspección preferida. Revisaremos los requisitos y prepararemos un presupuesto a medida.',
    links: [
      {
        label: 'Solicitar presupuesto de inspección',
        href: createContactHref({
          locale: 'es',
          service: 'pre-purchase-survey',
          source: 'pre-purchase-survey-final-cta',
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
  areaServed: prePurchaseSurveyPage.areaServed,
} as const;
