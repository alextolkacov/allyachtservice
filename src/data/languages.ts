export const localeCodes = ['en', 'es', 'ru'] as const;

export type Locale = (typeof localeCodes)[number];

export interface Language {
  code: Locale;
  htmlLang: string;
  hreflang: string;
  name: string;
  label: string;
  pathPrefix: string;
  openGraphLocale: string;
}

export const defaultLocale: Locale = 'en';

export const languages = [
  {
    code: 'en',
    htmlLang: 'en',
    hreflang: 'en',
    name: 'English',
    label: 'EN',
    pathPrefix: '',
    openGraphLocale: 'en_GB',
  },
  {
    code: 'es',
    htmlLang: 'es',
    hreflang: 'es',
    name: 'Spanish',
    label: 'ES',
    pathPrefix: '/es',
    openGraphLocale: 'es_ES',
  },
  {
    code: 'ru',
    htmlLang: 'ru',
    hreflang: 'ru',
    name: 'Russian',
    label: 'RU',
    pathPrefix: '/ru',
    openGraphLocale: 'ru_RU',
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
