import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
  base: "./",
  build: {
    outDir: "dist/build", // Output directory
  },
  plugins: [
    react(),
    ViteImageOptimizer({
      png: { quality: 80 },
      jpeg: { quality: 75 },
      avif: { quality: 80 },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@img": path.resolve(__dirname, "./public/imgs/"),
    },
  },
});
