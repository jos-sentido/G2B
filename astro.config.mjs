// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.g2bconstructora.com', // TODO: confirmar dominio definitivo con el cliente
  vite: {
    plugins: [tailwindcss()],
  },
});
