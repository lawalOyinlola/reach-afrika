import React, { useEffect } from "react";
import { reportWebVitals } from "@/lib/analytics";

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  children,
}) => {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalImages = [
        "/logo/logo-words.png",
        "/images/_DSC3090.webp",
        "/images/_DSC2854.webp",
      ];

      criticalImages.forEach((src) => {
        const link = document.createElement("link");
        link.rel = "preload";
        link.as = "image";
        link.href = src;
        document.head.appendChild(link);
      });
    };

    // Optimize images
    const optimizeImages = () => {
      const images = document.querySelectorAll("img[data-src]");
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || "";
            img.classList.remove("lazy");
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach((img) => imageObserver.observe(img));
    };

    // Monitor Core Web Vitals
    const measureWebVitals = () => {
      if (typeof window !== "undefined") {
        import("web-vitals").then(({ onCLS, onFCP, onLCP, onTTFB }) => {
          onCLS(reportWebVitals);
          onFCP(reportWebVitals);
          onLCP(reportWebVitals);
          onTTFB(reportWebVitals);
        });
      }
    };

    // Initialize optimizations
    preloadCriticalResources();
    optimizeImages();
    measureWebVitals();

    // Cleanup
    return () => {
      // Cleanup any observers or listeners
    };
  }, []);

  return <>{children}</>;
};

// Lazy loading component for images
interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
}

export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = "",
  placeholder = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8vPjwvc3ZnPg==",
}) => {
  return (
    <img
      src={placeholder}
      data-src={src}
      alt={alt}
      className={`lazy ${className}`}
      loading="lazy"
      style={{
        transition: "opacity 0.3s ease-in-out",
        opacity: 0.7,
      }}
      onLoad={(e) => {
        const img = e.target as HTMLImageElement;
        img.style.opacity = "1";
      }}
    />
  );
};

// Critical CSS inliner
export const CriticalCSS: React.FC = () => {
  const criticalCSS = `
    /* Critical above-the-fold styles */
    body { margin: 0; font-family: system-ui, -apple-system, sans-serif; }
    .hero { min-height: 100vh; }
    .navbar { position: fixed; top: 0; width: 100%; z-index: 1000; }
    .sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0; }
  `;

  return <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />;
};

// Resource hints component
export const ResourceHints: React.FC = () => {
  return (
    <>
      {/* DNS prefetch for external domains */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />

      {/* Preconnect to critical third-party origins */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />

      {/* Preload critical fonts */}
      <link
        rel="preload"
        href="/font/bokcero.otf"
        as="font"
        type="font/otf"
        crossOrigin="anonymous"
      />
    </>
  );
};
