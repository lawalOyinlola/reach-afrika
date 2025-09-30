import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // React and core libraries
          "react-vendor": ["react", "react-dom", "react-router"],

          // UI libraries
          "ui-vendor": [
            "@radix-ui/react-slot",
            "@radix-ui/react-label",
            "@base-ui-components/react",
            "class-variance-authority",
            "clsx",
            "tailwind-merge",
          ],

          // Animation libraries
          "animation-vendor": ["motion", "framer-motion"],

          // Form libraries
          "form-vendor": ["react-hook-form", "@hookform/resolvers", "zod"],

          // SEO and analytics
          "seo-vendor": [
            "react-helmet-async",
            "@vercel/analytics",
            "@vercel/speed-insights",
            "web-vitals",
          ],

          // Icons and utilities
          "icons-vendor": ["@phosphor-icons/react", "lucide-react"],

          // Other utilities
          "utils-vendor": ["rough-notation", "sonner"],
        },
      },
    },
    // Increase chunk size warning limit to 1000kb temporarily
    chunkSizeWarningLimit: 1000,
  },
});
