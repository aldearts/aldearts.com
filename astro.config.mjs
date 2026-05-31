// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
//
// Pure static — no SSR adapter. Cloudflare serves dist/ as Workers Static
// Assets. Astro Image pre-generates /_astro/*.webp variants at build time,
// so the runtime /_image endpoint is not needed.
export default defineConfig({
  site: 'https://aldearts.com',

  i18n: {
    defaultLocale: 'tr',
    locales: ['tr', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap()],
});