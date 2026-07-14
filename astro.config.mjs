// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://kknt141-batursari.example.id",
  vite: {
    plugins: [tailwindcss()],
  },
});
