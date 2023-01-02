import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";
import vuetify from "vite-plugin-vuetify";

const { GITHUB_PAGES } = process.env;

console.log("GITHUB_PAGES", GITHUB_PAGES, typeof GITHUB_PAGES);

// https://vitejs.dev/config/
export default defineConfig({
  base: GITHUB_PAGES ? "/portfolio" : "/",
  plugins: [vue(), vuetify({ autoImport: true })],
  resolve: {
    alias: {
      "@": path.join(__dirname, "src"),
    },
  },
});
