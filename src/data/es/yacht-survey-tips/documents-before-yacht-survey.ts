import type {
  SurveyTipArticlePageData,
  SurveyTipsArticle,
  SurveyTipsImage,
} from '../../yacht-survey-tips/types';

const articleImage = {
  src: '/images/yacht-survey-tips/documents-before-yacht-survey.png',
  alt: 'Infografía de All Yacht Service con los documentos y registros de mantenimiento que conviene solicitar antes de inspeccionar un yate',
  width: 1080,
  height: 1350,
} as const satisfies SurveyTipsImage;

export const spanishDocumentsBeforeYachtSurveyArticle = {
  sourceUrl:
    'https://www.allyachtservice.com/yacht-survey-tips/documents-before-yacht-survey',
  title:
    'Antes de una inspección de yates: ¿qué documentos debe solicitar el comprador?',
  seoTitle: 'Documentos antes de una inspección precompra | All Yacht Service',
  description:
    'Guía práctica sobre la documentación de propiedad, mantenimiento, reparaciones e inspecciones que conviene solicitar antes de una inspección precompra y cómo interpretar las lagunas sin sacar conclusiones precipitadas.',
  metaDescription:
    'Sepa qué documentos y registros de mantenimiento solicitar antes de una inspección precompra, qué datos comparar y cómo apoyan la revisión del yate.',
  slug: 'documents-before-yacht-survey',
  pathname: '/es/yacht-survey-tips/documents-before-yacht-survey',
  category: 'Comprobaciones precompra · Documentación e historial',
  status: 'Publicado',
  publicationDate: '29 de septiembre de 2026',
  publicationDateTime: '2026-09-29',
  modifiedDateTime: '2026-09-29',
  readingTime: '6 minutos de lectura',
  timeRequired: 'PT6M',
  standfirst:
    'Los documentos pueden explicar cómo se ha tenido, mantenido y reparado un yate. Solicitarlos antes de la inspección aporta contexto útil al comprador y al inspector, sin olvidar que los registros no demuestran el estado actual de la embarcación.',
  image: articleImage,
  imageCaption:
    'La infografía original resume los registros que conviene solicitar antes de una inspección. Su texto integrado en inglés se conserva exactamente como fue facilitado.',
  socialImageAlt:
    'Guía de All Yacht Service sobre los documentos y registros de mantenimiento que conviene solicitar antes de inspeccionar un yate',
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
      label: 'Documentos antes de una inspección',
      href: '/es/yacht-survey-tips/documents-before-yacht-survey',
    },
  ],
  introduction: {
    id: 'introduccion-documentos-antes-de-inspeccion',
    label: 'Introducción',
    paragraphs: [
      'La documentación de un yate puede mostrar cómo se han registrado su identidad, propiedad, maquinaria e historial de mantenimiento. Solicitar los documentos disponibles antes de la revisión permite al comprador preparar mejores preguntas y considerar los registros pertinentes junto con lo observado a bordo.',
      'El objetivo no es tratar la documentación como prueba de que el yate está en buen estado. Los registros aportan contexto. Una ausencia o incoherencia es una cuestión que debe investigarse, no una prueba por sí sola de un defecto o una irregularidad.',
    ],
  },
  sections: [
    {
      id: 'por-que-importan-los-documentos',
      title: 'Por qué importan los documentos antes de la inspección',
      paragraphs: [
        'Los documentos pueden ayudar a confirmar los datos declarados de la embarcación, indicar cuándo se revisó determinado equipo e identificar trabajos anteriores que merecen atención. También ayudan al inspector a comprender qué sistemas, fechas o zonas reparadas conviene comentar durante la inspección acordada.',
        'Recibir los registros con antelación permite al comprador ordenarlos y anotar preguntas. No modifica las limitaciones de acceso, pruebas o alcance acordadas para la inspección.',
      ],
    },
    {
      id: 'documentos-que-conviene-solicitar',
      title: 'Documentos que conviene solicitar',
      paragraphs: [
        'Pregunte al vendedor o al bróker qué registros están disponibles y son pertinentes para el yate. Según la embarcación, pueden ser útiles los siguientes:',
      ],
      items: [
        'Documentación de propiedad y registro, con datos de la embarcación que puedan compararse con el yate',
        'Registros de mantenimiento del motor y el generador, incluidas las fechas y horas de motor anotadas',
        'Registros de servicio o sustitución del aparejo, la transmisión saildrive y el sistema de gobierno cuando correspondan',
        'Facturas de reparaciones importantes, reformas o sustitución de equipos e información disponible sobre siniestros anteriores',
        'Informes de inspecciones anteriores y pruebas de las reparaciones realizadas en respuesta a los hallazgos',
        'Certificados de mantenimiento y fechas de caducidad de los equipos de seguridad cuando proceda',
      ],
      closingParagraphs: [
        'La disponibilidad de registros varía según el yate, su antigüedad, sus anteriores propietarios y los trabajos realizados. No todos los documentos existen o son aplicables a todas las embarcaciones.',
      ],
    },
    {
      id: 'que-comparar-en-los-registros',
      title: 'Qué comparar en los registros',
      paragraphs: [
        'Busque datos que deberían ser coherentes entre los documentos y con el propio yate. Resulta útil comparar fechas de mantenimiento, horas de motor registradas, modelos, números de serie y descripciones de las reparaciones declaradas.',
        'Una secuencia de facturas puede ayudar a explicar cuándo se instaló o sustituyó un equipo. Un informe anterior puede identificar una cuestión, pero la factura, fotografía o registro posterior correspondiente puede ayudar a explicar cómo se trató.',
      ],
    },
    {
      id: 'lagunas-e-incoherencias',
      title: 'Cómo tratar las lagunas y las incoherencias',
      paragraphs: [
        'Una laguna en el historial de mantenimiento, una fecha que no coincide o un número de serie distinto deberían motivar una petición tranquila de aclaración. Los registros pueden estar incompletos porque cambió el propietario, el trabajo se realizó en otro país o no se conservó documentación antigua.',
        'Una incoherencia puede ser importante, pero no demuestra un defecto. Anote la cuestión, solicite información de apoyo y valore si modifica el alcance de la inspección o requiere una revisión especializada.',
      ],
    },
    {
      id: 'los-registros-no-demuestran-el-estado-actual',
      title: 'Los registros no demuestran el estado actual',
      paragraphs: [
        'Una factura reciente confirma que se documentó un trabajo; no establece el estado actual, la calidad de la ejecución ni el funcionamiento del sistema relacionado. Del mismo modo, un informe antiguo describe observaciones realizadas en un momento concreto y dentro de su propio alcance.',
        'La documentación debe considerarse junto con una inspección independiente, las demostraciones o pruebas acordadas y la intervención de especialistas cuando sea necesaria. No sustituye el acceso al yate ni una evaluación actual.',
      ],
    },
    {
      id: 'como-apoyan-los-registros-la-inspeccion',
      title: 'Cómo pueden apoyar los registros la inspección',
      paragraphs: [
        'Antes de la cita, comparta copias ordenadas de los registros pertinentes si el vendedor lo permite. Un índice breve por sistema o fecha facilita la revisión. Mantenga seguros los originales y no altere los archivos.',
        'Dentro del alcance acordado, el inspector puede considerar la información pertinente junto con las observaciones accesibles e identificar asuntos que requieran aclaración o investigación adicional. Verificar la titularidad, la propiedad legal, la financiación, la situación fiscal o la autenticidad documental es independiente de una inspección de estado, salvo que se acuerde específicamente con el profesional adecuado.',
      ],
    },
    {
      id: 'preguntas-para-el-vendedor-o-broker',
      title: 'Preguntas para el vendedor o el bróker',
      paragraphs: [
        'Una solicitud breve por escrito ayuda a mantener el intercambio centrado en hechos. Puede preguntar:',
      ],
      items: [
        '¿Qué documentos de propiedad, registro y equipos están disponibles?',
        '¿Coinciden las fechas de mantenimiento y las horas registradas con los contadores actuales del motor y el generador?',
        '¿Qué reparaciones, sustituciones o reformas importantes se han realizado y existen facturas?',
        '¿Se atendieron los hallazgos de inspecciones anteriores y hay pruebas que lo respalden?',
        '¿Hay periodos sin registros y puede explicarlos el vendedor?',
      ],
    },
  ],
  keyPoint: {
    id: 'conclusion-documentos-antes-de-inspeccion',
    title: 'Conclusión del inspector',
    body: 'Los registros aportan contexto. Una ausencia o incoherencia merece aclaración e investigación; no es por sí sola prueba de un defecto, y la documentación no confirma el estado actual ni sustituye una inspección independiente.',
  },
  relatedServices: [
    {
      title: 'Inspección precompra',
      description:
        'Evaluación independiente de las estructuras, sistemas y maquinaria accesibles antes de comprar un yate, dentro de un alcance acordado.',
      href: '/es/pre-purchase-survey',
    },
    {
      title: 'Representación del comprador de yates',
      description:
        'Apoyo independiente en etapas seleccionadas de la compra, con la función y el alcance acordados de antemano.',
      href: '/es/buyer-representation',
    },
  ],
  relatedArticles: [
    {
      label: 'Soportes del motor de un yate: señales que conviene revisar',
      href: '/es/yacht-survey-tips/yacht-engine-mounts',
    },
    {
      label: 'El antiincrustante cuenta una historia',
      href: '/es/yacht-survey-tips/antifouling-tells-a-story',
    },
    {
      label: 'Todos los consejos sobre inspección de yates',
      href: '/es/yacht-survey-tips',
    },
  ],
  finalCta: {
    heading: '¿Está preparando la compra de un yate?',
    body: 'Si va a organizar una inspección precompra, reunir con antelación los registros disponibles ayuda a formular preguntas útiles y favorece una revisión eficiente dentro del alcance acordado.',
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
        label: 'WhatsApp +34 695 718 540',
        href: 'https://wa.me/34695718540',
        external: true,
      },
    ],
  },
  labels: {
    breadcrumb: 'Migas de pan',
    published: 'Publicado',
    readingTime: 'Tiempo de lectura',
    author: 'Autor',
    authorPrefix: 'Por',
    professionalSupport: 'Apoyo profesional',
    relatedServices: 'Servicios relacionados',
    viewService: 'Ver servicio',
    moreTips: 'Más consejos sobre inspección de yates',
    moreTipsBody:
      'Continúe con otros consejos para compradores o consulte todo el centro de conocimiento.',
    finalCtaEyebrow: 'Apoyo precompra',
  },
  card: {
    title: 'Antes de la inspección, pida los documentos',
    description:
      'Qué documentación de propiedad, mantenimiento, reparaciones e inspecciones conviene solicitar y qué significan realmente las lagunas o incoherencias.',
    href: '/es/yacht-survey-tips/documents-before-yacht-survey',
    category: 'Comprobaciones precompra · Documentación e historial',
    status: 'Publicado',
    publicationDate: '29 de septiembre de 2026',
    publicationDateTime: '2026-09-29',
    readingTime: '6 minutos',
    image: articleImage,
  } satisfies SurveyTipsArticle,
} as const satisfies SurveyTipArticlePageData;
