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
  server: {
    headers: {
      "X-Frame-Options": "SAMEORIGIN",
      "X-Content-Type-Options": "nosniff",
      "X-XSS-Protection": "1; mode=block",
      "Referrer-Policy": "strict-origin-when-cross-origin",
    },
  },
  preview: {
    headers: {
      "X-Frame-Options": "SAMEORIGIN",
      "X-Content-Type-Options": "nosniff",
      "X-XSS-Protection": "1; mode=block",
      "Referrer-Policy": "strict-origin-when-cross-origin",
    },
  },
  build: {
    // Enable minification
    minify: "esbuild", // Use esbuild for faster builds
    // Optimize chunk size
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Core React libraries
          if (
            id.includes("node_modules/react") ||
            id.includes("node_modules/react-dom")
          ) {
            return "react-vendor";
          }
          // Router
          if (id.includes("node_modules/react-router")) {
            return "router-vendor";
          }
          // Animation libraries (larger bundles)
          if (
            id.includes("node_modules/motion") ||
            id.includes("node_modules/framer-motion")
          ) {
            return "animation-vendor";
          }
          // Form libraries
          if (
            id.includes("node_modules/react-hook-form") ||
            id.includes("node_modules/@hookform") ||
            id.includes("node_modules/zod")
          ) {
            return "form-vendor";
          }
          // UI component libraries
          if (
            id.includes("node_modules/@radix-ui") ||
            id.includes("node_modules/@base-ui-components")
          ) {
            return "ui-vendor";
          }
          // Icon libraries
          if (
            id.includes("node_modules/@phosphor-icons") ||
            id.includes("node_modules/lucide-react")
          ) {
            return "icons-vendor";
          }
          // SEO and analytics (low priority)
          if (
            id.includes("node_modules/react-helmet-async") ||
            id.includes("node_modules/@vercel/analytics") ||
            id.includes("node_modules/@vercel/speed-insights") ||
            id.includes("node_modules/web-vitals")
          ) {
            return "seo-vendor";
          }
          // Other utilities
          if (
            id.includes("node_modules/rough-notation") ||
            id.includes("node_modules/sonner") ||
            id.includes("node_modules/next-themes")
          ) {
            return "utils-vendor";
          }
        },
        // Optimize asset file names
        assetFileNames: (assetInfo) => {
          if (!assetInfo.name) return `assets/[name]-[hash][extname]`;
          const info = assetInfo.name.split(".");
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          if (/woff|woff2|eot|ttf|otf/i.test(ext)) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
      },
    },
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 500,
    // Enable source maps for debugging (optional, disable in production)
    sourcemap: false,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ["react", "react-dom", "react-router", "motion", "framer-motion"],
    exclude: ["@vercel/speed-insights", "@vercel/analytics"],
  },
});
