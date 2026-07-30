import type { RussianPolicyPage } from './types';

export const russianLegalNotice = {
  title: 'Юридическая информация | All Yacht Service',
  description:
    'Юридическая информация об операторе сайта All Yacht Service, профессиональных услугах, контактах и условиях использования сайта.',
  heading: 'Юридическая информация',
  intro:
    'На этой странице приведены подтверждённые сведения об операторе, контактах и использовании сайта All Yacht Service.',
  pathname: '/ru/legal-notice',
  routeId: 'legalNotice',
  toc: [
    { id: 'operator', label: 'Оператор сайта' },
    { id: 'professional-information', label: 'Профессиональная информация' },
    { id: 'purpose', label: 'Назначение сайта' },
    { id: 'contact-details', label: 'Контакты' },
    { id: 'intellectual-property', label: 'Интеллектуальная собственность' },
    { id: 'external-links', label: 'Внешние ссылки' },
    { id: 'availability', label: 'Доступность и точность сайта' },
    { id: 'applicable-law', label: 'Применимое право' },
  ],
} as const satisfies RussianPolicyPage;
