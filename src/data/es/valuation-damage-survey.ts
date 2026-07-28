import { valuationDamageSurveyPage } from '../valuation-damage-survey';
import { siteConfig } from '../site';
import { createContactHref } from '../../utils/contact';
import type { LocalizedSection } from './types';

const valuationUseCases = [
  {
    title: 'Solicitud o renovación de seguro',
    description:
      'Una aseguradora puede solicitar una opinión sobre el valor actual de mercado u otra base de valor pertinente para la póliza propuesta.',
  },
  {
    title: 'Planificación de compra o venta',
    description:
      'Un comprador o propietario puede necesitar una indicación independiente del valor antes de tomar una decisión comercial.',
  },
  {
    title: 'Cambio de propiedad',
    description:
      'Puede solicitarse una valoración cuando cambia la propiedad o la parte asegurada.',
  },
  {
    title: 'Evaluación posterior a un reacondicionamiento',
    description:
      'Un yate puede requerir una nueva evaluación después de reparaciones, mejoras o trabajos de renovación importantes.',
  },
  {
    title: 'Financiación o revisión profesional',
    description:
      'Un prestamista, asesor u otra parte profesional puede solicitar una valoración, sujeta a un alcance acordado y a las condiciones de uso autorizadas.',
  },
  {
    title: 'Daños o posible pérdida total',
    description:
      'La información sobre el valor puede ser pertinente cuando debe compararse el coste o la importancia de los daños con el estado anterior o actual del yate.',
  },
] as const;

const valuationFactors = [
  'Marca, modelo y año del yate',
  'Material de construcción',
  'Eslora, configuración y alojamiento',
  'Maquinaria y propulsión',
  'Equipamiento y especificaciones',
  'Estado general observado',
  'Historial de mantenimiento y reacondicionamiento',
  'Documentación disponible',
  'Defectos conocidos o trabajos pendientes',
  'Ubicación y exposición al mercado',
  'Yates comparables ofrecidos actualmente o comercializados recientemente',
  'Condiciones de mercado pertinentes en la fecha de valoración',
] as const;

const valuationIsNot = [
  'Un precio de venta garantizado',
  'Un valor asegurado garantizado',
  'Una oferta vinculante de compra o venta',
  'Una liquidación fiscal',
  'Asesoramiento jurídico',
  'Asesoramiento financiero',
  'Una garantía del estado del yate',
] as const;

const damagePurposes = [
  'Qué zonas parecen estar afectadas',
  'La extensión visible de los daños',
  'Las cuestiones inmediatas de seguridad',
  'Si el yate debe utilizarse o desplazarse',
  'Qué sistemas requieren una investigación adicional',
  'Qué medidas provisionales o permanentes pueden considerarse',
  'Si se necesitan inspecciones o pruebas especializadas',
] as const;

const damageTypes = [
  {
    title: 'Daños por colisión',
    description:
      'Daños visibles derivados del contacto con otra embarcación, una estructura portuaria o un objeto fijo.',
  },
  {
    title: 'Daños por varada accidental',
    description:
      'Daños que pueden afectar a la quilla, el casco, el timón, las hélices, los ejes, los saildrives o la estructura asociada.',
  },
  {
    title: 'Daños por tormenta o condiciones meteorológicas',
    description:
      'Daños asociados a mal tiempo, fallo del amarre, inundación, impacto o movimiento de equipos.',
  },
  {
    title: 'Entrada de agua e inundación',
    description:
      'Daños observados en la estructura, maquinaria, equipos eléctricos, interiores o sistemas tras una entrada de agua.',
  },
  {
    title: 'Daños por incendio o calor',
    description:
      'Efectos visibles del fuego, el humo o el calor dentro de los límites de acceso seguro y del alcance acordado.',
  },
  {
    title: 'Fallo de maquinaria o sistemas',
    description:
      'Daños en la propulsión, el gobierno, los sistemas eléctricos, la fontanería u otros sistemas accesibles cuando resulte adecuado.',
  },
  {
    title: 'Daños en el aparejo y el mástil',
    description:
      'Daños visibles en el aparejo fijo o de labor, mástil, botavara, herrajes de cubierta o velas accesibles.',
  },
  {
    title: 'Daños durante transporte o izado',
    description:
      'Daños asociados a la varada, botadura, izado, transporte o manipulación en el varadero.',
  },
  {
    title: 'Vandalismo o daños por impacto',
    description: 'Daños físicos visibles que afectan al yate o a sus equipos.',
  },
  {
    title: 'Reparación anterior deficiente',
    description:
      'Indicios que sugieren trabajos de reparación inadecuados, incompletos o no documentados.',
  },
] as const;

const damageInspectionItems = [
  'Revisión de la información comunicada sobre el incidente',
  'Inspección visual de las zonas afectadas accesibles con seguridad',
  'Inspección de zonas adyacentes en busca de daños relacionados',
  'Documentación fotográfica',
  'Revisión de deformaciones o grietas estructurales visibles',
  'Evaluación de humedad cuando resulte adecuada',
  'Inspección de maquinaria y sistemas accesibles',
  'Revisión de componentes sumergidos cuando el yate está varado',
  'Identificación de cuestiones inmediatas de seguridad',
  'Opinión sobre la extensión aparente de los daños',
  'Opinión sobre la causa aparente o probable cuando esté respaldada por pruebas',
  'Recomendaciones para una revisión especializada',
  'Observaciones iniciales sobre el alcance preliminar de la reparación',
  'Revisión de presupuestos o propuestas de reparación cuando se haya acordado',
  'Informe escrito con hallazgos y limitaciones',
] as const;

const specialistInvestigations = [
  'Revisión por un ingeniero estructural',
  'Pruebas de laminado compuesto',
  'Medición ultrasónica de espesores',
  'Diagnóstico de motor o reductora',
  'Análisis de aceite u otros fluidos',
  'Pruebas eléctricas',
  'Inspección del aparejo en altura',
  'Inspección de refrigeración o aire acondicionado',
  'Análisis de laboratorio',
  'Consulta con el fabricante',
  'Desmontaje controlado',
  'Investigación por parte del varadero',
] as const;

const processSteps = [
  {
    title: 'Revisión inicial de la información',
    description:
      'Revisamos los datos y la ubicación del yate, el objetivo del encargo, la documentación disponible y cualquier información comunicada sobre el incidente.',
  },
  {
    title: 'Alcance y presupuesto',
    description:
      'El alcance de la valoración, la inspección de daños o el encargo combinado se acuerda antes de la cita.',
  },
  {
    title: 'Inspección',
    description:
      'El yate y las zonas accesibles pertinentes se inspeccionan conforme al alcance y a las condiciones acordadas.',
  },
  {
    title: 'Pruebas y análisis',
    description:
      'Se revisan el estado observado, las fotografías, la documentación y las pruebas técnicas o de mercado pertinentes.',
  },
  {
    title: 'Informe profesional',
    description:
      'El cliente recibe un informe escrito que expone los hallazgos, supuestos, recomendaciones y limitaciones.',
  },
] as const;

const reportItems = [
  'Datos de la embarcación',
  'Fecha y lugar de inspección',
  'Objetivo y alcance',
  'Base y fecha de valoración',
  'Estado general observado',
  'Pruebas de mercado disponibles',
  'Descripción y ubicación de los daños',
  'Pruebas fotográficas',
  'Extensión aparente de los daños',
  'Cuestiones inmediatas de seguridad',
  'Causa aparente o probable cuando pueda fundamentarse',
  'Investigaciones adicionales recomendadas',
  'Observaciones sobre el alcance preliminar de la reparación',
  'Supuestos y limitaciones',
  'Opinión profesional sobre el valor cuando esté incluida',
  'Declaración pertinente de conflictos de interés',
] as const;

const limitations = [
  'Estructuras ocultas',
  'Revestimientos y mobiliario fijo',
  'Ausencia de desmontaje',
  'Acceso restringido',
  'Contaminación o residuos',
  'Posición del yate',
  'Ausencia de varada',
  'Sistemas fuera de funcionamiento',
  'Documentación inexistente',
  'Reparaciones anteriores',
  'Tiempo transcurrido desde el incidente comunicado',
  'Cambios realizados antes de la inspección',
] as const;

const clients = [
  'Propietarios de yates',
  'Posibles compradores de yates',
  'Clientes de seguros',
  'Brókeres y suscriptores de seguros',
  'Brókeres de yates',
  'Varaderos y profesionales de la reparación',
  'Prestamistas o asesores profesionales cuando se acuerde el uso del informe',
  'Otras partes que necesiten una opinión técnica independiente',
] as const;

const whyChoose = [
  'Evaluación técnica independiente y centrada en el cliente',
  'Inspector naval de yates y embarcaciones menores certificado por IIMS',
  'Yacht & Small Craft Professional Qualification',
  'Capitán titulado',
  'Más de 20 años de experiencia en ingeniería, control de calidad y gestión',
  'Recopilación estructurada de pruebas e informes fotográficos',
  'Supuestos, limitaciones y recomendaciones claros',
  'Comunicación práctica con propietarios, aseguradoras, brókeres y profesionales de la reparación',
  'Divulgación de relaciones comerciales pertinentes antes de la cita',
  'Con base en Marina Greenwich, Altea',
  'Servicios en toda España y el Mediterráneo',
  'Informes emitidos normalmente en un plazo de 48 horas cuando el encargo lo permita',
] as const;

export const spanishValuationDamageSurveyPage = {
  title: 'Valoración y evaluación de daños de yates | All Yacht Service',
  description:
    'Valoración independiente y evaluación de daños de yates en España y el Mediterráneo, con pruebas documentadas e informes claros.',
  pathname: '/es/valuation-damage-survey',
  eyebrow: 'Evaluación técnica independiente',
  heading: 'Valoración y evaluación de daños de yates en España',
  summary:
    'Valoración basada en el estado y evaluación de daños para propietarios, compradores, aseguradoras, brókeres y profesionales de la reparación.',
  heroImage: {
    ...valuationDamageSurveyPage.heroImage,
    alt: 'Inspección técnica de un yate para valoración o evaluación de daños',
  },
  socialImageAlt:
    'Inspección técnica de un yate para valoración o evaluación de daños',
  contextualImage: {
    ...valuationDamageSurveyPage.contextualImage,
    alt: 'Veleros dañados en tierra después de condiciones meteorológicas severas',
    caption:
      'Yates dañados en tierra después de un episodio meteorológico severo, ejemplo de por qué deben considerarse conjuntamente el suceso, las pruebas visibles y las limitaciones de la inspección.',
  },
  breadcrumbs: [
    { label: 'Inicio', href: '/es' },
    {
      label: 'Valoración y evaluación de daños',
      href: '/es/valuation-damage-survey',
    },
  ],
  primaryCta: {
    label: 'Solicitar presupuesto de evaluación',
    href: createContactHref({
      locale: 'es',
      service: 'valuation-damage-survey',
    }),
  },
  secondaryCta: {
    label: 'Contactar por WhatsApp',
    href: siteConfig.contact.whatsappHref,
    external: true,
  },
  sections: [
    {
      id: 'evaluacion-independiente',
      heading: 'Valoración y evaluación de daños independiente',
      blocks: [
        {
          type: 'paragraph',
          content:
            'All Yacht Service ofrece servicios independientes de valoración de yates y evaluación de daños para veleros, yates a motor y catamaranes de hasta 40 metros.',
        },
        {
          type: 'paragraph',
          content:
            'Una valoración proporciona una opinión profesional sobre el valor de un yate en una fecha determinada y para un propósito acordado.',
        },
        {
          type: 'paragraph',
          content:
            'Una evaluación de daños registra la naturaleza, la ubicación y la extensión observada de los daños y puede ofrecer una opinión sobre la causa aparente, las prioridades de reparación y la necesidad de una investigación especializada adicional.',
        },
        {
          type: 'paragraph',
          content:
            'El alcance exacto se acuerda antes de la inspección según el yate, su ubicación, el uso previsto del informe y la información necesaria para el cliente que encarga el trabajo.',
        },
        {
          type: 'paragraph',
          content:
            'Los servicios son realizados por Aleksandrs Tolkacovs, Inspector naval de yates y embarcaciones menores certificado por IIMS y capitán titulado.',
        },
      ],
    },
    {
      id: 'valoracion-profesional',
      heading: 'Valoración profesional de yates',
      blocks: [
        {
          type: 'paragraph',
          content:
            'La valoración de un yate es una opinión profesional informada basada en los datos disponibles de la embarcación, el estado observado, el equipamiento, las especificaciones, el historial de mantenimiento y las pruebas de mercado pertinentes.',
        },
        {
          type: 'paragraph',
          content:
            'La valoración se expresa para una fecha y un propósito concretos. No debe considerarse una garantía del precio que alcanzará el yate en una futura venta.',
        },
        {
          type: 'paragraph',
          style: 'note',
          content:
            'La valoración puede encargarse como trabajo independiente o incluirse dentro del alcance acordado de otra inspección.',
        },
      ],
    },
    {
      id: 'cuando-valoracion',
      heading: 'Cuándo puede necesitarse una valoración de yates',
      blocks: [
        { type: 'cards', items: valuationUseCases },
        {
          type: 'paragraph',
          style: 'note',
          content:
            'El objetivo del encargo, la base de valor y los usuarios autorizados del informe deben confirmarse antes de aceptar el trabajo.',
        },
      ],
    },
    {
      id: 'desarrollo-valoracion',
      heading: 'Cómo se desarrolla una valoración de yates',
      blocks: [
        {
          type: 'paragraph',
          content:
            'Cuando se incluya en el alcance acordado, la valoración puede considerar:',
        },
        { type: 'list', style: 'check', items: valuationFactors },
        {
          type: 'paragraph',
          style: 'note',
          content:
            'Las pruebas disponibles varían entre yates. Todo supuesto, carencia de información o limitación que afecte a la opinión profesional sobre el valor se indicará en el informe.',
        },
      ],
    },
    {
      id: 'opinion-valor',
      heading: 'Cómo interpretar la opinión profesional sobre el valor',
      blocks: [
        {
          type: 'paragraph',
          content:
            'El informe debe identificar la base de valoración prevista y la fecha a la que se aplica la opinión.',
        },
        {
          type: 'paragraph',
          content:
            'Según el encargo acordado, puede tratarse de una opinión sobre el valor actual de mercado u otra base de valor claramente definida solicitada por el cliente o la aseguradora.',
        },
        { type: 'paragraph', content: 'Una valoración no es:' },
        { type: 'list', style: 'defect', items: valuationIsNot },
        {
          type: 'paragraph',
          content:
            'El precio final de venta puede verse afectado por la negociación, la urgencia, la ubicación, la documentación, la exposición al mercado, la demanda y los cambios posteriores a la fecha de valoración.',
        },
      ],
    },
    {
      id: 'evaluacion-danos',
      heading: 'Evaluación independiente de daños',
      blocks: [
        {
          type: 'paragraph',
          content:
            'La evaluación de daños documenta los daños observados y su efecto sobre estructuras, sistemas, maquinaria o equipos accesibles dentro del alcance acordado.',
        },
        {
          type: 'paragraph',
          content:
            'El objetivo puede ser ayudar a un propietario, comprador, aseguradora, bróker, varadero u otra parte a comprender:',
        },
        { type: 'list', style: 'check', items: damagePurposes },
        {
          type: 'paragraph',
          style: 'note',
          content:
            'El inspector registra las pruebas observadas y aporta observaciones técnicas profesionales. Las decisiones sobre cobertura, responsabilidad, resolución de siniestros y autorización de reparaciones corresponden a las partes pertinentes.',
        },
        {
          type: 'figure',
          image: {
            ...valuationDamageSurveyPage.contextualImage,
            alt: 'Veleros dañados en tierra después de condiciones meteorológicas severas',
            caption:
              'Yates dañados en tierra después de un episodio meteorológico severo, ejemplo de por qué deben considerarse conjuntamente el suceso, las pruebas visibles y las limitaciones de la inspección.',
          },
        },
      ],
    },
    {
      id: 'tipos-danos',
      heading: 'Daños que pueden evaluarse',
      blocks: [
        { type: 'cards', items: damageTypes },
        {
          type: 'paragraph',
          style: 'note',
          content:
            'El nivel de investigación de cada categoría depende del acceso seguro, del alcance acordado y de si se necesitan inspecciones o pruebas especializadas.',
        },
      ],
    },
    {
      id: 'contenido-evaluacion-danos',
      heading: 'Qué puede incluir una evaluación de daños',
      blocks: [
        {
          type: 'paragraph',
          content:
            'El alcance exacto depende del suceso, el yate y los requisitos del cliente.',
        },
        {
          type: 'paragraph',
          content: 'Un encargo habitual puede incluir:',
        },
        { type: 'list', style: 'check', items: damageInspectionItems },
        {
          type: 'paragraph',
          style: 'note',
          content:
            'Solo se ofrecerá una opinión sobre la causa aparente o probable cuando las pruebas disponibles la respalden y se encuentre dentro del alcance acordado.',
        },
      ],
    },
    {
      id: 'investigacion-especializada',
      heading: 'Cuándo puede necesitarse una investigación especializada',
      blocks: [
        {
          type: 'paragraph',
          content:
            'Algunos daños no pueden evaluarse completamente mediante una inspección visual y no destructiva.',
        },
        {
          type: 'paragraph',
          content:
            'Puede recomendarse una investigación adicional, que incluya:',
        },
        { type: 'list', style: 'check', items: specialistInvestigations },
        {
          type: 'paragraph',
          style: 'note',
          content:
            'Los servicios especializados, el desmontaje, las pruebas de laboratorio y los presupuestos de reparación no se incluyen automáticamente salvo que figuren en el alcance acordado.',
        },
      ],
    },
    {
      id: 'reparacion-costes',
      heading: 'Alcance de reparación e información sobre costes',
      blocks: [
        {
          type: 'paragraph',
          content:
            'Un informe de daños puede identificar zonas que requieren reparación y aportar un esquema técnico inicial de los trabajos que deben considerarse.',
        },
        {
          type: 'paragraph',
          content:
            'Cuando se haya acordado, All Yacht Service puede revisar propuestas o presupuestos de reparación facilitados por varaderos y contratistas especializados.',
        },
        {
          type: 'paragraph',
          style: 'note',
          content:
            'Las observaciones preliminares del inspector no constituyen una especificación fija ni un coste de reparación garantizado. Los métodos, materiales, mano de obra y precios finales deben ser confirmados por los profesionales debidamente cualificados que realicen el trabajo.',
        },
      ],
    },
    {
      id: 'proceso-evaluacion',
      heading: 'Cómo funciona el proceso de evaluación',
      blocks: [{ type: 'process', steps: processSteps }],
    },
    {
      id: 'informe-profesional',
      heading: 'Informe profesional claro',
      blocks: [
        {
          type: 'paragraph',
          content: 'Según el encargo acordado, el informe puede incluir:',
        },
        { type: 'list', style: 'check', items: reportItems },
        {
          type: 'paragraph',
          content:
            'Los informes se emiten normalmente en un plazo de 48 horas desde la finalización de la inspección, sujeto al alcance, la documentación, el estudio de mercado y cualquier información especializada necesaria.',
        },
      ],
    },
    {
      id: 'limitaciones-inspeccion',
      heading: 'Limitaciones de la inspección y del informe',
      blocks: [
        {
          type: 'paragraph',
          content:
            'La inspección suele ser visual y no destructiva y se limita a las zonas, estructuras, sistemas y equipos accesibles con seguridad en el momento de la cita.',
        },
        {
          type: 'paragraph',
          content:
            'El informe no garantiza que se identifiquen todos los defectos, mecanismos de daño o estados ocultos.',
        },
        {
          type: 'paragraph',
          content: 'La evaluación puede verse limitada por:',
        },
        { type: 'list', style: 'defect', items: limitations },
        {
          type: 'paragraph',
          style: 'note',
          content:
            'Toda limitación importante que afecte a las conclusiones se indicará en el informe.',
        },
      ],
    },
    {
      id: 'comparacion-servicios',
      heading:
        '¿Valoración, evaluación de daños, inspección para seguro o precompra?',
      blocks: [
        {
          type: 'paragraph',
          content:
            'Una valoración se centra en ofrecer una opinión profesional sobre el valor para una fecha y un propósito acordados.',
        },
        {
          type: 'paragraph',
          content:
            'Una evaluación de daños se centra en la naturaleza, la ubicación y la extensión aparente de los daños comunicados u observados.',
        },
        {
          type: 'paragraph',
          content: [
            'Una ',
            {
              text: 'inspección de condición para seguro',
              href: '/es/insurance-survey',
            },
            ' proporciona a la aseguradora información sobre el estado general, la seguridad y los riesgos relacionados con la asegurabilidad.',
          ],
        },
        {
          type: 'paragraph',
          content: [
            'Una ',
            {
              text: 'inspección precompra',
              href: '/es/pre-purchase-survey',
            },
            ' ofrece al posible comprador una evaluación más amplia para apoyar su decisión.',
          ],
        },
        {
          type: 'paragraph',
          style: 'note',
          content:
            'Estos servicios pueden solaparse en determinados encargos, pero ninguno debe considerarse automáticamente sustituto de otro. El alcance necesario debe acordarse antes de la inspección.',
        },
      ],
    },
    {
      id: 'clientes-servicio',
      heading: '¿Quién puede encargar el servicio?',
      blocks: [
        { type: 'list', style: 'check', items: clients },
        {
          type: 'paragraph',
          style: 'note',
          content:
            'Para cada encargo deben acordarse el cliente, el propósito, los destinatarios del informe y las condiciones de uso autorizadas.',
        },
      ],
    },
    {
      id: 'cobertura-valoracion-danos',
      heading: 'Valoración y evaluación de daños en España y el Mediterráneo',
      blocks: [
        {
          type: 'paragraph',
          content:
            'Con base en Marina Greenwich, Altea, All Yacht Service ofrece valoración y evaluación de daños en Alicante, Costa Blanca, Valencia, Barcelona, la España peninsular y la costa mediterránea española.',
        },
        {
          type: 'paragraph',
          content:
            'También pueden organizarse encargos en las Islas Baleares, Francia, Italia, Grecia y otros destinos europeos o internacionales, según la ubicación, los requisitos de acceso y el alcance acordado.',
        },
        {
          type: 'paragraph',
          style: 'note',
          content:
            'Los viajes, el alojamiento, la varada, el acceso al puerto deportivo, los servicios especializados y otros costes de terceros no están incluidos automáticamente salvo que se indiquen en el presupuesto.',
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
      title: 'Inspección de condición para seguro',
      description:
        'Evaluación del estado e informe para solicitudes y renovaciones de seguro.',
      href: '/es/insurance-survey',
      linkLabel: 'Ver inspección para seguro',
    },
    {
      title: 'Inspección precompra',
      description:
        'Evaluación independiente del estado del yate antes de completar una compra.',
      href: '/es/pre-purchase-survey',
      linkLabel: 'Ver inspección precompra',
    },
    {
      title: 'Representación del comprador',
      description:
        'Asistencia técnica independiente antes, durante y después de la compra.',
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
    heading: '¿Necesita una valoración o evaluación de daños?',
    body: 'Envíenos el tipo, la eslora y la ubicación del yate, así como el propósito de la evaluación. Para consultas sobre daños, incluya una breve descripción del incidente y las fotografías o documentos disponibles.',
    note: 'El formulario de Contacto permite adjuntar archivos PDF e imágenes dentro de los límites configurados.',
    links: [
      {
        label: 'Solicitar presupuesto de evaluación',
        href: createContactHref({
          locale: 'es',
          service: 'valuation-damage-survey',
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
  serviceSchemas: [
    {
      id: 'valuation-service',
      name: 'Valoración de yates',
      serviceType: 'Valoración de yates',
      description:
        'Opinión profesional independiente sobre el valor de un yate conforme al propósito, el alcance y las pruebas de mercado acordados.',
    },
    {
      id: 'damage-service',
      name: 'Evaluación de daños de yates',
      serviceType: 'Evaluación de daños de yates',
      description:
        'Inspección e informe independientes de los daños observados, su extensión aparente y las investigaciones adicionales recomendadas.',
    },
  ],
  areaServed: valuationDamageSurveyPage.areaServed,
} as const;
