import type { Locale } from './languages';

export type RouteId =
  | 'home'
  | 'prePurchaseSurvey'
  | 'insuranceSurvey'
  | 'buyerRepresentation'
  | 'aboutUs'
  | 'yachtDelivery';

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
    fr: '/fr',
    it: '/it',
    gr: '/gr',
  },
  prePurchaseSurvey: {
    en: '/pre-purchase-survey',
  },
  insuranceSurvey: {
    en: '/insurance-survey',
  },
  buyerRepresentation: {
    en: '/buyer-representation',
  },
  aboutUs: {
    en: '/about-us',
  },
  yachtDelivery: {
    en: '/yacht-delivery',
  },
};

export interface NavigationItem {
  id:
    | 'home'
    | 'prePurchaseSurvey'
    | 'insuranceSurvey'
    | 'buyerRepresentation'
    | 'aboutUs'
    | 'yachtDelivery'
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
      fr: 'Accueil',
      it: 'Home',
      gr: 'Αρχική',
    },
  },
  {
    id: 'prePurchaseSurvey',
    routeId: 'prePurchaseSurvey',
    labels: {
      en: 'Pre-Purchase Survey',
      es: 'Inspección precompra',
      ru: 'Осмотр перед покупкой',
      fr: 'Expertise pré-achat',
      it: 'Perizia pre-acquisto',
      gr: 'Έλεγχος προ αγοράς',
    },
  },
  {
    id: 'insuranceSurvey',
    routeId: 'insuranceSurvey',
    labels: {
      en: 'Insurance Survey',
      es: 'Inspección de seguro',
      ru: 'Страховой осмотр',
      fr: "Expertise d'assurance",
      it: 'Perizia assicurativa',
      gr: 'Έλεγχος ασφάλισης',
    },
  },
  {
    id: 'buyerRepresentation',
    routeId: 'buyerRepresentation',
    labels: {
      en: 'Buyer Representation',
      es: 'Representación del comprador',
      ru: 'Представительство покупателя',
      fr: "Représentation de l'acheteur",
      it: "Rappresentanza dell'acquirente",
      gr: 'Εκπροσώπηση αγοραστή',
    },
  },
  {
    id: 'yachtDelivery',
    routeId: 'yachtDelivery',
    labels: {
      en: 'Yacht Delivery',
      es: 'Traslado de yates',
      ru: 'Перегон яхт',
      fr: 'Convoyage de yacht',
      it: 'Trasferimento yacht',
      gr: 'Μεταφορά σκαφών',
    },
  },
  {
    id: 'aboutUs',
    routeId: 'aboutUs',
    labels: {
      en: 'About Us',
      es: 'Sobre nosotros',
      ru: 'О нас',
      fr: 'À propos',
      it: 'Chi siamo',
      gr: 'Σχετικά με εμάς',
    },
  },
  {
    id: 'contact',
    href: '/#contact',
    labels: {
      en: 'Contact',
      es: 'Contacto',
      ru: 'Контакты',
      fr: 'Contact',
      it: 'Contatti',
      gr: 'Επικοινωνία',
    },
  },
] as const satisfies readonly NavigationItem[];

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
