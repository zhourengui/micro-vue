import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    cors: true,
  },
  resolve: {
    alias: {
      "@/generated": path.resolve(__dirname, "./generated"),
      "@/src": path.resolve(__dirname, "./src"),
    },
  },
});
