import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Skeleton } from "./skeleton";

interface OptimizedImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  skeletonClassName?: string;
  priority?: boolean; // Skip lazy loading for above-the-fold images
}

/**
 * Renders an image with lazy loading and a skeleton placeholder until the image is loaded.
 *
 * The image starts loading when it is about to enter the viewport unless marked as priority,
 * in which case it loads immediately. The skeleton is displayed until the image finishes loading.
 *
 * @param priority - If `true`, the image loads immediately instead of lazily.
 * @param src - The source URL of the image.
 * @param alt - The alternative text description for the image.
 * @param className - Optional additional CSS classes for the wrapper and image.
 * @param skeletonClassName - Optional CSS classes for the skeleton placeholder.
 * @returns The rendered image component with loading optimizations.
 */
export function OptimizedImage({
  src,
  alt,
  className,
  skeletonClassName,
  priority = false,
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: "50px", // Start loading 50px before image comes into view
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  return (
    <div ref={imgRef} className={cn("relative", className)}>
      {!isLoaded && (
        <Skeleton className={cn("absolute inset-0", skeletonClassName)} />
      )}
      {isInView && (
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className={cn(
            "transition-opacity duration-300",
            isLoaded ? "opacity-100" : "opacity-0",
            className
          )}
          onLoad={() => setIsLoaded(true)}
          {...props}
        />
      )}
    </div>
  );
}