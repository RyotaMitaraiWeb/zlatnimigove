// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://RyotaMitaraiWeb.github.io',
  base: 'zlatnimigove',
  vite: {
    plugins: [tailwindcss()]
  }
});
