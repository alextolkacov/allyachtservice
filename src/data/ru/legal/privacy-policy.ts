import type { RussianPolicyPage } from './types';

export const russianPrivacyPolicy = {
  title: 'Политика конфиденциальности | All Yacht Service',
  description:
    'Информация о том, как All Yacht Service обрабатывает персональные данные, полученные через сайт, форму обратной связи и деловую переписку.',
  heading: 'Политика конфиденциальности',
  intro:
    'Эта политика объясняет, как обрабатываются персональные данные, когда вы связываетесь с All Yacht Service, используете калькулятор, отправляете файлы или взаимодействуете со средствами защиты сайта.',
  pathname: '/ru/privacy-policy',
  routeId: 'privacyPolicy',
  toc: [
    {
      id: 'responsible',
      label: 'Кто является оператором персональных данных',
    },
    { id: 'data-collected', label: 'Какие персональные данные мы собираем' },
    { id: 'calculator-data', label: 'Данные калькуляторов' },
    { id: 'uses', label: 'Как мы используем персональные данные' },
    { id: 'legal-bases', label: 'Правовые основания' },
    {
      id: 'required-information',
      label: 'Обязательная и необязательная информация',
    },
    { id: 'attachments', label: 'Прикреплённые файлы' },
    { id: 'recipients', label: 'Поставщики услуг и получатели данных' },
    { id: 'turnstile', label: 'Cloudflare Turnstile' },
    { id: 'google-workspace', label: 'Google Workspace' },
    {
      id: 'international-transfers',
      label: 'Международная передача данных',
    },
    { id: 'retention', label: 'Сроки хранения данных' },
    { id: 'security', label: 'Безопасность' },
    { id: 'rights', label: 'Ваши права' },
    {
      id: 'automated-decisions',
      label: 'Автоматизированное принятие решений',
    },
    { id: 'third-party-links', label: 'Ссылки на сторонние сайты' },
    { id: 'changes', label: 'Изменения этой политики' },
  ],
} as const satisfies RussianPolicyPage;
