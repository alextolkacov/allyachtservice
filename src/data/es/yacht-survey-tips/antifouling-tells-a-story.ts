import type {
  SurveyTipArticlePageData,
  SurveyTipsArticle,
  SurveyTipsImage,
} from '../../yacht-survey-tips/types';

const articleImage = {
  src: '/images/yacht-survey-tips/antifouling-tells-a-story.png',
  alt: 'Guía de All Yacht Service para revisar el antiincrustante y la obra viva al comprar un yate usado',
  width: 1080,
  height: 1350,
} as const satisfies SurveyTipsImage;

export const spanishAntifoulingTellsAStoryArticle = {
  sourceUrl:
    'https://www.allyachtservice.com/yacht-survey-tips/antifouling-tells-a-story',
  title:
    'El antiincrustante cuenta una historia: qué debe comprobar al comprar un yate usado',
  seoTitle: 'Antiincrustante en yates usados: qué revisar | All Yacht Service',
  description:
    'El estado del antiincrustante puede aportar indicios sobre el mantenimiento de la obra viva, la compatibilidad de los recubrimientos, trabajos locales anteriores y zonas que merecen más investigación antes de comprar un yate usado.',
  metaDescription:
    'Sepa qué pueden revelar el antiincrustante desprendido, la incrustación marina, las ampollas y las reparaciones antes de comprar un yate usado.',
  slug: 'antifouling-tells-a-story',
  pathname: '/es/yacht-survey-tips/antifouling-tells-a-story',
  category: 'Comprobaciones precompra · Casco y elementos sumergidos',
  status: 'Publicado',
  publicationDate: '15 de septiembre de 2026',
  publicationDateTime: '2026-09-15',
  modifiedDateTime: '2026-09-15',
  readingTime: '6 minutos de lectura',
  timeRequired: 'PT6M',
  standfirst:
    'Lo que ocurre bajo la línea de flotación puede revelar mucho sobre el mantenimiento de un yate. El antiincrustante controla el crecimiento marino, pero su estado también aporta indicios útiles durante una inspección precompra.',
  image: articleImage,
  imageCaption:
    'Los recubrimientos desprendidos, la incrustación marina, las zonas abultadas y las marcas de impacto son observaciones que deben valorarse en contexto durante una inspección con el yate varado.',
  socialImageAlt:
    'Guía de All Yacht Service para revisar el antiincrustante y la obra viva antes de comprar un yate usado',
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
      label: 'El antiincrustante cuenta una historia',
      href: '/es/yacht-survey-tips/antifouling-tells-a-story',
    },
  ],
  introduction: {
    id: 'introduccion-antiincrustante',
    label: 'Introducción',
    paragraphs: [
      'El antiincrustante se aplica a la obra viva para controlar el crecimiento marino. Cuando un yate usado se saca del agua, el recubrimiento también puede ayudar al comprador a comprender cómo se han preparado, mantenido y reparado las superficies sumergidas.',
      'La pintura desprendida, una incrustación abundante, las zonas abultadas, las capas de distinto aspecto o las marcas de impacto son observaciones, no diagnósticos. Deben valorarse junto con el material del casco, el sistema de recubrimiento, los registros de mantenimiento disponibles y el estado de la superficie circundante.',
      'Un acabado atractivo no demuestra que la estructura situada debajo esté en buen estado. Del mismo modo, un antiincrustante de aspecto deficiente suele ser un problema de recubrimiento o mantenimiento, no necesariamente un indicio de daño estructural. El objetivo es determinar qué necesita explicación o una investigación más detallada.',
    ],
  },
  sections: [
    {
      id: 'por-que-importa-estado-antiincrustante',
      title:
        'Por qué importa el estado del antiincrustante durante una inspección',
      paragraphs: [
        'El patrón y el estado del antiincrustante pueden aportar indicios sobre la preparación de la superficie, la compatibilidad entre recubrimientos, el tiempo transcurrido desde la última aplicación y trabajos locales anteriores. También pueden dirigir la atención hacia zonas de la quilla, el timón, la parte baja del casco o los accesorios sumergidos que requieren una revisión más cuidadosa.',
        'El antiincrustante es un recubrimiento de mantenimiento consumible. Su deterioro no significa automáticamente que exista un defecto estructural, pero las capas gruesas o con fallos pueden dificultar la detección de grietas, degradación superficial y reparaciones anteriores.',
      ],
    },
    {
      id: 'que-revisar-bajo-linea-flotacion',
      title: 'Qué debe revisar bajo la línea de flotación',
      paragraphs: [
        'Siempre que sea posible, inspeccione el yate usado fuera del agua y con buena iluminación. Observe primero toda la obra viva antes de centrarse en marcas concretas y compare las zonas equivalentes de ambos costados.',
      ],
      subsections: [
        {
          id: 'desprendimiento-descamacion-antiincrustante',
          title: 'Desprendimiento o descamación del antiincrustante',
          paragraphs: [
            'El desprendimiento o la descamación pueden indicar una preparación insuficiente de la superficie, sistemas de recubrimiento incompatibles o una acumulación excesiva de capas. Conviene examinar el patrón afectado y la adherencia de las capas circundantes, pero la pintura desprendida por sí sola no demuestra que exista daño estructural.',
          ],
        },
        {
          id: 'incrustacion-marina-abundante',
          title: 'Incrustación marina abundante',
          paragraphs: [
            'Una incrustación abundante puede ser coherente con periodos prolongados sin uso, un antiincrustante ineficaz o un mantenimiento atrasado. Puede ocultar la superficie y los accesorios sumergidos, además de perjudicar el rendimiento del yate y aumentar el consumo de combustible.',
          ],
        },
        {
          id: 'ampollas-zonas-abultadas',
          title: 'Ampollas y zonas abultadas',
          paragraphs: [
            'Las ampollas o zonas abultadas requieren una investigación adicional, pero no toda ampolla es ósmosis. El indicio puede estar relacionado con una o varias capas de recubrimiento, contaminación atrapada, una preparación local o el sustrato situado debajo; su naturaleza no debe darse por supuesta solo por su apariencia.',
          ],
        },
        {
          id: 'capas-diferentes-reparaciones-anteriores',
          title: 'Capas diferentes y reparaciones anteriores',
          paragraphs: [
            'Las reparaciones irregulares, los cambios de color o las capas visiblemente distintas pueden indicar reparaciones locales anteriores, daños por una varada accidental o aplicaciones repetidas. Por sí solos no demuestran un historial concreto. Compare la zona con el costado opuesto y pregunte si existen facturas, fotografías o registros de reparación.',
          ],
        },
        {
          id: 'aranazos-danos-impacto',
          title: 'Arañazos y daños por impacto',
          paragraphs: [
            'Los arañazos, surcos y marcas de impacto merecen especial atención alrededor de la quilla, el timón y la parte baja del casco. Algunos daños pueden limitarse al recubrimiento, mientras que las zonas más profundas o deformadas requieren una evaluación más detallada de la superficie subyacente y la estructura adyacente.',
          ],
        },
      ],
    },
    {
      id: 'obra-viva-recien-pintada-investigacion',
      title:
        'Por qué una obra viva recién pintada aún puede requerir investigación',
      paragraphs: [
        'Un antiincrustante recién aplicado no demuestra automáticamente que la obra viva esté en buen estado. Una capa nueva y uniforme puede dar al yate un aspecto cuidado mientras oculta capas antiguas, rellenos locales, grietas o reparaciones que siguen siendo relevantes para el comprador.',
        'Pregunte cuándo se realizó el trabajo, qué sistema de recubrimiento se utilizó y cómo se preparó la superficie. Las facturas o fotografías pueden aportar contexto, pero ni la documentación ni un acabado reciente sustituyen la inspección del propio casco.',
      ],
      note: 'Considere un casco recién pintado como una superficie que debe inspeccionarse, no como una prueba de que la estructura sumergida ya ha sido evaluada.',
    },
    {
      id: 'comprobacion-sencilla-antiincrustante',
      title: 'Una comprobación sencilla que puede hacer el comprador',
      paragraphs: [
        'Con el yate varado de forma segura, aléjese y compare ambos costados con buena iluminación. Después observe la superficie desde distintos ángulos y busque cambios de color o textura, falta de adherencia, zonas abultadas, irregularidades, reparaciones locales y marcas de impacto.',
        'Incluya la quilla, el timón y los accesorios sumergidos accesibles en la comparación visual. No rasque, lije, perfore ni retire el recubrimiento sin autorización del propietario y sin las medidas de control adecuadas, ya que podría dañar el acabado o alterar materiales potencialmente peligrosos.',
      ],
    },
    {
      id: 'aportacion-inspeccion-profesional',
      title: 'Qué aporta una inspección precompra profesional',
      paragraphs: [
        'Cuando la varada forma parte del alcance acordado, una inspección precompra puede evaluar la obra viva, la quilla, el timón y los accesorios accesibles dentro del estado general del yate. El inspector puede documentar en contexto los fallos visibles del recubrimiento, las irregularidades superficiales, posibles reparaciones y señales de impacto, sin convertir una marca aislada en una conclusión.',
        'El antiincrustante puede limitar lo que se ve debajo, y el acceso, la contaminación o el estado del recubrimiento pueden restringir la inspección. Si una observación no puede aclararse dentro del alcance acordado, puede recomendarse una limpieza adicional, la retirada localizada del recubrimiento, trabajos de varadero o una investigación especializada.',
      ],
    },
  ],
  keyPoint: {
    id: 'conclusion-antiincrustante',
    title: 'Conclusión del inspector',
    body: 'El estado del antiincrustante puede contar una historia útil sobre el mantenimiento, pero no ofrece un diagnóstico por sí solo. Inspeccione el yate varado siempre que sea posible, compare toda la obra viva y valore cada observación en el contexto del sistema de recubrimiento, el material del casco y el historial disponible.',
  },
  relatedServices: [
    {
      title: 'Inspección precompra',
      description:
        'Evaluación independiente de las estructuras, sistemas, maquinaria y estado general accesibles antes de comprar un yate.',
      href: '/es/pre-purchase-survey',
    },
    {
      title: 'Representación del comprador de yates',
      description:
        'Apoyo técnico independiente antes, durante y después de la compra de un yate.',
      href: '/es/buyer-representation',
    },
    {
      title: 'Valoración y evaluación de daños',
      description:
        'Valoración independiente e informe de daños para un propósito y alcance acordados.',
      href: '/es/valuation-damage-survey',
    },
  ],
  relatedArticles: [
    {
      label: '¿Casco brillante? Mire con más atención',
      href: '/es/yacht-survey-tips/shiny-hull',
    },
    {
      label: 'No ignore los pasacascos y válvulas de fondo',
      href: '/es/yacht-survey-tips/check-yacht-seacocks',
    },
    {
      label: 'Todos los consejos para la inspección de yates',
      href: '/es/yacht-survey-tips',
    },
  ],
  finalCta: {
    heading: '¿Va a comprar un yate usado en España?',
    body: 'All Yacht Service realiza inspecciones precompra independientes en la Costa Blanca y en toda España. Se aceptan encargos en el Mediterráneo, con gastos de desplazamiento adicionales cuando corresponda. Los informes se entregan normalmente en un plazo de 48 horas en inglés; las traducciones profesionales están disponibles con un coste adicional.',
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
    breadcrumb: 'Ruta de navegación',
    published: 'Publicado',
    readingTime: 'Tiempo de lectura',
    author: 'Autor',
    authorPrefix: 'Por',
    professionalSupport: 'Apoyo profesional',
    relatedServices: 'Servicios relacionados',
    viewService: 'Ver servicio',
    moreTips: 'Más consejos para la inspección de yates',
    moreTipsBody:
      'Continúe con otros contenidos para compradores o consulte todo el centro de conocimiento.',
    finalCtaEyebrow: 'Apoyo antes de la compra',
  },
  card: {
    title: 'El antiincrustante cuenta una historia',
    description:
      'El recubrimiento desprendido, la incrustación marina, las zonas abultadas y las reparaciones pueden aportar indicios útiles antes de comprar un yate usado.',
    href: '/es/yacht-survey-tips/antifouling-tells-a-story',
    category: 'Comprobaciones precompra · Casco y elementos sumergidos',
    status: 'Publicado',
    publicationDate: '15 de septiembre de 2026',
    publicationDateTime: '2026-09-15',
    readingTime: '6 minutos',
    image: articleImage,
  } satisfies SurveyTipsArticle,
} as const satisfies SurveyTipArticlePageData;
