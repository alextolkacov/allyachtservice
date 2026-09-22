import type {
  SurveyTipArticlePageData,
  SurveyTipsArticle,
  SurveyTipsImage,
} from '../../yacht-survey-tips/types';

const articleImage = {
  src: '/images/yacht-survey-tips/yacht-engine-mounts.png',
  alt: 'Infografía de All Yacht Service sobre señales de deterioro en los soportes del motor y una revisión visual segura con el motor apagado',
  width: 1092,
  height: 1440,
} as const satisfies SurveyTipsImage;

export const spanishYachtEngineMountsArticle = {
  sourceUrl:
    'https://www.allyachtservice.com/yacht-survey-tips/yacht-engine-mounts',
  title:
    'Soportes del motor de un yate: señales que conviene revisar antes de comprar',
  seoTitle: 'Soportes del motor de un yate: qué revisar | All Yacht Service',
  description:
    'Los soportes sostienen el motor y ayudan a reducir la vibración transmitida. Conozca qué señales visibles pueden justificar una revisión más detallada antes de comprar un yate y los límites de una comprobación visual.',
  metaDescription:
    'Aprenda a reconocer señales visibles de deterioro en los soportes del motor, vibraciones y fijaciones dañadas antes de comprar un yate.',
  slug: 'yacht-engine-mounts',
  pathname: '/es/yacht-survey-tips/yacht-engine-mounts',
  category: 'Comprobaciones precompra · Maquinaria y propulsión',
  status: 'Publicado',
  publicationDate: '22 de septiembre de 2026',
  publicationDateTime: '2026-09-22',
  modifiedDateTime: '2026-09-22',
  readingTime: '5 minutos de lectura',
  timeRequired: 'PT5M',
  standfirst:
    'Los soportes del motor son piezas pequeñas de la instalación mecánica, pero su estado puede importar más allá de la comodidad a bordo. Esto es lo que un comprador puede observar sin intervenir y cuándo conviene acudir a un especialista.',
  image: articleImage,
  imageCaption:
    'La infografía original muestra señales visibles y una revisión con el motor apagado. Sirve para orientar la observación, no para diagnosticar esta ni ninguna otra instalación.',
  socialImageAlt:
    'Guía de All Yacht Service sobre las señales de deterioro en los soportes del motor de un yate antes de comprarlo',
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
      label: 'Soportes del motor',
      href: '/es/yacht-survey-tips/yacht-engine-mounts',
    },
  ],
  introduction: {
    id: 'introduccion-soportes-motor',
    label: 'Introducción',
    paragraphs: [
      'Es fácil pasar por alto los soportes del motor durante la visita a un yate. Sostienen el motor, reducen la vibración transmitida a la embarcación y ayudan a mantener la instalación en la posición prevista. Con el tiempo, el estado de los elementos de goma puede cambiar, especialmente si se contaminan con aceite o combustible.',
      'Una vibración, un soporte agrietado o una instalación que parece desnivelada son motivos para hacer preguntas, no pruebas de un defecto concreto de alineación o de la reductora. Las observaciones siguientes ayudan a decidir cuándo merece la pena investigar más.',
    ],
  },
  sections: [
    {
      id: 'funcion-soportes-motor',
      title: '¿Para qué sirven los soportes del motor?',
      paragraphs: [
        'Los soportes marinos sostienen el motor y ayudan a aislar sus vibraciones del casco. También contribuyen a mantenerlo en la posición prevista respecto a la reductora y el eje de la hélice. La goma puede endurecerse, agrietarse, comprimirse o deteriorarse; la contaminación por aceite o combustible también puede afectar a su estado.',
        'Que un soporte parezca estar bien no demuestra que el motor esté correctamente alineado. Del mismo modo, un problema visible en un soporte no determina el estado de todo el sistema de propulsión.',
      ],
    },
    {
      id: 'senales-alerta-soportes-motor',
      title: 'Señales de alerta que conviene observar',
      paragraphs: [
        'Compare los soportes accesibles y anote tanto su estado físico como cualquier síntoma comunicado u observado durante una demostración acordada:',
      ],
      items: [
        'Vibración excesiva o que va en aumento',
        'Goma agrietada, comprimida, deformada o deteriorada',
        'Contaminación por aceite o combustible alrededor de los soportes',
        'Fijaciones flojas o dañadas',
        'Motor que parece estar apoyado de forma desigual',
        'Vibraciones o ruidos inusuales al engranar la marcha',
      ],
      closingParagraphs: [
        'Estas señales deben valorarse en contexto. La apariencia por sí sola no permite establecer el estado mecánico completo de los soportes ni la causa de una vibración.',
      ],
    },
    {
      id: 'por-que-importa-deterioro',
      title: 'Por qué el deterioro puede importar más allá de la comodidad',
      paragraphs: [
        'Un soporte deteriorado puede permitir movimientos no deseados o contribuir a que la instalación deje de estar en la posición prevista. Según el montaje, el movimiento o una alineación incorrecta pueden añadir carga al eje, el acoplamiento, la reductora, los rodamientos o los elementos de la línea de ejes en popa.',
        'Esto justifica investigar, pero no significa que esas piezas estén dañadas. Para conocer la causa y el alcance de un problema hace falta una evaluación adecuada.',
      ],
    },
    {
      id: 'revision-visual-motor-apagado',
      title: 'Una revisión visual segura con el motor apagado',
      paragraphs: [
        'Con el motor apagado, examine visualmente solo los soportes a los que pueda acceder con seguridad. Compárelos entre sí y busque grietas, deformación, compresión, contaminación, fijaciones visiblemente flojas o dañadas y diferencias evidentes en cómo sostienen el motor.',
        'Tome notas o fotografías si está permitido y pregunte por el historial de mantenimiento. No toque maquinaria en movimiento ni realice esta revisión con el motor en marcha.',
      ],
    },
    {
      id: 'no-ajustar-soportes',
      title: 'Qué no debe ajustar por su cuenta',
      paragraphs: [
        'Durante una visita, no afloje ni apriete los soportes, no cambie su altura, no mueva el motor, no desconecte el acoplamiento ni intente alterar la alineación del eje. No intente ajustar la alineación ni apretar los soportes sin los conocimientos técnicos y la autorización adecuados.',
        'Un ajuste aparentemente sencillo puede modificar la instalación y dificultar la evaluación del problema original. Documente lo observado y organice una revisión profesional adecuada.',
      ],
    },
    {
      id: 'alcance-inspeccion-precompra',
      title: 'Qué puede evaluar una inspección precompra',
      paragraphs: [
        'Dentro del alcance acordado y siempre que haya acceso, una inspección precompra puede documentar el estado visible de la instalación del motor, los soportes accesibles y los elementos de propulsión cercanos. El inspector puede considerar estas observaciones junto con el historial disponible y otras señales visibles, e indicar cuándo conviene investigar más.',
        'Una inspección general no incluye automáticamente diagnósticos internos del motor o la reductora, desmontajes, mediciones precisas de alineación del eje, análisis de vibraciones o aceite ni pruebas con equipos de diagnóstico del fabricante. Esas tareas requieren un alcance acordado por separado o al especialista correspondiente.',
      ],
    },
    {
      id: 'cuando-consultar-mecanico-naval',
      title: 'Cuándo puede ser necesaria una revisión mecánica adicional',
      paragraphs: [
        'Si los soportes parecen deteriorados, contaminados o desnivelados, las fijaciones muestran daños, o se comunican vibraciones o ruidos al engranar la marcha, solicite una explicación y los registros de mantenimiento pertinentes. Un mecánico naval cualificado u otro especialista adecuado puede tener que examinar la instalación y determinar si hacen falta pruebas o ajustes.',
        'No considere un soporte limpio como prueba de una alineación correcta ni deduzca daños en otros componentes solo por su aspecto. El siguiente paso debe responder a los síntomas, al acceso disponible y al alcance de la inspección acordada.',
      ],
    },
  ],
  keyPoint: {
    id: 'conclusion-soportes-motor',
    title: 'Conclusión del inspector naval',
    body: 'El estado de los soportes del motor es un indicio útil, no un diagnóstico aislado. Compare los soportes accesibles con el motor apagado, anote las diferencias y los síntomas, y solicite una evaluación mecánica cualificada cuando los indicios lo justifiquen.',
  },
  relatedServices: [
    {
      title: 'Inspección precompra',
      description:
        'Evaluación independiente de estructuras, sistemas y maquinaria accesibles antes de comprar un yate, dentro del alcance acordado.',
      href: '/es/pre-purchase-survey',
    },
    {
      title: 'Inspección de condición para seguro',
      description:
        'Evaluación independiente del estado e informe para la finalidad indicada por la aseguradora y el alcance acordado.',
      href: '/es/insurance-survey',
    },
  ],
  relatedArticles: [
    {
      label: 'Revise la sentina antes de confiar en el barco',
      href: '/es/yacht-survey-tips/check-yacht-bilge',
    },
    {
      label: 'Corrosión en los sistemas eléctricos del yate',
      href: '/es/yacht-survey-tips/yacht-electrical-corrosion',
    },
    {
      label: 'Todos los consejos sobre inspección de yates',
      href: '/es/yacht-survey-tips',
    },
  ],
  finalCta: {
    heading: '¿Está comprando un yate usado?',
    body: 'Una inspección precompra independiente puede documentar las observaciones sobre soportes del motor y propulsión accesibles dentro del alcance acordado, explicar las limitaciones y recomendar una revisión especializada cuando proceda.',
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
    title: 'Soportes del motor: piezas pequeñas, consecuencias costosas',
    description:
      'Conozca las señales visibles en los soportes del motor que un comprador puede revisar con seguridad y cuándo conviene investigar más.',
    href: '/es/yacht-survey-tips/yacht-engine-mounts',
    category: 'Comprobaciones precompra · Maquinaria y propulsión',
    status: 'Publicado',
    publicationDate: '22 de septiembre de 2026',
    publicationDateTime: '2026-09-22',
    readingTime: '5 minutos',
    image: articleImage,
  } satisfies SurveyTipsArticle,
} as const satisfies SurveyTipArticlePageData;
