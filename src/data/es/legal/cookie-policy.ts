import type { SpanishPolicyPage } from './types';

export const spanishCookiePolicy = {
  title: 'Política de cookies y almacenamiento | All Yacht Service',
  description:
    'Conozca las cookies y tecnologías de almacenamiento del navegador utilizadas por All Yacht Service para funciones esenciales, calculadoras y seguridad.',
  heading: 'Política de cookies y almacenamiento del navegador',
  intro:
    'Esta política describe las tecnologías limitadas de almacenamiento del navegador y seguridad que utiliza actualmente el sitio web de All Yacht Service.',
  pathname: '/es/cookie-policy',
  routeId: 'cookiePolicy',
  toc: [
    {
      id: 'definitions',
      label: 'Qué son las cookies y el almacenamiento del navegador',
    },
    { id: 'technologies', label: 'Tecnologías utilizadas' },
    { id: 'calculator-storage', label: 'sessionStorage de las calculadoras' },
    { id: 'turnstile-storage', label: 'Turnstile' },
    { id: 'analytics-marketing', label: 'Analítica y marketing' },
    { id: 'managing-storage', label: 'Gestión del almacenamiento' },
    { id: 'changes', label: 'Cambios en esta política' },
  ],
} as const satisfies SpanishPolicyPage;
