import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://tori.ee',
  build: {
    format: 'preserve',
  },
  i18n: {
    defaultLocale: 'ee',
    locales: ['ee', 'en', 'ru'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
