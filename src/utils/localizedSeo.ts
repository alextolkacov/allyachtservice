import type { Locale } from '../data/languages';
import { businessEntityId, toAbsoluteUrl, type StructuredData } from './seo';

interface LocalizedServicePageSchemaInput {
  pathname: string;
  locale: Locale;
  pageName: string;
  pageDescription: string;
  serviceName: string;
  serviceType: string;
  serviceDescription: string;
  areaServed: readonly string[];
}

export function createLocalizedServicePageSchemas(
  input: LocalizedServicePageSchemaInput,
): readonly StructuredData[] {
  const pageUrl = toAbsoluteUrl(input.pathname);

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${pageUrl}#page`,
      url: pageUrl,
      name: input.pageName,
      description: input.pageDescription,
      inLanguage: input.locale,
      mainEntity: {
        '@id': `${pageUrl}#service`,
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${pageUrl}#service`,
      name: input.serviceName,
      serviceType: input.serviceType,
      url: pageUrl,
      description: input.serviceDescription,
      provider: {
        '@id': businessEntityId,
      },
      areaServed: input.areaServed.map((name) => ({
        '@type': 'Place',
        name,
      })),
    },
  ];
}
