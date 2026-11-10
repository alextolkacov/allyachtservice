import type {
  SurveyTipArticlePageData,
  SurveyTipsArticle,
  SurveyTipsImage,
} from '../../yacht-survey-tips/types';

const articleImage = {
  src: '/images/yacht-survey-tips/plan-pre-purchase-yacht-sea-trial.png',
  alt: 'Infografía de All Yacht Service sobre la planificación de una prueba de mar, con el timón y los instrumentos de un yate y una lista de cinco comprobaciones previas',
  width: 1080,
  height: 1350,
} as const satisfies SurveyTipsImage;

export const spanishPlanPrePurchaseYachtSeaTrialArticle = {
  sourceUrl:
    'https://www.allyachtservice.com/yacht-survey-tips/plan-pre-purchase-yacht-sea-trial',
  title:
    'Planificar una prueba de mar antes de comprar un yate: acuerde las comprobaciones',
  seoTitle: 'Cómo planificar una prueba de mar antes de comprar un yate',
  description:
    'Una prueba de mar precompra útil se prepara antes de salir. Acuerde las comprobaciones, quién gobernará el yate, la ruta y los límites meteorológicos para interpretar las observaciones junto con la inspección y la varada.',
  metaDescription:
    'Prepare una prueba de mar precompra útil: acuerde el alcance, el patrón, la ruta, los límites meteorológicos y las observaciones antes de zarpar.',
  slug: 'plan-pre-purchase-yacht-sea-trial',
  pathname: '/es/yacht-survey-tips/plan-pre-purchase-yacht-sea-trial',
  category: 'Inspección precompra · Preparación de la prueba de mar',
  status: 'Publicado',
  publicationDate: '10 de noviembre de 2026',
  publicationDateTime: '2026-11-10',
  modifiedDateTime: '2026-11-10',
  readingTime: '6 minutos de lectura',
  timeRequired: 'PT6M',
  standfirst:
    'Una prueba de mar precompra útil comienza con un plan acordado: qué se observará, quién gobernará el yate, por dónde navegará y cuándo las condiciones podrían limitar la salida.',
  image: articleImage,
  imageCaption:
    'La infografía original ilustra una lista de preparación para la prueba de mar; la imagen del timón no demuestra el estado de un yate concreto.',
  socialImageAlt:
    'Infografía sobre la preparación de una prueba de mar con el puesto de gobierno de un yate y una lista de alcance, patrón, tiempo, seguridad y observación',
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
      label: 'Planificar una prueba de mar precompra',
      href: '/es/yacht-survey-tips/plan-pre-purchase-yacht-sea-trial',
    },
  ],
  introduction: {
    id: 'introduccion-prueba-mar',
    label: 'Introducción',
    paragraphs: [
      'Una prueba de mar precompra útil empieza antes de que el yate abandone el atraque. El comprador, el inspector, el vendedor o el bróker deben acordar qué podrá observarse, quién gobernará el yate, la ruta y duración previstas, y en qué condiciones se aplazará o acortará la salida. Así resulta más fácil interpretar los indicios y se evita descubrir demasiado tarde que un sistema importante no llegó a demostrarse.',
    ],
  },
  sections: [
    {
      id: 'finalidad-prueba-mar',
      title: '¿Para qué sirve una prueba de mar precompra?',
      paragraphs: [
        'La prueba permite al comprador y al inspector observar ciertos sistemas mientras el yate navega. Según la embarcación y el alcance acordado, pueden incluirse propulsión, gobierno, mandos, instrumentos, carga eléctrica, equipos de navegación y, en un velero, maniobras con las velas. Pueden aparecer ruidos, vibraciones, alarmas, respuestas deficientes o fugas que no se apreciaron durante la inspección estática.',
        'All Yacht Service describe la prueba de mar como una oportunidad para evaluar la propulsión, el gobierno, la instrumentación y determinados sistemas en condiciones reales de funcionamiento. La Royal Yachting Association también la considera una etapa diferenciada de la compra de una embarcación usada.',
        'Es una muestra del funcionamiento durante un día. No establece cómo responderá cada sistema en todas las condiciones ni sustituye la inspección a flote o la varada cuando forman parte de la evaluación acordada.',
      ],
    },
    {
      id: 'acuerdos-previos',
      title: '¿Qué conviene acordar antes del día de la prueba?',
      paragraphs: [
        'Confirme el alcance práctico con el inspector y con quien coordine el acceso al yate. Una breve lista por escrito resulta útil: qué motores y mandos se probarán, si se observará un arranque en frío, qué instrumentos y sistemas se mostrarán y si se izarán las velas en caso de tratarse de un velero.',
        'Acuerden también quiénes estarán a bordo, quién gobernará la embarcación, la ruta y el tiempo probables, y quién organizará el combustible, el acceso al puerto y los posibles gastos de operación. Debería gobernar el vendedor o un patrón competente designado. El comprador y el inspector pueden observar, preguntar y registrar resultados sin tomar el mando de una embarcación desconocida.',
        'Algunas comprobaciones requieren instrumentos especiales o un mecánico naval. Acuerde esa necesidad con antelación: una prueba de mar general no equivale a un diagnóstico mecánico completo.',
      ],
    },
    {
      id: 'tiempo-ruta-trafico',
      title: '¿Por qué importan el tiempo, la ruta y el tráfico?',
      paragraphs: [
        'El viento, el estado de la mar, la corriente, la visibilidad y el tráfico afectan tanto a la seguridad como a lo que puede comprobarse. Una salida en aguas tranquilas puede servir para observar la temperatura del motor y la respuesta del timón, pero decir poco sobre el comportamiento con mar formada. El viento fuerte o mucho tráfico pueden limitar las maniobras o el uso de las velas.',
        'Las orientaciones de la RYA sobre planificación de travesías recomiendan valorar peligros en la ruta, corrientes, meteorología, lugares de refugio, límites del barco y tripulación incluso antes de una salida corta. En España, AEMET publica predicciones marítimas costeras y de alta mar que pueden ayudar a preparar la parte meteorológica. La decisión operativa del día corresponde al patrón.',
        'Fijen una zona de navegación realista y un criterio para detener la prueba si las condiciones o una avería hacen imprudente continuar. Una salida aplazada o limitada debe constar como limitación, no tratarse sin más como una comprobación completa.',
      ],
    },
    {
      id: 'antes-de-zarpar',
      title: '¿Qué debe estar preparado antes de desatracar?',
      paragraphs: [
        'Quien gobierne debe confirmar que el yate está preparado y puede realizar la salida con seguridad. Esto incluye suficiente combustible, equipo de seguridad adecuado, comunicaciones, ruta planificada y acceso a los sistemas que se mostrarán. Cualquier avería conocida que afecte la seguridad de la navegación debe comunicarse y valorarse antes de zarpar.',
        'El inspector puede querer observar el compartimento del motor y la sentina antes del arranque y compararlos tras el recorrido para detectar nuevas fugas, desplazamiento de fluidos o calor anormal. Si se acordó observar un arranque en frío, no debe calentarse antes el motor sin dejar constancia. No convierta la prueba en una reparación improvisada en el pantalán.',
      ],
    },
    {
      id: 'observaciones-utiles',
      title: '¿Qué observaciones hacen útil la prueba?',
      paragraphs: [
        'La secuencia exacta depende del yate, del tiempo y del patrón, pero una prueba planificada puede permitir observar:',
      ],
      items: [
        'Arranque del motor, estabilidad al ralentí e indicaciones de los instrumentos',
        'Engranado avante y atrás y maniobras a baja velocidad',
        'Respuesta del gobierno en ambas direcciones',
        'Comportamiento del motor a regímenes constantes adecuados',
        'Cambios en ruido, vibración, humo o temperatura',
        'Alarmas, indicadores y equipos de navegación',
        'Carga eléctrica y otros sistemas seleccionados a bordo',
        'Izado y manejo de velas, si se acordó y las condiciones lo permiten',
      ],
      closingParagraphs: [
        'Anote cuándo aparece una anomalía: la velocidad o régimen aproximados, el sentido del giro, la carga, el estado de la mar y la duración pueden ayudar a un especialista a investigarla después. Un síntoma aislado no determina su causa. Una vibración, por ejemplo, puede estar relacionada con la hélice, el eje, los soportes del motor, la alineación u otro componente.',
      ],
    },
    {
      id: 'duracion',
      title: '¿Cuánto debe durar una prueba de mar?',
      paragraphs: [
        'No hay una duración universal útil para todos los yates. El plan debe dejar tiempo suficiente para las observaciones acordadas y para que la maquinaria alcance su funcionamiento normal, sin salir de los límites que impongan la meteorología y el tráfico. Puede que ese día solo sea posible una vuelta breve por el puerto; su alcance limitado debe quedar claro en el informe.',
        'No se trata de someter al yate a condiciones extremas. El patrón debe operar dentro de los límites de la embarcación e interrumpir cualquier prueba que genere un riesgo evitable. Si las condiciones no permiten evaluar un sistema, el comprador puede valorar otra demostración o una comprobación especializada.',
      ],
    },
    {
      id: 'al-regresar',
      title: '¿Qué debe registrarse al regresar?',
      paragraphs: [
        'Compare el estado de los espacios de maquinaria y las sentinas accesibles antes y después de la prueba. Anote fluidos nuevos, olores, calor, alarmas, vibraciones o problemas de mando. Registre el tiempo, el estado de la mar, la ruta, la duración aproximada y cuáles de las comprobaciones acordadas se completaron.',
        'Pida al inspector que distinga entre observaciones y explicaciones. «La vibración aumentó a un régimen concreto» es una observación; un eje doblado es solo una posible explicación y necesitaría pruebas adicionales. Mantenga una lista de las comprobaciones no realizadas y del motivo.',
      ],
    },
    {
      id: 'inspeccion-completa',
      title: '¿Cómo encaja la prueba de mar en la inspección completa?',
      paragraphs: [
        'La inspección estática, la varada y la prueba de mar responden a preguntas distintas. A flote se puede acceder a estructura interior y sistemas de a bordo; la varada deja a la vista el casco bajo la línea de flotación y los apéndices; la prueba muestra cómo funcionan ciertos sistemas en navegación. All Yacht Service recomienda considerar, cuando sea posible, el acceso a flote y en seco para una evaluación precompra amplia.',
        'Un alcance claro evita suponer que una prueba satisfactoria demuestra la ausencia de defectos ocultos. El informe debe indicar qué se observó, qué quedó inaccesible y qué merece una investigación adicional antes de comprar.',
      ],
    },
    {
      id: 'preguntas-frecuentes',
      title: 'Preguntas frecuentes',
      paragraphs: [],
      subsections: [
        {
          id: 'quien-gobierna',
          title:
            '¿Debe el comprador gobernar el yate durante la prueba de mar?',
          paragraphs: [
            'Normalmente debería hacerlo el vendedor o un patrón competente designado. El comprador y el inspector pueden observar y comentar los resultados. Cualquier cambio de operador debe acordarse antes de la salida.',
          ],
        },
        {
          id: 'sustituye-varada',
          title:
            '¿Puede una prueba de mar sustituir una inspección con varada?',
          paragraphs: [
            'No. La prueba no permite ver el casco sumergido, la quilla, la hélice, el eje ni otros componentes bajo el agua como lo hace una inspección con el yate en seco. Ambas aportan información distinta.',
          ],
        },
        {
          id: 'mal-tiempo',
          title: '¿Qué ocurre si el tiempo no es adecuado?',
          paragraphs: [
            'El patrón debe decidir si es seguro zarpar. Si las condiciones impiden una comprobación acordada, anote la limitación y considere aplazar la salida o programar otra demostración.',
          ],
        },
        {
          id: 'fiabilidad',
          title: '¿Una prueba sin incidencias demuestra que el yate es fiable?',
          paragraphs: [
            'No. Solo muestra cómo se comportaron los sistemas observados durante esa prueba. Pueden existir defectos ocultos, fallos intermitentes o averías futuras.',
          ],
        },
      ],
    },
  ],
  keyPoint: {
    id: 'punto-clave-prueba-mar',
    title: 'Punto clave del inspector',
    body: 'Acuerde el plan de la prueba de mar antes de zarpar. Sepa quién gobernará, qué se demostrará, qué condiciones limitarían la salida y cómo se registrarán las comprobaciones pendientes. Las observaciones resultan más útiles cuando pueden compararse con la inspección estática, la varada y los registros de mantenimiento.',
  },
  authorBio: {
    id: 'autor-prueba-mar',
    title: 'Sobre el autor',
    paragraphs: [
      'Aleksandrs Tolkacovs es inspector naval de yates y embarcaciones menores certificado por IIMS y capitán titulado. Cuenta con más de 20 años de experiencia en ingeniería, control de calidad y gestión, además de experiencia práctica en la operación de yates.',
    ],
  },
  sources: {
    id: 'fuentes-prueba-mar',
    title: 'Fuentes y lectura complementaria',
    links: [
      {
        label: 'RYA — Guía para comprar una embarcación',
        href: 'https://www.rya.org.uk/members-legal-advice/buying-owning/boat-buying-made-easy/',
      },
      {
        label: 'RYA — Planificación de la travesía',
        href: 'https://www.rya.org.uk/water-safety/passage-planning-and-navigation/passage-planning/',
      },
      {
        label: 'AEMET — Predicción marítima',
        href: 'https://www.aemet.es/en/eltiempo/prediccion/maritima?area=and2&opc3=0',
      },
    ],
  },
  relatedServices: [
    {
      title: 'Inspección precompra de yates',
      description:
        'Evaluación independiente antes de comprar, con una prueba de mar de alcance acordado cuando resulte viable.',
      href: '/es/pre-purchase-survey',
    },
  ],
  relatedArticles: [
    {
      label: 'Compruebe el gobierno del yate antes de confiar en él',
      href: '/es/yacht-survey-tips/check-yacht-steering',
    },
    {
      label: 'Inspección de la hélice y el eje',
      href: '/es/yacht-survey-tips/propeller-shaft-inspection',
    },
    {
      label: 'Todos los consejos para la inspección de yates',
      href: '/es/yacht-survey-tips',
    },
  ],
  finalCta: {
    heading: '¿Está pensando en comprar un yate en España o el Mediterráneo?',
    body: 'All Yacht Service realiza inspecciones precompra independientes. La prueba de mar puede incluirse en el alcance acordado cuando el acceso, la tripulación y las condiciones lo permitan.',
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
    title: 'Planificar una prueba de mar precompra',
    description:
      'Acuerde alcance, patrón, ruta y límites meteorológicos antes de salir para obtener observaciones útiles y conocer las limitaciones de la prueba.',
    href: '/es/yacht-survey-tips/plan-pre-purchase-yacht-sea-trial',
    category: 'Inspección precompra · Preparación de la prueba de mar',
    status: 'Publicado',
    publicationDate: '10 de noviembre de 2026',
    publicationDateTime: '2026-11-10',
    readingTime: '6 minutos',
    image: articleImage,
  } satisfies SurveyTipsArticle,
} as const satisfies SurveyTipArticlePageData;
