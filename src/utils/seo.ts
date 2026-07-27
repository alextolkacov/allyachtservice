import type { Locale } from '../data/languages';
import { getLanguage } from '../data/languages';
import { siteConfig } from '../data/site';

export type StructuredData = Record<string, unknown>;

export interface SeoInput {
  title: string;
  description: string;
  locale: Locale;
  pathname: string;
  noindex?: boolean;
  imagePath?: string;
}

export interface SeoMetadata {
  title: string;
  description: string;
  canonicalUrl: string;
  robots: string;
  openGraphLocale: string;
  imageUrl?: string;
}

export function normalizePathname(pathname: string): string {
  const pathOnly = pathname.split(/[?#]/u, 1)[0] ?? '/';
  const withLeadingSlash = pathOnly.startsWith('/') ? pathOnly : `/${pathOnly}`;
  const normalized =
    withLeadingSlash === '/' ? '/' : withLeadingSlash.replace(/\/+$/u, '');

  const containsNonAsciiCharacter = [...normalized].some(
    (character) => (character.codePointAt(0) ?? 0) > 0x7f,
  );

  if (containsNonAsciiCharacter) {
    throw new Error(`URL path must contain ASCII characters only: ${pathname}`);
  }

  if (normalized !== normalized.toLowerCase()) {
    throw new Error(`URL path must be lowercase: ${pathname}`);
  }

  if (normalized.includes('_') || normalized.includes(' ')) {
    throw new Error(`URL words must be separated with hyphens: ${pathname}`);
  }

  return normalized;
}

export function toAbsoluteUrl(pathname: string): string {
  return new URL(normalizePathname(pathname), siteConfig.url).toString();
}

export function createSeoMetadata(input: SeoInput): SeoMetadata {
  const language = getLanguage(input.locale);
  const imageUrl = input.imagePath ? toAbsoluteUrl(input.imagePath) : undefined;

  return {
    title: input.title,
    description: input.description,
    canonicalUrl: toAbsoluteUrl(input.pathname),
    robots: input.noindex ? 'noindex, nofollow' : 'index, follow',
    openGraphLocale: language.openGraphLocale,
    ...(imageUrl ? { imageUrl } : {}),
  };
}

export function createProfessionalServiceSchema(): StructuredData {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    description: siteConfig.professionalDescription,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.streetAddress,
      postalCode: siteConfig.address.postalCode,
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      addressCountry: siteConfig.address.addressCountry,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: siteConfig.workingHours.days,
      opens: siteConfig.workingHours.opens,
      closes: siteConfig.workingHours.closes,
    },
    sameAs: [siteConfig.social.instagram, siteConfig.social.linkedin],
  };
}
