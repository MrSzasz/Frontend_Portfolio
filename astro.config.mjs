import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from 'astro-robots-txt';


// https://astro.build/config
export default defineConfig({
  site: 'https://lugo-tomas-portfolio.vercel.app',

  integrations: [react(), tailwind({
    applyBaseStyles: false
  }), sitemap(), robotsTxt()]
});