import sitemap from '@astrojs/sitemap';
import uno from '@unocss/astro';
import { defineConfig } from 'astro/config';

import { siteConfig } from './src/config/site';

export default defineConfig({
  integrations: [uno(), sitemap()],
  output: 'static',
  site: siteConfig.siteUrl,
});
