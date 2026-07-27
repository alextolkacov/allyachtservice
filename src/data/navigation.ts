import type { Locale } from './languages';

/**
 * Add one entry for every translated page. The language switcher uses this
 * table to link equivalent content and never falls back to a language homepage.
 */
export const translatedRoutes = {
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
    es: '/es/pre-purchase-survey',
    ru: '/ru/pre-purchase-survey',
    fr: '/fr/pre-purchase-survey',
    it: '/it/pre-purchase-survey',
    gr: '/gr/pre-purchase-survey',
  },
  insuranceSurvey: {
    en: '/insurance-survey',
    es: '/es/insurance-survey',
    ru: '/ru/insurance-survey',
    fr: '/fr/insurance-survey',
    it: '/it/insurance-survey',
    gr: '/gr/insurance-survey',
  },
  yachtDelivery: {
    en: '/yacht-delivery',
    es: '/es/yacht-delivery',
    ru: '/ru/yacht-delivery',
    fr: '/fr/yacht-delivery',
    it: '/it/yacht-delivery',
    gr: '/gr/yacht-delivery',
  },
  buyerRepresentation: {
    en: '/buyer-representation',
    es: '/es/buyer-representation',
    ru: '/ru/buyer-representation',
    fr: '/fr/buyer-representation',
    it: '/it/buyer-representation',
    gr: '/gr/buyer-representation',
  },
  yachtsForSale: {
    en: '/yachts-for-sale',
    es: '/es/yachts-for-sale',
    ru: '/ru/yachts-for-sale',
    fr: '/fr/yachts-for-sale',
    it: '/it/yachts-for-sale',
    gr: '/gr/yachts-for-sale',
  },
  yachtSurveyTips: {
    en: '/yacht-survey-tips',
    es: '/es/yacht-survey-tips',
    ru: '/ru/yacht-survey-tips',
    fr: '/fr/yacht-survey-tips',
    it: '/it/yacht-survey-tips',
    gr: '/gr/yacht-survey-tips',
  },
  about: {
    en: '/about-us',
    es: '/es/about-us',
    ru: '/ru/about-us',
    fr: '/fr/about-us',
    it: '/it/about-us',
    gr: '/gr/about-us',
  },
  contact: {
    en: '/contact',
    es: '/es/contact',
    ru: '/ru/contact',
    fr: '/fr/contact',
    it: '/it/contact',
    gr: '/gr/contact',
  },
} as const satisfies Record<string, Record<Locale, string>>;

export type RouteId = keyof typeof translatedRoutes;

export interface NavigationItem {
  routeId: RouteId;
  labels: Record<Locale, string>;
}

export const primaryNavigation = [
  {
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
    routeId: 'insuranceSurvey',
    labels: {
      en: 'Insurance Survey',
      es: 'Inspección de seguro',
      ru: 'Страховой осмотр',
      fr: 'Expertise assurance',
      it: 'Perizia assicurativa',
      gr: 'Έλεγχος ασφάλισης',
    },
  },
  {
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
    routeId: 'buyerRepresentation',
    labels: {
      en: 'Buyer Representation',
      es: 'Representación del comprador',
      ru: 'Представление покупателя',
      fr: 'Représentation acheteur',
      it: 'Rappresentanza acquirente',
      gr: 'Εκπροσώπηση αγοραστή',
    },
  },
  {
    routeId: 'yachtsForSale',
    labels: {
      en: 'Yachts for Sale',
      es: 'Yates en venta',
      ru: 'Яхты на продажу',
      fr: 'Yachts à vendre',
      it: 'Yacht in vendita',
      gr: 'Σκάφη προς πώληση',
    },
  },
  {
    routeId: 'yachtSurveyTips',
    labels: {
      en: 'Yacht Survey Tips',
      es: 'Consejos de inspección',
      ru: 'Советы по осмотру',
      fr: "Conseils d'expertise",
      it: 'Consigli sulle perizie',
      gr: 'Συμβουλές επιθεώρησης',
    },
  },
  {
    routeId: 'about',
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
    routeId: 'contact',
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

export function getRoutePath(routeId: RouteId, locale: Locale): string {
  return translatedRoutes[routeId][locale];
}
