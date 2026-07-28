import { siteConfig } from '../site';
import { yachtsForSalePage } from '../yachts-for-sale';

const [allBrokerageYachts, sailingYachts, motorYachts] =
  yachtsForSalePage.brokerageDestinations;

if (!allBrokerageYachts || !sailingYachts || !motorYachts) {
  throw new Error(
    'The English Yachts for Sale page must retain its three brokerage destinations.',
  );
}

export const spanishYachtsForSalePage = {
  title: 'Yates en venta y asistencia al comprador | All Yacht Service',
  description:
    'Consulte yates en venta a través de Premium Yachts Spain y solicite representación del comprador o una inspección precompra independiente.',
  pathname: '/es/yachts-for-sale',
  pageClass: yachtsForSalePage.pageClass,
  eyebrow: 'Búsqueda de yates y asistencia técnica durante la compra',
  heading: 'Yates en venta y asistencia independiente al comprador',
  summary:
    'Consulte una selección de veleros y yates a motor a través de Premium Yachts Spain y cuente con una inspección independiente y asistencia técnica de All Yacht Service antes de la compra.',
  heroImage: {
    ...yachtsForSalePage.heroImage,
    alt: 'Yates amarrados en un puerto deportivo del Mediterráneo',
  },
  socialImageAlt:
    'Yates en un puerto deportivo del Mediterráneo con asistencia independiente para compradores',
  breadcrumbs: [
    { label: 'Inicio', href: '/es' },
    { label: 'Yates en venta', href: '/es/yachts-for-sale' },
  ],
  primaryCta: {
    label: 'Ver yates en venta',
    href: yachtsForSalePage.primaryCta.href,
    external: true,
  },
  secondaryCta: {
    label: 'Solicitar asistencia al comprador',
    href: '/es/contact?service=buyer-representation',
  },
  brokerageDestinations: [
    {
      title: 'Todos los yates en venta',
      description:
        'Consulte la página general de brokerage y acceda a la selección completa presentada por Premium Yachts Spain.',
      label: 'Ver todos los yates',
      href: allBrokerageYachts.href,
      image: {
        ...allBrokerageYachts.image,
        alt: 'Veleros y yates a motor amarrados en un puerto deportivo del Mediterráneo',
      },
    },
    {
      title: 'Veleros en venta',
      description:
        'Consulte veleros de crucero, veleros de altas prestaciones y catamaranes de vela presentados actualmente por Premium Yachts Spain.',
      label: 'Ver veleros',
      href: sailingYachts.href,
      image: {
        ...sailingYachts.image,
        alt: 'Velero fondeado en una bahía del Mediterráneo',
      },
    },
    {
      title: 'Yates a motor y embarcaciones a motor',
      description:
        'Consulte yates a motor, embarcaciones a motor y catamaranes a motor presentados actualmente por Premium Yachts Spain.',
      label: 'Ver yates a motor',
      href: motorYachts.href,
      image: {
        ...motorYachts.image,
        alt: 'Yate a motor navegando cerca de la costa mediterránea',
      },
    },
  ],
  buyerSupportItems: [
    'Revisión inicial de la información del yate',
    'Preguntas técnicas antes de la visita',
    'Planificación de la inspección para el comprador',
    'Asistencia durante la visita al yate',
    'Inspección precompra del yate',
    'Inspección durante la varada',
    'Asistencia durante la prueba de mar',
    'Observaciones sobre la maquinaria y los sistemas',
    'Revisión de la información de mantenimiento disponible',
    'Identificación de áreas que requieren una inspección especializada',
    'Explicación de los hallazgos relevantes',
    'Asistencia para comprender las implicaciones de las reparaciones',
    'Consulta técnica posterior a la inspección',
  ],
  conflictItems: [
    'La relación comercial se comunica antes de aceptar el encargo',
    'Se confirman el cliente que encarga el trabajo y el propósito previsto',
    'Se acuerdan el alcance de la inspección y el uso del informe',
    'Los intereses comerciales pertinentes se documentan cuando corresponde',
    'Los hallazgos técnicos se comunican de acuerdo con el alcance acordado de la inspección',
    'El comprador puede elegir a otro inspector naval',
    'El encargo puede rechazarse cuando no sea posible mantener adecuadamente la independencia',
  ],
  buyerJourney: [
    {
      title: 'Consulte los yates disponibles',
      description:
        'Revise los listados actuales en el sitio web de Premium Yachts Spain o a través de otro bróker.',
    },
    {
      title: 'Solicite asistencia inicial al comprador',
      description:
        'Envíe a All Yacht Service el enlace del yate, su ubicación y el plazo previsto para la compra.',
    },
    {
      title: 'Defina el alcance técnico',
      description:
        'Acuerde si necesita representación del comprador, una inspección precompra, varada, prueba de mar o asistencia especializada.',
    },
    {
      title: 'Inspeccione y revise',
      description:
        'El yate se inspecciona de acuerdo con el alcance acordado, y los hallazgos relevantes se documentan y explican.',
    },
    {
      title: 'Tome su propia decisión de compra',
      description:
        'Utilice el informe de inspección, el asesoramiento especializado, la información comercial y la documentación legal para tomar una decisión informada.',
    },
  ],
  documentItems: [
    'Registro de la embarcación',
    'Información sobre la propiedad cuando esté disponible',
    'Datos del constructor y del modelo',
    'Datos de identificación del casco',
    'Registros de motores y maquinaria',
    'Historial de mantenimiento',
    'Facturas de reacondicionamientos',
    'Informes de inspecciones anteriores cuando se hayan facilitado',
    'Pruebas de reparaciones importantes',
    'Información sobre siniestros declarados al seguro cuando se haya facilitado',
    'Inventario de equipos',
    'Documentación del IVA o fiscal cuando corresponda',
    'Documentación CE cuando corresponda',
    'Manuales y registros de servicio',
    'Información del anuncio actual',
  ],
  surveyReasons: [
    'La información del anuncio puede estar incompleta o desactualizada',
    'La presentación estética no confirma el estado estructural',
    'Es posible que los equipos no funcionen como se describe',
    'Las reparaciones anteriores pueden requerir una revisión adicional',
    'Las necesidades de mantenimiento pueden afectar al coste de propiedad',
    'La varada puede revelar hallazgos que no son visibles a flote',
    'La prueba de mar puede identificar problemas de funcionamiento',
    'Un informe escrito ayuda al comprador a comprender los hallazgos relevantes',
  ],
  relatedServices: [
    {
      title: 'Representación del comprador',
      description:
        'Asistencia técnica independiente durante todo el proceso de compra del yate.',
      href: '/es/buyer-representation',
      linkLabel: 'Ver representación del comprador',
    },
    {
      title: 'Inspección precompra de yates',
      description:
        'Evaluación independiente del estado accesible de un yate antes de la compra.',
      href: '/es/pre-purchase-survey',
      linkLabel: 'Ver inspecciones precompra',
    },
    {
      title: 'Calculadora del coste de una inspección precompra',
      description:
        'Prepare una estimación inicial del coste antes de solicitar un presupuesto.',
      href: '/es/pre-purchase-survey-calculator',
      linkLabel: 'Calcular coste de inspección',
    },
    {
      title: 'Valoración y evaluación de daños de yates',
      description:
        'Valoración basada en el estado e informe de daños para un propósito acordado.',
      href: '/es/valuation-damage-survey',
      linkLabel: 'Ver valoración y daños',
    },
    {
      title: 'Consejos para la inspección de yates',
      description:
        'Orientación técnica práctica para compradores que se preparan para inspeccionar un yate.',
      href: '/es/yacht-survey-tips',
      linkLabel: 'Leer consejos de inspección',
    },
  ],
  finalCta: {
    heading: '¿Ha encontrado un yate que desea inspeccionar?',
    body: 'Envíenos el enlace del anuncio, el tipo de embarcación, la eslora, la ubicación y el plazo de inspección que prefiere. Revisaremos la solicitud y propondremos un alcance adecuado de asistencia al comprador o de inspección.',
    note: 'Los listados, precios y disponibilidad actuales permanecen bajo el control del bróker responsable del anuncio.',
    links: [
      {
        label: 'Solicitar asistencia al comprador',
        href: '/es/contact?service=buyer-representation',
      },
      {
        label: 'Solicitar inspección precompra',
        href: '/es/contact?service=pre-purchase-survey',
      },
      {
        label: `WhatsApp ${siteConfig.contact.whatsapp}`,
        href: siteConfig.contact.whatsappHref,
        external: true,
      },
      {
        label: 'Ver yates disponibles',
        href: yachtsForSalePage.primaryCta.href,
        external: true,
      },
    ],
  },
} as const;
