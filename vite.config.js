import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  build: {
    outDir: "view-build",
  },
  cacheDir: ".vite-cache",
  plugins: [react(), tailwindcss()],
});
