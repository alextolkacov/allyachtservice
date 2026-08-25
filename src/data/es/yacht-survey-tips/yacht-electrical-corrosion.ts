import type {
  SurveyTipArticlePageData,
  SurveyTipsArticle,
  SurveyTipsImage,
} from '../../yacht-survey-tips/types';

const articleImage = {
  src: '/images/yacht-survey-tips/electrical-corrosion-on-yachts.png',
  alt: 'Gráfico con corrosión en bornes de batería de un yate y señales visibles en la instalación eléctrica',
  width: 1122,
  height: 1402,
} as const satisfies SurveyTipsImage;

export const spanishYachtElectricalCorrosionArticle = {
  sourceUrl: 'https://www.instagram.com/p/DcdHZXIKMav/',
  title:
    'Corrosión en los sistemas eléctricos del yate: señales para compradores y propietarios',
  seoTitle: 'Corrosión eléctrica en yates | All Yacht Service',
  description:
    'La corrosión puede comenzar como un pequeño depósito visible alrededor de un borne y provocar fallos, caída de tensión o sobrecalentamiento. Conozca las señales que compradores y propietarios pueden observar con seguridad.',
  metaDescription:
    'Conozca las señales visibles de corrosión eléctrica en un yate, por qué importan y qué comprobaciones visuales pueden realizarse con seguridad.',
  slug: 'yacht-electrical-corrosion',
  pathname: '/es/yacht-survey-tips/yacht-electrical-corrosion',
  category: 'Sistemas eléctricos · Corrosión y entrada de agua',
  status: 'Publicado',
  publicationDate: '25 de agosto de 2026',
  publicationDateTime: '2026-08-25',
  modifiedDateTime: '2026-08-25',
  readingTime: '5 minutos de lectura',
  timeRequired: 'PT5M',
  standfirst:
    'Un pequeño depósito blanco o verde alrededor de un borne de batería puede parecer insignificante durante la visita a un yate. Sin embargo, puede ser una señal temprana de que la humedad, la sal o una conexión deficiente están afectando a la instalación eléctrica y requieren más investigación.',
  image: articleImage,
  imageCaption:
    'Los depósitos blancos o verdes, las conexiones flojas, la entrada de agua y los daños visibles por calor requieren una investigación más detallada.',
  socialImageAlt:
    'Consejo de All Yacht Service sobre corrosión eléctrica y comprobación de bornes de batería en un yate',
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
      label: 'Corrosión en los sistemas eléctricos del yate',
      href: '/es/yacht-survey-tips/yacht-electrical-corrosion',
    },
  ],
  introduction: {
    id: 'introduccion-corrosion-electrica',
    label: 'Introducción',
    paragraphs: [
      'La corrosión de una instalación eléctrica puede pasar desapercibida durante la visita a un yate. Una pequeña cantidad de residuo blanco o verde alrededor de un borne puede parecer un detalle menor de mantenimiento, pero puede advertir de que una conexión o su entorno necesitan atención.',
      'La sal, la humedad, las conexiones deficientes y la entrada de agua pueden afectar a bornes, cables, fusibles, barras colectoras y equipos de distribución. A medida que avanza la corrosión, puede aumentar la resistencia eléctrica y contribuir a caídas de tensión, fallos intermitentes o sobrecalentamiento. En casos más graves, las conexiones dañadas pueden contribuir a un fallo del sistema o a un incendio eléctrico.',
      'Un comprador o propietario puede registrar señales visibles sin desmontar equipos. Esas observaciones no determinan la causa, el alcance ni la reparación necesaria, y no sustituyen una inspección profesional ni la investigación de un especialista eléctrico competente.',
    ],
  },
  sections: [
    {
      id: 'por-que-importa-corrosion-electrica',
      title: 'Por qué la corrosión eléctrica requiere atención',
      paragraphs: [
        'Una conexión eléctrica depende de un contacto limpio y firme. La corrosión o una conexión deficiente pueden aumentar la resistencia y contribuir a una caída de tensión, un funcionamiento intermitente y calor en el punto afectado.',
        'Por tanto, el depósito visible es una observación, no un diagnóstico completo. La cuestión importante es determinar si se trata de un problema aislado de mantenimiento o de un indicio de humedad, entrada de agua, daños por calor o una deficiencia más amplia de la instalación.',
      ],
    },
    {
      id: 'senales-corrosion-electrica',
      title: 'Señales visibles que deben comprobarse',
      paragraphs: [
        'Sin abrir equipos eléctricos ni tocar componentes desconocidos, compradores y propietarios pueden observar las siguientes señales en instalaciones accesibles:',
      ],
      items: [
        'Depósitos blancos o verdes en bornes de batería y conexiones de cables',
        'Conexiones flojas, dañadas o visiblemente sobrecalentadas',
        'Corrosión alrededor de fusibles, barras colectoras o cuadros de distribución accesibles',
        'Indicios de humedad o entrada de agua en compartimentos eléctricos',
        'Olor a quemado, daños por calor o componentes decolorados',
      ],
      closingParagraphs: [
        'Ninguna de estas señales confirma por sí sola el estado completo del sistema eléctrico. Cada una justifica registrar la ubicación y organizar una investigación adecuada al hallazgo.',
      ],
      note: 'El exterior limpio de una caja de baterías o de un cuadro eléctrico no confirma el estado de todas las conexiones o componentes ocultos.',
    },
    {
      id: 'comprobacion-visual-segura',
      title: 'Una comprobación visual segura',
      paragraphs: [
        'Con los sistemas del yate en su estado normal de seguridad, inspeccione visualmente los bornes de batería y los compartimentos eléctricos accesibles. Busque depósitos, humedad, manchas y daños evidentes por calor sin alterar la instalación.',
        'No retire tapas eléctricas ni toque equipos de corriente alterna o continua que no conozca. Si una conexión está floja, caliente, dañada, decolorada o rodeada de productos de corrosión, limite la comprobación a observar y remita el hallazgo a un profesional competente.',
      ],
      note: 'Una comprobación visual debe seguir siendo visual. No autoriza a energizar, desmontar, limpiar ni probar equipos eléctricos desconocidos.',
    },
    {
      id: 'observacion-no-diagnostico',
      title: 'Una observación no es un diagnóstico',
      paragraphs: [
        'Los depósitos blancos o verdes pueden señalar la ubicación de un problema, pero el aspecto por sí solo no permite determinar por qué apareció la corrosión, hasta dónde se extiende ni qué reparación resulta adecuada.',
        'El acceso también puede estar limitado. Algunas conexiones quedan ocultas tras tapas o dentro de equipos que solo debería abrir o comprobar una persona competente dentro de un alcance acordado. Por ello, puede recomendarse una investigación adicional antes de tomar una decisión.',
      ],
    },
    {
      id: 'corrosion-electrica-inspeccion-precompra',
      title: 'La corrosión eléctrica en una inspección precompra',
      paragraphs: [
        'Durante una inspección profesional precompra o de condición, las instalaciones eléctricas accesibles se valoran junto con la estructura, la maquinaria y los demás sistemas del yate. Este contexto ayuda a determinar si un indicio visible parece aislado o forma parte de un patrón más amplio que requiere investigación.',
        'Una inspección no hace visibles todas las conexiones ocultas ni sustituye pruebas eléctricas especializadas cuando los hallazgos las justifican. Sí ayuda a identificar observaciones, limitaciones y recomendaciones antes de que el comprador complete la operación.',
      ],
    },
  ],
  keyPoint: {
    id: 'punto-clave-corrosion-electrica',
    title: 'Punto clave del inspector',
    body: 'La corrosión suele comenzar con una pequeña señal visible. Registre depósitos, humedad, daños por calor, decoloración u olor a quemado, pero no desmonte ni toque equipos eléctricos desconocidos. El hallazgo debe investigarse dentro del contexto de toda la instalación eléctrica del yate.',
  },
  relatedServices: [
    {
      title: 'Inspección precompra',
      description:
        'Evaluación independiente de la estructura, los sistemas, la maquinaria accesible y el estado general antes de comprar.',
      href: '/es/pre-purchase-survey',
    },
    {
      title: 'Inspección de condición para seguro',
      description:
        'Evaluación del estado e informe profesional para solicitudes y renovaciones de seguro.',
      href: '/es/insurance-survey',
    },
    {
      title: 'Representación del comprador',
      description:
        'Apoyo técnico independiente antes, durante y después de la compra de un yate.',
      href: '/es/buyer-representation',
    },
  ],
  relatedArticles: [
    {
      label: 'No ignore las válvulas de fondo',
      href: '/es/yacht-survey-tips/check-yacht-seacocks',
    },
    {
      label: 'Compruebe el sistema de gobierno antes de confiar en él',
      href: '/es/yacht-survey-tips/check-yacht-steering',
    },
    {
      label: 'Todos los consejos para la inspección de yates',
      href: '/es/yacht-survey-tips',
    },
  ],
  finalCta: {
    heading: '¿Está comprando o asegurando un yate?',
    body: 'All Yacht Service realiza inspecciones independientes precompra y de condición para seguro que ayudan a comprender los indicios visibles en los sistemas accesibles del yate antes de tomar decisiones importantes.',
    links: [
      {
        label: 'Solicitar presupuesto de inspección',
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
    finalCtaEyebrow: 'Apoyo de inspección independiente',
  },
  card: {
    title: 'Corrosión en los sistemas eléctricos del yate: qué comprobar',
    description:
      'Los depósitos, la humedad o los daños por calor alrededor de conexiones eléctricas accesibles pueden indicar un problema que requiere investigación.',
    href: '/es/yacht-survey-tips/yacht-electrical-corrosion',
    category: 'Sistemas eléctricos · Corrosión y entrada de agua',
    status: 'Publicado',
    publicationDate: '25 de agosto de 2026',
    publicationDateTime: '2026-08-25',
    readingTime: '5 minutos',
    image: articleImage,
  } satisfies SurveyTipsArticle,
} as const satisfies SurveyTipArticlePageData;
