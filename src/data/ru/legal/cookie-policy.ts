import type { RussianPolicyPage } from './types';

export const russianCookiePolicy = {
  title: 'Политика cookies и хранения данных | All Yacht Service',
  description:
    'Информация о cookies, Cloudflare Turnstile и данных калькуляторов, временно сохраняемых в браузере на сайте All Yacht Service.',
  heading: 'Политика использования cookies и хранения данных в браузере',
  intro:
    'Эта политика описывает ограниченный набор технологий хранения данных в браузере и средств безопасности, которые в настоящее время использует сайт All Yacht Service.',
  pathname: '/ru/cookie-policy',
  routeId: 'cookiePolicy',
  toc: [
    {
      id: 'definitions',
      label: 'Что такое cookies и хранение данных в браузере',
    },
    { id: 'technologies', label: 'Используемые технологии' },
    {
      id: 'calculator-storage',
      label: 'Хранилище sessionStorage калькуляторов',
    },
    { id: 'turnstile-storage', label: 'Cloudflare Turnstile' },
    { id: 'analytics-marketing', label: 'Аналитика и маркетинг' },
    { id: 'managing-storage', label: 'Управление данными в браузере' },
    { id: 'changes', label: 'Изменения этой политики' },
  ],
} as const satisfies RussianPolicyPage;
