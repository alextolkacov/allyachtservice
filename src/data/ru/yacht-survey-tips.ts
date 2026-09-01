import type {
  SurveyTipsCategory,
  SurveyTipsImage,
} from '../yacht-survey-tips/types';
import { russianCheckYachtSeacocksArticle } from './yacht-survey-tips/check-yacht-seacocks';
import { russianCheckYachtSteeringArticle } from './yacht-survey-tips/check-yacht-steering';
import { russianDeckMoistureSoftSpotsArticle } from './yacht-survey-tips/deck-moisture-soft-spots';
import { russianShinyHullArticle } from './yacht-survey-tips/shiny-hull';
import { russianStandingRiggingWarningSignsArticle } from './yacht-survey-tips/standing-rigging-warning-signs';
import { russianYachtElectricalCorrosionArticle } from './yacht-survey-tips/yacht-electrical-corrosion';

const surveyInspectionImage = {
  src: '/images/yacht-survey-tips-background.jpg',
  alt: 'Корпус яхты, отражающийся в спокойной воде марины',
  width: 1536,
  height: 1024,
} as const satisfies SurveyTipsImage;

export const russianYachtSurveyTipsPage = {
  title: 'Советы по осмотру яхт | All Yacht Service',
  description:
    'Профессиональные советы для покупателей и владельцев яхт о сюрвейерских осмотрах, типичных дефектах, техническом состоянии и обслуживании.',
  pathname: '/ru/yacht-survey-tips',
  heading: 'Советы по сюрвейерскому осмотру яхт',
  summary:
    'Практические рекомендации независимого яхтенного сюрвейера, которые помогут покупателям и владельцам лучше понимать техническое состояние яхты, типичные дефекты и подготовку к осмотру.',
  heroImage: surveyInspectionImage,
  breadcrumbs: [
    { label: 'Главная', href: '/ru' },
    {
      label: 'Советы по сюрвейерскому осмотру яхт',
      href: '/ru/yacht-survey-tips',
    },
  ],
  primaryCta: {
    label: 'Запросить предложение на осмотр',
    href: '/ru/contact?service=pre-purchase-survey',
  },
  secondaryCta: {
    label: 'Услуги сюрвейерского осмотра',
    href: '/ru/pre-purchase-survey',
  },
  categories: [
    {
      title: 'Состояние конструкций',
      description:
        'Корпус, палуба, влага, состояние ламината, осмос и наблюдения за конструкциями.',
      futureArticles: [
        'Осмос стеклопластика',
        'Основы осмотра корпуса',
        'Состояние соединения киля с корпусом',
      ],
    },
    {
      title: 'Механизмы и системы',
      description:
        'Двигатели, электрооборудование, водяные системы и бортовое оборудование.',
      futureArticles: [
        'Проверка двигателя перед покупкой',
        'Распространённые неисправности электрооборудования',
        'Осмотр генератора',
      ],
    },
    {
      title: 'Системы парусной яхты',
      description: 'Мачты, такелаж, паруса и палубное оборудование.',
      futureArticles: [
        'Осмотр стоячего такелажа',
        'Проверка мачты и гика',
        'Оценка состояния парусов',
      ],
    },
    {
      title: 'Подводная часть и корпус',
      description:
        'Киль, руль, гребной винт, вал и оборудование ниже ватерлинии.',
      futureArticles: [
        'Осмотр яхты после подъёма',
        'Осмотр гребного винта и вала',
        'Состояние противообрастающего покрытия',
      ],
    },
    {
      title: 'Подготовка к осмотру',
      description:
        'Как владельцу или покупателю подготовить яхту к полноценному сюрвейерскому осмотру.',
      futureArticles: [
        'Документы для подготовки',
        'Как проходит сюрвейерский осмотр',
        'Подготовка к ходовым испытаниям',
      ],
    },
  ] satisfies readonly SurveyTipsCategory[],
  latestArticles: [
    russianStandingRiggingWarningSignsArticle.card,
    russianYachtElectricalCorrosionArticle.card,
    russianCheckYachtSteeringArticle.card,
    russianCheckYachtSeacocksArticle.card,
    russianShinyHullArticle.card,
    russianDeckMoistureSoftSpotsArticle.card,
  ],
  guideReasons: [
    'Независимый технический взгляд',
    'Практический опыт работы с парусными и моторными яхтами',
    'Знание типичных дефектов, выявляемых во время осмотров',
    'Понятные объяснения без лишних технических терминов',
    'Рекомендации для покупателей, владельцев и любителей яхтинга',
  ],
  relatedServices: [
    {
      title: 'Предпокупочный сюрвейерский осмотр',
      description:
        'Независимая оценка состояния яхты перед завершением покупки.',
      href: '/ru/pre-purchase-survey',
    },
    {
      title: 'Сюрвейерский осмотр для страхования',
      description:
        'Профессиональный осмотр и отчёт для оформления или продления страхового полиса.',
      href: '/ru/insurance-survey',
    },
    {
      title: 'Оценка стоимости и ущерба яхты',
      description:
        'Независимая оценка стоимости и документирование ущерба в рамках согласованного задания.',
      href: '/ru/valuation-damage-survey',
    },
  ],
  finalCta: {
    heading: 'Планируете сюрвейерский осмотр яхты?',
    body: 'Если вы покупаете яхту, продлеваете страховой полис или вам нужна независимая оценка, свяжитесь с All Yacht Service и расскажите о своей задаче.',
    primaryLink: {
      label: 'Запросить предложение на осмотр',
      href: '/ru/contact?service=pre-purchase-survey',
    },
    secondaryLink: {
      label: 'Написать в WhatsApp',
      href: 'https://wa.me/34695718540',
    },
  },
} as const;
