export const localeCodes = ['en', 'es', 'ru', 'fr', 'it', 'gr'] as const;

export type Locale = (typeof localeCodes)[number];

export interface Language {
  code: Locale;
  htmlLang: string;
  hreflang: string;
  label: string;
  nativeLabel: string;
  pathPrefix: string;
  openGraphLocale: string;
}

export const defaultLocale: Locale = 'en';

export const languages = [
  {
    code: 'en',
    htmlLang: 'en',
    hreflang: 'en',
    label: 'English',
    nativeLabel: 'English',
    pathPrefix: '',
    openGraphLocale: 'en_GB',
  },
  {
    code: 'es',
    htmlLang: 'es',
    hreflang: 'es',
    label: 'Spanish',
    nativeLabel: 'Español',
    pathPrefix: '/es',
    openGraphLocale: 'es_ES',
  },
  {
    code: 'ru',
    htmlLang: 'ru',
    hreflang: 'ru',
    label: 'Russian',
    nativeLabel: 'Русский',
    pathPrefix: '/ru',
    openGraphLocale: 'ru_RU',
  },
  {
    code: 'fr',
    htmlLang: 'fr',
    hreflang: 'fr',
    label: 'French',
    nativeLabel: 'Français',
    pathPrefix: '/fr',
    openGraphLocale: 'fr_FR',
  },
  {
    code: 'it',
    htmlLang: 'it',
    hreflang: 'it',
    label: 'Italian',
    nativeLabel: 'Italiano',
    pathPrefix: '/it',
    openGraphLocale: 'it_IT',
  },
  {
    code: 'gr',
    htmlLang: 'el',
    hreflang: 'el',
    label: 'Greek',
    nativeLabel: 'Ελληνικά',
    pathPrefix: '/gr',
    openGraphLocale: 'el_GR',
  },
] as const satisfies readonly Language[];

export function isLocale(value: string): value is Locale {
  return localeCodes.some((locale) => locale === value);
}

export function getLanguage(locale: Locale): Language {
  const language = languages.find((candidate) => candidate.code === locale);

  if (!language) {
    throw new Error(`Unsupported locale: ${locale}`);
  }

  return language;
}
