import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";
import vuetify from "vite-plugin-vuetify";

const { BASE_URL } = process.env;

// https://vitejs.dev/config/
export default defineConfig({
  base: BASE_URL || "/",
  plugins: [vue(), vuetify({ autoImport: true })],
  resolve: {
    alias: {
      "@": path.join(__dirname, "src"),
    },
  },
});
