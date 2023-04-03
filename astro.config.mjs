import { defineConfig } from 'astro/config';
import markdoc from '@astrojs/markdoc';

export default defineConfig({
  experimental: {
    assets: true,
  },
  integrations: [
    markdoc()
  ],
});