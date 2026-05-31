// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Замените на ваш production-домен после привязки в Vercel
  site: 'https://tsitser.com',
  vite: {
    plugins: [tailwindcss()],
  },
});