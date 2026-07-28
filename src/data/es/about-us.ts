import { aboutUsPage } from '../about-us';
import { siteConfig } from '../site';
import { createContactHref } from '../../utils/contact';
import type { LocalizedSection } from './types';

const qualifications = [
  {
    title: 'Certificación IIMS',
    description:
      'Inspector naval de yates y embarcaciones menores certificado por IIMS.',
  },
  {
    title: 'Yacht & Small Craft Professional Qualification',
    description:
      'Formación profesional centrada en la inspección de yates y embarcaciones menores.',
  },
  {
    title: 'Capitán titulado',
    description:
      'Titulado para operar veleros y yates a motor dentro del alcance confirmado de su licencia.',
  },
  {
    title: 'Experiencia en ingeniería',
    description:
      'Más de 20 años de experiencia en ingeniería, procesos técnicos y resolución práctica de problemas.',
  },
  {
    title: 'Control de calidad',
    description:
      'Amplia experiencia en inspección estructurada, recopilación de pruebas, análisis de defectos, evaluación de riesgos e informes.',
  },
  {
    title: 'Experiencia en gestión',
    description:
      'Experiencia coordinando personas, prioridades, normas de calidad y trabajos técnicos complejos.',
  },
  {
    title: 'Experiencia en entrega de yates y regatas',
    description:
      'Experiencia práctica operando yates durante entregas, travesías y regatas.',
  },
] as const;

const services = [
  {
    title: 'Inspecciones precompra de yates',
    description:
      'Evaluación independiente de la estructura, sistemas, maquinaria, equipos y estado general accesibles del yate antes de la compra.',
    href: '/es/pre-purchase-survey',
    linkLabel: 'Ver inspección precompra',
  },
  {
    title: 'Inspecciones de condición para seguro',
    description:
      'Evaluación del estado e informe profesional para solicitudes de seguro, renovaciones de póliza y cambios de propiedad.',
    href: '/es/insurance-survey',
    linkLabel: 'Ver inspección para seguro',
  },
  {
    title: 'Representación del comprador',
    description:
      'Asistencia técnica independiente antes, durante y después de la compra de un yate.',
    href: '/es/buyer-representation',
    linkLabel: 'Ver representación del comprador',
  },
  {
    title: 'Entrega profesional de yates',
    description:
      'Traslado cuidadosamente planificado de veleros, yates a motor y catamaranes en España y el Mediterráneo.',
    href: '/es/yacht-delivery',
    linkLabel: 'Ver entrega de yates',
  },
  {
    title: 'Valoración y evaluación de daños',
    description:
      'Valoración independiente y evaluación del estado o de los daños dentro del alcance profesional acordado.',
    href: '/es/valuation-damage-survey',
    linkLabel: 'Ver valoración y daños',
  },
] as const;

const approachPoints = [
  'Acuerdo claro del alcance antes del encargo',
  'Evaluación técnica independiente y práctica',
  'Inspección cuidadosa de las zonas accesibles con seguridad',
  'Pruebas fotográficas cuando resulten pertinentes',
  'Explicación clara de los hallazgos importantes',
  'Recomendaciones priorizadas',
  'Limitaciones transparentes',
  'Comunicación práctica antes y después de la inspección',
  'Informes emitidos normalmente en un plazo de 48 horas cuando corresponda',
] as const;

const supportedClients = [
  'Compradores particulares de yates',
  'Propietarios actuales de yates',
  'Compradores internacionales que adquieren un yate en España o el Mediterráneo',
  'Clientes de seguros',
  'Brókeres y suscriptores de seguros',
  'Brókeres de yates que necesitan asistencia independiente de inspección',
  'Varaderos y centros de reparación cuando se requiere un informe independiente',
  'Propietarios que organizan el traslado de un yate',
  'Compradores que planifican reparaciones, mantenimiento o reacondicionamiento',
] as const;

const coverage = [
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
  'Costa mediterránea española',
  'España peninsular',
  'Islas Baleares cuando sea necesario',
] as const;

const whyChoose = [
  'Enfoque independiente y centrado en el cliente',
  'Inspector naval de yates y embarcaciones menores certificado por IIMS',
  'Yacht & Small Craft Professional Qualification',
  'Capitán titulado',
  'Experiencia en entrega de yates y regatas',
  'Más de 20 años de experiencia en ingeniería, control de calidad y gestión',
  'Informes claros, detallados y prácticos',
  'Alcance y limitaciones transparentes',
  'Divulgación de relaciones comerciales pertinentes antes de la cita',
  'Con base en Marina Greenwich, Altea',
  'Servicios en toda España y el Mediterráneo',
  'Encargos europeos e internacionales disponibles previo acuerdo',
] as const;

export const spanishAboutUsPage = {
  title: 'Sobre All Yacht Service | Inspector naval de yates',
  description:
    'Conozca All Yacht Service y a Aleksandrs Tolkacovs, inspector naval certificado por IIMS con base en Altea, España.',
  pathname: '/es/about-us',
  eyebrow: 'Servicios profesionales para yates',
  heading: 'Sobre All Yacht Service',
  summary:
    'Inspección independiente de yates, asistencia técnica y entrega profesional desde Marina Greenwich, Altea, España.',
  // Sustituir esta imagen temporal por una fotografía real aprobada de servicios marinos.
  heroImage: {
    ...aboutUsPage.heroImage,
    alt: 'Servicios técnicos profesionales para yates en España',
  },
  socialImageAlt:
    'Inspección de yates y asistencia técnica de All Yacht Service en España',
  // Sustituir esta imagen temporal por una fotografía aprobada de Aleksandrs o de su trabajo profesional.
  profileImage: {
    ...aboutUsPage.profileImage,
    alt: 'Consulta profesional y acuerdo entre dos personas',
  },
  breadcrumbs: [
    { label: 'Inicio', href: '/es' },
    { label: 'Sobre nosotros', href: '/es/about-us' },
  ],
  primaryCta: {
    label: 'Comentar sus necesidades',
    href: createContactHref({
      locale: 'es',
      source: 'about-us-hero',
    }),
  },
  secondaryCta: {
    label: 'Contactar por WhatsApp',
    href: siteConfig.contact.whatsappHref,
    external: true,
  },
  sections: [
    {
      id: 'servicios-independientes',
      heading: 'Servicios independientes para yates con base en Altea',
      blocks: [
        {
          type: 'paragraph',
          content:
            'All Yacht Service ofrece inspección independiente de yates, representación del comprador y entrega profesional de yates en España y el Mediterráneo.',
        },
        {
          type: 'paragraph',
          content:
            'Con base en Marina Greenwich, Altea, Alicante, el servicio ayuda a compradores, propietarios, aseguradoras y brókeres con información técnica clara y asistencia práctica.',
        },
        {
          type: 'paragraph',
          content:
            'Los servicios están disponibles para veleros, yates a motor y catamaranes de hasta 24 metros.',
        },
        {
          type: 'paragraph',
          content:
            'El objetivo es ayudar a los clientes a comprender el estado observado de una embarcación, sus riesgos técnicos, las prioridades de mantenimiento y los requisitos prácticos para que puedan tomar decisiones mejor informadas.',
        },
      ],
    },
    {
      id: 'perfil-profesional',
      heading: 'Aleksandrs Tolkacovs',
      blocks: [
        {
          type: 'profile',
          paragraphs: [
            'All Yacht Service está dirigido por Aleksandrs Tolkacovs, Inspector naval de yates y embarcaciones menores certificado por IIMS y capitán titulado.',
            'Su trayectoria profesional combina la operación práctica de yates con más de 20 años de experiencia en ingeniería, control de calidad y gestión.',
            'Esta combinación respalda un enfoque estructurado de las inspecciones, la evaluación de defectos, los informes, el análisis de riesgos y la comunicación con compradores, propietarios, brókeres, aseguradoras, varaderos y especialistas técnicos.',
            'Aleksandrs cuenta con experiencia práctica operando veleros y yates a motor en:',
          ],
          areas: [
            'El Mediterráneo',
            'El mar Báltico',
            'El canal de la Mancha',
            'El golfo de Vizcaya',
          ],
          closing:
            'Su experiencia marítima también incluye la entrega de yates y la participación en regatas.',
          image: {
            ...aboutUsPage.profileImage,
            alt: 'Consulta profesional y acuerdo entre dos personas',
          },
        },
      ],
    },
    {
      id: 'cualificaciones',
      heading: 'Cualificaciones y trayectoria profesional',
      blocks: [{ type: 'cards', items: qualifications }],
    },
    {
      id: 'servicios-profesionales',
      heading: 'Servicios profesionales para yates',
      blocks: [
        {
          type: 'paragraph',
          content: 'All Yacht Service se centra en las siguientes áreas:',
        },
        {
          type: 'cards',
          className: 'about-services-grid',
          items: services,
        },
      ],
    },
    {
      id: 'enfoque-practico',
      heading: 'Un enfoque claro y práctico',
      blocks: [
        {
          type: 'paragraph',
          content:
            'Las inspecciones y los encargos técnicos se abordan de forma sistemática, atendiendo al alcance acordado, el acceso a la embarcación, las condiciones de inspección y el propósito previsto del trabajo.',
        },
        { type: 'paragraph', content: 'Los clientes pueden esperar:' },
        { type: 'list', style: 'check', items: approachPoints },
        {
          type: 'paragraph',
          style: 'note',
          content:
            'La inspección suele ser no destructiva y se limita a las zonas, sistemas y equipos accesibles con seguridad en el momento de la visita. Ninguna inspección puede garantizar que se identifiquen todos los defectos existentes.',
        },
      ],
    },
    {
      id: 'independencia-responsabilidad',
      heading: 'Independencia y responsabilidad profesional',
      blocks: [
        {
          type: 'paragraph',
          content:
            'El propósito de una inspección independiente es proporcionar al cliente información técnica objetiva basada en el estado observado de la embarcación y en el alcance acordado.',
        },
        {
          type: 'paragraph',
          content:
            'All Yacht Service no realiza reparaciones como parte de un encargo de inspección independiente y no permite que intereses de reparación influyan en los hallazgos.',
        },
        {
          type: 'paragraph',
          content:
            'Cualquier relación comercial o posible conflicto de interés relacionado con una embarcación se comunicará antes de aceptar el encargo.',
        },
        {
          type: 'paragraph',
          content:
            'Cuando un conflicto pueda impedir prestar un servicio debidamente independiente, el encargo podrá rechazarse o sus limitaciones se acordarán claramente con el cliente.',
        },
      ],
    },
    {
      id: 'premium-yachts-spain',
      heading: 'Relación con Premium Yachts Spain',
      blocks: [
        {
          type: 'paragraph',
          content:
            'Aleksandrs Tolkacovs también ejerce como Chief Operating Officer de Premium Yachts Spain, un negocio separado de venta de yates y servicios marinos.',
        },
        {
          type: 'paragraph',
          content:
            'Esta relación aporta una visión práctica de las operaciones de compraventa, las necesidades de los compradores, la comunicación con distribuidores y el mercado de yates en general.',
        },
        {
          type: 'paragraph',
          content:
            'No obstante, los encargos de inspección naval deben mantenerse transparentes.',
        },
        {
          type: 'paragraph',
          content:
            'Cuando una embarcación, vendedor, comprador, bróker, fabricante u operación tenga una relación comercial con Premium Yachts Spain, dicha relación se comunicará antes de que All Yacht Service acepte una inspección independiente o un encargo de asistencia al comprador.',
        },
        {
          type: 'paragraph',
          content:
            'El cliente será informado de cualquier limitación pertinente o posible conflicto para que pueda decidir si desea continuar.',
        },
        {
          type: 'paragraph',
          style: 'note',
          content:
            'All Yacht Service y Premium Yachts Spain no deben presentarse como la misma entidad jurídica salvo que esa situación se confirme posteriormente.',
        },
      ],
    },
    {
      id: 'clientes',
      heading: 'A quién ayudamos',
      blocks: [
        {
          type: 'paragraph',
          content:
            'All Yacht Service trabaja con clientes que necesitan asistencia técnica clara y práctica, entre ellos:',
        },
        { type: 'list', style: 'defect', items: supportedClients },
        {
          type: 'paragraph',
          style: 'note',
          content:
            'Para cada encargo deben acordarse el cliente, el propósito del informe y las condiciones de uso autorizadas.',
        },
      ],
    },
    {
      id: 'cobertura',
      heading: 'Cobertura de las inspecciones de yates',
      blocks: [
        {
          type: 'paragraph',
          content:
            'Con base en Marina Greenwich, Altea, All Yacht Service realiza inspecciones de yates y servicios relacionados en:',
        },
        { type: 'list', style: 'defect', items: coverage },
        {
          type: 'paragraph',
          content:
            'También pueden organizarse servicios en Francia, Italia, Grecia y otros destinos europeos o internacionales, según la ubicación de la embarcación, los requisitos de viaje y el alcance acordado.',
        },
        {
          type: 'paragraph',
          style: 'note',
          content:
            'Los viajes, el alojamiento, la varada y otros costes relacionados con la ubicación no están incluidos automáticamente salvo que se indiquen en el presupuesto.',
        },
      ],
    },
    {
      id: 'oficina-altea',
      heading: 'Con base en Marina Greenwich, Altea',
      blocks: [
        {
          type: 'office',
          introduction:
            'All Yacht Service tiene su base en Marina Greenwich, también conocida como Puerto Deportivo Luis Campomanes, en Altea, Alicante.',
          addressHeading: 'Dirección de la oficina',
          hoursHeading: 'Horario',
          hours: 'Lunes–viernes, 09:00–18:00',
          appointments:
            'Las visitas a la oficina son bienvenidas durante los días laborables, aunque se recomienda concertar cita porque las inspecciones y entregas suelen realizarse fuera de la oficina.',
          callLabel: 'Llamar al',
          whatsappLabel: 'WhatsApp',
          emailLabel: 'Correo electrónico',
          googleLabel: 'Ver All Yacht Service en Google',
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
        'Evaluación independiente del estado del yate antes de completar una compra.',
      href: '/es/pre-purchase-survey',
      linkLabel: 'Ver inspección precompra',
    },
    {
      title: 'Inspección de condición para seguro',
      description:
        'Evaluación del estado e informe para solicitudes y renovaciones de seguro.',
      href: '/es/insurance-survey',
      linkLabel: 'Ver inspección para seguro',
    },
    {
      title: 'Representación del comprador',
      description:
        'Asistencia técnica antes, durante y después de la compra de un yate.',
      href: '/es/buyer-representation',
      linkLabel: 'Ver representación del comprador',
    },
    {
      title: 'Entrega profesional de yates',
      description: 'Traslado profesional de yates en España y el Mediterráneo.',
      href: '/es/yacht-delivery',
      linkLabel: 'Ver entrega de yates',
    },
  ],
  finalCta: {
    heading: 'Comente sus necesidades para el yate',
    body: 'Háblenos del yate, su ubicación y el servicio que necesita. Revisaremos la información disponible y prepararemos un presupuesto a medida.',
    links: [
      {
        label: 'Contactar con All Yacht Service',
        href: createContactHref({
          locale: 'es',
          source: 'about-us-final-cta',
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
  person: {
    id: aboutUsPage.person.id,
    name: siteConfig.surveyor,
    jobTitle:
      'Inspector naval de yates y embarcaciones menores certificado por IIMS y capitán titulado',
    knowsAbout: [
      'Inspección de yates',
      'Inspecciones precompra',
      'Inspecciones de condición para seguro',
      'Representación del comprador',
      'Entrega profesional de yates',
      'Evaluación del estado de yates',
      'Control de calidad en el sector marino',
    ],
  },
} as const;
