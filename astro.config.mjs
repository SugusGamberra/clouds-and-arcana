// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://clouds-and-arcana.vercel.app',

  integrations: [react(), sitemap()],

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: vercel()
});