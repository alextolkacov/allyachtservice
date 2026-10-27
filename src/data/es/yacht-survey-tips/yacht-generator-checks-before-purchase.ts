import type {
  SurveyTipArticlePageData,
  SurveyTipsArticle,
  SurveyTipsImage,
} from '../../yacht-survey-tips/types';

const articleImage = {
  src: '/images/yacht-survey-tips/yacht-generator-checks-before-purchase.png',
  alt: 'Infografía de All Yacht Service con un generador marino, un filtro de agua de mar y comprobaciones durante su funcionamiento bajo carga',
  width: 1080,
  height: 1350,
} as const satisfies SurveyTipsImage;

export const spanishYachtGeneratorChecksBeforePurchaseArticle = {
  sourceUrl:
    'https://www.allyachtservice.com/yacht-survey-tips/yacht-generator-checks-before-purchase',
  title:
    'Generador de un yate antes de comprarlo: por qué no basta con arrancarlo',
  seoTitle: 'Qué revisar en el generador de un yate usado | All Yacht Service',
  description:
    'Que un generador arranque no demuestra cómo responde a la demanda eléctrica habitual del yate. Compare el historial, la instalación, la refrigeración y el escape con una demostración segura bajo carga.',
  metaDescription:
    'Qué preguntar y observar al probar el generador de un yate usado: mantenimiento, refrigeración, escape, fugas y funcionamiento bajo carga.',
  slug: 'yacht-generator-checks-before-purchase',
  pathname: '/es/yacht-survey-tips/yacht-generator-checks-before-purchase',
  category: 'Inspección precompra · Maquinaria y sistemas de a bordo',
  status: 'Publicado',
  publicationDate: '27 de octubre de 2026',
  publicationDateTime: '2026-10-27',
  modifiedDateTime: '2026-10-27',
  readingTime: '6 minutos de lectura',
  timeRequired: 'PT6M',
  standfirst:
    'Un arranque rápido es solo una observación. Solicite una demostración con cargas habituales adecuadas y compare el comportamiento del generador con su historial, la refrigeración, el escape y las posibles fugas o alarmas.',
  image: articleImage,
  imageCaption:
    'La infografía original muestra un generador marino y una lista de comprobaciones visuales. No determina el estado de una instalación concreta.',
  socialImageAlt:
    'Infografía de All Yacht Service sobre historial, filtro de agua de mar, mangueras, fugas y funcionamiento del generador bajo carga',
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
      label: 'Comprobaciones del generador',
      href: '/es/yacht-survey-tips/yacht-generator-checks-before-purchase',
    },
  ],
  introduction: {
    id: 'introduccion-generador',
    label: 'Introducción',
    paragraphs: [
      'Que un generador marino arranque con rapidez solo supera una parte de la comprobación precompra. Solicite verlo funcionar con cargas habituales adecuadas y valore el resultado junto con el historial de mantenimiento, el circuito de refrigeración por agua, el escape y cualquier fuga o alarma. El vendedor o un operador competente debe realizar la demostración siguiendo el manual del modelo instalado.',
    ],
  },
  sections: [
    {
      id: 'marcha-en-vacio-breve',
      title: '¿Por qué no basta con hacerlo funcionar brevemente sin carga?',
      paragraphs: [
        'El arranque demuestra que el equipo puede ponerse en marcha en ese momento. No muestra cómo responde cuando los equipos de a bordo consumen electricidad ni si la refrigeración y el escape se mantienen en buen estado al calentarse.',
        'Para sus modelos marinos MDKDK–MDKDN, el manual de Cummins Onan trata la aplicación de cargas dentro de la potencia nominal, recomienda limitar el funcionamiento sin carga e indica revisar el escape en busca de fugas. Son instrucciones específicas de esos modelos, no un procedimiento universal. La pregunta útil es si la demostración del equipo instalado sigue su propio manual.',
      ],
    },
    {
      id: 'documentos-generador',
      title: '¿Qué documentos del generador debe solicitar el comprador?',
      paragraphs: [
        'Pida al vendedor o intermediario la marca, el modelo, el número de serie, las horas indicadas, el manual de uso, el historial de mantenimiento, los registros y las facturas. Entre los antecedentes relevantes pueden figurar:',
      ],
      items: [
        'Cambios de aceite y filtro, mantenimiento del filtro de combustible y trabajos en el refrigerante',
        'Sustitución del rodete de la bomba de agua de mar e inspección de ánodos, si los hay',
        'Reparaciones del escape y sustitución de la batería de arranque',
        'Episodios anteriores de sobrecalentamiento, alarmas de parada y reparaciones por entrada de agua',
      ],
      closingParagraphs: [
        'Compare, en la medida de lo posible, las fechas y horas registradas. Los intervalos de mantenimiento dependen del modelo; la lectura del cuentahoras no demuestra por sí sola que se hayan realizado los trabajos previstos. Un vacío documental justifica preguntas, pero no prueba automáticamente que el generador esté averiado.',
      ],
    },
    {
      id: 'antes-del-arranque',
      title: '¿Qué puede observarse antes de arrancar el generador?',
      paragraphs: [
        'Con el equipo parado y siempre que el acceso sea seguro, mire más allá de una cubierta acústica limpia. Las mangueras, la toma de agua de mar y la sentina situada debajo pueden ofrecer otra información. Observe si hay:',
      ],
      items: [
        'Aceite, combustible, refrigerante o agua de mar alrededor del equipo; depósitos de sal, corrosión o manchas junto a las conexiones',
        'Mangueras agrietadas, reblandecidas, rozadas o mal sujetas; abrazaderas aparentemente flojas o tubo de escape dañado',
        'Filtro de agua de mar sucio o inaccesible, ventilación obstruida u objetos almacenados indebidamente cerca',
        'Conexiones de batería corroídas, cables mal sujetos, soportes dañados o indicios de movimiento',
      ],
      closingParagraphs: [
        'Durante una visita informal, no retire cubiertas, no abra el sistema de refrigeración ni manipule conexiones eléctricas. Un inspector o técnico debe determinar qué componentes pueden revisarse con seguridad dentro del alcance acordado.',
      ],
    },
    {
      id: 'refrigeracion-y-escape',
      title:
        '¿Por qué requieren atención especial la refrigeración y el escape?',
      paragraphs: [
        'Muchos grupos electrógenos marinos toman agua de mar a través de una válvula y un filtro, la hacen circular mediante una bomba y un intercambiador de calor, y la descargan con el escape. Una obstrucción, un rodete defectuoso, una manguera con fugas o una salida restringida pueden afectar a la refrigeración. Los componentes del escape también pueden dejar escapar gases o agua al interior.',
        'El manual de Cummins Onan para MDKDK–MDKDN contempla comprobaciones del circuito de agua de mar y del escape, incluidas fugas y conexiones de mangueras. Cada instalación es distinta. Un operador competente que conozca el yate debe confirmar que la toma pertinente está correctamente configurada y que la descarga de agua de refrigeración es normal para ese equipo; no todas las salidas presentan el mismo patrón visible.',
        'Una alarma, temperatura anómala o ausencia de la descarga esperada exige detener la demostración de forma segura e investigar. No mantenga en marcha un equipo con señales de avería solo para terminar la visita.',
      ],
    },
    {
      id: 'demostracion-bajo-carga',
      title: '¿Qué debe mostrar una demostración bajo carga?',
      paragraphs: [
        'El operador debe arrancar el generador y dejarlo estabilizar según el manual, y después conectar cargas habituales adecuadas sin superar la potencia nominal. Observe la respuesta al añadirlas o retirarlas.',
      ],
      items: [
        'Funcionamiento estable o irregular, oscilaciones, vibraciones y ruidos anómalos',
        'Humo inusual en el escape, fugas, alarmas o paradas imprevistas',
        'Cambios en la tensión o frecuencia indicadas cuando los controles instalados las muestran',
      ],
      closingParagraphs: [
        'El operador puede anotar las lecturas disponibles. La valoración de una salida dudosa y las mediciones eléctricas corresponden a un electricista naval cualificado. Una prueba demasiado breve puede pasar por alto un problema que aparece al calentarse: deje tiempo suficiente para observar el funcionamiento siguiendo al fabricante, sin imponer una duración universal ni forzar la carga máxima.',
      ],
    },
    {
      id: 'investigacion-adicional',
      title: '¿Qué observaciones requieren más investigación?',
      paragraphs: [
        'Un síntoma no constituye un diagnóstico. Una parada bajo carga puede estar relacionada con el combustible, la refrigeración, la protección contra sobrecargas, los controles u otro componente mecánico o eléctrico. Los depósitos de sal pueden corresponder a una fuga ya reparada o a una actual.',
        'Las alarmas repetidas, paradas, humo anormal, golpes o vibraciones inusuales, fugas de agua de mar o refrigerante, indicios de sobrecalentamiento y temperaturas anómalas en el escape requieren investigación. Anote qué sucedió, cuándo, las cargas aproximadas, el tiempo de marcha, las horas indicadas y cualquier código de fallo mostrado. Solicite informes anteriores de averías y facturas de reparación.',
        'Con esa información, un ingeniero naval o electricista cualificado podrá determinar qué pruebas adicionales convienen.',
      ],
    },
    {
      id: 'alcance-inspeccion',
      title: '¿Qué puede confirmar una inspección precompra?',
      paragraphs: [
        'Dentro del alcance acordado, una inspección precompra independiente puede revisar los componentes del generador accesibles con seguridad, el estado visible de la instalación, los registros disponibles y una demostración operativa si puede realizarse sin riesgo. El informe puede documentar fugas, corrosión, otras observaciones y las limitaciones de acceso o prueba.',
        'El inspector puede recomendar comprobaciones mecánicas o eléctricas especializadas. Una inspección visual y operativa general no garantiza la vida útil restante ni descubre todos los defectos ocultos del motor, la instalación eléctrica o el intercambiador. Una demostración satisfactoria no prueba que el equipo esté libre de defectos.',
      ],
    },
    {
      id: 'preguntas-frecuentes-generador',
      title: 'Preguntas frecuentes',
      paragraphs: [],
      subsections: [
        {
          id: 'arranca-en-puerto',
          title: '¿Basta con que el generador arranque en el puerto?',
          paragraphs: [
            'No. Solo confirma que funcionó en ese momento. Una demostración con cargas habituales adecuadas puede revelar alarmas, salida inestable, ruidos o problemas de refrigeración que no aparecen durante una marcha breve sin carga.',
          ],
        },
        {
          id: 'comprador-conecta-cargas',
          title: '¿Debe conectar las cargas el propio comprador?',
          paragraphs: [
            'La demostración debe hacerla el vendedor o un operador competente conforme al manual del generador instalado. El comprador puede observar y anotar lo ocurrido. Los trabajos y mediciones en circuitos de corriente alterna bajo tensión corresponden a personal cualificado.',
          ],
        },
        {
          id: 'pocas-horas',
          title: '¿Pocas horas en el cuentahoras significan buen estado?',
          paragraphs: [
            'No. También importan la edad, el almacenamiento, el mantenimiento, la instalación y el uso. Compare las horas indicadas con los documentos y el funcionamiento observado.',
          ],
        },
        {
          id: 'no-se-puede-probar',
          title: '¿Qué ocurre si no se puede demostrar el funcionamiento?',
          paragraphs: [
            'Deje constancia de la limitación y pregunte el motivo. Revise los antecedentes de mantenimiento y valore concertar otra demostración o una inspección especializada antes de contar con ese equipo en la decisión de compra.',
          ],
        },
      ],
    },
  ],
  keyPoint: {
    id: 'punto-clave-generador',
    title: 'Punto clave del inspector',
    body: 'Solicite una demostración del generador como parte de los sistemas de a bordo. Una cubierta limpia y un arranque fácil son observaciones útiles, pero también deben considerarse la refrigeración, el escape y el funcionamiento eléctrico con cargas habituales adecuadas.',
  },
  authorBio: {
    id: 'autor-generador',
    title: 'Sobre el autor',
    paragraphs: [
      'Aleksandrs Tolkacovs es inspector naval de yates y embarcaciones menores certificado por IIMS y capitán titulado. Cuenta con más de 20 años de experiencia en ingeniería, control de calidad y gestión, además de experiencia práctica en la operación de yates.',
    ],
  },
  sources: {
    id: 'fuentes-generador',
    title: 'Fuente y lectura complementaria',
    links: [
      {
        label: 'Manual de uso del generador marino Cummins Onan MDKDK–MDKDN',
        href: 'https://www.cummins.com/sites/default/files/2024-07/cummins-onan-manual-mdkdk-lmn.pdf',
      },
    ],
  },
  relatedServices: [
    {
      title: 'Inspección precompra de yates',
      description:
        'Revisión independiente de sistemas accesibles, documentación y demostraciones acordadas antes de comprar.',
      href: '/es/pre-purchase-survey',
    },
  ],
  relatedArticles: [
    {
      label: 'Soportes del motor: señales que conviene revisar',
      href: '/es/yacht-survey-tips/yacht-engine-mounts',
    },
    {
      label: 'Antes de la inspección, solicite los documentos',
      href: '/es/yacht-survey-tips/documents-before-yacht-survey',
    },
    {
      label: 'Todos los consejos para la inspección de yates',
      href: '/es/yacht-survey-tips',
    },
  ],
  finalCta: {
    heading: '¿Está pensando en comprar un yate en España o el Mediterráneo?',
    body: 'All Yacht Service realiza inspecciones precompra independientes. El alcance acordado puede incluir componentes accesibles del generador, documentación y una demostración segura; algunas observaciones pueden requerir un especialista.',
    links: [
      {
        label: 'Solicitar presupuesto de inspección precompra',
        href: '/es/contact?service=pre-purchase-survey',
      },
      {
        label: 'Ver la inspección precompra de yates',
        href: '/es/pre-purchase-survey',
      },
      {
        label: 'WhatsApp +34 695 718 540',
        href: 'https://wa.me/34695718540',
        external: true,
      },
      {
        label: 'Correo info@allyachtservice.com',
        href: 'mailto:info@allyachtservice.com',
      },
    ],
  },
  labels: {
    breadcrumb: 'Ruta de navegación',
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
    title: 'Generador de un yate: por qué no basta con arrancarlo',
    description:
      'Un arranque fácil puede ocultar problemas de refrigeración, escape o electricidad. Revise el historial, la instalación y el funcionamiento bajo carga.',
    href: '/es/yacht-survey-tips/yacht-generator-checks-before-purchase',
    category: 'Inspección precompra · Maquinaria y sistemas de a bordo',
    status: 'Publicado',
    publicationDate: '27 de octubre de 2026',
    publicationDateTime: '2026-10-27',
    readingTime: '6 minutos',
    image: articleImage,
  } satisfies SurveyTipsArticle,
} as const satisfies SurveyTipArticlePageData;
