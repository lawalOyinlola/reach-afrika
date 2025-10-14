import { cn } from "@/lib/utils";

type PageLoaderProps = {
  className?: string;
};

const PageLoader = ({ className }: PageLoaderProps) => (
  <div
    className={cn(
      "min-h-[60vh] flex flex-col items-center justify-center gap-4",
      className
    )}
  >
    {/* Spinner */}
    <div className="relative w-12 h-12">
      {/* Outer ring */}
      <div className="absolute inset-0 rounded-full border-4 border-primary/20" />
      {/* Spinning ring */}
      <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary animate-spin" />
      {/* Inner pulse dot */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
      </div>
    </div>

    {/* Loading text */}
    <p
      className="text-sm text-muted-foreground animate-pulse"
      aria-live="polite"
    >
      Loading page...
    </p>
  </div>
);

export default PageLoader;
