import type {
  SurveyTipArticlePageData,
  SurveyTipsArticle,
  SurveyTipsImage,
} from '../../yacht-survey-tips/types';

const articleImage = {
  src: '/images/yacht-survey-tips/keel-to-hull-joint.png',
  alt: 'Infografía de All Yacht Service sobre las señales visibles que conviene revisar en la unión entre la quilla y el casco de un velero',
  width: 1080,
  height: 1350,
} as const satisfies SurveyTipsImage;

export const spanishKeelToHullJointArticle = {
  sourceUrl:
    'https://www.allyachtservice.com/yacht-survey-tips/keel-to-hull-joint',
  title:
    'Unión quilla-casco: señales de alerta que debe revisar el comprador de un yate',
  seoTitle:
    'Revisión de la unión quilla-casco para compradores | All Yacht Service',
  description:
    'Guía práctica sobre grietas, manchas, cambios en el enmasillado y reparaciones locales visibles en la unión quilla-casco de un velero, y sobre cuándo puede ser necesaria una investigación adicional.',
  metaDescription:
    'Conozca las señales visibles en la unión quilla-casco de un velero que pueden justificar una investigación más detallada antes de comprar.',
  slug: 'keel-to-hull-joint',
  pathname: '/es/yacht-survey-tips/keel-to-hull-joint',
  category: 'Inspección precompra · Casco y estructura',
  status: 'Publicado',
  publicationDate: '6 de octubre de 2026',
  publicationDateTime: '2026-10-06',
  modifiedDateTime: '2026-10-06',
  readingTime: '6 minutos de lectura',
  timeRequired: 'PT6M',
  standfirst:
    'Cuando un velero está en seco y apoyado de forma segura, la unión entre la quilla y el casco puede aportar indicios sobre un posible movimiento, una varada accidental anterior o trabajos de reparación. Las señales visibles necesitan contexto antes de extraer conclusiones.',
  image: articleImage,
  imageCaption:
    'La infografía original destaca señales visibles en la unión quilla-casco y la importancia del historial de varadas accidentales. Sirve para orientar la observación, no para emitir un diagnóstico.',
  socialImageAlt:
    'Guía de All Yacht Service sobre señales visibles en la unión quilla-casco para compradores de veleros',
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
      label: 'Unión quilla-casco',
      href: '/es/yacht-survey-tips/keel-to-hull-joint',
    },
  ],
  introduction: {
    id: 'introduccion-union-quilla-casco',
    label: 'Introducción',
    paragraphs: [
      'La unión quilla-casco es la transición visible entre la quilla y el casco de un velero. Cuando la embarcación está en seco, apoyada de forma segura y se permite el acceso, la unión puede observarse a lo largo de su recorrido y compararse por ambos lados.',
      'Una grieta, una mancha o una reparación local pueden justificar preguntas, pero su aspecto no demuestra por sí solo un daño estructural. Importan el patrón, la ubicación y la extensión de la señal, la estructura circundante y el historial de varadas accidentales y reparaciones.',
    ],
  },
  sections: [
    {
      id: 'por-que-importa-la-union-quilla-casco',
      title: 'Por qué importa la unión quilla-casco',
      paragraphs: [
        'La unión se encuentra donde las cargas de la quilla se transmiten a la estructura del casco. Su estado visible puede aportar indicios sobre el enmasillado, el sellador, reparaciones anteriores o un posible movimiento, especialmente al considerarlo junto con las señales accesibles dentro de la sentina.',
        'La revisión visual debe ser comparativa, no diagnóstica. Siga la línea de unión, observe ambos lados y anote si una señal está aislada o forma parte de un patrón más amplio. Manténgase fuera de las zonas restringidas de apoyo o elevación y no retire recubrimientos sin autorización.',
      ],
    },
    {
      id: 'senales-visibles-que-conviene-revisar',
      title: 'Señales visibles que conviene revisar',
      paragraphs: [
        'Con el yate en seco y apoyado de forma segura, revise la unión accesible y las superficies adyacentes para detectar:',
      ],
      items: [
        'Grietas que siguen la unión entre la quilla y el casco',
        'Manchas o regueros de color óxido',
        'Rezumes o rastros de humedad procedentes de la unión',
        'Enmasillado irregular',
        'Huecos visibles',
        'Cambios locales en el contorno',
        'Masilla local reciente',
        'Sellador reciente o renovado',
        'Renovación localizada del antifouling',
        'Humedad alrededor de los pernos de quilla accesibles',
        'Grietas alrededor de los pernos de quilla accesibles',
        'Indicios de reparaciones alrededor de los pernos de quilla accesibles',
        'Indicios de reparaciones en la estructura de soporte dentro de la sentina',
      ],
      closingParagraphs: [
        'Anote dónde aparece cada señal y hasta dónde se extiende. Ninguna de estas observaciones confirma por sí sola una causa.',
      ],
    },
    {
      id: 'por-que-las-grietas-necesitan-contexto',
      title: 'Por qué una grieta no significa automáticamente daño estructural',
      paragraphs: [
        'Algunas grietas superficiales pueden ser cosméticas y limitarse a la masilla de carenado, el sellador o un recubrimiento. Otros patrones pueden justificar una investigación más detallada por su posición, extensión, reaparición o relación con señales observadas en otras zonas.',
        'Una fotografía o una grieta visible no permiten determinar por sí solas si la estructura subyacente se ha movido o está dañada. El hallazgo debe valorarse junto con las superficies adyacentes del casco y la quilla, la estructura interior accesible y el historial disponible.',
      ],
    },
    {
      id: 'manchas-rezumes-y-cambios-en-enmasillado',
      title:
        'Qué pueden indicar las manchas, los rezumes y los cambios de enmasillado',
      paragraphs: [
        'Las manchas de color óxido o los rezumes pueden mostrar que la humedad o una coloración alcanzan la superficie, pero no demuestran el fallo de un perno de quilla. Conviene anotar el punto de origen, el recorrido y la extensión, y compararlos con las señales interiores accesibles.',
        'Un enmasillado irregular, huecos, cambios de contorno o masilla, sellador o antifouling localmente renovados pueden corresponder a mantenimiento o reparaciones anteriores. Son motivos para preguntar cuándo y por qué se trató la zona, no pruebas de que se ocultó un daño ni de que una reparación sea deficiente.',
      ],
    },
    {
      id: 'indicios-accesibles-en-la-sentina',
      title: 'Qué revisar dentro de la sentina cuando sea accesible',
      paragraphs: [
        'Cuando exista un acceso seguro, observe los pernos de quilla accesibles y la estructura de soporte circundante para detectar humedad, grietas, manchas o reparaciones visibles. Compare la zona con la estructura cercana y anote si los recubrimientos, selladores o acabados parecen renovados localmente.',
        'Una inspección visual estándar no permite evaluar automáticamente todos los pernos de quilla ni las partes ocultas de la estructura interior. Revestimientos, depósitos, carpintería, recubrimientos y un acceso limitado pueden ocultar zonas relevantes, y el aspecto exterior no establece el estado de los elementos empotrados o inaccesibles.',
      ],
    },
    {
      id: 'historial-de-varadas-y-reparaciones',
      title:
        'Por qué importa el historial de varadas accidentales y reparaciones',
      paragraphs: [
        'Una varada accidental anterior puede ser relevante porque las cargas pueden afectar a la quilla, la unión o la estructura de soporte de una forma que no queda explicada por una única marca visible. Pregunte si el yate ha varado accidentalmente y si después se inspeccionó, enmasilló, selló o reparó la zona de la quilla.',
        'Los hallazgos de inspecciones anteriores, las facturas del varadero, las fotografías de reparación y la información disponible sobre siniestros pueden aportar contexto. Su ausencia no demuestra un problema, y su existencia no confirma el estado actual del yate ni la calidad del trabajo realizado.',
      ],
    },
    {
      id: 'preguntas-para-el-vendedor-o-broker',
      title: 'Preguntas para el vendedor o el bróker',
      paragraphs: [
        'Mantenga la conversación centrada en hechos y solicite la documentación disponible. Puede preguntar:',
      ],
      items: [
        '¿Ha sufrido el yate alguna varada accidental o un impacto con un objeto sumergido?',
        '¿Se ha enmasillado, sellado o reparado la unión quilla-casco?',
        '¿Se registraron observaciones relacionadas con la quilla en inspecciones anteriores?',
        '¿Hay facturas del varadero, fotografías de reparación u otros registros disponibles?',
        '¿Existe información disponible sobre algún siniestro relacionado?',
      ],
    },
    {
      id: 'alcance-de-la-inspeccion-precompra',
      title: 'Qué puede evaluar una inspección precompra',
      paragraphs: [
        'Cuando la varada forma parte del alcance acordado, una inspección precompra puede documentar el estado visible de las partes accesibles de la unión quilla-casco, la superficie del casco, el enmasillado de la quilla, los pernos de quilla accesibles y la estructura interior circundante. Estas observaciones pueden considerarse junto con el historial de reparaciones y varadas accidentales.',
        'Una inspección estándar no incluye automáticamente ensayos destructivos, desmontaje de la quilla, extracción completa de pernos, análisis de laboratorio, inspección de laminados ocultos ni ingeniería estructural especializada. El acceso y los recubrimientos superficiales también pueden limitar lo que se observa.',
      ],
    },
    {
      id: 'cuando-puede-ser-necesaria-una-investigacion-adicional',
      title:
        'Cuándo puede ser apropiada una investigación estructural adicional',
      paragraphs: [
        'Puede ser adecuada una investigación adicional cuando las señales visibles son extensas, se repiten, están asociadas con grietas o humedad internas accesibles, o coinciden con un historial conocido de varada accidental o reparación. El siguiente paso depende del material, la construcción, el acceso y las señales presentes.',
        'Un especialista adecuado puede recomendar más acceso, retirada localizada del recubrimiento, ensayos no destructivos u otro método específico. Ese trabajo debe acordarse por separado y no puede deducirse únicamente de una fotografía de la superficie.',
      ],
    },
  ],
  keyPoint: {
    id: 'conclusion-union-quilla-casco',
    title: 'Conclusión del inspector',
    body: 'Una grieta visible en la unión quilla-casco es un indicio, no un diagnóstico. Valore su patrón, ubicación y extensión junto con las señales interiores accesibles, los registros de reparación y el historial de varadas accidentales, y organice una investigación adecuada cuando el conjunto de indicios lo justifique.',
  },
  relatedServices: [
    {
      title: 'Inspección precompra',
      description:
        'Evaluación independiente de las estructuras, sistemas y maquinaria accesibles antes de comprar un yate, dentro de un alcance acordado.',
      href: '/es/pre-purchase-survey',
    },
    {
      title: 'Valoración de yates y evaluación de daños',
      description:
        'Valoración independiente o evaluación de daños para un propósito, alcance y conjunto de pruebas acordados.',
      href: '/es/valuation-damage-survey',
    },
  ],
  relatedArticles: [
    {
      label:
        '¿Se puede confiar en un casco brillante? Qué debe comprobar un comprador',
      href: '/es/yacht-survey-tips/shiny-hull',
    },
    {
      label:
        'Antes de una inspección de yates: ¿qué documentos debe solicitar el comprador?',
      href: '/es/yacht-survey-tips/documents-before-yacht-survey',
    },
    {
      label: 'Todos los consejos sobre inspección de yates',
      href: '/es/yacht-survey-tips',
    },
  ],
  finalCta: {
    heading: '¿Está comprando un velero?',
    body: 'Si el yate está disponible para una varada, una inspección precompra independiente puede documentar las observaciones accesibles de la quilla, el casco y la estructura interior dentro del alcance acordado y recomendar una investigación adicional cuando proceda.',
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
    title: 'Revise la unión quilla-casco',
    description:
      'Las grietas, manchas, cambios de enmasillado o reparaciones locales pueden aportar indicios útiles, pero necesitan contexto e investigación antes de extraer conclusiones.',
    href: '/es/yacht-survey-tips/keel-to-hull-joint',
    category: 'Inspección precompra · Casco y estructura',
    status: 'Publicado',
    publicationDate: '6 de octubre de 2026',
    publicationDateTime: '2026-10-06',
    readingTime: '6 minutos',
    image: articleImage,
  } satisfies SurveyTipsArticle,
} as const satisfies SurveyTipArticlePageData;
