import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import { assertLegalConfigurationForIndexableBuild } from './src/data/legal';

assertLegalConfigurationForIndexableBuild(process.env.PUBLIC_SITE_INDEXABLE);

export default defineConfig({
  site: 'https://www.allyachtservice.com',
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          es: 'es',
          ru: 'ru',
        },
      },
      serialize(item) {
        const englishLink = item.links?.find((link) => link.lang === 'en');

        if (!englishLink) return item;

        return {
          ...item,
          links: [
            ...(item.links ?? []).filter((link) => link.lang !== 'x-default'),
            {
              lang: 'x-default',
              url: englishLink.url,
            },
          ],
        };
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
