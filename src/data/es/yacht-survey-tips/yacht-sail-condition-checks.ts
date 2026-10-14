import type {
  SurveyTipArticlePageData,
  SurveyTipsArticle,
  SurveyTipsImage,
} from '../../yacht-survey-tips/types';

const articleImage = {
  src: '/images/yacht-survey-tips/yacht-sail-condition-checks.png',
  alt: 'Infografía de All Yacht Service sobre el estado de las velas, con un detalle de las costuras y el desgaste de la protección UV de un génova enrollado',
  width: 1080,
  height: 1350,
} as const satisfies SurveyTipsImage;

export const spanishYachtSailConditionChecksArticle = {
  sourceUrl:
    'https://www.allyachtservice.com/yacht-survey-tips/yacht-sail-condition-checks',
  title: 'Estado de las velas de un yate: qué revisar antes de comprar',
  seoTitle: 'Estado de las velas antes de comprar un yate | All Yacht Service',
  description:
    'Guía práctica para revisar el inventario de velas, las costuras, la protección UV, las rozaduras, los herrajes y la forma de las velas antes de comprar un velero usado.',
  metaDescription:
    'Aprenda a revisar las velas de un yate antes de comprar: protección UV, costuras, rozaduras, reparaciones, forma y límites de la inspección.',
  slug: 'yacht-sail-condition-checks',
  pathname: '/es/yacht-survey-tips/yacht-sail-condition-checks',
  category: 'Inspección precompra · Aparejo y velas',
  status: 'Publicado',
  publicationDate: '13 de octubre de 2026',
  publicationDateTime: '2026-10-13',
  modifiedDateTime: '2026-10-13',
  readingTime: '6 minutos de lectura',
  timeRequired: 'PT6M',
  standfirst:
    'Una funda ordenada o un génova bien enrollado dicen poco sobre la vela que ocultan. Antes de comprar un velero, conviene identificar las velas, examinar la tela y los elementos accesibles y conocer qué no pudo revisarse.',
  image: articleImage,
  imageCaption:
    'La infografía original ilustra las costuras, el desgaste de la protección UV y otras zonas que conviene revisar. Su lista orienta la observación; no diagnostica el estado de una vela concreta.',
  socialImageAlt:
    'Infografía de All Yacht Service sobre costuras, protección UV, rozaduras y otras comprobaciones de las velas para compradores de yates',
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
      label: 'Estado de las velas',
      href: '/es/yacht-survey-tips/yacht-sail-condition-checks',
    },
  ],
  introduction: {
    id: 'introduccion-estado-de-las-velas',
    label: 'Introducción',
    paragraphs: [
      'No es posible valorar con fiabilidad el estado de las velas de un yate mientras permanecen enrolladas o guardadas en bolsas. Una revisión precompra útil identifica las velas de trabajo, consulta los registros disponibles y examina ambas caras cuando el acceso y las condiciones lo permiten.',
      'Izar una vela y observar su forma bajo carga durante una prueba de mar adecuada puede aportar información. Ni el aspecto limpio ni una breve inspección visual permiten determinar la resistencia de la tela, su vida restante o su rendimiento.',
    ],
  },
  sections: [
    {
      id: 'desgaste-oculto-en-velas-enrolladas',
      title: '¿Por qué una vela enrollada puede ocultar desgaste?',
      paragraphs: [
        'En un génova enrollado se ve principalmente la protección UV exterior; las costuras, los paños, las rozaduras y las reparaciones anteriores pueden quedar ocultos dentro del rollo. La funda de la vela mayor también puede esconder desgaste en costuras, bolsillos de sables, rizos y otras partes de la vela.',
        'El exterior, aun así, ofrece indicios. Una protección UV rota o suelta puede dejar menos protegida la tela situada debajo. Las costuras pueden deteriorarse por la exposición aunque la tela cercana parezca limpia. Sin embargo, la decoloración por sí sola no determina el estado de la vela.',
      ],
    },
    {
      id: 'registros-de-velas-que-solicitar',
      title: '¿Qué información sobre las velas debe solicitar el comprador?',
      paragraphs: [
        'Pida al vendedor o al bróker el inventario de velas disponible e identifique cada una cuando sea posible. Resulta útil conocer:',
      ],
      items: [
        'El fabricante, la edad aproximada, el material y el uso previsto',
        'El historial de mantenimiento, las facturas de la velería y las reparaciones conocidas',
        'La forma de almacenamiento y las fotografías recientes navegando a vela',
      ],
      closingParagraphs: [
        'La exposición y el uso importan tanto como la fecha de una factura. Una vela que pasa largos periodos enrollada o descubierta puede envejecer de forma distinta a otra almacenada en seco; las travesías frecuentes, el chárter o las regatas también pueden influir. Los registros aportan contexto, no prueban que una vela siga siendo apta para su uso.',
      ],
    },
    {
      id: 'defectos-visibles-de-las-velas',
      title: '¿Qué señales visibles conviene revisar?',
      paragraphs: [
        'Examine las zonas accesibles por ambas caras sin desmontar ni forzar equipos. Anote la ubicación y extensión de cada observación en vez de convertir una marca aislada en un diagnóstico.',
      ],
      subsections: [
        {
          id: 'costuras-de-las-velas',
          title: 'Costuras sueltas o ausentes',
          paragraphs: [
            'Revise las uniones entre paños, las protecciones UV, las cintas de baluma y pujamen, los puntos de rizo y los refuerzos de los puños. Busque tramos descosidos, lazadas sueltas, hilo ausente o tela que empieza a separarse. Las costuras pueden fallar aunque el tejido adyacente todavía parezca limpio.',
          ],
        },
        {
          id: 'proteccion-uv-de-las-velas',
          title: 'Desgaste de la protección UV',
          paragraphs: [
            'En los foques o génovas enrollables, examine el material protector de la baluma y el pujamen: desgarros, bordes sueltos, costuras fallidas y zonas muy expuestas. Son motivos para investigar la protección y la tela subyacente; el aspecto no permite medir la resistencia del tejido.',
          ],
        },
        {
          id: 'rozaduras-de-las-velas',
          title: 'Rozaduras en puntos de contacto',
          paragraphs: [
            'Observe donde la vela pueda rozar con crucetas, obenques, candeleros, guardamancebos, púlpitos, el mástil o los herrajes del enrollador. La abrasión, el adelgazamiento local, las fibras rotas, los agujeros y los parches justifican una revisión de ambas caras cuando sean accesibles.',
          ],
        },
        {
          id: 'punos-y-rizos',
          title: 'Puños, cinchas y puntos de rizo',
          paragraphs: [
            'El puño de driza, el de amura, el de escota y los puntos de rizo soportan cargas concentradas. Revise las cinchas, anillas, herrajes del puño de driza, parches de refuerzo, costuras y ollaos de rizo accesibles para detectar deformación, deshilachado, corrosión o separación.',
          ],
        },
        {
          id: 'gratil-y-sables',
          title: 'Grátil, carros y bolsillos de sables',
          paragraphs: [
            'Compruebe la cinta del grátil, los patines o carros, los puntos de unión, los bolsillos de sables, sus cierres y extremos para detectar piezas ausentes, sueltas, desgastadas o dañadas. No accione un carril, una driza o un enrollador sospechoso solo para completar una lista.',
          ],
        },
        {
          id: 'tela-ventanas-y-laminados',
          title: 'Tela, ventanas y laminados',
          paragraphs: [
            'Cuando corresponda, observe desgarros, pequeños orificios, manchas, zonas de aspecto quebradizo, pliegues, reparaciones anteriores, cambios de color o textura, ventanas dañadas o separación de capas en velas laminadas. No todas las velas tienen ventanas o laminados, y una revisión visual no establece la resistencia a tracción.',
          ],
        },
      ],
    },
    {
      id: 'izado-seguro-de-velas',
      title: '¿Debe izarse una vela aunque parezca limpia?',
      paragraphs: [
        'Izarla puede mostrar material oculto por el enrollado o los pliegues, pero no es una obligación incondicional. Obtenga permiso del propietario o del bróker, cuente con tiempo y tripulación adecuados y confirme que el atraque o la zona de maniobra y el equipo permiten hacerlo con seguridad.',
        'No fuerce una vela si el enrollador, la driza, el carril u otro herraje no funcionan correctamente. Si no puede desplegarse o izarse con seguridad, registre esa limitación.',
      ],
    },
    {
      id: 'forma-de-la-vela',
      title: '¿Cómo puede evaluarse la forma de una vela?',
      paragraphs: [
        'La forma se aprecia mejor cuando la vela está llena en condiciones apropiadas. Una bolsa excesiva, la profundidad máxima demasiado retrasada, una baluma cerrada o que flamea, paños deformados o dificultades para lograr una forma regular pueden justificar la valoración de una velería. Una vela que parece intacta también puede haber perdido su forma de navegación.',
        'Izarla en el atraque puede no cargarla lo suficiente para apreciar su forma de trabajo. Una prueba de mar adecuada puede ayudar; si no es posible, las fotografías recientes navegando aportan contexto, pero no prueban el estado o rendimiento actuales.',
      ],
    },
    {
      id: 'edad-y-vida-util-de-las-velas',
      title: '¿Permite la edad predecir la vida restante?',
      paragraphs: [
        'La edad cronológica aporta contexto, pero no fija una fecha de sustitución. Influyen el material, la construcción, la exposición UV, la frecuencia y el tipo de uso, el flameo, las rozaduras, el almacenamiento, el mantenimiento y las reparaciones. Dos velas fabricadas el mismo año pueden encontrarse hoy en estados muy distintos.',
      ],
    },
    {
      id: 'alcance-y-limites-de-la-inspeccion',
      title: '¿Qué puede decir una inspección precompra sobre las velas?',
      paragraphs: [
        'Dentro del alcance acordado, una inspección precompra puede documentar el inventario presentado, el estado visible, los defectos accesibles, el equipo asociado, los registros relevantes y las limitaciones de la revisión. Si las condiciones lo permiten, también puede observar velas izadas o en funcionamiento.',
        'El informe debe distinguir las velas examinadas o izadas de las que permanecieron enrolladas, guardadas o no disponibles. No debe darse por apta una vela que no se ha examinado. Una inspección general no sustituye automáticamente la evaluación especializada de una velería; puede recomendarse una revisión adicional cuando proceda.',
      ],
    },
    {
      id: 'abrir-todas-las-velas',
      title: '¿Deben abrirse todas las velas antes de comprar?',
      paragraphs: [
        'Lo ideal es identificar las velas incluidas en la venta y examinarlas cuando lo permitan el acceso, el tiempo meteorológico, la autorización, el tiempo disponible y el alcance pactado. Si una vela no puede revisarse con seguridad, deje constancia de ello y considere una inspección aparte por una velería antes de cerrar la compra.',
      ],
    },
    {
      id: 'significado-de-los-parches',
      title: '¿Un parche indica siempre un problema grave?',
      paragraphs: [
        'No. Algunos parches son refuerzos normales o reparaciones bien ejecutadas. Su importancia depende del motivo del trabajo, la tela circundante, la calidad de ejecución, la ubicación, las cargas y el estado general. Varias reparaciones sin explicación justifican preguntas, no un diagnóstico automático.',
      ],
    },
    {
      id: 'presupuestos-para-velas-nuevas',
      title: '¿Incluye la inspección el coste de sustituir las velas?',
      paragraphs: [
        'El precio de una vela nueva depende de sus dimensiones, material, construcción, herrajes, fabricante y especificaciones. Una inspección visual general no incluye automáticamente un presupuesto detallado. Si el estado de una vela puede influir en su decisión de compra, solicite una oferta escrita y actualizada a una velería.',
      ],
    },
  ],
  keyPoint: {
    id: 'conclusion-estado-de-las-velas',
    title: 'Conclusión del inspector',
    body: 'Una vela limpia o bien enrollada no está necesariamente en buen estado. Identifique qué se examinó, qué quedó inaccesible y cuándo conviene solicitar una valoración especializada a una velería.',
  },
  relatedServices: [
    {
      title: 'Inspección precompra',
      description:
        'Evaluación independiente de las estructuras, sistemas y equipos accesibles de un yate antes de comprarlo, dentro del alcance acordado.',
      href: '/es/pre-purchase-survey',
    },
  ],
  relatedArticles: [
    {
      label: 'Aparejo fijo: qué revisar antes de comprar',
      href: '/es/yacht-survey-tips/standing-rigging-warning-signs',
    },
    {
      label: '¿Qué documentos debe solicitar el comprador de un yate?',
      href: '/es/yacht-survey-tips/documents-before-yacht-survey',
    },
    {
      label: 'Todos los consejos sobre inspección de yates',
      href: '/es/yacht-survey-tips',
    },
  ],
  finalCta: {
    heading: '¿Está comprando un velero?',
    body: 'All Yacht Service ofrece inspecciones independientes en la Costa Blanca y toda España, con encargos disponibles en el Mediterráneo. Una inspección precompra puede documentar las velas presentadas, los hallazgos visibles, los registros disponibles y la necesidad de una revisión especializada dentro del alcance acordado.',
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
    title: 'Estado de las velas: qué revisar antes de comprar',
    description:
      'Las velas enrolladas pueden ocultar daños UV, costuras fallidas, rozaduras y reparaciones. Sepa qué comprobar antes de comprar un yate.',
    href: '/es/yacht-survey-tips/yacht-sail-condition-checks',
    category: 'Inspección precompra · Aparejo y velas',
    status: 'Publicado',
    publicationDate: '13 de octubre de 2026',
    publicationDateTime: '2026-10-13',
    readingTime: '6 minutos',
    image: articleImage,
  } satisfies SurveyTipsArticle,
} as const satisfies SurveyTipArticlePageData;
