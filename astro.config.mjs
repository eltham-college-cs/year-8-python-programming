// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import rehypePython from './src/lib/rehype-python.ts';
import rehypeExternalLinks from './src/lib/rehype-external-links.ts';
import videoCheck from './src/lib/video-check.ts';

export default defineConfig({
  site: process.env.PAGES_ORIGIN,
  base: process.env.PAGES_BASE_PATH,
  trailingSlash: 'always',
  integrations: [mdx(), videoCheck()],
  markdown: {
    syntaxHighlight: false,
    rehypePlugins: [rehypePython, rehypeExternalLinks],
  },
  build: { format: 'directory' },
});
