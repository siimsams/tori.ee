import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

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
  vite: {
    plugins: [tailwindcss()],
  },
});
