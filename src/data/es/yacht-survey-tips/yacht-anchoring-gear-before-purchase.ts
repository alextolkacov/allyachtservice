import type {
  SurveyTipArticlePageData,
  SurveyTipsArticle,
  SurveyTipsImage,
} from '../../yacht-survey-tips/types';

const articleImage = {
  src: '/images/yacht-survey-tips/yacht-anchoring-gear-before-purchase.png',
  alt: 'Infografía de All Yacht Service sobre el sistema de fondeo, con cadena, cabo y herrajes de cubierta de un yate',
  width: 1080,
  height: 1350,
} as const satisfies SurveyTipsImage;

export const spanishYachtAnchoringGearBeforePurchaseArticle = {
  sourceUrl:
    'https://www.allyachtservice.com/yacht-survey-tips/yacht-anchoring-gear-before-purchase',
  title: 'Equipo de fondeo antes de comprar un yate: revise todo el sistema',
  seoTitle: 'Inspección precompra del fondeo: cadena, molinete y caja',
  description:
    'Un ancla bien colocada en proa no revela el estado de toda la línea de fondeo, sus conexiones, el molinete ni la caja de cadenas. Sepa qué pedir que se inspeccione antes de comprar.',
  metaDescription:
    'El ancla visible no muestra el estado de toda la cadena, el cabo, las conexiones, el molinete ni la caja de cadenas. Qué revisar antes de comprar un yate.',
  slug: 'yacht-anchoring-gear-before-purchase',
  pathname: '/es/yacht-survey-tips/yacht-anchoring-gear-before-purchase',
  category: 'Inspección precompra · Fondeo',
  status: 'Publicado',
  publicationDate: '17 de noviembre de 2026',
  publicationDateTime: '2026-11-17',
  modifiedDateTime: '2026-11-17',
  readingTime: '5 minutos de lectura',
  timeRequired: 'PT5M',
  standfirst:
    'El ancla, la línea de fondeo, las conexiones, el molinete y la caja de cadenas forman un solo sistema. Una proa ordenada muestra solo una parte.',
  image: articleImage,
  imageCaption:
    'Gráfico con una fotografía recortada de ROMAN ODINTSOV / Pexels. Imagen ilustrativa: no muestra un defecto detectado en una inspección de All Yacht Service. Fuente y licencia enlazadas más abajo.',
  socialImageAlt:
    'Infografía sobre el sistema de fondeo con cadena, cabo, herrajes y una lista de componentes que conviene revisar antes de comprar un yate',
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
      label: 'Revisar el equipo de fondeo antes de comprar',
      href: '/es/yacht-survey-tips/yacht-anchoring-gear-before-purchase',
    },
  ],
  introduction: {
    id: 'introduccion-fondeo',
    label: 'Introducción',
    paragraphs: [
      'El ancla que se ve en la proa de un yate es solo una parte del sistema de fondeo. La cadena o el cabo pueden estar ocultos en la caja de cadenas, mientras que el motor, las conexiones y la fijación del molinete pueden encontrarse bajo cubierta. Una proa ordenada ofrece, por tanto, una visión limitada del equipo del que dependerá la embarcación al fondear.',
      'Antes de una inspección precompra, pregunte al vendedor o al bróker si se puede extender la línea de fondeo y abrir la caja de cadenas. Acuerden cómo se demostrará con seguridad cualquier equipo motorizado. El objetivo es ver el conjunto y dejar constancia de lo que permanezca inaccesible.',
    ],
  },
  sections: [
    {
      id: 'mas-alla-del-ancla',
      title: '¿Por qué mirar más allá del ancla?',
      paragraphs: [
        'El sistema de fondeo comprende el ancla, la línea de fondeo, sus conexiones, la roldana de proa, el molinete si existe, la caja de cadenas, los puntos de amarre y la forma en que se transmiten las cargas al yate. Una pieza débil o dañada puede limitar la utilidad del resto. BoatUS recomienda revisar no solo el ancla y la línea, sino también los herrajes que reciben la carga.',
        'El ancla y la línea adecuadas dependen del yate, su uso previsto y las condiciones locales del fondo y del tiempo. Una inspección precompra puede describir lo instalado y su estado visible; no demuestra que el conjunto aguantará en cualquier fondeadero.',
      ],
    },
    {
      id: 'el-ancla',
      title: '¿Qué conviene comprobar en el propio ancla?',
      paragraphs: [
        'Busque deformaciones visibles en la caña o las uñas, grietas, corrosión intensa, galvanizado dañado y piezas móviles que no funcionen como deberían. Confirme la marca, el modelo y el tamaño si las marcas o los documentos lo permiten. Si el ancla descansa en la roldana, compruebe cómo queda asegurada durante la navegación y si la roldana o sus herrajes muestran movimiento o daños.',
        'Una marca superficial no constituye por sí sola un diagnóstico. Una posible deformación, soldadura o conexión defectuosa requiere una evaluación más detallada según el diseño del fabricante y el historial disponible.',
      ],
    },
    {
      id: 'linea-completa',
      title: '¿Por qué pedir que se muestre toda la línea de fondeo?',
      paragraphs: [
        'El tramo de cadena o cabo visible en proa podría ser el mejor conservado. Pida que una persona competente saque o extienda la línea de forma segura para inspeccionarla en toda su longitud, incluido el tramo que suele quedar en el fondo de la caja. Esto puede requerir espacio y tiempo adecuados.',
        'En la cadena, busque óxido intenso, eslabones desgastados o deformados, recubrimientos dañados y reparaciones o uniones. En el cabo, observe rozaduras, filamentos cortados, zonas endurecidas, decoloración, gazas dañadas y empalmes dudosos. Preste atención a su paso por la roldana, la gatera y el molinete. BoatUS aconseja extender toda la línea para examinarla y revisar los herrajes que puedan rozarla.',
        'Solicite la longitud y el calibre declarados de la cadena o el cabo y compárelos con las marcas, los registros y los requisitos del fabricante del molinete. Que el molinete gire sin carga no demuestra que una cadena de tamaño incorrecto engrane bien en la rueda de cadena.',
      ],
    },
    {
      id: 'conexiones',
      title: '¿Qué conexiones merecen atención?',
      paragraphs: [
        'La línea se une al ancla mediante un grillete y puede incorporar un giratorio, un empalme de cabo a cadena u otras conexiones. Revise los pasadores y cierres accesibles: seguridad, corrosión, deformaciones y señales de movimiento. Compruebe la transición entre cabo y cadena cuando exista, pues pasa repetidamente por el molinete y los herrajes de proa.',
        'En el extremo opuesto, pregunte cómo está sujeto el chicote interior de la línea en la caja de cadenas. Esa sujeción evita la pérdida accidental de la línea; no debe convertirse en el punto habitual que soporta la carga del fondeo. Si no se puede acceder a ella, anote la limitación en lugar de presumir que está segura. No la desconecte solo para inspeccionarla.',
      ],
    },
    {
      id: 'demostracion-molinete',
      title: '¿Qué puede mostrar una demostración del molinete?',
      paragraphs: [
        'Con permiso del propietario y con la embarcación asegurada, un propietario, patrón u operador designado competente puede demostrar la maniobra normal del molinete si se ha planificado con seguridad. El comprador y el inspector pueden observar si la cadena corre con fluidez, si la rueda engrana con la línea adecuada y si el equipo funciona sin ruidos anómalos ni movimientos evidentes. La demostración debe detenerse si surge una situación insegura.',
        'Revise la fijación y el sellado accesibles del molinete, los pulsadores de pie o mandos remotos, y el motor y la instalación eléctrica donde puedan observarse con seguridad. La corrosión, las manchas de agua, los tornillos flojos, el cableado dañado o un compartimento húmedo justifican más investigación. BoatUS incluye estos puntos en sus recomendaciones de inspección. Una prueba breve en puerto no demuestra el funcionamiento bajo todas las cargas de fondeo.',
        'Mantenga manos, ropa y cabos sueltos lejos de la cadena en movimiento, la rueda y la roldana; nadie debe introducirse o meter las manos en la caja durante la maniobra motorizada. El operador debe seguir las instrucciones del molinete instalado. No abra conexiones con tensión, anule protecciones, desmonte ni ajuste el equipo durante una visita.',
      ],
    },
    {
      id: 'caja-y-cargas',
      title: '¿Por qué importan la caja de cadenas y los puntos de carga?',
      paragraphs: [
        'La caja debería permitir examinar su estructura visible, el drenaje y la línea almacenada. Agua estancada, desagües obstruidos, corrosión o filtraciones a espacios contiguos justifican una revisión más detallada. Compruebe la roldana, las cornamusas, las guías y sus fijaciones accesibles para detectar movimiento, desgaste y puntos de rozamiento.',
        'Si el yate lleva solo cadena, pregunte cómo un amortiguador o una brida de fondeo soporta la carga y aporta elasticidad. El molinete no debe utilizarse como punto permanente de carga. BoatUS explica la función del amortiguador en un sistema de solo cadena.',
      ],
    },
    {
      id: 'sin-demostracion',
      title: '¿Y si no se puede demostrar el equipo?',
      paragraphs: [
        'Registre la limitación concreta: por ejemplo, solo se vio un tramo corto de cadena, la caja no se pudo abrir o el molinete no se accionó. Solicite registros de mantenimiento, facturas e información sobre problemas anteriores de fondeo, pero considérelos contexto, no prueba del estado actual.',
        'El comprador puede organizar otra visita, una inspección especializada o una demostración antes de comprometerse a comprar. El alcance de una inspección independiente debe diferenciar el estado observado del equipo inaccesible y de las conclusiones que requieran otras pruebas.',
      ],
    },
    {
      id: 'preguntas-frecuentes-fondeo',
      title: 'Preguntas frecuentes',
      paragraphs: [],
      subsections: [
        {
          id: 'ancla-limpia',
          title: '¿Basta un ancla de aspecto limpio para juzgar el sistema?',
          paragraphs: [
            'No. Gran parte de la línea de fondeo y de la instalación del molinete puede estar oculta. El aspecto del ancla es solo una observación.',
          ],
        },
        {
          id: 'comprador-acciona',
          title: '¿Debe accionar el molinete el comprador?',
          paragraphs: [
            'Debe demostrarlo, con permiso y de forma controlada, el propietario, patrón u operador designado que sea competente. El comprador y el inspector pueden observar y preguntar.',
          ],
        },
        {
          id: 'prueba-corta',
          title: '¿Una prueba breve demuestra que el molinete funciona bien?',
          paragraphs: [
            'No. Solo muestra cómo funcionó durante esa demostración. Puede no revelar fallos intermitentes, incompatibilidad con la cadena o su comportamiento bajo otras cargas.',
          ],
        },
        {
          id: 'linea-no-extendida',
          title: '¿Y si no se puede extender toda la línea de fondeo?',
          paragraphs: [
            'Registre qué tramo se inspeccionó y cuál no pudo verse. Considere una revisión posterior o especializada si el equipo de fondeo es importante para la decisión de compra.',
          ],
        },
      ],
    },
  ],
  keyPoint: {
    id: 'punto-clave-fondeo',
    title: 'Punto clave del inspector',
    body: 'Inspeccione todo el sistema de fondeo, no solo el ancla visible en proa. La línea completa, sus conexiones, el molinete, la caja y los puntos que soportan la carga responden a preguntas distintas del comprador. Si una parte no puede verse o demostrarse, deje clara esa limitación.',
  },
  authorBio: {
    id: 'autor-fondeo',
    title: 'Sobre el autor',
    paragraphs: [
      'Aleksandrs Tolkacovs es inspector naval de yates y embarcaciones menores certificado por IIMS y capitán titulado. Cuenta con más de 20 años de experiencia en ingeniería, control de calidad y gestión, además de experiencia práctica en la operación de yates.',
    ],
  },
  sources: {
    id: 'fuentes-fondeo',
    title: 'Fuentes y lectura complementaria',
    links: [
      {
        label: 'BoatUS — Mantenimiento del equipo de fondeo',
        href: 'https://www.boatus.com/expert-advice/expert-advice-archive/2021/june/ground-tackle-upkeep',
      },
      {
        label: 'BoatUS — Cómo fondear',
        href: 'https://www.boatus.com/expert-advice/expert-advice-archive/2021/june/how-to-anchor',
      },
      {
        label: 'ROMAN ODINTSOV / Pexels — Fotografía original',
        href: 'https://www.pexels.com/photo/close-up-of-anchor-line-on-ship-8356419/',
      },
      {
        label: 'Pexels — Licencia de la imagen',
        href: 'https://www.pexels.com/license/',
      },
    ],
  },
  relatedServices: [
    {
      title: 'Inspección precompra de yates',
      description:
        'Evaluación independiente antes de comprar, con acceso al equipo de fondeo y una demostración segura si se acuerdan y son viables.',
      href: '/es/pre-purchase-survey',
    },
  ],
  relatedArticles: [
    {
      label: 'Documentos que pedir antes de inspeccionar un yate',
      href: '/es/yacht-survey-tips/documents-before-yacht-survey',
    },
    {
      label: 'Todos los consejos para la inspección de yates',
      href: '/es/yacht-survey-tips',
    },
  ],
  finalCta: {
    heading: '¿Está pensando en comprar un yate en España o el Mediterráneo?',
    body: 'All Yacht Service realiza inspecciones precompra independientes. El acceso al equipo de fondeo y una demostración segura pueden incluirse en el alcance acordado.',
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
    title: 'Equipo de fondeo del yate: revise todo el sistema',
    description:
      'Un ancla ordenada cuenta solo parte de la historia. Sepa qué revisar en la cadena, el cabo, el molinete, la caja y las conexiones.',
    href: '/es/yacht-survey-tips/yacht-anchoring-gear-before-purchase',
    category: 'Inspección precompra · Fondeo',
    status: 'Publicado',
    publicationDate: '17 de noviembre de 2026',
    publicationDateTime: '2026-11-17',
    readingTime: '5 minutos',
    image: articleImage,
  } satisfies SurveyTipsArticle,
} as const satisfies SurveyTipArticlePageData;
