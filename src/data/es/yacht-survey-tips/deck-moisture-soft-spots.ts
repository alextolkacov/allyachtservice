import type {
  SurveyTipsArticle,
  SurveyTipsImage,
} from '../../yacht-survey-tips/types';

const articleImage = {
  src: '/images/yacht-survey-tips/deck-moisture-soft-spots.png',
  alt: 'Gráfico sobre la entrada de humedad y las zonas blandas en la cubierta de un yate',
  width: 1122,
  height: 1402,
} as const satisfies SurveyTipsImage;

export const spanishDeckMoistureSoftSpotsArticle = {
  title:
    'Humedad y zonas blandas en la cubierta: qué deben saber los compradores de yates',
  seoTitle: 'Humedad y zonas blandas en la cubierta | All Yacht Service',
  description:
    'La entrada de humedad y las zonas blandas de la cubierta se encuentran entre las preocupaciones habituales durante una inspección. Conozca cómo puede entrar el agua, cómo investiga un inspector naval y qué debe valorar un comprador.',
  metaDescription:
    'Aprenda por qué aparece humedad en la cubierta de un yate, qué señales debe buscar un comprador y cómo se evalúan durante una inspección precompra.',
  slug: 'deck-moisture-soft-spots',
  pathname: '/es/yacht-survey-tips/deck-moisture-soft-spots',
  category: 'Inspección precompra · Cubierta y estructura',
  status: 'Publicado',
  publicationDate: 'julio de 2026',
  publicationDateTime: '2026-07',
  modifiedDateTime: '2026-07-28',
  readingTime: '5 minutos',
  timeRequired: 'PT5M',
  standfirst:
    'La humedad dentro del núcleo de la cubierta puede permanecer oculta bajo la superficie. Comprender cómo entra el agua, qué señales deben observarse y cuáles son los límites de las pruebas ayuda a tomar decisiones mejor fundamentadas.',
  image: articleImage,
  imageCaption:
    'Los indicios de humedad deben interpretarse junto con la construcción, las condiciones de acceso y las demás observaciones de la inspección.',
  socialImageAlt:
    'Gráfico sobre la entrada de humedad y las zonas blandas en la cubierta de un yate',
  author: {
    name: 'Aleksandrs Tolkacovs',
    professionalDescription:
      'Inspector naval de yates y embarcaciones menores certificado por IIMS',
  },
  breadcrumbs: [
    { label: 'Inicio', href: '/es' },
    {
      label: 'Consejos para la inspección de yates',
      href: '/es/yacht-survey-tips',
    },
    {
      label: 'Humedad y zonas blandas en la cubierta',
      href: '/es/yacht-survey-tips/deck-moisture-soft-spots',
    },
  ],
  keyInterpretationPoints: [
    'La presencia de humedad no significa automáticamente que la cubierta haya perdido resistencia estructural.',
    'Una zona que cede no identifica por sí sola la causa ni toda la extensión del problema.',
    'Las observaciones deben interpretarse junto con la construcción, la ubicación, el historial y las demás evidencias de la inspección.',
  ],
  moistureConsequences: [
    'Deterioro del núcleo',
    'Pérdida de adherencia entre el núcleo y las capas de laminado',
    'Delaminación localizada',
    'Reducción de la rigidez del panel',
    'Movimiento alrededor de los herrajes de cubierta',
    'Deterioro relacionado con las heladas en climas fríos',
    'Corrosión de componentes metálicos embebidos o cercanos',
    'Reparaciones futuras más amplias y complejas',
  ],
  moistureEntryPoints: [
    'Bases de los candeleros',
    'Cornamusas y guías',
    'Cadenotes',
    'Escotillas',
    'Ventanas y portillos',
    'Base y paso del mástil',
    'Winches',
    'Pasamanos',
    'Instalación del molinete de ancla',
    'Organizadores de cubierta y poleas',
    'Elementos de ventilación',
    'Orificios de tornillos anteriores',
    'Equipos añadidos',
    'Reparaciones mal ejecutadas',
    'Grietas o daños por impacto',
  ],
  warningSigns: [
    'Manchas bajo los herrajes de cubierta',
    'Marcas de agua dentro de armarios o revestimientos interiores',
    'Sellador agrietado, contraído o desprendido',
    'Corrosión alrededor de elementos de fijación',
    'Grietas superficiales localizadas',
    'Sensación blanda o esponjosa al pisar',
    'Movimiento localizado alrededor de los herrajes',
    'Cambio de sonido al golpear suavemente la cubierta',
    'Hundimientos alrededor de herrajes sometidos a cargas elevadas',
    'Filtraciones interiores repetidas',
    'Reparaciones anteriores sin documentación de apoyo',
  ],
  softAreaCauses: [
    'Núcleo deteriorado',
    'Pérdida de adherencia',
    'Delaminación localizada',
    'Soporte original insuficiente',
    'Reparación anterior',
    'Construcción delgada o flexible',
    'Movimiento alrededor de un herraje sometido a carga',
  ],
  inspectionMethods: [
    {
      id: 'inspeccion-visual',
      title: 'Inspección visual',
      summary:
        'El inspector examina las zonas accesibles en busca de indicios que puedan señalar un punto de entrada, una intervención anterior o un cambio en el estado local.',
      items: [
        'Estado del sellador',
        'Herrajes',
        'Elementos de fijación',
        'Grietas',
        'Deformación de la superficie',
        'Manchas interiores',
        'Reparaciones anteriores',
        'Estructura inferior accesible',
      ],
      limitations: [],
    },
    {
      id: 'prueba-percusion',
      title: 'Prueba de percusión',
      summary:
        'Una percusión comparativa y ligera puede ayudar a detectar cambios de respuesta acústica relacionados con diferencias de adherencia, espesor del laminado o estado del núcleo.',
      items: [],
      limitations: [
        'El método es comparativo.',
        'Los resultados dependen de la construcción y del acceso.',
        'Un sonido diferente no demuestra automáticamente que el núcleo esté húmedo.',
        'Los acabados decorativos gruesos pueden reducir su utilidad.',
      ],
    },
    {
      id: 'medidor-humedad',
      title: 'Lecturas con medidor de humedad',
      summary:
        'Un medidor de humedad permite comparar lecturas en distintas zonas de la cubierta y ayuda a identificar patrones que requieren una investigación adicional.',
      items: [],
      limitations: [
        'Las lecturas no miden directamente un porcentaje de agua dentro de cualquier laminado.',
        'El metal, la fibra de carbono, el cableado, los depósitos, los herrajes y otros materiales conductores pueden influir en ellas.',
        'La contaminación por sal puede afectar a las lecturas.',
        'La humedad superficial y la lluvia reciente pueden influir en ellas.',
        'Los revestimientos y los distintos espesores de laminado pueden afectar a la interpretación.',
        'Las lecturas deben compararse con zonas de referencia y con otras evidencias.',
      ],
    },
    {
      id: 'termografia',
      title: 'Termografía',
      summary:
        'Cuando las condiciones son adecuadas, la termografía puede ayudar a localizar patrones de temperatura que respalden una investigación adicional.',
      items: [],
      limitations: [
        'Los resultados dependen de las condiciones ambientales.',
        'La radiación solar, el viento, la lluvia reciente y las fuentes internas de calor afectan a las imágenes.',
        'La termografía no debe tratarse como un diagnóstico independiente.',
      ],
    },
    {
      id: 'inspeccion-inferior',
      title: 'Inspección desde el interior',
      summary:
        'Cuando existe acceso, el inspector comprueba la parte inferior de la cubierta y las zonas interiores próximas en busca de evidencias complementarias.',
      items: [
        'Revestimientos interiores',
        'Armarios',
        'Parte inferior de la cubierta',
        'Placas de refuerzo',
        'Elementos de fijación',
        'Soportes estructurales',
        'Manchas interiores',
        'Reparaciones localizadas',
      ],
      limitations: [],
    },
    {
      id: 'investigacion-adicional',
      title: 'Investigación adicional',
      summary:
        'Puede recomendarse una apertura controlada, una toma de muestras del núcleo o un desmontaje cuando sea necesario confirmar el estado y el cliente autorice una investigación destructiva.',
      items: [
        'La zona sospechosa es significativa.',
        'Intervienen cargas estructurales.',
        'Las observaciones son incoherentes.',
        'La planificación de la reparación requiere confirmación.',
        'El cliente autoriza una investigación destructiva.',
      ],
      limitations: [
        'Las pruebas destructivas no están incluidas automáticamente en una inspección precompra normal.',
      ],
    },
  ],
  moistureReadingContext: [
    'Tipo y escala del medidor',
    'Lecturas de referencia',
    'Material de construcción',
    'Tipo de núcleo',
    'Estado de la superficie',
    'Meteorología anterior a la inspección',
    'Metal o cableado cercano',
    'Patrón y extensión',
    'Evidencias visuales',
    'Resultados de la prueba de percusión',
    'Movimiento',
    'Evidencias interiores',
    'Historial del yate',
  ],
  repairOutcomes: [
    'Vigilancia y nuevo sellado',
    'Retirada y nuevo asentamiento de un herraje',
    'Secado y reparación local',
    'Sustitución localizada del núcleo',
    'Reconstrucción más amplia del laminado y del núcleo',
  ],
  repairFactors: [
    'Origen de la humedad',
    'Estado del núcleo',
    'Adherencia',
    'Carga estructural',
    'Tamaño de la zona afectada',
    'Acceso',
    'Reparaciones anteriores',
    'Calidad de reparación prevista',
    'Si se ha detenido el origen de la humedad',
  ],
  buyerActions: [
    {
      title: 'No se base únicamente en el aspecto',
      description:
        'Una superficie limpia no confirma el estado del núcleo situado debajo.',
    },
    {
      title: 'Revise el historial del yate',
      description:
        'Pregunte por filtraciones, reparaciones de cubierta, sustitución de herrajes, trabajos en la base del mástil y reclamaciones al seguro.',
    },
    {
      title: 'Asegure el acceso a la cubierta',
      description:
        'Siempre que sea práctico, deben retirarse equipos personales, fundas y objetos almacenados antes de la inspección.',
    },
    {
      title: 'Organice condiciones de inspección adecuadas',
      description:
        'La lluvia reciente, el lavado o una humedad superficial elevada pueden afectar a determinadas pruebas.',
    },
    {
      title: 'Pida que las observaciones se expliquen en su contexto',
      description:
        'Solicite aclaraciones sobre ubicación, extensión, evidencias y próximos pasos recomendados.',
    },
    {
      title: 'Obtenga información de reparación cuando sea necesario',
      description:
        'Ante observaciones relevantes, obtenga una propuesta de reparación adecuada antes de completar la compra.',
    },
    {
      title: 'Utilice las conclusiones en la decisión de compra',
      description:
        'Valore la seguridad, la urgencia, el mantenimiento futuro, el acceso y el coste de reparación, no solo la presencia de humedad.',
    },
  ],
  questionsAfterFinding: [
    '¿Dónde se encuentra la humedad sospechada?',
    '¿Qué extensión tiene la zona afectada?',
    '¿Qué evidencias respaldan la observación?',
    '¿Existe movimiento o pérdida de rigidez?',
    '¿La zona soporta cargas estructurales?',
    '¿Cuál es el punto de entrada probable?',
    '¿El origen sigue activo?',
    '¿Se recomienda realizar más pruebas?',
    '¿Debe examinar la zona un especialista en reparaciones?',
    '¿La observación afecta al uso inmediato?',
    '¿Es probable que la reparación sea local o más amplia?',
    '¿Qué limitaciones afectaron a la inspección?',
  ],
  professionalSurveyIndicators: [
    'Se está comprando un yate de PRFV antiguo',
    'Los herrajes de cubierta muestran señales de filtración',
    'Se detectan zonas que ceden',
    'Hay reparaciones visibles sin documentación',
    'Existen manchas cerca de la base del mástil o de los cadenotes',
    'El yate tiene numerosos herrajes de cubierta',
    'La embarcación ha permanecido al aire libre durante periodos prolongados',
    'El comprador no puede interpretar con seguridad las observaciones',
  ],
  relatedServices: [
    {
      title: 'Inspección precompra',
      description:
        'Evaluación independiente de la estructura, los sistemas y los equipos accesibles antes de la compra.',
      href: '/es/pre-purchase-survey',
    },
  ],
  relatedArticles: [
    {
      label:
        '¿Se puede confiar en un casco brillante? Qué debe comprobar un comprador',
      href: '/es/yacht-survey-tips/shiny-hull',
    },
    {
      label: 'Todos los consejos para la inspección de yates',
      href: '/es/yacht-survey-tips',
    },
  ],
  finalCta: {
    heading: '¿Está comprando un yate con posibles indicios de humedad?',
    body: 'All Yacht Service puede inspeccionar la estructura accesible de la cubierta, los herrajes y las zonas relacionadas dentro del alcance acordado de una inspección precompra. Envíenos los datos y la ubicación del yate para comentar la inspección.',
    links: [
      {
        label: 'Solicitar presupuesto de inspección precompra',
        href: '/es/contact?service=pre-purchase-survey',
      },
      {
        label: 'Ver la inspección precompra',
        href: '/es/pre-purchase-survey',
      },
      {
        label: 'Calcular el coste de la inspección',
        href: '/es/pre-purchase-survey-calculator',
      },
      {
        label: 'WhatsApp +34 695 718 540',
        href: 'https://wa.me/34695718540',
        external: true,
      },
    ],
  },
  card: {
    title:
      'Humedad y zonas blandas en la cubierta: qué deben saber los compradores de yates',
    description:
      'La humedad y las zonas blandas de la cubierta pueden indicar un problema que requiere más investigación antes de comprar.',
    href: '/es/yacht-survey-tips/deck-moisture-soft-spots',
    category: 'Inspección precompra · Cubierta y estructura',
    status: 'Publicado',
    publicationDate: 'julio de 2026',
    publicationDateTime: '2026-07',
    readingTime: '5 minutos',
    image: articleImage,
  } satisfies SurveyTipsArticle,
} as const;
