import type { Locale } from '../data/languages';
import { siteConfig } from '../data/site';

export interface FooterCopy {
  description: string;
  navigation: string;
  contact: string;
  languages: string;
  tools: string;
  legal: string;
}

export const footerCopy = {
  en: {
    description:
      'Yacht surveying and technical support throughout Spain and the Mediterranean.',
    navigation: 'Navigation',
    contact: 'Contact',
    languages: 'Languages',
    tools: 'Online Tools',
    legal: 'Legal',
  },
  es: {
    description:
      'Inspección de yates y asistencia técnica en España y el Mediterráneo.',
    navigation: 'Navegación',
    contact: 'Contacto',
    languages: 'Idiomas',
    tools: 'Herramientas en línea',
    legal: 'Información legal',
  },
  ru: {
    description:
      'Осмотр яхт и техническая поддержка в Испании и Средиземноморье.',
    navigation: 'Навигация',
    contact: 'Контакты',
    languages: 'Языки',
    tools: 'Онлайн-инструменты',
    legal: 'Юридическая информация',
  },
} as const satisfies Record<Locale, FooterCopy>;

export const englishFooter = {
  address: siteConfig.address.lines,
  phone: 'Phone',
  whatsapp: 'WhatsApp',
  email: 'Email',
  openingHours: 'Opening hours',
  hours: siteConfig.workingHours.label,
  appointments: 'Appointments are recommended.',
  yachtSurveyTips: 'Yacht Survey Tips',
  tools: {
    survey: 'Survey Cost Calculator',
    delivery: 'Yacht Delivery Cost Calculator',
  },
  legal: {
    privacy: 'Privacy Policy',
    cookies: 'Cookie Policy',
    notice: 'Legal Notice',
    terms: 'Terms and Conditions',
  },
} as const;

export const spanishFooter = {
  address: [
    'Edificio Timonel, Local 73',
    'Puerto Deportivo Luis Campomanes / Marina Greenwich',
    '03599 Altea, Alicante, España',
  ],
  phone: 'Teléfono',
  whatsapp: 'WhatsApp',
  email: 'Correo electrónico',
  openingHours: 'Horario',
  hours: 'Lunes–viernes, 09:00–18:00',
  appointments: 'Se recomienda concertar cita.',
  yachtSurveyTips: 'Consejos para la inspección de yates',
  tools: {
    survey: 'Calculadora de coste de inspección',
    delivery: 'Calculadora de coste de entrega',
  },
  legal: {
    privacy: 'Política de privacidad',
    cookies: 'Política de cookies',
    notice: 'Aviso legal',
    terms: 'Términos y condiciones',
  },
} as const;

export const russianFooter = {
  address: [
    'Edificio Timonel, помещение 73',
    'Puerto Deportivo Luis Campomanes / Marina Greenwich',
    '03599 Альтеа, Аликанте, Испания',
  ],
  phone: 'Телефон',
  whatsapp: 'WhatsApp',
  email: 'Электронная почта',
  openingHours: 'Часы работы',
  hours: 'Понедельник–пятница, 09:00–18:00',
  appointments: 'Рекомендуется предварительная запись.',
  yachtSurveyTips: 'Советы по сюрвейерскому осмотру яхт',
  tools: {
    survey: 'Калькулятор стоимости сюрвейерского осмотра',
    delivery: 'Калькулятор стоимости перегона яхты',
  },
  legal: {
    privacy: 'Политика конфиденциальности',
    cookies: 'Политика cookies и хранения данных',
    notice: 'Юридическая информация',
    terms: 'Условия использования сайта',
  },
} as const;
