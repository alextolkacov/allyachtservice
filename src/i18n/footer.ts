import type { Locale } from '../data/languages';

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
    tools: 'Инструменты',
    legal: 'Legal',
  },
} as const satisfies Record<Locale, FooterCopy>;

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
