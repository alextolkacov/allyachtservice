import type {
  SurveyTipsArticle,
  SurveyTipsImage,
} from '../../yacht-survey-tips/types';

const articleImage = {
  src: '/images/yacht-survey-tips/shiny-yacht-hull-hidden-repairs.png',
  alt: 'Gráfico que explica que un casco brillante puede ocultar indicios de reparaciones anteriores',
  width: 1122,
  height: 1402,
} as const satisfies SurveyTipsImage;

export const spanishShinyHullArticle = {
  sourceUrl: 'https://www.allyachtservice.com/yacht-survey-tips/shiny-hull',
  title:
    '¿Se puede confiar en un casco brillante? Qué debe comprobar un comprador de un yate usado',
  seoTitle: 'Casco brillante y reparaciones anteriores | All Yacht Service',
  description:
    'Un casco brillante puede causar una impresión tranquilizadora y, al mismo tiempo, hacer menos visibles algunas reparaciones anteriores o irregularidades superficiales. Conozca qué puede comprobar un comprador sin causar daños.',
  metaDescription:
    'Un casco brillante puede hacer menos visibles reparaciones o daños anteriores. Descubra qué debe comprobar un comprador antes de adquirir un yate usado.',
  slug: 'shiny-hull',
  pathname: '/es/yacht-survey-tips/shiny-hull',
  category: 'Inspección precompra · Casco y estructura',
  status: 'Publicado',
  publicationDate: '28 de julio de 2026',
  publicationDateTime: '2026-07-28',
  modifiedDateTime: '2026-07-28',
  readingTime: '5 minutos',
  timeRequired: 'PT5M',
  standfirst:
    'Un acabado brillante produce una buena primera impresión, pero no confirma lo que existe debajo. Las diferencias de color, reflejo, regularidad de las líneas o calidad de reparación pueden justificar una investigación más detallada.',
  image: articleImage,
  imageCaption:
    'Una superficie muy pulida mejora la presentación y puede hacer que algunas irregularidades visuales resulten menos evidentes durante una visita rápida.',
  socialImageAlt:
    'Gráfico que explica que un casco brillante puede ocultar indicios de reparaciones anteriores',
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
      label: '¿Se puede confiar en un casco brillante?',
      href: '/es/yacht-survey-tips/shiny-hull',
    },
  ],
  finishMayConceal: [
    'Reparaciones anteriores',
    'Masilla',
    'Daños por impacto',
    'Tratamiento de ampollas',
    'Trabajos de enmasillado y alisado',
    'Otros trabajos anteriores en el casco',
  ],
  repairSigns: [
    {
      id: 'brillo-color-desigual',
      title: 'Brillo o color desiguales',
      body: [
        'Observe el casco desde distintos ángulos en lugar de situarse únicamente delante de la superficie.',
        'Las diferencias locales de color, reflejo o brillo pueden indicar que una zona se ha pintado, pulido o reparado por separado. Pueden resultar especialmente visibles con luz natural intensa.',
        'Una diferencia de color no demuestra que una reparación sea defectuosa, pero justifica solicitar más información.',
      ],
      items: [],
    },
    {
      id: 'regularidad-casco',
      title: 'Ondulaciones o cambios en la regularidad del casco',
      body: [
        'Al observarlo longitudinalmente, el casco debería presentar normalmente una superficie suave y regular.',
        'Los hundimientos locales, resaltes, deformaciones o cambios de reflejo pueden justificar una revisión más detenida.',
      ],
      items: [
        'Masilla bajo el revestimiento',
        'Reparaciones por impactos anteriores',
        'Trabajos en el laminado',
        'Preparación deficiente de la superficie',
        'Deformación localizada',
      ],
      note: 'Algunas marcas de construcción son normales, sobre todo en yates antiguos, por lo que deben interpretarse en su contexto.',
    },
    {
      id: 'lijado-enmascarado-sobrepulverizacion',
      title: 'Marcas de lijado, líneas de enmascarado o sobrepulverización',
      body: [
        'Los arañazos de lijado, pintura sobre herrajes, bordes marcados del enmascarado o sobrepulverización pueden indicar que el acabado se realizó con rapidez o de forma localizada.',
        'La calidad del acabado también puede aportar indicios sobre el cuidado aplicado durante la reparación subyacente.',
      ],
      items: [
        'Ventanas',
        'Cintones',
        'Pasacascos',
        'Uniones entre cubierta y casco',
        'Salidas de escape',
        'Herrajes del espejo de popa',
        'Adhesivos y marcas de matrícula',
      ],
    },
    {
      id: 'reparaciones-no-coincidentes',
      title: 'Reparaciones que no coinciden con la superficie circundante',
      body: [
        'Las diferencias de textura del gelcoat, espesor de pintura, perfil superficial o acabado pueden revelar zonas donde se han realizado trabajos anteriores.',
        'Preste especial atención a lugares donde pueden producirse impactos, varadas, cargas o entrada de agua.',
      ],
      items: [
        'Proa',
        'Aletas de popa',
        'Zona de la quilla',
        'Timón',
        'Cadenotes',
        'Bases de los candeleros',
        'Puntos de izado',
        'Zonas próximas a defensas y puntos de contacto con el puerto',
      ],
    },
    {
      id: 'grietas-zonas-cargadas',
      title: 'Grietas alrededor de zonas estructurales o sometidas a carga',
      body: [
        'No todas las grietas pequeñas tienen el mismo significado.',
        'El cuarteado fino y cosmético de un gelcoat envejecido puede ser superficial, mientras que las grietas alrededor de la quilla, mamparos, cadenotes, apoyo del mástil, timón o herrajes de cubierta pueden requerir una investigación más detallada.',
        'La ubicación, dirección y patrón de las grietas suelen ser más importantes que su anchura por sí sola.',
      ],
      items: [],
    },
  ],
  sellerQuestions: [
    '¿Ha sufrido el casco alguna colisión, varada u otro impacto?',
    '¿Se ha realizado alguna relaminación, relleno o alisado en una zona del casco?',
    '¿Cuándo se pintó o pulió de forma extensa por última vez la obra muerta?',
    '¿Por qué se realizaron los trabajos de pintura, acabado o reparación?',
    '¿Quién realizó los trabajos?',
    '¿Se ha sometido el yate a tratamientos anteriores de humedad, ampollas u ósmosis?',
    '¿Hubo alguna reclamación al seguro relacionada con esos trabajos?',
    '¿Hay facturas, fotografías de la reparación o informes técnicos?',
    '¿Existe documentación del astillero de reparación o de la aseguradora?',
  ],
  diyChecks: [
    'Observe el casco desde distintos ángulos.',
    'Mire longitudinalmente a lo largo del casco y no solo de frente.',
    'Observe cómo recorren los reflejos la superficie.',
    'Utilice luz natural o direccional.',
    'Compare las bandas de babor y estribor.',
    'Examine las transiciones alrededor de las zonas que parecen reparadas.',
    'Busque diferencias de color, brillo, forma o acabado.',
    'Compruebe si hay límites de enmascarado, marcas de lijado o sobrepulverización.',
    'Anote las observaciones para comentarlas con el inspector naval.',
  ],
  buyerMustNot: [
    'Raspar revestimientos',
    'Taladrar orificios',
    'Retirar herrajes',
    'Dañar la superficie',
    'Realizar pruebas de percusión agresivas',
    'Llevar a cabo investigaciones destructivas sin autorización',
  ],
  professionalSurveyMethods: [
    'Inspección visual detallada de la obra muerta y la obra viva',
    'Evaluación comparativa de babor, estribor y superficies circundantes',
    'Examen de reflejos y regularidad de las líneas del casco',
    'Inspección de estructuras interiores, mamparos y uniones accesibles',
    'Revisión de reparaciones visibles',
    'Prueba de percusión cuando proceda',
    'Evaluación comparativa de humedad cuando proceda',
    'Revisión de la documentación disponible del astillero, la reparación y el seguro',
    'Inspección con varada de la obra viva, la quilla, el timón y los herrajes',
    'Recomendaciones de investigación especializada o destructiva cuando estén justificadas',
  ],
  buyerConsiderations: [
    'Por qué fue necesaria la reparación',
    'Qué estructura resultó afectada',
    'Cómo se realizó',
    'Qué materiales se utilizaron',
    'Si está documentada',
    'Si el acabado es cosmético o está relacionado con trabajos más profundos',
    'Si es necesaria una investigación adicional',
    'Si afecta a la seguridad, el valor, el mantenimiento o la futura reventa',
  ],
  professionalLimitations: [
    'Una superficie brillante no demuestra un buen estado.',
    'Una superficie brillante tampoco demuestra que existan daños ocultos.',
    'Las diferencias de color no demuestran automáticamente una reparación defectuosa.',
    'Una reparación visible no es inaceptable por definición.',
    'Una inspección visual no puede confirmar todas las condiciones ocultas.',
    'Las inspecciones normales son generalmente visuales y no destructivas.',
    'Un examen especializado o destructivo puede requerir una autorización independiente.',
    'Las observaciones deben interpretarse en su contexto.',
  ],
  relatedServices: [
    {
      title: 'Inspección precompra',
      description:
        'Evaluación independiente de la estructura, los sistemas y los trabajos anteriores visibles antes de la compra.',
      href: '/es/pre-purchase-survey',
    },
    {
      title: 'Valoración y evaluación de daños',
      description:
        'Valoración independiente e informe de daños para un propósito y alcance acordados.',
      href: '/es/valuation-damage-survey',
    },
    {
      title: 'Inspección de condición para seguro',
      description:
        'Inspección del estado e informe profesional para requisitos de seguro.',
      href: '/es/insurance-survey',
    },
  ],
  relatedArticles: [
    {
      label:
        'Humedad y zonas blandas en la cubierta: qué deben saber los compradores',
      href: '/es/yacht-survey-tips/deck-moisture-soft-spots',
    },
    {
      label: 'Todos los consejos para la inspección de yates',
      href: '/es/yacht-survey-tips',
    },
  ],
  finalCta: {
    heading: '¿Está comprando un yate usado?',
    body: 'Una inspección precompra profesional puede ayudar a identificar indicios visibles de reparaciones anteriores, evaluar la estructura y los sistemas accesibles, revisar la documentación disponible y explicar cuándo puede ser necesaria una investigación adicional.',
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
        label: 'Calcular el coste de la inspección',
        href: '/es/pre-purchase-survey-calculator',
      },
      {
        label: 'WhatsApp +34 695 718 540',
        href: 'https://wa.me/34695718540',
        external: true,
      },
    ],
  },
  card: {
    title:
      '¿Se puede confiar en un casco brillante? Qué debe comprobar un comprador de un yate usado',
    description:
      'Un casco brillante puede hacer menos visibles algunas reparaciones anteriores o irregularidades durante una visita.',
    href: '/es/yacht-survey-tips/shiny-hull',
    category: 'Inspección precompra · Casco y estructura',
    status: 'Publicado',
    publicationDate: '28 de julio de 2026',
    publicationDateTime: '2026-07-28',
    readingTime: '5 minutos',
    image: articleImage,
  } satisfies SurveyTipsArticle,
} as const;
