import type { RussianPolicyPage } from './types';

export const russianTermsAndConditions = {
  title: 'Условия использования сайта | All Yacht Service',
  description:
    'Условия использования сайта All Yacht Service, онлайн-калькуляторов, информационных материалов и форм обратной связи.',
  heading: 'Условия использования сайта',
  intro:
    'Эти условия регулируют только использование сайта. Они не являются условиями заказа сюрвейерского осмотра, договором на осмотр или перегон яхты, брокерским или ремонтным соглашением, соглашением об использовании отчёта или заключённым онлайн договором.',
  pathname: '/ru/terms-and-conditions',
  routeId: 'termsAndConditions',
  toc: [
    { id: 'acceptance', label: 'Принятие условий использования сайта' },
    { id: 'information', label: 'Информационное назначение' },
    { id: 'calculators', label: 'Расчёты калькуляторов' },
    { id: 'services', label: 'Сюрвейерские и технические услуги' },
    { id: 'reports', label: 'Отчёты' },
    { id: 'tips', label: 'Советы по сюрвейерскому осмотру яхт' },
    {
      id: 'brokerage',
      label: 'Яхты на продажу и внешние брокерские услуги',
    },
    { id: 'external-links', label: 'Внешние ссылки' },
    {
      id: 'permitted-use',
      label: 'Интеллектуальная собственность и разрешённое использование',
    },
    { id: 'prohibited-use', label: 'Запрещённое использование' },
    { id: 'liability', label: 'Ответственность' },
    { id: 'changes', label: 'Изменения' },
    { id: 'governing-law', label: 'Применимое право и разрешение споров' },
  ],
} as const satisfies RussianPolicyPage;
