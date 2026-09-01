import type {
  SurveyTipArticlePageData,
  SurveyTipsArticle,
  SurveyTipsImage,
} from '../../yacht-survey-tips/types';

const articleImage = {
  src: '/images/yacht-survey-tips/standing-rigging-warning-signs.png',
  alt: 'Gráfico sobre terminales, tensores y cadenotes del aparejo fijo de un yate y las señales visibles que deben comprobarse',
  width: 1092,
  height: 1440,
} as const satisfies SurveyTipsImage;

export const spanishStandingRiggingWarningSignsArticle = {
  sourceUrl:
    'https://www.allyachtservice.com/yacht-survey-tips/standing-rigging-warning-signs',
  title:
    'No juzgue el aparejo fijo por su brillo: qué debe comprobar un comprador',
  seoTitle: 'Señales de alerta en el aparejo fijo | All Yacht Service',
  description:
    'Un aparejo fijo pulido puede presentar indicios de corrosión, grietas, deformación o fatiga en zonas difíciles de ver y sometidas a grandes cargas. Conozca las señales que un comprador puede comprobar con seguridad.',
  metaDescription:
    'Conozca las señales visibles del aparejo fijo que un comprador puede comprobar y por qué importan la antigüedad, el historial y una inspección especializada.',
  slug: 'standing-rigging-warning-signs',
  pathname: '/es/yacht-survey-tips/standing-rigging-warning-signs',
  category: 'Comprobaciones precompra · Aparejo fijo y velas',
  status: 'Publicado',
  publicationDate: '1 de septiembre de 2026',
  publicationDateTime: '2026-09-01',
  modifiedDateTime: '2026-09-01',
  readingTime: '5 minutos de lectura',
  timeRequired: 'PT5M',
  standfirst:
    'El aparejo fijo de acero inoxidable puede parecer limpio y pulido mientras se desarrollan defectos en zonas difíciles de ver. Para quien compra un velero, el estado visible, la antigüedad y el historial de servicio merecen atención antes de completar la operación.',
  image: articleImage,
  imageCaption:
    'Los terminales inferiores, tensores y cadenotes accesibles pueden comprobarse visualmente en busca de manchas, deformaciones, alambres dañados u otras diferencias que requieran investigación.',
  socialImageAlt:
    'Consejo de All Yacht Service sobre señales de alerta en el aparejo fijo de un yate',
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
      label: 'Señales de alerta en el aparejo fijo',
      href: '/es/yacht-survey-tips/standing-rigging-warning-signs',
    },
  ],
  introduction: {
    id: 'introduccion-aparejo-fijo',
    label: 'Introducción',
    paragraphs: [
      'El aparejo fijo de acero inoxidable puede causar una primera impresión tranquilizadora. Sin embargo, unos obenques, estayes y herrajes limpios no confirman el estado de los componentes difíciles de ver o sometidos a cargas importantes.',
      'La corrosión, las grietas, la deformación o la fatiga pueden desarrollarse alrededor de terminales, engastes, articulaciones, cadenotes y otras zonas aunque las superficies visibles parezcan cuidadas. Un fallo del aparejo fijo puede provocar la pérdida del mástil y consecuencias potencialmente más graves.',
      'Un comprador puede realizar una comprobación visual prudente desde la cubierta y solicitar el historial del aparejo. No es una inspección completa ni permite identificar todos los defectos ocultos, pero puede revelar observaciones que justifiquen una investigación más detallada antes de la compra.',
    ],
  },
  sections: [
    {
      id: 'por-que-el-aspecto-puede-enganar',
      title: 'Por qué el aspecto puede resultar engañoso',
      paragraphs: [
        'Los obenques, estayes, terminales, engastes, articulaciones y cadenotes pueden verse limpios por fuera mientras aparecen problemas en zonas menos visibles o muy cargadas. Una superficie pulida describe el aspecto, pero no demuestra que se conozca el estado del componente.',
        'Las manchas o deformaciones visibles pueden ayudar a localizar dónde hace falta prestar más atención, pero el aspecto por sí solo no permite determinar la causa, el alcance ni el estado restante. El historial del yate y la accesibilidad del aparejo también condicionan lo que puede evaluarse.',
      ],
    },
    {
      id: 'senales-alerta-aparejo-fijo',
      title: 'Señales de alerta que deben comprobarse',
      paragraphs: [
        'Desde una posición segura en cubierta, el comprador puede buscar diferencias visibles o daños en los componentes accesibles del aparejo fijo. Entre las observaciones relevantes se encuentran:',
      ],
      items: [
        'Alambres rotos o deformados',
        'Manchas de óxido alrededor de terminales o herrajes',
        'Grietas alrededor de engastes, articulaciones o cadenotes',
        'Herrajes doblados o con indicios de sobrecarga',
        'Pasadores o chavetas flojos y dispositivos de seguridad ausentes',
        'Corrosión donde los herrajes de acero inoxidable penetran o desaparecen en la cubierta',
        'Movimiento, grietas o manchas de agua alrededor de los cadenotes',
      ],
      closingParagraphs: [
        'Estas señales no diagnostican por sí solas un defecto. Deben registrarse y valorarse en su contexto, y pueden justificar una investigación adicional por parte de un especialista debidamente cualificado.',
      ],
      note: 'Una mancha puede señalar una zona que requiere atención, pero no confirma por sí sola la causa ni el alcance de una posible corrosión o grieta.',
    },
    {
      id: 'comprobacion-visual-segura-aparejo',
      title: 'Una comprobación visual segura',
      paragraphs: [
        'Desde la cubierta, siga visualmente cada estay y obenque hacia arriba. Preste especial atención a los terminales inferiores, los tensores y los cadenotes accesibles, comparando los herrajes próximos para detectar manchas, deformaciones, alambres dañados o cualquier diferencia.',
        'Limite la comprobación a una observación visual desde una zona segura de la cubierta. No intente desmontar un aparejo sometido a carga ni subir al mástil sin el equipo y la experiencia adecuados.',
      ],
      note: 'Una comprobación visual desde la cubierta no confirma el estado de componentes ocultos ni de zonas a las que no puede accederse con seguridad.',
    },
    {
      id: 'antiguedad-historial-aparejo',
      title: 'Por qué importan la antigüedad y el historial del aparejo',
      paragraphs: [
        'Aunque no se observe un defecto evidente, la antigüedad y el historial de servicio del aparejo fijo siguen siendo importantes. Solicite al vendedor pruebas documentales en lugar de confiar únicamente en el aspecto actual.',
      ],
      items: [
        '¿Cuándo se sustituyó por última vez el aparejo fijo?',
        '¿Hay facturas o registros de la instalación?',
        '¿Ha sufrido el yate una desarboladura, una varada accidental o una carga importante sobre el aparejo?',
        '¿Cuándo se inspeccionaron profesionalmente por última vez el mástil y el aparejo?',
      ],
      closingParagraphs: [
        'Las respuestas, los documentos y cualquier laguna del historial deben considerarse junto con el estado visible. No ver un problema no equivale a conocer el estado.',
      ],
    },
    {
      id: 'aparejo-inspeccion-precompra',
      title: 'Qué puede evaluar una inspección precompra',
      paragraphs: [
        'Durante una inspección precompra, el aparejo fijo, los terminales, los cadenotes y la estructura asociada que sean accesibles pueden evaluarse junto con el resto del yate. Los hallazgos visibles, las limitaciones de acceso y el historial disponible se consideran dentro de una valoración más amplia del estado de la embarcación.',
        'Una inspección precompra estándar no equivale automáticamente a una inspección especializada completa del aparejo ni a una inspección en altura del mástil. Cuando las observaciones, las limitaciones de acceso, la antigüedad o el historial lo justifiquen, puede recomendarse una inspección especializada del aparejo antes de tomar una decisión definitiva.',
      ],
    },
  ],
  keyPoint: {
    id: 'punto-clave-aparejo-fijo',
    title: 'Punto clave del inspector',
    body: 'Un herraje pulido no demuestra que se conozca su estado. Las señales visibles, la antigüedad, el historial de servicio y las limitaciones de acceso importan al evaluar el aparejo fijo; cuando los hallazgos lo justifiquen, puede ser apropiada una inspección especializada.',
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
      label: 'Corrosión en los sistemas eléctricos del yate',
      href: '/es/yacht-survey-tips/yacht-electrical-corrosion',
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
    heading: '¿Está comprando un velero usado?',
    body: 'Una inspección precompra independiente puede evaluar el aparejo y la estructura asociada que sean accesibles dentro del estado general del yate, identificar limitaciones y recomendar una investigación especializada cuando resulte apropiado.',
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
    title: 'No juzgue el aparejo fijo por su brillo',
    description:
      'Un aparejo fijo pulido puede ocultar indicios de corrosión, grietas, deformación o fatiga. Conozca qué puede comprobar un comprador con seguridad.',
    href: '/es/yacht-survey-tips/standing-rigging-warning-signs',
    category: 'Comprobaciones precompra · Aparejo fijo y velas',
    status: 'Publicado',
    publicationDate: '1 de septiembre de 2026',
    publicationDateTime: '2026-09-01',
    readingTime: '5 minutos',
    image: articleImage,
  } satisfies SurveyTipsArticle,
} as const satisfies SurveyTipArticlePageData;
