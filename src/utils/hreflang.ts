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
  const localizedAlternates = languages.flatMap((language) => {
    const routePath = getRoutePath(routeId, language.code);

    return routePath
      ? [
          {
            hreflang: language.hreflang,
            href: toAbsoluteUrl(routePath),
            locale: language.code,
          },
        ]
      : [];
  });
  const defaultPath = getRoutePath(routeId, defaultLocale);

  return defaultPath
    ? [
        ...localizedAlternates,
        {
          hreflang: 'x-default',
          href: toAbsoluteUrl(defaultPath),
          locale: 'x-default',
        },
      ]
    : localizedAlternates;
}

export function findRouteId(pathname: string): RouteId | undefined {
  const normalizedPath = normalizePathname(pathname);
  const routeIds = Object.keys(translatedRoutes) as RouteId[];

  return routeIds.find((routeId) =>
    Object.values(translatedRoutes[routeId]).some(
      (routePath) =>
        routePath && normalizePathname(routePath) === normalizedPath,
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
