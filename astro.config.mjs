import { defineConfig } from 'astro/config';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // ...
  site: 'https://astro-starter-pack.netlify.app',
  styles: [{
    // Apply Tailwind CSS
    postcss: {
      plugins: [tailwindcss, autoprefixer]
    }
  }],
  integrations: [react(), tailwind()]
});