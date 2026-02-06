// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],

  // Inline CSS to remove render-blocking request (PageSpeed)
  build: {
    inlineStylesheets: "always",
  },
});