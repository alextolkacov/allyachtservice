import { defaultLocale, languages, type Locale } from '../data/languages';
import {
  getRoutePath,
  translatedRoutes,
  type RouteId,
} from '../data/navigation';
import { normalizePathname, toAbsoluteUrl } from './seo';

export interface AlternateLink {
  hreflang: string;
  href: string;
  locale: Locale | 'x-default';
}

export function getRouteAlternates(routeId: RouteId): AlternateLink[] {
  const localizedAlternates = languages.map((language) => ({
    hreflang: language.hreflang,
    href: toAbsoluteUrl(getRoutePath(routeId, language.code)),
    locale: language.code,
  }));

  return [
    ...localizedAlternates,
    {
      hreflang: 'x-default',
      href: toAbsoluteUrl(getRoutePath(routeId, defaultLocale)),
      locale: 'x-default',
    },
  ];
}

export function findRouteId(pathname: string): RouteId | undefined {
  const normalizedPath = normalizePathname(pathname);
  const routeIds = Object.keys(translatedRoutes) as RouteId[];

  return routeIds.find((routeId) =>
    Object.values(translatedRoutes[routeId]).some(
      (routePath) => normalizePathname(routePath) === normalizedPath,
    ),
  );
}

export function getEquivalentPath(
  pathname: string,
  targetLocale: Locale,
): string | undefined {
  const routeId = findRouteId(pathname);
  return routeId ? getRoutePath(routeId, targetLocale) : undefined;
}
