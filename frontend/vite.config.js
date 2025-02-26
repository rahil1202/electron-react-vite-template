import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./", // Ensures correct file paths in production
  plugins: [react()],
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
