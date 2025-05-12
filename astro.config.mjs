// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://www.shrekcc.top', // 替换为您的实际域名
  compressHTML: true,
  vite: {
    build: {
      cssMinify: true,
    },
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh"],
    routing: {
      prefixDefaultLocale: false
    }
  },
  output: 'static',
  build: {
    format: 'directory'
  },
  redirects: {
    '/': '/en',
    '/privacy': '/en/privacy',
    '/terms': '/en/terms',
    '/contact': '/en/contact',
    '/feedback': '/en/feedback',
    '/about': '/en/about',
  }
});
