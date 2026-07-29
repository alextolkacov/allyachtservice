import type { Locale } from './languages';

export type RouteId =
  | 'home'
  | 'prePurchaseSurvey'
  | 'prePurchaseSurveyCalculator'
  | 'yachtDeliveryCalculator'
  | 'insuranceSurvey'
  | 'valuationDamageSurvey'
  | 'buyerRepresentation'
  | 'aboutUs'
  | 'contact'
  | 'yachtDelivery'
  | 'yachtsForSale'
  | 'yachtSurveyTips'
  | 'deckMoistureSoftSpots'
  | 'shinyHull'
  | 'privacyPolicy'
  | 'cookiePolicy'
  | 'legalNotice'
  | 'termsAndConditions';

/**
 * Add a locale only after that translated page exists. SEO alternates and the
 * language switcher both read this map, so unpublished translations must not
 * be listed here.
 */
export const translatedRoutes: Record<
  RouteId,
  Partial<Record<Locale, string>>
> = {
  home: {
    en: '/',
    es: '/es',
    ru: '/ru',
  },
  prePurchaseSurvey: {
    en: '/pre-purchase-survey',
    es: '/es/pre-purchase-survey',
    ru: '/ru/pre-purchase-survey',
  },
  prePurchaseSurveyCalculator: {
    en: '/pre-purchase-survey-calculator',
    es: '/es/pre-purchase-survey-calculator',
  },
  yachtDeliveryCalculator: {
    en: '/yacht-delivery-calculator',
    es: '/es/yacht-delivery-calculator',
  },
  insuranceSurvey: {
    en: '/insurance-survey',
    es: '/es/insurance-survey',
    ru: '/ru/insurance-survey',
  },
  valuationDamageSurvey: {
    en: '/valuation-damage-survey',
    es: '/es/valuation-damage-survey',
    ru: '/ru/valuation-damage-survey',
  },
  buyerRepresentation: {
    en: '/buyer-representation',
    es: '/es/buyer-representation',
    ru: '/ru/buyer-representation',
  },
  aboutUs: {
    en: '/about-us',
    es: '/es/about-us',
    ru: '/ru/about-us',
  },
  contact: {
    en: '/contact',
    es: '/es/contact',
    ru: '/ru/contact',
  },
  yachtDelivery: {
    en: '/yacht-delivery',
    es: '/es/yacht-delivery',
    ru: '/ru/yacht-delivery',
  },
  yachtsForSale: {
    en: '/yachts-for-sale',
    es: '/es/yachts-for-sale',
  },
  yachtSurveyTips: {
    en: '/yacht-survey-tips',
    es: '/es/yacht-survey-tips',
  },
  deckMoistureSoftSpots: {
    en: '/yacht-survey-tips/deck-moisture-soft-spots',
    es: '/es/yacht-survey-tips/deck-moisture-soft-spots',
  },
  shinyHull: {
    en: '/yacht-survey-tips/shiny-hull',
    es: '/es/yacht-survey-tips/shiny-hull',
  },
  privacyPolicy: {
    en: '/privacy-policy',
    es: '/es/privacy-policy',
  },
  cookiePolicy: {
    en: '/cookie-policy',
    es: '/es/cookie-policy',
  },
  legalNotice: {
    en: '/legal-notice',
    es: '/es/legal-notice',
  },
  termsAndConditions: {
    en: '/terms-and-conditions',
    es: '/es/terms-and-conditions',
  },
};

export interface NavigationItem {
  id:
    | 'home'
    | 'prePurchaseSurvey'
    | 'insuranceSurvey'
    | 'valuationDamageSurvey'
    | 'buyerRepresentation'
    | 'aboutUs'
    | 'yachtDelivery'
    | 'yachtsForSale'
    | 'contact';
  routeId?: RouteId;
  href?: string;
  labels: Record<Locale, string>;
}

export const primaryNavigation = [
  {
    id: 'home',
    routeId: 'home',
    labels: {
      en: 'Home',
      es: 'Inicio',
      ru: 'Главная',
    },
  },
  {
    id: 'prePurchaseSurvey',
    routeId: 'prePurchaseSurvey',
    labels: {
      en: 'Pre-Purchase Survey',
      es: 'Inspección precompra',
      ru: 'Предпокупочный сюрвейерский осмотр',
    },
  },
  {
    id: 'insuranceSurvey',
    routeId: 'insuranceSurvey',
    labels: {
      en: 'Insurance Survey',
      es: 'Inspección de condición para seguro',
      ru: 'Сюрвейерский осмотр для страхования',
    },
  },
  {
    id: 'valuationDamageSurvey',
    routeId: 'valuationDamageSurvey',
    labels: {
      en: 'Valuation & Damage',
      es: 'Valoración y evaluación de daños',
      ru: 'Оценка стоимости и ущерба',
    },
  },
  {
    id: 'buyerRepresentation',
    routeId: 'buyerRepresentation',
    labels: {
      en: 'Buyer Representation',
      es: 'Representación del comprador',
      ru: 'Представительство покупателя',
    },
  },
  {
    id: 'yachtDelivery',
    routeId: 'yachtDelivery',
    labels: {
      en: 'Yacht Delivery',
      es: 'Entrega profesional de yates',
      ru: 'Перегон яхт',
    },
  },
  {
    id: 'yachtsForSale',
    routeId: 'yachtsForSale',
    labels: {
      en: 'Yachts for Sale',
      es: 'Yates en venta',
      ru: 'Яхты на продажу',
    },
  },
  {
    id: 'aboutUs',
    routeId: 'aboutUs',
    labels: {
      en: 'About Us',
      es: 'Sobre nosotros',
      ru: 'О нас',
    },
  },
  {
    id: 'contact',
    routeId: 'contact',
    labels: {
      en: 'Contact',
      es: 'Contacto',
      ru: 'Контакты',
    },
  },
] as const satisfies readonly NavigationItem[];

const serviceNavigationIds = new Set<NavigationItem['id']>([
  'prePurchaseSurvey',
  'insuranceSurvey',
  'valuationDamageSurvey',
  'buyerRepresentation',
  'yachtDelivery',
]);

export const serviceNavigation = primaryNavigation.filter((item) =>
  serviceNavigationIds.has(item.id),
);

export const desktopStandaloneNavigation = primaryNavigation.filter(
  (item) =>
    item.id === 'home' ||
    item.id === 'yachtsForSale' ||
    item.id === 'aboutUs' ||
    item.id === 'contact',
);

const serviceRouteIds = new Set<RouteId>([
  'prePurchaseSurvey',
  'prePurchaseSurveyCalculator',
  'insuranceSurvey',
  'valuationDamageSurvey',
  'buyerRepresentation',
  'yachtDelivery',
  'yachtDeliveryCalculator',
]);

export function isServiceRoute(routeId?: RouteId): boolean {
  return routeId ? serviceRouteIds.has(routeId) : false;
}

export function getRoutePath(
  routeId: RouteId,
  locale: Locale,
): string | undefined {
  return translatedRoutes[routeId][locale];
}

export function getRequiredRoutePath(routeId: RouteId, locale: Locale): string {
  const path = getRoutePath(routeId, locale);

  if (!path) {
    throw new Error(`No ${locale} route is published for ${routeId}`);
  }

  return path;
}

export function getNavigationHref(
  item: NavigationItem,
  locale: Locale,
): string {
  if (item.href) return item.href;
  if (!item.routeId) return '/';

  return (
    getRoutePath(item.routeId, locale) ??
    getRequiredRoutePath(item.routeId, 'en')
  );
}

export function getNavigationLinkLanguage(
  item: NavigationItem,
  locale: Locale,
): string | undefined {
  return item.routeId && !getRoutePath(item.routeId, locale) ? 'en' : undefined;
}
