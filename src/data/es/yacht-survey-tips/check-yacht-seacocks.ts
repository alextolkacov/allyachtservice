import type {
  SurveyTipArticlePageData,
  SurveyTipsArticle,
  SurveyTipsImage,
} from '../../yacht-survey-tips/types';

const articleImage = {
  src: '/images/yacht-survey-tips/check-yacht-seacocks-below-waterline.png',
  alt: 'Gráfico con una válvula de fondo corroída y las señales visibles que debe comprobar un comprador',
  width: 1092,
  height: 1440,
} as const satisfies SurveyTipsImage;

export const spanishCheckYachtSeacocksArticle = {
  sourceUrl: 'https://www.instagram.com/p/DbqCr3JKW-d/',
  title:
    'No ignore las válvulas de fondo: qué debe comprobar un comprador de un yate usado',
  seoTitle:
    'Válvulas de fondo: qué debe comprobar al comprar | All Yacht Service',
  description:
    'Las válvulas de fondo y los pasacascos son fáciles de pasar por alto, pero pueden convertirse en un problema importante si fallan. Conozca las señales visibles que requieren una investigación más detallada antes de comprar.',
  metaDescription:
    'Sepa qué comprobar en válvulas de fondo, mangueras y abrazaderas, y por qué la corrosión o las fugas requieren más investigación.',
  slug: 'check-yacht-seacocks',
  pathname: '/es/yacht-survey-tips/check-yacht-seacocks',
  category: 'Comprobaciones precompra · Accesorios bajo la flotación',
  status: 'Publicado',
  publicationDate: '5 de agosto de 2026',
  publicationDateTime: '2026-08-05',
  modifiedDateTime: '2026-08-05',
  readingTime: '4 minutos de lectura',
  timeRequired: 'PT4M',
  standfirst:
    'Un pequeño accesorio bajo la línea de flotación puede convertirse en un problema importante si falla. Las válvulas de fondo, los pasacascos, las mangueras conectadas y sus abrazaderas merecen una revisión deliberada durante la inspección de un yate usado.',
  image: articleImage,
  imageCaption:
    'La corrosión, las mangueras envejecidas, las abrazaderas sueltas, el accionamiento difícil y los indicios de fugas justifican una investigación más detallada.',
  socialImageAlt:
    'Consejo de All Yacht Service sobre la comprobación de válvulas de fondo y pasacascos de un yate',
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
      label: 'No ignore las válvulas de fondo',
      href: '/es/yacht-survey-tips/check-yacht-seacocks',
    },
  ],
  introduction: {
    id: 'introduccion-valvulas-fondo',
    label: 'Introducción',
    paragraphs: [
      'Las válvulas de fondo y los pasacascos resultan esenciales para varios sistemas de a bordo, entre ellos la refrigeración del motor, los inodoros y los fregaderos. A pesar de su importancia, suelen quedar ocultos en armarios o compartimentos del motor y pueden pasar inadvertidos durante una visita.',
      'Un interior limpio o una cámara de máquinas bien presentada no confirman el estado de todos los accesorios situados bajo la línea de flotación. Deben considerarse la propia válvula, las conexiones de las mangueras y cualquier indicio visible en su entorno.',
      'La comprobación visual del comprador puede detectar señales de alerta, pero no confirma el estado de todos los accesorios ni de toda la instalación. Los hallazgos deben valorarse dentro de una inspección precompra independiente.',
    ],
  },
  sections: [
    {
      id: 'por-que-importan-valvulas-fondo',
      title: 'Por qué importan las válvulas de fondo y los pasacascos',
      paragraphs: [
        'Una válvula de fondo controla una abertura del casco situada bajo la línea de flotación. Si el accesorio, la conexión de la manguera o la válvula se deterioran o fallan, un componente relativamente pequeño puede convertirse en un problema importante.',
        'Una válvula agarrotada o deteriorada puede requerir una sustitución inmediata y, en casos graves, contribuir a una entrada de agua si falla. Su estado debe tratarse como una cuestión técnica y de seguridad, no como un detalle estético.',
      ],
    },
    {
      id: 'senales-alerta-valvulas-fondo',
      title: 'Señales visibles que debe comprobar',
      paragraphs: [
        'Durante la visita o inspección de un yate usado, observe detenidamente las válvulas de fondo accesibles, los pasacascos, las mangueras conectadas y las abrazaderas. Las señales de alerta incluyen:',
      ],
      items: [
        'Corrosión o abundantes productos de corrosión en los accesorios metálicos',
        'Mangueras agrietadas o envejecidas',
        'Abrazaderas oxidadas o sueltas',
        'Válvulas difíciles o imposibles de accionar',
        'Indicios de fugas anteriores o manchas de agua',
      ],
      closingParagraphs: [
        'Cada una de estas observaciones merece mayor atención. El indicio visible puede señalar la ubicación de un problema, pero no confirma por sí solo el estado completo del accesorio ni el alcance de una posible reparación.',
      ],
      note: 'Muchas válvulas de fondo quedan fuera de la vista habitual; una visita rápida puede omitir accesorios que merecen inspección.',
    },
    {
      id: 'mirar-toda-instalacion',
      title: 'Observe la instalación, no solo la válvula',
      paragraphs: [
        'La válvula de fondo representa únicamente una parte de la instalación. La manguera conectada, las abrazaderas, las superficies metálicas accesibles y las manchas cercanas aportan información relevante.',
        'Los productos de corrosión, el envejecimiento de las mangueras, las abrazaderas oxidadas o las marcas de agua deben registrarse y no descartarse porque la válvula parezca presente e intacta. La dificultad para accionarla también requiere una investigación adicional.',
      ],
    },
    {
      id: 'limites-inspeccion-visual',
      title: 'Qué puede confirmar una inspección visual y qué no',
      paragraphs: [
        'Una inspección visual sencilla resulta útil, pero no confirma el estado de todos los accesorios ni de toda la instalación. El acceso puede ser limitado, algunos componentes pueden quedar parcialmente ocultos y el aspecto por sí solo no establece cómo se comportará el conjunto.',
        'Una inspección independiente considera la instalación, la accesibilidad y el estado visible, y puede recomendar una reparación, una sustitución o una investigación adicional cuando los hallazgos lo justifiquen.',
      ],
    },
    {
      id: 'contexto-inspeccion-precompra',
      title: 'Por qué forman parte de la inspección precompra',
      paragraphs: [
        'Las válvulas de fondo pueden pasar inadvertidas en una visita normal porque son pequeñas, numerosas y suelen estar fuera de la vista. Una inspección precompra estructurada las incorpora a la evaluación general de los sistemas accesibles y del estado del yate.',
        'El objetivo no consiste en decidir la compra por un solo accesorio, sino en detectar defectos y limitaciones antes de que se conviertan en sorpresas costosas y comprender dónde puede ser necesaria una reparación o una investigación adicional.',
      ],
    },
  ],
  keyPoint: {
    id: 'punto-clave-valvulas-fondo',
    title: 'Punto clave del inspector',
    body: 'No ignore los pequeños accesorios bajo la línea de flotación. La corrosión, las mangueras agrietadas, las abrazaderas sueltas, el accionamiento difícil o los indicios de fugas pueden revelar un problema que merece una investigación más detallada antes de comprar.',
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
      label: 'Compruebe el sistema de gobierno antes de confiar en él',
      href: '/es/yacht-survey-tips/check-yacht-steering',
    },
    {
      label: '¿Se puede confiar en un casco brillante?',
      href: '/es/yacht-survey-tips/shiny-hull',
    },
    {
      label: 'Todos los consejos para la inspección de yates',
      href: '/es/yacht-survey-tips',
    },
  ],
  finalCta: {
    heading: '¿Está comprando un yate usado?',
    body: 'Una inspección precompra profesional puede ayudar a detectar defectos visibles en válvulas de fondo, mangueras, abrazaderas y otros sistemas accesibles antes de que se conviertan en sorpresas costosas.',
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
    title: 'No ignore las válvulas de fondo',
    description:
      'Las válvulas de fondo son fáciles de pasar por alto, pero los indicios en accesorios, mangueras y abrazaderas requieren atención antes de comprar.',
    href: '/es/yacht-survey-tips/check-yacht-seacocks',
    category: 'Comprobaciones precompra · Accesorios bajo la flotación',
    status: 'Publicado',
    publicationDate: '5 de agosto de 2026',
    publicationDateTime: '2026-08-05',
    readingTime: '4 minutos',
    image: articleImage,
  } satisfies SurveyTipsArticle,
} as const satisfies SurveyTipArticlePageData;
