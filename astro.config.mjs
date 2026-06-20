import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// When building for the GitHub Pages preview, the site is served from a
// sub-path (https://<owner>.github.io/Infinita-website). The deploy workflow
// sets GITHUB_PAGES=true so we can apply the correct site/base there while
// keeping the production (infinita.one) build at the root.
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

// https://astro.build/config
export default defineConfig({
  site: isGitHubPages ? 'https://jbenpce.github.io' : 'https://infinita.one',
  base: isGitHubPages ? '/Infinita-website' : '/',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
