import type { Locale } from '../data/languages';

export interface SharedUiCopy {
  skipToContent: string;
  primaryNavigation: string;
  services: string;
  language: string;
  menu: string;
  openMenu: string;
  closeMenu: string;
  homepage: string;
  currentPage: string;
  version: string;
  languageHomepage: string;
  englishFallback: string;
  englishFallbackLowercase: string;
  opensNewTab: string;
  learnMore: string;
  requestQuote: string;
  contactUs: string;
  whatsapp: string;
  email: string;
  readMore: string;
  viewService: string;
  onlineTools: string;
  relatedServices: string;
  backHome: string;
  externalWebsite: string;
}

export const sharedUi = {
  en: {
    skipToContent: 'Skip to content',
    primaryNavigation: 'Primary navigation',
    services: 'Services',
    language: 'Language',
    menu: 'Menu',
    openMenu: 'Open navigation menu',
    closeMenu: 'Close navigation menu',
    homepage: 'homepage',
    currentPage: 'current page',
    version: 'version',
    languageHomepage: 'homepage',
    englishFallback: 'English',
    englishFallbackLowercase: 'English',
    opensNewTab: 'opens in a new tab',
    learnMore: 'Learn more',
    requestQuote: 'Request a quote',
    contactUs: 'Contact us',
    whatsapp: 'WhatsApp',
    email: 'Email',
    readMore: 'Read more',
    viewService: 'View service',
    onlineTools: 'Online tools',
    relatedServices: 'Related services',
    backHome: 'Back to home',
    externalWebsite: 'External website',
  },
  es: {
    skipToContent: 'Saltar al contenido',
    primaryNavigation: 'Navegación principal',
    services: 'Servicios',
    language: 'Idioma',
    menu: 'Menú',
    openMenu: 'Abrir el menú de navegación',
    closeMenu: 'Cerrar el menú de navegación',
    homepage: 'página de inicio',
    currentPage: 'página actual',
    version: 'versión',
    languageHomepage: 'página de inicio',
    englishFallback: 'inglés',
    englishFallbackLowercase: 'inglés',
    opensNewTab: 'se abre en una pestaña nueva',
    learnMore: 'Más información',
    requestQuote: 'Solicitar presupuesto',
    contactUs: 'Contacte con nosotros',
    whatsapp: 'WhatsApp',
    email: 'Correo electrónico',
    readMore: 'Leer más',
    viewService: 'Ver servicio',
    onlineTools: 'Herramientas en línea',
    relatedServices: 'Servicios relacionados',
    backHome: 'Volver al inicio',
    externalWebsite: 'Sitio web externo',
  },
} as const satisfies Record<'en' | 'es', SharedUiCopy>;

export function getSharedUi(locale: Locale): SharedUiCopy {
  return locale === 'es' ? sharedUi.es : sharedUi.en;
}

const languageNamesInSpanish: Record<Locale, string> = {
  en: 'inglés',
  es: 'español',
  ru: 'ruso',
};

export function getLanguageSwitcherLabel(input: {
  currentLocale: Locale;
  targetLocale: Locale;
  targetLabel: string;
  isEquivalent: boolean;
  isCurrent: boolean;
}): string {
  const { currentLocale, targetLocale, targetLabel, isEquivalent, isCurrent } =
    input;

  if (currentLocale !== 'es') {
    if (isCurrent) return `${targetLabel}, current page`;
    return isEquivalent ? `${targetLabel} version` : `${targetLabel} homepage`;
  }

  const languageName = languageNamesInSpanish[targetLocale];
  if (isCurrent) {
    const currentLanguageName =
      languageName.charAt(0).toUpperCase() + languageName.slice(1);
    return `${currentLanguageName}, página actual`;
  }
  return isEquivalent
    ? `Versión en ${languageName}`
    : `Página de inicio en ${languageName}`;
}

export function isEnglishFallback(locale: Locale, linkLanguage?: string) {
  return locale === 'es' && linkLanguage === 'en';
}
