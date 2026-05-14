import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://doudco.com',
  integrations: [
    mdx(),
  ],
  markdown: {
    shikiConfig: {
      theme: 'rose-pine-dawn',
    },
  },
});
