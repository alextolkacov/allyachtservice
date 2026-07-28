import { insuranceSurveyPage } from '../insurance-survey';
import { siteConfig } from '../site';
import { createContactHref } from '../../utils/contact';
import type { LocalizedSection } from './types';

const suitabilityItems = [
  {
    title: 'Nueva solicitud de seguro',
    description:
      'Cuando se contrata por primera vez la cobertura de un yate con una aseguradora determinada.',
  },
  {
    title: 'Renovación de la póliza',
    description:
      'Cuando la aseguradora solicita una evaluación actualizada por la antigüedad, el valor o el estado del yate, o por la fecha de la inspección anterior.',
  },
  {
    title: 'Cambio de propiedad',
    description:
      'Cuando cambia el tomador de la póliza o la propiedad del yate.',
  },
  {
    title: 'Cambio de aseguradora',
    description:
      'Cuando se traslada una póliza de yate existente a otra compañía aseguradora.',
  },
  {
    title: 'Embarcación de cierta antigüedad',
    description:
      'Cuando el yate alcanza una antigüedad por la que el suscriptor de seguros solicita informes periódicos sobre su estado.',
  },
  {
    title: 'Cambio de uso o zona de navegación',
    description:
      'Cuando cambian el uso previsto, el puerto base o la zona de navegación del yate.',
  },
  {
    title: 'Después de un reacondicionamiento o reparación importante',
    description:
      'Cuando se han realizado trabajos importantes y la aseguradora solicita confirmación del estado actual de la embarcación.',
  },
] as const;

const inspectionItems = [
  {
    title: 'Casco, cubierta y superestructura',
    description:
      'Evaluación visual del casco, la cubierta, la superestructura, los herrajes y las zonas estructurales accesibles con seguridad.',
  },
  {
    title: 'Estado estructural general',
    description:
      'Revisión de indicios visibles de daños, deterioro, deformación, fatiga o reparaciones anteriores.',
  },
  {
    title: 'Maquinaria y propulsión',
    description:
      'Comprobaciones visuales y operativas, cuando resulte práctico, de motores, equipos de propulsión y sistemas asociados accesibles.',
  },
  {
    title: 'Sistemas eléctricos',
    description:
      'Inspección de sistemas accesibles de corriente alterna y continua, baterías, equipos de carga, cableado y cuadros de distribución.',
  },
  {
    title: 'Fontanería y grifos de fondo',
    description:
      'Inspección de bombas, tuberías, mangueras, abrazaderas, grifos de fondo, tanques y sistemas de agua accesibles.',
  },
  {
    title: 'Gobierno y controles',
    description:
      'Inspección de los equipos de gobierno, controles y componentes asociados accesibles.',
  },
  {
    title: 'Sistemas de combustible',
    description:
      'Inspección visual de tanques, conducciones, filtros, dispositivos de cierre y equipos asociados accesibles.',
  },
  {
    title: 'Seguridad contra incendios',
    description:
      'Revisión de los equipos accesibles de lucha contra incendios, el estado de la instalación y la información de mantenimiento disponible.',
  },
  {
    title: 'Equipos de salvamento',
    description:
      'Revisión de chalecos salvavidas, aros salvavidas, balsas y otros equipos de seguridad accesibles.',
  },
  {
    title: 'Equipos de navegación y comunicación',
    description:
      'Comprobaciones operativas de los equipos accesibles de navegación y comunicación cuando resulte práctico.',
  },
  {
    title: 'Sentina y protección contra inundaciones',
    description:
      'Revisión de bombas de achique, alarmas, drenajes y posibles puntos de entrada de agua accesibles.',
  },
  {
    title: 'Aparejo y velas',
    description:
      'Inspección visual desde cubierta del aparejo fijo y de labor accesible en veleros, cuando se incluya en el alcance acordado.',
  },
  {
    title: 'Componentes sumergidos',
    description:
      'Inspección del casco sumergido, quilla, timón, hélices, ejes, saildrives y accesorios cuando la varada sea necesaria o esté disponible.',
  },
  {
    title: 'Identificación y documentación de la embarcación',
    description:
      'Revisión de la identificación, el registro y la documentación pertinente de la embarcación facilitada por el propietario.',
  },
  {
    title: 'Informe escrito',
    description:
      'Informe profesional con fotografías, hallazgos y recomendaciones adecuado para su presentación a la aseguradora o al bróker.',
  },
] as const;

const findings = [
  'Deterioro estructural o daños anteriores',
  'Entrada de humedad o zonas blandas en la cubierta',
  'Corrosión de tanques, accesorios o componentes sumergidos',
  'Grifos de fondo, mangueras o abrazaderas deteriorados',
  'Deficiencias en la instalación eléctrica',
  'Fugas de maquinaria o necesidades de mantenimiento',
  'Defectos en el sistema de gobierno',
  'Equipos de seguridad ausentes, caducados o inadecuados',
  'Disposiciones insuficientes de lucha contra incendios',
  'Deficiencias en las bombas de achique o la protección contra inundaciones',
  'Modificaciones mal ejecutadas o sin documentar',
  'Problemas en el aparejo de los veleros',
  'Indicios de varada accidental, colisión o entrada de agua',
] as const;

const insurerRequirements = [
  'Un formulario o cuestionario de inspección determinado',
  'La varada del yate',
  'Una valoración actual de mercado',
  'Fotografías de zonas o equipos específicos',
  'Una inspección de maquinaria o información sobre pruebas del motor',
  'Información sobre el aparejo fijo',
  'Pruebas del mantenimiento de los equipos de seguridad',
  'Pruebas de que se han atendido recomendaciones anteriores',
  'Un informe emitido dentro de un plazo determinado',
  'Redacción específica para la póliza o la zona de navegación',
] as const;

const processSteps = [
  {
    title: 'Revisión de los requisitos del seguro',
    description:
      'Revisamos los datos y la ubicación del yate, las instrucciones de la aseguradora y cualquier formulario obligatorio antes de confirmar el alcance y el presupuesto.',
  },
  {
    title: 'Preparación de la inspección',
    description:
      'El acceso se coordina con el propietario, el puerto deportivo, el varadero u otro representante. La varada se organiza cuando la exige la aseguradora o el alcance acordado.',
  },
  {
    title: 'Inspección del estado',
    description:
      'Se examinan la estructura, los sistemas, la maquinaria, los equipos de seguridad y la documentación pertinente accesibles del yate.',
  },
  {
    title: 'Hallazgos y recomendaciones',
    description:
      'Se registran y priorizan los defectos observados y las cuestiones de seguridad, con recomendaciones prácticas cuando corresponda.',
  },
  {
    title: 'Informe para la aseguradora',
    description:
      'El cliente recibe un informe escrito con fotografías para presentarlo al bróker de seguros o al suscriptor de seguros.',
  },
] as const;

const reportItems = [
  'Datos de la embarcación',
  'Fecha y lugar de la inspección',
  'Alcance y limitaciones',
  'Evaluación del estado general',
  'Pruebas fotográficas',
  'Hallazgos relacionados con la seguridad y la asegurabilidad',
  'Recomendaciones priorizadas',
  'Valoración cuando esté incluida en el alcance acordado',
  'Declaración de las limitaciones y los conflictos de interés pertinentes',
] as const;

const whyChoose = [
  'Evaluación profesional independiente',
  'Inspector naval de yates y embarcaciones menores certificado por IIMS',
  'Yacht & Small Craft Professional Qualification',
  'Capitán titulado con experiencia práctica en veleros y yates a motor',
  'Más de 20 años de experiencia en ingeniería, control de calidad y gestión',
  'Informes de inspección claros, detallados y prácticos',
  'Informes emitidos normalmente en un plazo de 48 horas',
  'Con base en Marina Greenwich, Altea',
  'Servicios en toda España y el Mediterráneo',
  'Revisión previa de formularios e instrucciones escritos de la aseguradora cuando se facilitan',
] as const;

export const spanishInsuranceSurveyPage = {
  title: 'Inspección de yates para seguro en España | All Yacht Service',
  description:
    'Inspecciones independientes de condición para seguro de yates en España y el Mediterráneo, con informes claros sobre estado y seguridad.',
  schemaDescription:
    'Evaluación independiente del estado para solicitudes y renovaciones de seguros de yates y cambios de propiedad.',
  pathname: '/es/insurance-survey',
  eyebrow: 'Inspección independiente para seguros',
  heading: 'Inspección de condición para seguro de yates',
  summary:
    'Evaluaciones independientes del estado para nuevas solicitudes de seguro, renovaciones de póliza y cambios de propiedad.',
  heroImage: {
    ...insuranceSurveyPage.heroImage,
    alt: 'Yate sometido a una inspección de condición para seguro',
  },
  socialImageAlt:
    'Yate sometido a una inspección independiente de condición para seguro',
  breadcrumbs: [
    { label: 'Inicio', href: '/es' },
    {
      label: 'Inspección para seguro',
      href: '/es/insurance-survey',
    },
  ],
  primaryCta: {
    label: 'Solicitar presupuesto de inspección',
    href: createContactHref({
      locale: 'es',
      service: 'insurance-survey',
      source: 'insurance-survey-hero',
    }),
  },
  secondaryCta: {
    label: 'Contactar por WhatsApp',
    href: siteConfig.contact.whatsappHref,
    external: true,
  },
  sections: [
    {
      id: 'inspeccion-seguro-independiente',
      heading: 'Inspección independiente de condición para seguro',
      blocks: [
        {
          type: 'paragraph',
          content:
            'Una inspección de condición para seguro ofrece una evaluación independiente del estado general del yate, sus disposiciones de seguridad y los defectos visibles para que un suscriptor de seguros pueda considerarlos.',
        },
        {
          type: 'paragraph',
          content:
            'Las aseguradoras pueden solicitar una inspección actual antes de ofrecer cobertura, renovar una póliza existente o aceptar un cambio de propiedad. Los requisitos exactos varían y pueden depender de la antigüedad, el valor, la construcción, el uso, la zona de navegación y el historial de siniestros del yate.',
        },
        {
          type: 'paragraph',
          content:
            'All Yacht Service realiza inspecciones de condición para seguro de veleros, yates a motor y catamaranes de hasta 40 metros.',
        },
        {
          type: 'paragraph',
          content:
            'Las inspecciones son realizadas por Aleksandrs Tolkacovs, Inspector naval de yates y embarcaciones menores certificado por IIMS y capitán titulado, con más de 20 años de experiencia en ingeniería, control de calidad y gestión.',
        },
      ],
    },
    {
      id: 'cuando-se-requiere',
      heading: 'Cuándo puede solicitarse una inspección para seguro',
      blocks: [
        {
          type: 'paragraph',
          content:
            'Una aseguradora o un bróker puede solicitar una inspección del estado en situaciones como las siguientes:',
        },
        { type: 'cards', items: suitabilityItems },
        {
          type: 'paragraph',
          style: 'note',
          content:
            'La aseguradora decide si la inspección es necesaria y qué información debe incluir. Siempre que sea posible, el propietario debe obtener por escrito los requisitos de la aseguradora antes de organizar la inspección.',
        },
      ],
    },
    {
      id: 'contenido-inspeccion-seguro',
      heading: 'Qué incluye una inspección de condición para seguro',
      blocks: [
        {
          type: 'paragraph',
          content:
            'El alcance exacto se acuerda en función de la embarcación y de los requisitos de la aseguradora. Una inspección habitual puede incluir:',
        },
        { type: 'cards', items: inspectionItems },
        {
          type: 'paragraph',
          style: 'note',
          content:
            'La inspección es no destructiva y se limita a las zonas, sistemas y equipos accesibles con seguridad en el momento de la visita. No garantiza que se identifiquen todos los defectos existentes, especialmente cuando los componentes o zonas son inaccesibles, están ocultos o no funcionan durante la inspección.',
        },
      ],
    },
    {
      id: 'hallazgos-asegurabilidad',
      heading:
        'Hallazgos relacionados con el estado, la seguridad y la asegurabilidad',
      blocks: [
        {
          type: 'paragraph',
          content:
            'La inspección identifica defectos visibles y cuestiones de seguridad que pueden ser relevantes para la evaluación del yate por parte de la aseguradora.',
        },
        { type: 'paragraph', content: 'Los hallazgos pueden incluir:' },
        { type: 'list', style: 'defect', items: findings },
        {
          type: 'paragraph',
          style: 'note',
          content:
            'El informe registra el estado observado y ofrece recomendaciones. La aseguradora es la única responsable de decidir si ofrece cobertura, impone condiciones, exige reparaciones o rechaza el riesgo.',
        },
      ],
    },
    {
      id: 'requisitos-aseguradora',
      heading: 'Confirmar los requisitos de la aseguradora',
      blocks: [
        {
          type: 'paragraph',
          content:
            'Las compañías aseguradoras no solicitan todas el mismo formato de informe ni el mismo alcance de inspección.',
        },
        {
          type: 'paragraph',
          content:
            'Antes de organizar la inspección, el propietario debe preguntar a la aseguradora o al bróker si requieren:',
        },
        { type: 'list', style: 'check', items: insurerRequirements },
        {
          type: 'paragraph',
          content:
            'Todo formulario o instrucción escrita de la aseguradora debe facilitarse a All Yacht Service antes de la cita. Esto ayuda a que el alcance acordado responda a los requisitos declarados por el suscriptor de seguros.',
        },
        {
          type: 'paragraph',
          style: 'note',
          content:
            'Los formularios que soliciten pruebas, certificaciones o trabajos especializados fuera de la competencia o del alcance acordado del inspector pueden requerir la intervención de otro profesional debidamente cualificado.',
        },
      ],
    },
    {
      id: 'proceso-inspeccion-seguro',
      heading: 'Cómo funciona el proceso de inspección para seguro',
      blocks: [{ type: 'process', steps: processSteps }],
    },
    {
      id: 'a-flote-varado',
      heading: 'Inspección para seguro a flote y con el yate varado',
      blocks: [
        {
          type: 'paragraph',
          content:
            'Algunas aseguradoras aceptan una inspección del estado a flote, mientras que otras exigen examinar el casco sumergido y sus apéndices con el yate fuera del agua.',
        },
        {
          type: 'paragraph',
          content:
            'La inspección con el yate varado permite evaluar el casco sumergido, la quilla, el timón, las hélices, los ejes, los saildrives, los pasacascos y otros componentes bajo el agua.',
        },
        {
          type: 'paragraph',
          content:
            'Siempre que sea posible, debe confirmarse previamente con la aseguradora cuál es la disposición adecuada.',
        },
        {
          type: 'paragraph',
          content:
            'Los costes de varada, puerto deportivo, limpieza y operación de la embarcación se organizan normalmente por separado y no se incluyen automáticamente en los honorarios, salvo que el presupuesto indique expresamente lo contrario.',
        },
      ],
    },
    {
      id: 'valoracion-seguro',
      heading: 'Valoración para seguro',
      blocks: [
        {
          type: 'paragraph',
          content:
            'Una aseguradora puede solicitar una opinión sobre el valor actual de mercado del yate u otro valor asegurado acordado como parte del informe.',
        },
        {
          type: 'paragraph',
          content: [
            'Cuando la ',
            {
              text: 'valoración independiente del yate',
              href: '/es/valuation-damage-survey',
            },
            ' está incluida en el alcance acordado, se basa en la información disponible de la embarcación, el estado observado, las especificaciones, el equipamiento y las pruebas de mercado pertinentes.',
          ],
        },
        {
          type: 'paragraph',
          content:
            'Una valoración es una opinión profesional informada en la fecha de inspección. No garantiza el precio que alcanzará el yate si se vende.',
        },
      ],
    },
    {
      id: 'informe-propietario-aseguradora',
      heading: 'Informe claro para el propietario y la aseguradora',
      blocks: [
        {
          type: 'paragraph',
          content:
            'El informe de inspección describe el estado observado del yate con un lenguaje claro y práctico.',
        },
        { type: 'paragraph', content: 'Puede incluir:' },
        { type: 'list', style: 'check', items: reportItems },
        {
          type: 'paragraph',
          content:
            'Los informes se emiten normalmente en un plazo de 48 horas desde la finalización de la inspección, sujeto a la embarcación, el alcance, la documentación de la aseguradora y cualquier información adicional necesaria.',
        },
        {
          type: 'paragraph',
          style: 'note',
          content:
            'El informe se prepara para el cliente que encarga el trabajo y para el propósito de seguro indicado. No debe considerarse una garantía del estado ni una confirmación de que se proporcionará cobertura.',
        },
      ],
    },
    {
      id: 'seguro-o-precompra',
      heading: '¿Inspección para seguro o inspección precompra?',
      blocks: [
        {
          type: 'paragraph',
          content:
            'Una inspección de condición para seguro se prepara principalmente para facilitar a la aseguradora información sobre el estado general, la seguridad y los riesgos relacionados con la asegurabilidad del yate.',
        },
        {
          type: 'paragraph',
          content: [
            'Una ',
            {
              text: 'inspección precompra',
              href: '/es/pre-purchase-survey',
            },
            ' la encarga un posible comprador y normalmente implica una evaluación más amplia destinada a apoyar la decisión de compra.',
          ],
        },
        {
          type: 'paragraph',
          content:
            'Una inspección para seguro no debe considerarse automáticamente un sustituto de una inspección precompra completa.',
        },
      ],
    },
    {
      id: 'cobertura-inspeccion-seguro',
      heading: 'Inspecciones de yates para seguro en España y el Mediterráneo',
      blocks: [
        {
          type: 'paragraph',
          content:
            'Con base en Marina Greenwich, Altea, All Yacht Service realiza inspecciones de condición para seguro en Alicante, Costa Blanca, Valencia, Barcelona, la costa mediterránea española y otros puntos de la España peninsular.',
        },
        {
          type: 'paragraph',
          content:
            'También pueden organizarse inspecciones en las Islas Baleares, Francia, Italia, Grecia y otros destinos europeos o internacionales, según la ubicación de la embarcación, los requisitos de acceso y el alcance solicitado por la aseguradora.',
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
      title: 'Valoración y evaluación de daños',
      description:
        'Valoración independiente y evaluación documentada de daños para un propósito y alcance acordados.',
      href: '/es/valuation-damage-survey',
      linkLabel: 'Ver valoración y daños',
    },
    {
      title: 'Inspección precompra',
      description:
        'Evaluación independiente del estado del yate antes de completar una compra.',
      href: '/es/pre-purchase-survey',
      linkLabel: 'Ver inspección precompra',
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
    heading: '¿Su aseguradora ha solicitado una inspección del yate?',
    body: 'Envíenos el tipo, la eslora, la antigüedad, la construcción y la ubicación actual del yate, junto con los requisitos de la aseguradora. Revisaremos el alcance solicitado y prepararemos un presupuesto a medida.',
    note: 'Cuando esté disponible, adjunte a su consulta el formulario, cuestionario o las instrucciones escritas de la aseguradora.',
    links: [
      {
        label: 'Solicitar presupuesto de inspección',
        href: createContactHref({
          locale: 'es',
          service: 'insurance-survey',
          source: 'insurance-survey-final-cta',
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
  areaServed: insuranceSurveyPage.areaServed,
} as const;
