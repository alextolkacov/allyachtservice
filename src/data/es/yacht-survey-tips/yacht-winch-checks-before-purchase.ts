import type {
  SurveyTipArticlePageData,
  SurveyTipsArticle,
  SurveyTipsImage,
} from '../../yacht-survey-tips/types';

const articleImage = {
  src: '/images/yacht-survey-tips/yacht-winch-checks-before-purchase.png',
  alt: 'Infografía de All Yacht Service con una fotografía de un winche de velero y cuatro puntos para su inspección',
  width: 1080,
  height: 1350,
} as const satisfies SurveyTipsImage;

export const spanishYachtWinchChecksBeforePurchaseArticle = {
  sourceUrl:
    'https://www.allyachtservice.com/yacht-survey-tips/yacht-winch-checks-before-purchase',
  title: 'Revisar los winches antes de comprar un yate: más allá del tambor',
  seoTitle: 'Winches de un yate usado: funcionamiento, trinquetes y fijación',
  description:
    'Un winche que gira a mano puede necesitar mantenimiento. Sepa qué pedir que se inspeccione y demuestre antes de comprar un velero.',
  metaDescription:
    'Un winche que gira a mano puede necesitar mantenimiento. Sepa qué pedir que se inspeccione y demuestre antes de comprar un velero.',
  slug: 'yacht-winch-checks-before-purchase',
  pathname: '/es/yacht-survey-tips/yacht-winch-checks-before-purchase',
  category: 'Inspección precompra · Herrajes de cubierta',
  status: 'Publicado',
  publicationDate: '24 de noviembre de 2026',
  publicationDateTime: '2026-11-24',
  modifiedDateTime: '2026-11-24',
  readingTime: '5 minutos de lectura',
  timeRequired: 'PT5M',
  standfirst:
    'Un winche de aspecto impecable también merece una revisión. Girarlo a mano no confirma el estado de sus piezas internas ni cómo responderá bajo carga.',
  image: articleImage,
  imageCaption:
    'Gráfico con una fotografía recortada de Clément Proust / Pexels. Es una imagen ilustrativa; no muestra un defecto detectado por All Yacht Service. La fuente y la licencia figuran más abajo.',
  socialImageAlt:
    'Infografía sobre un winche de velero y las comprobaciones del engranaje, los trinquetes, el autofrenante y la fijación a cubierta',
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
      label: 'Revisar los winches antes de comprar',
      href: '/es/yacht-survey-tips/yacht-winch-checks-before-purchase',
    },
  ],
  introduction: {
    id: 'introduccion-winches',
    label: 'Introducción',
    paragraphs: [
      'Un winche de maniobra de velas puede verse limpio y girar libremente en puerto aunque se desconozcan su historial de mantenimiento, sus piezas internas y su fijación. En una visita previa a la compra, girarlo brevemente a mano es solo una primera observación, no una prueba completa.',
      'Pregunte al vendedor o al bróker qué winches se pueden demostrar y si hay registros de mantenimiento. Conviene revisar cada unidad relevante, también las eléctricas si existen. Acuerden previamente el acceso y las pruebas para que una persona competente controle los cabos y se mantenga la seguridad a bordo.',
    ],
  },
  sections: [
    {
      id: 'comprobacion-sin-carga',
      title: '¿Qué revela una comprobación sin carga?',
      paragraphs: [
        'Con el yate asegurado y el cabo controlado, una persona competente puede demostrar el funcionamiento manual normal. Observe si el tambor gira suavemente en el sentido previsto, si el trinquete suena y actúa de forma regular y si la manivela encaja y engrana bien. La dureza, los chirridos, los saltos, la holgura excesiva o una manivela que no asienta bien justifican investigar.',
        'Una comprobación sin carga tiene límites. No establece el estado de todos los trinquetes, muelles, cojinetes o engranajes, ni muestra cómo responderá el winche bajo todas las cargas de navegación. El manual de Lewmar para winches eléctricos e hidráulicos describe el desmontaje, la limpieza y la revisión interna como tareas de mantenimiento, distintas de una visita en puerto.',
      ],
    },
    {
      id: 'trinquetes-carraca',
      title: '¿Por qué importan los trinquetes y la carraca?',
      paragraphs: [
        'Los trinquetes y sus muelles ayudan a retener y transferir la carga mediante el mecanismo de carraca. Si el engrane es dudoso o el tambor patina inesperadamente, detenga la demostración y pida una evaluación cualificada. No aplique una carga sin control para intentar reproducir el problema.',
        'Las instrucciones publicadas por Lewmar indican comprobar las piezas internas y lubricar ligeramente los trinquetes con aceite, evitando la grasa sobre ellos. Los procedimientos varían según la marca y el modelo: siga las instrucciones del winche instalado. Desmontarlo y mantenerlo no forman parte implícita de una visita ni de una inspección ordinaria.',
      ],
    },
    {
      id: 'autofrenante-cabo',
      title: '¿Qué revisar en el autofrenante y el cabo?',
      paragraphs: [
        'Si hay un mecanismo autofrenante, examine las mordazas visibles y el cabo que pasa por ellas. Observe piezas agrietadas o dañadas, desgaste intenso, agarre deficiente y rozaduras en la entrada o salida del winche. Un cabo de diámetro incorrecto o en mal estado puede influir en la demostración; no atribuya automáticamente al winche todos los problemas de manejo.',
        'Pregunte si el winche ha recibido mantenimiento y si se han sustituido piezas del autofrenante o cabos. Los registros aportan contexto, pero no confirman el estado actual.',
      ],
    },
    {
      id: 'base-cubierta',
      title: '¿Por qué examinar la base y la cubierta próxima?',
      paragraphs: [
        'Busque movimiento visible en la base, sellador agrietado, manchas, fijaciones dañadas o cambios en la superficie de cubierta. Si se puede acceder por debajo, el inspector podrá examinar la fijación y posibles indicios de entrada de agua. Una marca en la base es una pista que requiere contexto; por sí sola no demuestra que el winche esté flojo o que la estructura esté dañada.',
        'La cubierta de apoyo importa porque transmite las cargas de los cabos a la estructura. Una inspección precompra puede describir lo accesible y recomendar una revisión más específica cuando proceda. No afloje fijaciones ni retire el winche sin autorización y un plan de montaje y sellado correctos.',
      ],
    },
    {
      id: 'winches-electricos',
      title: '¿Y los winches eléctricos?',
      paragraphs: [
        'Un winche eléctrico añade motor, mandos y protección eléctrica al mecanismo. Pida una demostración normal a alguien familiarizado con el equipo. Observe la respuesta de los mandos y cualquier ruido o movimiento anómalo, manteniendo a personas y cabos sueltos lejos del mecanismo. Un funcionamiento breve solo muestra cómo respondió el sistema en esa prueba.',
        'Si no se puede acceder a la instalación eléctrica, deje constancia de esa limitación. Un especialista puede ser necesario para valorar fallos sospechados del motor, el cableado o la protección. Nunca utilice el accionamiento eléctrico para forzar un winche bloqueado o que patina.',
      ],
    },
    {
      id: 'sin-prueba',
      title: 'Si no se puede probar un winche',
      paragraphs: [
        'Anote exactamente qué se observó y qué no: qué winche, si giró a mano, si se utilizó un cabo y si se demostró el accionamiento eléctrico. Pida facturas de mantenimiento o manuales y valore organizar otra demostración controlada o una revisión especializada antes de comprar. No dé por bueno ni por defectuoso un winche que no se probó.',
      ],
    },
    {
      id: 'preguntas-winches',
      title: 'Preguntas frecuentes',
      paragraphs: [],
      subsections: [
        {
          id: 'gira-libre',
          title:
            '¿Que un winche gire libremente significa que está en buen estado?',
          paragraphs: [
            'No. Es solo una observación. Las piezas internas y su respuesta bajo carga pueden requerir mantenimiento adecuado o una prueba controlada.',
          ],
        },
        {
          id: 'desmontar-visita',
          title: '¿Debe el comprador desmontar un winche durante la visita?',
          paragraphs: [
            'No. Debe acordarse con el propietario y realizarlo una persona competente, siguiendo las instrucciones del modelo y previendo un montaje correcto.',
          ],
        },
        {
          id: 'carraca-patina',
          title: '¿Qué hacer si la carraca parece patinar?',
          paragraphs: [
            'Detenga la demostración y solicite una evaluación cualificada. No añada carga para reproducir el comportamiento.',
          ],
        },
        {
          id: 'alcance-electrico',
          title: '¿Puede una inspección incluir winches eléctricos?',
          paragraphs: [
            'Sí, dentro del alcance acordado, con acceso seguro y un operador competente. El informe debe indicar qué se demostró y qué quedó inaccesible.',
          ],
        },
      ],
    },
  ],
  keyPoint: {
    id: 'conclusion-winches',
    title: 'Punto clave del inspector',
    body: 'Un tambor limpio es solo la parte visible del winche. Revise el funcionamiento, el autofrenante, el cabo y la fijación; después, use el historial de mantenimiento y las dudas encontradas para decidir si hace falta una revisión adicional. La inspección independiente debe dejar claros los límites de acceso y prueba.',
  },
  authorBio: {
    id: 'autor-winches',
    title: 'Sobre el autor',
    paragraphs: [
      'Aleksandrs Tolkacovs es inspector naval de yates y embarcaciones menores certificado por IIMS y capitán titulado. Cuenta con más de 20 años de experiencia en ingeniería, aseguramiento de la calidad y gestión, además de experiencia práctica en la operación de yates.',
    ],
  },
  sources: {
    id: 'fuentes-winches',
    title: 'Fuentes y lecturas complementarias',
    links: [
      {
        label:
          'Lewmar — Manual de instalación, uso y mantenimiento de winches Ocean y EVO eléctricos/hidráulicos (B2303, edición 14)',
        href: 'https://www.lewmar.com/mst_attachment/attachment/click/attachment_id/64/',
      },
      {
        label:
          'Lewmar — Información del winche EVO autofrenante y su mantenimiento',
        href: 'https://www.lewmar.com/evo-self-tailing-winch',
      },
      {
        label: 'Clément Proust / Pexels — Fotografía original',
        href: 'https://www.pexels.com/photo/boat-rope-in-close-up-shot-14578355/',
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
        'Evaluación independiente antes de comprar, con acceso a los winches y una demostración segura si se acuerdan y son viables.',
      href: '/es/pre-purchase-survey',
    },
  ],
  relatedArticles: [
    {
      label: 'Señales de alerta en el aparejo fijo',
      href: '/es/yacht-survey-tips/standing-rigging-warning-signs',
    },
    {
      label: 'Todos los consejos para la inspección de yates',
      href: '/es/yacht-survey-tips',
    },
  ],
  finalCta: {
    heading: '¿Está pensando en comprar un yate en España o el Mediterráneo?',
    body: 'All Yacht Service realiza inspecciones precompra independientes. El acceso al equipo de maniobra de velas y una demostración segura pueden incluirse en el alcance acordado.',
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
    title: 'Winches del yate: más allá del tambor',
    description:
      'Girarlo a mano no revela todos los problemas. Revise mecanismo, cabo, autofrenante y fijación antes de comprar.',
    href: '/es/yacht-survey-tips/yacht-winch-checks-before-purchase',
    category: 'Inspección precompra · Herrajes de cubierta',
    status: 'Publicado',
    publicationDate: '24 de noviembre de 2026',
    publicationDateTime: '2026-11-24',
    readingTime: '5 minutos',
    image: articleImage,
  } satisfies SurveyTipsArticle,
} as const satisfies SurveyTipArticlePageData;
