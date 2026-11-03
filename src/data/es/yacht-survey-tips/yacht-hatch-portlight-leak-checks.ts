import type {
  SurveyTipArticlePageData,
  SurveyTipsArticle,
  SurveyTipsImage,
} from '../../yacht-survey-tips/types';

const articleImage = {
  src: '/images/yacht-survey-tips/yacht-hatch-portlight-leak-checks.png',
  alt: 'Infografía de All Yacht Service con un portillo de yate, una mancha de agua bajo el marco y señales visibles que conviene revisar',
  width: 1080,
  height: 1350,
} as const satisfies SurveyTipsImage;

export const spanishYachtHatchPortlightLeakChecksArticle = {
  sourceUrl:
    'https://www.allyachtservice.com/yacht-survey-tips/yacht-hatch-portlight-leak-checks',
  title: 'Escotillas y portillos de un yate: siga el recorrido del agua',
  seoTitle: 'Filtraciones en escotillas y portillos antes de comprar un yate',
  description:
    'Una mancha de agua bajo una escotilla o un portillo merece investigación. Compare la marca interior con las juntas, el sellado del marco, el metacrilato, la cubierta y las reparaciones anteriores.',
  metaDescription:
    'Qué pueden indicar las manchas, juntas gastadas y reparaciones alrededor de escotillas y portillos, y por qué conviene localizar el origen de la filtración.',
  slug: 'yacht-hatch-portlight-leak-checks',
  pathname: '/es/yacht-survey-tips/yacht-hatch-portlight-leak-checks',
  category: 'Inspección precompra · Cubierta y entrada de agua',
  status: 'Publicado',
  publicationDate: '3 de noviembre de 2026',
  publicationDateTime: '2026-11-03',
  modifiedDateTime: '2026-11-03',
  readingTime: '6 minutos de lectura',
  timeRequired: 'PT6M',
  standfirst:
    'Una mancha bajo una escotilla o un portillo exige investigar, pero no demuestra que esa abertura sea el origen de la filtración. Siga el posible recorrido del agua por dentro y por fuera.',
  image: articleImage,
  imageCaption:
    'La infografía original ilustra indicios visibles alrededor de un portillo. No diagnostica el origen ni el estado de una filtración concreta.',
  socialImageAlt:
    'Infografía de All Yacht Service con un portillo manchado y comprobaciones de juntas, cierres, metacrilato y reparaciones',
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
      label: 'Filtraciones en escotillas y portillos',
      href: '/es/yacht-survey-tips/yacht-hatch-portlight-leak-checks',
    },
  ],
  introduction: {
    id: 'introduccion-escotillas',
    label: 'Introducción',
    paragraphs: [
      'Una mancha de agua bajo una escotilla o un portillo merece investigación antes de comprar un yate. Puede estar relacionada con la junta de apertura, el metacrilato, el sellado del marco o una zona cercana de la cubierta, pero el agua puede desplazarse tras el revestimiento antes de hacerse visible. Revise ambos lados del elemento, pregunte cuándo apareció la marca y compare la respuesta con las reparaciones y el estado de la cubierta alrededor.',
    ],
  },
  sections: [
    {
      id: 'por-que-filtra',
      title: '¿Por qué puede filtrar una escotilla que parece estar bien?',
      paragraphs: [
        'Una escotilla o un portillo ofrecen varios posibles recorridos al agua: entre la tapa y su junta, entre el marco y la cubierta o el casco, alrededor del metacrilato o por un herraje próximo. Un cordón de sellador reciente y bien acabado no revela qué camino se reparó ni si la intervención funcionó.',
        'También importan la cubierta circundante y el asiento del marco. Si la superficie se mueve o el marco no apoya de forma uniforme, cambiar solo la junta puede no resolver la filtración. Hay que valorar la construcción y el modelo instalados.',
      ],
    },
    {
      id: 'revisar-interior',
      title: '¿Qué debe observar el comprador en el interior?',
      paragraphs: [
        'Comience por el revestimiento interior y las molduras bajo cada escotilla o portillo. Compare ambas esquinas, no solo la mancha más visible. Observe:',
      ],
      items: [
        'Regueros marrones, cristales de sal o marcas del nivel alcanzado por el agua',
        'Revestimiento húmedo o descolorido',
        'Chapa de madera hinchada, molduras levantadas o tapicería dañada',
        'Fijaciones o herrajes corroídos',
        'Zonas próximas accesibles con seguridad que estén blandas o se muevan',
        'Pintura reciente o molduras sustituidas únicamente en una zona pequeña',
      ],
      closingParagraphs: [
        'Que la superficie esté seca durante una visita no demuestra que la filtración haya cesado: quizá no haya llovido ni recibido rociones recientemente. A la inversa, una mancha antigua no prueba una entrada de agua activa. Anote dónde está y pregunte qué ocurrió tras la última lluvia intensa o baldeo.',
      ],
    },
    {
      id: 'revisar-exterior',
      title: '¿Qué zonas exteriores merecen atención?',
      paragraphs: [
        'En cubierta, examine todo el perímetro del marco. Busque huecos, material de sellado levantado o desigual, fijaciones flojas, corrosión, reparaciones anteriores y grietas en la superficie cercana. Compruebe si el agua escurre o tiende a acumularse junto al elemento.',
        'Revise el metacrilato en busca de grietas, microfisuras superficiales o señales de separación del marco. Algunas microfisuras pueden ser cosméticas; una grieta que atraviesa el material o un fallo de la unión son cuestiones distintas. Identifique la marca y el modelo antes de valorar opciones de reparación.',
        'Si el portillo está en el casco o la caseta, examine también el laminado o panel que lo rodea. El goteo interior puede aparecer lejos del punto de entrada.',
      ],
    },
    {
      id: 'juntas-bisagras-cierres',
      title: '¿Cómo influyen las juntas, bisagras y cierres?',
      paragraphs: [
        'Con permiso del propietario, abra y cierre el elemento con suavidad. Compruebe si la junta está bien asentada y no presenta desgarros, aplastamiento, tramos ausentes ni suciedad evidente. La tapa debe apoyarse de manera uniforme; bisagras y cierres deben funcionar sin fuerza excesiva y mantener la posición de cierre prevista.',
        'Los recambios y las instrucciones de uso dependen de la marca y el modelo. El identificador de Lewmar ayuda a reconocer escotillas y portillos antes de pedir piezas. Por ejemplo, el manual del portillo VETUS PA indica la posición de las manetas al cerrarlo y cómo cuidar la goma de sellado; esas instrucciones son para esa gama, no para todos los portillos.',
        'No fuerce un cierre duro. Puede haber un problema de ajuste, junta o marco, y forzarlo podría dañar el elemento.',
      ],
    },
    {
      id: 'origen-de-la-mancha',
      title: '¿Indica una mancha de agua dónde está la entrada?',
      paragraphs: [
        'No. El agua puede avanzar por el núcleo de la cubierta, la cara inferior del laminado, el recorrido de un cable, una moldura de madera o el revestimiento antes de gotear. Una marca bajo una escotilla puede venir de ella, pero también de la base de un pasamanos, un organizador de cubierta, el paso del mástil u otra penetración próxima.',
        'Relacione la marca interior con lo observado fuera, las condiciones meteorológicas y las reparaciones anteriores. Una prueba controlada con agua puede ayudar si se acuerda con el propietario y la realiza personal competente de forma metódica; que un rociado breve no produzca goteo no descarta todas las filtraciones. Interprete el lugar según la construcción del yate.',
      ],
    },
    {
      id: 'historial-reparaciones',
      title: '¿Qué historial de reparaciones conviene pedir?',
      paragraphs: ['Pregunte al vendedor o al intermediario:'],
      items: [
        '¿Cuándo apareció la mancha y reaparece tras la lluvia, el baldeo o la navegación con rociones?',
        '¿Se volvió a sellar la escotilla o el portillo, o se cambiaron la junta o el metacrilato?',
        '¿Hay facturas, fotografías o informes de inspecciones anteriores?',
      ],
      closingParagraphs: [
        'Compare la fecha de la reparación con el estado actual del marco y el revestimiento. Una factura por una junta nueva confirma el trabajo realizado, no que se encontrara el origen. La falta de registros es motivo para preguntar, no prueba de un defecto grave.',
      ],
    },
    {
      id: 'estructura-cubierta',
      title: '¿Cuándo puede afectar una pequeña filtración a la cubierta?',
      paragraphs: [
        'La entrada repetida de agua cerca de una abertura puede afectar madera, laminado con núcleo, fijaciones o acabados interiores. El riesgo depende de la construcción del yate, del recorrido del agua y del tiempo transcurrido. Zonas blandas o elevadas, humedad persistente o movimiento alrededor del hueco pueden justificar una revisión adicional.',
        'Una mancha en el revestimiento no demuestra por sí sola que el núcleo de la cubierta esté húmedo o dañado. El inspector puede comparar zonas y realizar pruebas adecuadas cuando el acceso y la construcción lo permitan, y recomendar una investigación especializada si procede.',
      ],
    },
    {
      id: 'inspeccion-independiente',
      title: '¿Qué aporta una inspección independiente?',
      paragraphs: [
        'Dentro del alcance acordado, una inspección precompra puede revisar indicios interiores y exteriores accesibles, accionar los elementos cuando sea viable, estudiar el historial de reparaciones y evaluar la cubierta cercana. El informe puede separar hechos observados de causas posibles y recomendar la localización especializada de la filtración o una valoración de la reparación.',
        'Una sola visita o prueba con agua no confirma que todas las escotillas y portillos permanecerán secos en cualquier tiempo. El objetivo es identificar posibles problemas antes de comprar y comprender su alcance.',
      ],
    },
    {
      id: 'preguntas-frecuentes-escotillas',
      title: 'Preguntas frecuentes',
      paragraphs: [],
      subsections: [
        {
          id: 'sellador-reciente',
          title: '¿Un sellador reciente significa que se reparó la filtración?',
          paragraphs: [
            'No. Puede indicar un intento de reparación, pero aún hay que evaluar la vía de entrada y el trabajo realizado. Pregunte qué se desmontó, limpió, volvió a sellar o sustituyó.',
          ],
        },
        {
          id: 'cambiar-junta',
          title: '¿Se arregla una escotilla que filtra cambiando la junta?',
          paragraphs: [
            'A veces, si la junta de apertura es la vía real de entrada y el marco y la tapa están en buen estado. Una filtración por el sellado del marco, la unión del metacrilato o un herraje cercano requiere otra reparación. Utilice la junta adecuada para el modelo.',
          ],
        },
        {
          id: 'mancha-antigua',
          title: '¿Es grave una mancha de agua antigua?',
          paragraphs: [
            'No necesariamente. Puede ser histórica o indicar una filtración activa. El material cercano, las pruebas de reparación y lo que ocurre tras lluvia o lavado ayudan a decidir qué investigar.',
          ],
        },
        {
          id: 'prueba-manguera',
          title: '¿Debe probar el comprador cada escotilla con una manguera?',
          paragraphs: [
            'La prueba debe acordarse con el propietario y realizarse metódicamente por personal competente. Que un rociado rápido no provoque goteo no descarta filtraciones que solo aparecen con otra dirección, presión o duración del agua.',
          ],
        },
      ],
    },
  ],
  keyPoint: {
    id: 'punto-clave-escotillas',
    title: 'Punto clave del inspector',
    body: 'Siga el recorrido del agua en vez de culpar automáticamente a la escotilla más cercana. Compare junta, marco, metacrilato y cubierta con la marca interior y consulte el historial de reparaciones. El conjunto de indicios importa más que una mancha aislada.',
  },
  authorBio: {
    id: 'autor-escotillas',
    title: 'Sobre el autor',
    paragraphs: [
      'Aleksandrs Tolkacovs es inspector naval de yates y embarcaciones menores certificado por IIMS y capitán titulado. Cuenta con más de 20 años de experiencia en ingeniería, control de calidad y gestión, además de experiencia práctica en la operación de yates.',
    ],
  },
  sources: {
    id: 'fuentes-escotillas',
    title: 'Fuentes y lectura complementaria',
    links: [
      {
        label: 'Identificador de escotillas y portillos Lewmar',
        href: 'https://www.lewmar.com/acrylics',
      },
      {
        label: 'Manual de instalación y uso de portillos VETUS PA',
        href: 'https://vetus.com/wp-content/uploads/070210.01-r02-2020-10-Patrijspoorten-PA.pdf',
      },
    ],
  },
  relatedServices: [
    {
      title: 'Inspección precompra de yates',
      description:
        'Evaluación independiente de zonas accesibles, documentación y comprobaciones acordadas antes de comprar.',
      href: '/es/pre-purchase-survey',
    },
  ],
  relatedArticles: [
    {
      label: 'Humedad y zonas blandas en la cubierta',
      href: '/es/yacht-survey-tips/deck-moisture-soft-spots',
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
    body: 'All Yacht Service realiza inspecciones precompra independientes. El alcance acordado puede incluir escotillas, portillos, zonas próximas de la cubierta e indicios de entrada de agua que sean accesibles.',
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
    title: 'Escotillas y portillos: siga el recorrido del agua',
    description:
      'Las manchas, juntas gastadas y reparaciones pueden revelar posibles filtraciones. Descubra qué revisar y por qué importa localizar el origen.',
    href: '/es/yacht-survey-tips/yacht-hatch-portlight-leak-checks',
    category: 'Inspección precompra · Cubierta y entrada de agua',
    status: 'Publicado',
    publicationDate: '3 de noviembre de 2026',
    publicationDateTime: '2026-11-03',
    readingTime: '6 minutos',
    image: articleImage,
  } satisfies SurveyTipsArticle,
} as const satisfies SurveyTipArticlePageData;
