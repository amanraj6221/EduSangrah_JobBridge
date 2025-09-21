import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),          // Fast React refresh using SWC
    tsconfigPaths(),  // Auto-resolve paths from tsconfig.json
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // still keep custom alias
    },
  },
  build: {
    sourcemap: true, // helpful for debugging in production
    outDir: "dist",
  },
});
