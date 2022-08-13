import { defineConfig } from 'astro/config';
import image from '@astrojs/image';
import mdx from '@astrojs/mdx';
import { mdxProvider } from './src/features/utils/mdxProvider.mjs';

export default defineConfig({
  integrations: [mdx()],
  vite: {
    plugins: [mdxProvider()]
  },
});