import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "http://localhost:5174/",
  server: {
    port: 5174,
    cors: true,
    origin: "http://localhost:5174",
  },
});
