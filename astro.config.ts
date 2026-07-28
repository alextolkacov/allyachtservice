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
          fr: 'fr',
          it: 'it',
          gr: 'el',
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
