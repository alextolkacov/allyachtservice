import type {
  SurveyTipArticlePageData,
  SurveyTipsArticle,
  SurveyTipsImage,
} from '../../yacht-survey-tips/types';

const articleImage = {
  src: '/images/yacht-survey-tips/check-yacht-bilge.png',
  alt: 'Gráfico con señales visibles en la sentina y una comprobación segura para compradores de yates usados',
  width: 1122,
  height: 1402,
} as const satisfies SurveyTipsImage;

export const spanishCheckYachtBilgeArticle = {
  sourceUrl:
    'https://www.allyachtservice.com/yacht-survey-tips/check-yacht-bilge',
  title:
    'Revise la sentina antes de confiar en el barco: qué debe comprobar un comprador de yate',
  seoTitle: 'Qué revisar en la sentina de un yate usado | All Yacht Service',
  description:
    'La sentina puede revelar agua sin explicación, residuos de fluidos, corrosión y problemas de mantenimiento que no se aprecian en un interior limpio. Conozca qué puede revisar con seguridad un comprador.',
  metaDescription:
    'Sepa qué pueden revelar el agua estancada, los residuos, la corrosión y el estado de la bomba de achique al revisar un yate usado.',
  slug: 'check-yacht-bilge',
  pathname: '/es/yacht-survey-tips/check-yacht-bilge',
  category: 'Comprobaciones precompra · Sentina y sistemas de a bordo',
  status: 'Publicado',
  publicationDate: '8 de septiembre de 2026',
  publicationDateTime: '2026-09-08',
  modifiedDateTime: '2026-09-08',
  readingTime: '5 minutos de lectura',
  timeRequired: 'PT5M',
  standfirst:
    'Un interior limpio no significa que el barco esté seco. Las sentinas accesibles pueden mostrar agua estancada, residuos de fluidos, corrosión y otros indicios que requieren contexto antes de comprar un yate usado.',
  image: articleImage,
  imageCaption:
    'El agua estancada, los residuos de aceite o combustible, la corrosión y una bomba de achique descuidada son observaciones que pueden requerir más investigación.',
  socialImageAlt:
    'Consejo de All Yacht Service sobre la revisión de la sentina de un yate antes de comprarlo',
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
      label: 'Revise la sentina',
      href: '/es/yacht-survey-tips/check-yacht-bilge',
    },
  ],
  introduction: {
    id: 'introduccion-sentina',
    label: 'Introducción',
    paragraphs: [
      'Un yate puede presentar un interior limpio y cuidado mientras los espacios accesibles bajo el suelo cuentan otra historia. La sentina puede acumular agua u otros fluidos y mostrar cómo se han gestionado el drenaje, los espacios de maquinaria y el mantenimiento habitual.',
      'El agua estancada, los residuos de aceite, las manchas de óxido, los olores desagradables o los indicios de funcionamiento frecuente de la bomba de achique pueden señalar una condición que necesita explicación. Son observaciones, no diagnósticos, y deben valorarse junto con los sistemas, el historial y la accesibilidad del yate.',
      'Una comprobación visual prudente durante la visita ayuda al comprador a formular preguntas. No demuestra que el yate carezca de fugas ni permite descubrir todos los problemas ocultos.',
    ],
  },
  sections: [
    {
      id: 'por-que-importa-estado-sentina',
      title: 'Por qué la sentina puede revelar problemas de mantenimiento',
      paragraphs: [
        'Las sentinas accesibles pueden contener indicios que no resultan evidentes en los espacios habitables. Su estado puede mostrar si el agua drena como se espera, si hay contaminación por fluidos y si las bombas, mangueras y conexiones parecen haber recibido atención periódica.',
        'Una sentina limpia y seca es una observación útil, pero no demuestra que todos los sistemas estén libres de fugas. Del mismo modo, cierta cantidad de agua no constituye automáticamente un defecto grave. La condición debe entenderse en su contexto.',
      ],
    },
    {
      id: 'senales-alerta-sentina',
      title: 'Señales de alerta que debe comprobar',
      paragraphs: [
        'Cuando los compartimentos sean accesibles con seguridad, preste atención a:',
      ],
      items: [
        'Agua acumulada en la sentina, especialmente si se desconoce su origen',
        'Residuos de aceite, gasóleo o refrigerante',
        'Manchas de óxido alrededor de bombas, accesorios o elementos de fijación',
        'Mangueras sueltas, dañadas o mal sujetas',
        'Conexiones eléctricas corroídas',
        'Bombas de achique descuidadas o muy sucias',
        'Indicios de que una bomba automática puede haber funcionado con frecuencia',
        'Olores desagradables o contaminación visible',
      ],
      closingParagraphs: [
        'Una mancha, un olor o un residuo pueden indicar una zona que merece más atención, pero no confirman por sí solos el origen ni el alcance de un problema.',
      ],
      note: 'Registre los indicios visibles y solicite una explicación. No convierta una observación aislada en un diagnóstico sin investigarla.',
    },
    {
      id: 'por-que-importa-agua-sin-explicacion',
      title: 'Por qué importa el agua sin explicación',
      paragraphs: [
        'Una pequeña cantidad de agua en la sentina no constituye automáticamente un defecto grave. La cuestión principal es si el origen resulta esperado, está explicado y es coherente con los sistemas y el uso reciente del yate.',
        'El agua sin una explicación clara puede requerir más investigación, especialmente si aparece junto con manchas, contaminación, corrosión, olores o indicios de funcionamiento repetido de una bomba.',
      ],
    },
    {
      id: 'posibles-origenes-agua-sentina',
      title: 'Posibles orígenes que pueden requerir investigación',
      paragraphs: [
        'Según el yate y las circunstancias, entre los posibles orígenes se encuentran:',
      ],
      items: [
        'Fugas en los sellos del eje',
        'Conexiones de fontanería',
        'Herrajes de cubierta',
        'Depósitos',
        'Sistemas de refrigeración',
        'Entrada de agua de lluvia',
        'Condensación',
      ],
      closingParagraphs: [
        'Esta lista ofrece posibles líneas de investigación, no un diagnóstico. Determinar el origen puede requerir acceso, seguimiento o pruebas especializadas más allá de una visita normal.',
      ],
    },
    {
      id: 'comprobacion-visual-segura-sentina',
      title: 'Una comprobación visual segura',
      paragraphs: [
        'Durante la visita, abra únicamente los compartimentos de sentina que ya sean accesibles y revíselos mirando, oliendo y observando. Preste atención a restos de aceite, combustible o refrigerante sin explicación, agua estancada excesiva, corrosión evidente y el estado visible de bombas, mangueras y conexiones accesibles.',
        'Si el yate dispone de una bomba de achique automática, pregunte al propietario o al bróker cuándo funcionó por última vez, si se conocen fugas y si se ha observado un funcionamiento frecuente. Las respuestas deben valorarse junto con el estado visible.',
      ],
      note: 'Limite la comprobación a la observación. No desmonte, anule ni active deliberadamente equipos como prueba durante una visita.',
    },
    {
      id: 'que-no-desconectar-sentina',
      title: 'Qué no debe desconectar ni manipular',
      paragraphs: [
        'No desconecte bombas, cableado eléctrico ni interruptores de flotador salvo que esté cualificado y autorizado para hacerlo. Tampoco abra sistemas de combustible o refrigeración durante una visita informal.',
        'Manipular equipos eléctricos o de seguridad puede crear un nuevo problema y dificultar la evaluación de la condición original. Si resulta necesario probar su funcionamiento, debe acordarse y dejarse en manos de una persona adecuada.',
      ],
    },
    {
      id: 'sentina-inspeccion-precompra',
      title: 'Qué puede evaluar una inspección precompra',
      paragraphs: [
        'Durante una inspección precompra, las sentinas accesibles y las bombas, mangueras, conexiones y estructuras circundantes visibles pueden formar parte de la evaluación general del estado. Los indicios, las explicaciones y las limitaciones de acceso pueden registrarse en su contexto.',
        'No siempre es posible acceder a todos los compartimentos, y una inspección estándar no garantiza que se localicen todas las fugas. Los hallazgos sin explicación pueden justificar una investigación adicional por parte de un especialista en motores, electricidad, fontanería, depósitos u otra disciplina apropiada.',
      ],
    },
  ],
  keyPoint: {
    id: 'punto-clave-sentina',
    title: 'Punto clave del inspector',
    body: 'El agua en la sentina no constituye automáticamente un defecto grave, y una sentina seca no demuestra que el yate carezca de fugas. Lo importante es que la condición tenga una explicación creíble y que los indicios visibles sean coherentes con los sistemas, el historial y el mantenimiento del yate.',
  },
  relatedServices: [
    {
      title: 'Inspección precompra',
      description:
        'Evaluación independiente de la estructura, los sistemas, la maquinaria accesible y el estado general antes de comprar.',
      href: '/es/pre-purchase-survey',
    },
    {
      title: 'Representación del comprador',
      description:
        'Apoyo técnico independiente antes, durante y después de la compra de un yate.',
      href: '/es/buyer-representation',
    },
    {
      title: 'Inspección de condición para seguro',
      description:
        'Evaluación del estado e informe profesional para solicitudes y renovaciones de seguro.',
      href: '/es/insurance-survey',
    },
  ],
  relatedArticles: [
    {
      label: 'No ignore las válvulas de fondo',
      href: '/es/yacht-survey-tips/check-yacht-seacocks',
    },
    {
      label: 'Corrosión en los sistemas eléctricos del yate',
      href: '/es/yacht-survey-tips/yacht-electrical-corrosion',
    },
    {
      label: 'Todos los consejos para la inspección de yates',
      href: '/es/yacht-survey-tips',
    },
  ],
  finalCta: {
    heading: '¿Está comprando un yate usado?',
    body: 'Una inspección precompra independiente puede evaluar las sentinas accesibles y los sistemas visibles asociados dentro del estado general del yate, documentar las limitaciones y recomendar más investigación cuando proceda.',
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
    title: 'Revise la sentina antes de confiar en el barco',
    description:
      'La sentina puede revelar agua sin explicación, residuos de fluidos, corrosión y problemas de mantenimiento que no se aprecian en un interior limpio.',
    href: '/es/yacht-survey-tips/check-yacht-bilge',
    category: 'Comprobaciones precompra · Sentina y sistemas de a bordo',
    status: 'Publicado',
    publicationDate: '8 de septiembre de 2026',
    publicationDateTime: '2026-09-08',
    readingTime: '5 minutos',
    image: articleImage,
  } satisfies SurveyTipsArticle,
} as const satisfies SurveyTipArticlePageData;
