import type {
  SurveyTipArticlePageData,
  SurveyTipsArticle,
  SurveyTipsImage,
} from '../../yacht-survey-tips/types';

const articleImage = {
  src: '/images/yacht-survey-tips/check-yacht-steering-before-you-trust-it.png',
  alt: 'Gráfico con una rueda de gobierno y las comprobaciones del sistema de gobierno durante una prueba de mar',
  width: 1092,
  height: 1440,
} as const satisfies SurveyTipsImage;

export const spanishCheckYachtSteeringArticle = {
  sourceUrl: 'https://www.instagram.com/p/DcN5U6iKSz8/',
  title:
    'Compruebe el sistema de gobierno antes de confiar en él: qué debe observar un comprador',
  seoTitle:
    'Comprobar el gobierno de un yate antes de comprar | All Yacht Service',
  description:
    'Algunos problemas del sistema de gobierno solo aparecen con el yate en navegación. Conozca las señales que puede observar un comprador y qué aporta una prueba de mar bien realizada a la inspección precompra.',
  metaDescription:
    'Conozca las señales de alerta del sistema de gobierno de un yate y por qué una prueba de mar bien realizada importa antes de comprar.',
  slug: 'check-yacht-steering',
  pathname: '/es/yacht-survey-tips/check-yacht-steering',
  category: 'Comprobaciones precompra · Gobierno y prueba de mar',
  status: 'Publicado',
  publicationDate: '19 de agosto de 2026',
  publicationDateTime: '2026-08-19',
  modifiedDateTime: '2026-08-19',
  readingTime: '5 minutos de lectura',
  timeRequired: 'PT5M',
  standfirst:
    'Un yate puede presentar un aspecto excelente en el amarre y ocultar problemas del sistema de gobierno hasta que este trabaja bajo carga en navegación. La respuesta de la rueda, los componentes hidráulicos y el comportamiento del timón merecen atención antes de decidir una compra.',
  image: articleImage,
  imageCaption:
    'Durante una prueba de mar bien realizada, la respuesta del gobierno debe ser suave, predecible y constante en ambas direcciones.',
  socialImageAlt:
    'Consejo de All Yacht Service sobre la comprobación del sistema de gobierno de un yate antes de confiar en él',
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
      label: 'Compruebe el sistema de gobierno antes de confiar en él',
      href: '/es/yacht-survey-tips/check-yacht-steering',
    },
  ],
  introduction: {
    id: 'introduccion-sistema-gobierno',
    label: 'Introducción',
    paragraphs: [
      'Un yate puede causar una impresión muy favorable en el amarre. Una cubierta limpia, un puesto de gobierno ordenado y un buen acabado estético no confirman, sin embargo, cómo se comportará el sistema de gobierno una vez iniciada la navegación.',
      'Algunos problemas solo se manifiestan cuando el sistema trabaja bajo carga. Una holgura excesiva, un movimiento duro, fugas en componentes hidráulicos, varillajes desgastados, fijaciones del timón sueltas o vibraciones anómalas pueden indicar desde necesidades de mantenimiento hasta defectos potencialmente importantes.',
      'La comprobación inicial del comprador sirve para reconocer señales de alerta y plantear las preguntas adecuadas. No sustituye una inspección precompra profesional ni una prueba de mar correctamente realizada.',
    ],
  },
  sections: [
    {
      id: 'por-que-importa-el-gobierno',
      title: 'Por qué el sistema de gobierno exige especial atención',
      paragraphs: [
        'El gobierno no es un sistema de a bordo más. Un fallo puede afectar de inmediato a la capacidad de controlar el yate, y las reparaciones del timón, el mecanismo de gobierno o los componentes hidráulicos pueden resultar costosas.',
        'Por eso no basta con observar el yate en el amarre. El sistema debe considerarse tanto durante la inspección estática como, cuando forme parte del alcance acordado, en condiciones de funcionamiento durante una prueba de mar.',
      ],
    },
    {
      id: 'senales-alerta-gobierno',
      title: 'Señales de alerta del sistema de gobierno',
      paragraphs: [
        'Durante la inspección, preste atención a las sensaciones de la rueda y a los componentes accesibles del sistema. Entre las observaciones relevantes se encuentran:',
      ],
      items: [
        'Holgura libre excesiva en la rueda del timón',
        'Fugas de fluido hidráulico alrededor de bombas, mangueras o racores',
        'Componentes del gobierno sueltos, dañados o corroídos',
        'Puntos duros o resistencia irregular al girar',
        'Ruidos o vibraciones anómalos procedentes del sistema de gobierno o del timón',
      ],
      closingParagraphs: [
        'Estas señales no determinan por sí solas la causa exacta ni el coste de reparación. Indican que el sistema requiere una investigación más detallada antes de confiar en él o de tomar una decisión definitiva.',
      ],
      note: 'Un puesto de gobierno visualmente ordenado no confirma que todo el sistema funcione correctamente.',
    },
    {
      id: 'comprobacion-segura-prueba-mar',
      title: 'Una comprobación segura durante una prueba de mar',
      paragraphs: [
        'Durante una prueba de mar correctamente realizada, gobierne suavemente en ambas direcciones a velocidad lenta y moderada. La respuesta debe sentirse suave, predecible y constante.',
        'Cualquier resistencia, retraso, vibración o ruido anómalos merece una investigación adicional. La observación debe registrarse y valorarse junto con la inspección en puerto y los demás resultados de la prueba de mar.',
      ],
      note: 'La comprobación debe formar parte de una prueba de mar planificada, no de una maniobra improvisada ni de un intento de forzar un sistema que no responde con normalidad.',
    },
    {
      id: 'prueba-mar-no-es-demostracion',
      title: 'Una prueba de mar no es una simple demostración',
      paragraphs: [
        'La prueba de mar no debería reducirse a demostrar brevemente que el yate arranca, se desplaza y regresa al amarre.',
        'Combinada con una inspección precompra profesional, ofrece la oportunidad de evaluar el gobierno, la propulsión y otros sistemas en condiciones de funcionamiento. Este contexto permite comparar la impresión tranquilizadora del amarre con el comportamiento real del yate en navegación.',
      ],
    },
    {
      id: 'inspeccion-e-investigacion',
      title: 'Qué aportan la inspección y una investigación adicional',
      paragraphs: [
        'Una inspección profesional integra las observaciones disponibles sobre el gobierno en la evaluación global del yate. Los componentes accesibles, el estado visible y el comportamiento durante la prueba de mar se valoran conjuntamente, no como indicios aislados.',
        'Ninguna comprobación sencilla del comprador permite confirmar todos los elementos de la instalación ni diagnosticar un defecto oculto. Si se observan resistencia, retraso, fugas, vibraciones, ruidos u holgura excesiva, puede resultar apropiado investigar más antes de completar la compra.',
      ],
    },
  ],
  keyPoint: {
    id: 'punto-clave-gobierno',
    title: 'Punto clave del inspector',
    body: 'El gobierno debe responder de forma suave, predecible y constante. Un yate que parece excelente en el amarre puede revelar problemas en navegación; no deben ignorarse la holgura, las fugas, la resistencia, el retraso, las vibraciones o los ruidos anómalos.',
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
      title: 'Valoración y evaluación de daños',
      description:
        'Valoración independiente e informe de daños para un propósito y un alcance profesional acordados.',
      href: '/es/valuation-damage-survey',
    },
  ],
  relatedArticles: [
    {
      label: 'No ignore las válvulas de fondo',
      href: '/es/yacht-survey-tips/check-yacht-seacocks',
    },
    {
      label: 'Todos los consejos para la inspección de yates',
      href: '/es/yacht-survey-tips',
    },
  ],
  finalCta: {
    heading: '¿Está comprando un yate usado?',
    body: 'All Yacht Service realiza inspecciones precompra independientes y pruebas de mar para ayudar a los compradores a comprender el estado de una embarcación antes de tomar una decisión final. Se aceptan encargos en la Costa Blanca y toda España, así como en el Mediterráneo según el alcance y con posibles gastos de desplazamiento.',
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
    title: 'Compruebe el sistema de gobierno antes de confiar en él',
    description:
      'Los problemas del sistema de gobierno pueden permanecer ocultos en el amarre y aparecer solo cuando trabaja bajo carga en navegación.',
    href: '/es/yacht-survey-tips/check-yacht-steering',
    category: 'Comprobaciones precompra · Gobierno y prueba de mar',
    status: 'Publicado',
    publicationDate: '19 de agosto de 2026',
    publicationDateTime: '2026-08-19',
    readingTime: '5 minutos',
    image: articleImage,
  } satisfies SurveyTipsArticle,
} as const satisfies SurveyTipArticlePageData;
