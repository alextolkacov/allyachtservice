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
] as const satisfies readonly NavigationItem[];

export function getRoutePath(routeId: RouteId, locale: Locale): string {
  return translatedRoutes[routeId][locale];
}
