import path from "path";
import pluginRewriteAll from "vite-plugin-rewrite-all";
import vue from "@vitejs/plugin-vue";
import vuetify from "vite-plugin-vuetify";
import { defineConfig } from "vite";

const { BASE_URL } = process.env;

// https://vitejs.dev/config/
export default defineConfig({
  base: BASE_URL || "/",
  plugins: [vue(), vuetify({ autoImport: true }), pluginRewriteAll()],
  server: {
    host: true,
  },
  resolve: {
    alias: {
      "@": path.join(__dirname, "src"),
    },
  },
});
