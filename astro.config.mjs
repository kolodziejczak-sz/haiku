import { defineConfig, sharpImageService } from 'astro/config';
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true,
  },
  markdown: {
    syntaxHighlight: false,
    gfm: false,
  },
  integrations: [mdx()],
  image: {
    service: sharpImageService(),
  }
});