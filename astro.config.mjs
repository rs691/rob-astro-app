// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    site: 'https://github.com/rs691/rob-astro-app.git',
    base: '/rob-astro-app/',
    integrations: [mdx(), sitemap(), react()],
});