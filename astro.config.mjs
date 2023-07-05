import { defineConfig } from 'astro/config';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import nodejs from '@astrojs/node';
import node from "@astrojs/node";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  // ...
  adapter: netlify(),
  output: 'hybrid',
  site: 'https://astro-starter-pack.netlify.app',
  styles: [{
    // Apply Tailwind CSS
    postcss: {
      plugins: [tailwindcss, autoprefixer]
    }
  }],
  integrations: [react(), tailwind()]
});