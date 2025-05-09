// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import image from '@astrojs/image';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), image()],
  site: 'https://your-domain.com', // 替换为您的实际域名
  compressHTML: true,
  vite: {
    build: {
      cssMinify: true,
    },
  },
});
