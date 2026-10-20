import type {
  SurveyTipArticlePageData,
  SurveyTipsArticle,
  SurveyTipsImage,
} from '../../yacht-survey-tips/types';

const articleImage = {
  src: '/images/yacht-survey-tips/propeller-shaft-inspection.png',
  alt: 'Infografía de All Yacht Service con una fotografía real de una hélice de bronce durante la varada de un yate',
  width: 1080,
  height: 1350,
} as const satisfies SurveyTipsImage;

export const spanishPropellerShaftInspectionArticle = {
  sourceUrl:
    'https://www.allyachtservice.com/yacht-survey-tips/propeller-shaft-inspection',
  title: 'Hélice y eje de un yate: qué revisar antes de comprar',
  seoTitle: 'Inspección de la hélice y el eje antes de comprar un yate',
  description:
    'Qué comprobar en la hélice, el eje, el cojinete y el sello del eje durante la varada y la prueba de mar antes de comprar un yate usado.',
  metaDescription:
    'Aprenda qué revisar en la hélice, el eje, el cojinete y el sello del eje durante la varada y la prueba de mar antes de comprar un yate usado.',
  slug: 'propeller-shaft-inspection',
  pathname: '/es/yacht-survey-tips/propeller-shaft-inspection',
  category: 'Inspección precompra · Equipo subacuático',
  status: 'Publicado',
  publicationDate: '20 de octubre de 2026',
  publicationDateTime: '2026-10-20',
  modifiedDateTime: '2026-10-20',
  readingTime: '6 minutos de lectura',
  timeRequired: 'PT6M',
  standfirst:
    'Una revisión útil de la hélice y el eje combina el examen del equipo subacuático durante la varada con la instalación interior accesible, los registros de mantenimiento y el comportamiento durante una prueba de mar realizada adecuadamente.',
  image: articleImage,
  imageCaption:
    'La infografía original incluye una fotografía real de la hélice y una lista de comprobaciones visuales. No determina el estado de ningún sistema de propulsión concreto.',
  socialImageAlt:
    'Infografía de All Yacht Service sobre daños en las palas, desgaste del eje, holgura del cojinete, sellos y vibraciones',
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
      label: 'Inspección de la hélice y el eje',
      href: '/es/yacht-survey-tips/propeller-shaft-inspection',
    },
  ],
  introduction: {
    id: 'introduccion-helice-eje',
    label: 'Introducción',
    paragraphs: [
      'Un pequeño daño en una pala, un sedal enredado, corrosión, desgaste del cojinete o una anomalía en el sello del eje pueden pasar desapercibidos si se examina cada elemento por separado. Conviene comparar los indicios visibles con los documentos y con el comportamiento del yate en navegación, sin atribuir una causa solo por su apariencia.',
    ],
  },
  sections: [
    {
      id: 'inspeccion-fuera-del-agua',
      title: '¿Por qué inspeccionar la hélice y el eje fuera del agua?',
      paragraphs: [
        'La hélice, el eje, el cojinete exterior y los ánodos subacuáticos no pueden evaluarse adecuadamente mientras están ocultos bajo la línea de flotación. La varada permite observar directamente la forma de las palas, las superficies expuestas del eje, la zona del cojinete y los elementos cercanos del casco.',
        'Una pala mellada junto con antecedentes de vibraciones ofrece un contexto distinto al de una marca superficial aislada en un sistema que funciona sin anomalías. Se trata de identificar indicios que requieran más investigación, no de diagnosticar todas las causas posibles a simple vista.',
      ],
    },
    {
      id: 'danos-visibles-helice',
      title: '¿Qué daños visibles en la hélice debe buscar el comprador?',
      paragraphs: [
        'Observe todas las palas desde varios ángulos y compárelas entre sí. Fíjese en:',
      ],
      items: [
        'Bordes mellados, golpeados, agrietados o deformados; una pala con paso o ángulo aparentemente distinto',
        'Picaduras, erosión, daños por cavitación, corrosión o rugosidad extensa',
        'Pintura o revestimiento protector dañados y piezas flojas en hélices plegables u orientables',
        'Daños en el núcleo, fijaciones o zona de la chaveta e indicios de esmerilado, soldadura o reparaciones anteriores',
      ],
      closingParagraphs: [
        'La geometría y el equilibrado de la hélice importan. Volvo Penta explica que un equilibrado preciso ayuda a reducir las vibraciones y el desgaste de la transmisión, y que montar incorrectamente las palas de una hélice plegable puede causar desequilibrio. Por eso conviene revisar la simetría, el movimiento correcto de las palas y el historial de reparaciones.',
        'Una pequeña marca no significa automáticamente que la hélice sea inutilizable. Una pala aparentemente doblada, agrietada, muy erosionada o reparada puede requerir medición, pruebas y equilibrado por un especialista.',
      ],
    },
    {
      id: 'sedal-alrededor-del-eje',
      title: '¿Por qué preocupa un sedal enredado en el eje?',
      paragraphs: [
        'Sedales, redes y otros residuos pueden enrollarse con fuerza alrededor del eje, detrás del núcleo de la hélice. Un hilo fino puede resultar difícil de detectar hasta limpiar la zona. El material enredado puede dañar el sello del eje o causar calor y desgaste en piezas próximas. Examine la zona detrás del núcleo, el eje expuesto y el sello interior accesible en busca de fugas o daños relacionados.',
        'No tire del material ni lo corte, y no haga girar la maquinaria, sin permiso del propietario y un procedimiento de aislamiento seguro. Al retirarlo podría entrar agua, quedar expuesto material cortante o alterarse un indicio que debería examinar un técnico.',
      ],
    },
    {
      id: 'eje-y-cojinete-exterior',
      title: '¿Cómo se revisan el eje y el cojinete exterior?',
      paragraphs: [
        'Examine el eje visible en busca de rayaduras, picaduras, corrosión, marcas de impacto y pulido inusual, sobre todo cerca del cojinete y del sello. El desgaste localizado puede indicar contacto con otra superficie.',
        'Con el yate apoyado de forma segura y la maquinaria aislada, un inspector formado puede comprobar si existe movimiento en el cojinete exterior accesible. La holgura debe interpretarse según la instalación, el diámetro del eje y las indicaciones del fabricante. No existe un valor universal útil para todos los yates.',
        'El desgaste visible no demuestra si el eje está recto. La excentricidad, el estado del acoplamiento y la alineación del motor pueden requerir mediciones por un técnico equipado para ello. Una anomalía en la hélice debe considerarse junto con la instalación interior.',
      ],
    },
    {
      id: 'sello-interior-del-eje',
      title: '¿Qué conviene revisar alrededor del sello interior del eje?',
      paragraphs: [
        'Inspeccione el sello accesible, la zona de la bocina, las conexiones de manguera, las abrazaderas y la sentina inferior. Busque goteos activos, depósitos de sal, marcas de agua, corrosión, goma dañada o señales de ajustes repetidos.',
        'Los requisitos dependen del fabricante y del modelo. Las instrucciones del sello PSS de PYI, por ejemplo, indican revisar el fuelle y explican que su deterioro, la contaminación o una compresión insuficiente pueden provocar fugas. Identifique el equipo instalado y consulte su manual: una sentina seca en un momento dado no demuestra que el sello permanezca seco navegando.',
      ],
    },
    {
      id: 'anodos-y-corrosion',
      title: '¿Qué revelan los ánodos y los patrones de corrosión?',
      paragraphs: [
        'Compruebe si los ánodos del eje, la hélice o la transmisión están presentes, bien sujetos y consumidos de forma uniforme. Un ánodo casi agotado puede dejar de proteger adecuadamente. La ausencia aparente de desgaste también puede suscitar dudas sobre el contacto eléctrico, el material elegido o su idoneidad para el agua donde navega el yate.',
        'La corrosión debe analizarse en el conjunto de la instalación subacuática. Los metales, revestimientos, conexiones de masa y antecedentes de conexión a tierra desde el muelle pueden influir en lo observado. El aspecto de un ánodo es un indicio que interpretar, no un diagnóstico de electrólisis; una corrosión inusual o intensa puede requerir pruebas eléctricas.',
      ],
    },
    {
      id: 'prueba-de-mar',
      title: '¿Qué aporta una prueba de mar?',
      paragraphs: [
        'Durante una prueba realizada adecuadamente, observe vibraciones, ruidos y cambios al aumentar las revoluciones del motor. Compruebe el funcionamiento en marcha avante y atrás cuando sea seguro y pertinente, el régimen de funcionamiento esperado y la respuesta de la transmisión durante la aceleración y a velocidad constante.',
        'Una vibración puede tener muchas causas: daños o suciedad en la hélice, desalineación, desgaste de cojinetes, soportes del motor, acoplamiento o geometría de la instalación. Registre e investigue el síntoma en vez de atribuirlo a una sola pieza sin pruebas que lo respalden.',
      ],
    },
    {
      id: 'documentos-para-solicitar',
      title: '¿Qué documentos debe solicitar el comprador?',
      paragraphs: [
        'Pida al vendedor o al bróker documentación sobre el historial de la propulsión:',
      ],
      items: [
        'Varadas accidentales, impactos, golpes con cabos o enredos',
        'Desmontaje, reparación, ajuste del paso y equilibrado de la hélice',
        'Comprobaciones de rectitud o sustitución del eje, trabajos en el acoplamiento e informes de alineación',
        'Instalación, revisión o sustitución del cojinete exterior y del sello del eje',
        'Sustituciones de ánodos, quejas por vibraciones, facturas e informes de inspecciones anteriores',
      ],
      closingParagraphs: [
        'Compare fechas, horas de motor, referencias de componentes y facturas. Una laguna o discrepancia justifica nuevas preguntas; no prueba por sí misma la existencia de un defecto.',
      ],
    },
    {
      id: 'limites-inspeccion-visual',
      title:
        '¿Puede una inspección visual confirmar el buen estado de la transmisión?',
      paragraphs: [
        'No. La observación visual puede detectar daños, desgaste, fugas, corrosión o indicios de reparaciones, pero por sí sola no confirma el equilibrado de la hélice, la rectitud del eje, la alineación precisa, el estado interno del cojinete ni el rendimiento bajo carga.',
        'Para una compra, resulta más útil considerar conjuntamente la varada, la inspección interior accesible, los registros y la prueba de mar. Si los indicios no concuerdan, puede ser conveniente una comprobación especializada antes de decidir.',
      ],
    },
    {
      id: 'preguntas-frecuentes-helice-eje',
      title: 'Preguntas frecuentes',
      paragraphs: [],
      subsections: [
        {
          id: 'helice-danada-vibracion',
          title: '¿Una hélice dañada siempre produce vibraciones?',
          paragraphs: [
            'No necesariamente. Depende del tipo y alcance del daño, el diseño de la hélice, la velocidad y el resto de la transmisión. Un daño visible acompañado de vibraciones inusuales justifica más investigación que cualquiera de estos indicios por separado.',
          ],
        },
        {
          id: 'comprobar-holgura-cojinete',
          title:
            '¿Puede comprobarse la holgura del cojinete moviendo la hélice?',
          paragraphs: [
            'Una persona formada puede comprobar el movimiento con el yate varado de forma segura y la maquinaria aislada. Debe comparar el resultado con la instalación y las indicaciones del fabricante; no fuerce el eje ni aplique una holgura genérica.',
          ],
        },
        {
          id: 'prueba-de-mar-antes-compra',
          title: '¿Conviene realizar una prueba de mar antes de comprar?',
          paragraphs: [
            'Cuando sea posible y forme parte del alcance acordado, permite evaluar la propulsión, el gobierno, las vibraciones y el ruido en funcionamiento. Complementa la inspección estática y la varada.',
          ],
        },
        {
          id: 'eje-doblado-o-helice-danada',
          title:
            '¿Quién debe examinar un eje posiblemente doblado o una hélice dañada?',
          paragraphs: [
            'Un ingeniero naval o especialista en hélices puede realizar mediciones, ensayos no destructivos, comprobaciones de rectitud y equilibrado cuando los indicios de la inspección lo justifiquen.',
          ],
        },
      ],
    },
  ],
  keyPoint: {
    id: 'conclusion-helice-eje',
    title: 'Conclusión del inspector',
    body: 'No se detenga en las palas. Siga la transmisión desde el núcleo de la hélice al eje, el cojinete exterior, el sello y el acoplamiento. Compare después el estado físico con los documentos y la prueba de mar: los indicios pequeños cobran sentido al considerarlos juntos.',
  },
  authorBio: {
    id: 'autor-helice-eje',
    title: 'Sobre el autor',
    paragraphs: [
      'Aleksandrs Tolkacovs es inspector naval de yates y embarcaciones menores certificado por IIMS, capitán titulado y fundador de All Yacht Service. Su trabajo se apoya en más de 20 años de experiencia en ingeniería, control de calidad, operación y gestión de yates.',
    ],
  },
  sources: {
    id: 'fuentes-helice-eje',
    title: 'Fuentes y lecturas complementarias',
    links: [
      {
        label: 'Guía de hélices de Volvo Penta',
        href: 'https://www.volvopenta.com/-/media/volvopenta/parts/propellers/documents/propeller-guide.pdf',
      },
      {
        label: 'Piezas de mantenimiento y ánodos de Volvo Penta',
        href: 'https://www.volvopenta.com/en-us/marine/parts/maintenance-parts/',
      },
      {
        label:
          'Instrucciones de instalación del sello de eje PSS tipo B de PYI',
        href: 'https://www.pyiinc.com/downloads/pss-shaft-seal/pss-type-b-installation-instructions.pdf',
      },
    ],
  },
  relatedServices: [
    {
      title: 'Inspección precompra',
      description:
        'Evaluación independiente de los sistemas y equipos accesibles del yate antes de comprarlo, dentro del alcance acordado.',
      href: '/es/pre-purchase-survey',
    },
  ],
  relatedArticles: [
    {
      label: 'Soportes del motor: piezas pequeñas, consecuencias costosas',
      href: '/es/yacht-survey-tips/yacht-engine-mounts',
    },
    {
      label: 'Antes de la inspección, pida los documentos',
      href: '/es/yacht-survey-tips/documents-before-yacht-survey',
    },
    {
      label: 'Todos los consejos sobre inspección de yates',
      href: '/es/yacht-survey-tips',
    },
  ],
  finalCta: {
    heading: '¿Piensa comprar un yate en España o el Mediterráneo?',
    body: 'All Yacht Service realiza inspecciones precompra independientes. Los componentes accesibles de la propulsión pueden examinarse durante la varada y la prueba de mar cuando estén incluidas en el alcance acordado; las dudas pueden requerir una revisión especializada.',
    links: [
      {
        label: 'Solicitar presupuesto de inspección precompra',
        href: '/es/contact?service=pre-purchase-survey',
      },
      { label: 'Ver la inspección precompra', href: '/es/pre-purchase-survey' },
      {
        label: 'WhatsApp +34 695 718 540',
        href: 'https://wa.me/34695718540',
        external: true,
      },
      {
        label: 'Escribir a info@allyachtservice.com',
        href: 'mailto:info@allyachtservice.com',
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
    title: 'Hélice y eje de un yate: qué revisar antes de comprar',
    description:
      'Qué comprobar en la hélice, el eje, el cojinete y el sello durante la varada y la prueba de mar.',
    href: '/es/yacht-survey-tips/propeller-shaft-inspection',
    category: 'Inspección precompra · Equipo subacuático',
    status: 'Publicado',
    publicationDate: '20 de octubre de 2026',
    publicationDateTime: '2026-10-20',
    readingTime: '6 minutos',
    image: articleImage,
  } satisfies SurveyTipsArticle,
} as const satisfies SurveyTipArticlePageData;
