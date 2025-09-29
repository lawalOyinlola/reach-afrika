import { useEffect, useMemo, useState, useRef } from "react";
import {
  useInView,
  useScroll,
  useTransform,
  motion,
  MotionValue,
} from "motion/react";

import { cn } from "@/lib/utils";

type Grid = {
  rows: number;
  cols: number;
};

const DEFAULT_GRIDS: Record<string, Grid> = {
  "6x4": { rows: 4, cols: 6 },
  "8x8": { rows: 8, cols: 8 },
  "8x3": { rows: 3, cols: 8 },
  "4x6": { rows: 6, cols: 4 },
  "3x8": { rows: 8, cols: 3 },
};

type PredefinedGridKey = keyof typeof DEFAULT_GRIDS;

interface PixelImageProps {
  src: string;
  alt: string;
  grid?: PredefinedGridKey;
  customGrid?: Grid;
  grayscaleAnimation?: boolean;
  pixelFadeInDuration?: number; // in ms
  maxAnimationDelay?: number; // in ms
  colorRevealDelay?: number; // in ms
  delay?: number; // in ms - delay before animation starts
  isView?: boolean; // whether to wait for inView before starting animation
  className?: string;
  // Scroll trigger props
  scrollTrigger?: boolean; // enable scroll-triggered animation
  scrollStart?: string; // scroll position to start animation (e.g., "top bottom")
  scrollEnd?: string; // scroll position to end animation (e.g., "bottom top")
}

// Scroll-triggered pixel component
const ScrollTriggeredPixel = ({
  piece,
  src,
  grayscaleAnimation,
  pixelationProgress,
  grayscaleProgress,
  totalPieces,
}: {
  piece: { clipPath: string; index: number };
  src: string;
  grayscaleAnimation: boolean;
  pixelationProgress: MotionValue<number>;
  grayscaleProgress: MotionValue<number>;
  totalPieces: number;
}) => {
  const pieceOpacity = useTransform(
    pixelationProgress,
    [piece.index / totalPieces, (piece.index + 1) / totalPieces],
    [0, 1]
  );

  const pieceGrayscale = useTransform(grayscaleProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      className="absolute inset-0"
      style={{
        clipPath: piece.clipPath,
        opacity: pieceOpacity,
      }}
      aria-hidden="true"
    >
      <motion.img
        src={src}
        alt=""
        className="z-1 w-full h-full object-cover"
        style={{
          filter: grayscaleAnimation ? `grayscale(${pieceGrayscale})` : "none",
        }}
        draggable={false}
        aria-hidden="true"
      />
    </motion.div>
  );
};

export const PixelImage = ({
  src,
  alt,
  grid = "6x4",
  grayscaleAnimation = true,
  pixelFadeInDuration = 1000,
  maxAnimationDelay = 1200,
  colorRevealDelay = 1300,
  delay = 0,
  isView = true,
  customGrid,
  className,
  scrollTrigger = false,
  scrollStart = "top bottom",
  scrollEnd = "bottom top",
}: PixelImageProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showColor, setShowColor] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, {
    once: !scrollTrigger,
    margin: "-10%",
  });

  // Scroll progress for scrubbing animation
  const { scrollYProgress } = useScroll({
    target: ref,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    offset: [scrollStart, scrollEnd] as any,
  });

  // Transform scroll progress to pixelation progress
  const pixelationProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Transform scroll progress to grayscale progress
  const grayscaleProgress = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1, 0.5, 0]
  );

  const MIN_GRID = 1;
  const MAX_GRID = 16;

  const { rows, cols } = useMemo(() => {
    const isValidGrid = (grid?: Grid) => {
      if (!grid) return false;
      const { rows, cols } = grid;
      return (
        Number.isInteger(rows) &&
        Number.isInteger(cols) &&
        rows >= MIN_GRID &&
        cols >= MIN_GRID &&
        rows <= MAX_GRID &&
        cols <= MAX_GRID
      );
    };

    return isValidGrid(customGrid) ? customGrid! : DEFAULT_GRIDS[grid];
  }, [customGrid, grid]);

  // Determine if animation should start
  const shouldAnimate = !isView || isInView;

  useEffect(() => {
    if (!shouldAnimate) return;

    if (scrollTrigger) {
      // For scroll trigger, we'll handle visibility in the render
      setIsVisible(true);
      setShowColor(true);
    } else {
      // For regular animation
      const startTimeout = setTimeout(() => {
        setIsVisible(true);
      }, delay);

      const colorTimeout = setTimeout(() => {
        setShowColor(true);
      }, delay + colorRevealDelay);

      return () => {
        clearTimeout(startTimeout);
        clearTimeout(colorTimeout);
      };
    }
  }, [shouldAnimate, delay, colorRevealDelay, scrollTrigger]);

  const pieces = useMemo(() => {
    const total = rows * cols;
    return Array.from({ length: total }, (_, index) => {
      const row = Math.floor(index / cols);
      const col = index % cols;

      const clipPath = `polygon(
        ${col * (100 / cols)}% ${row * (100 / rows)}%,
        ${(col + 1) * (100 / cols)}% ${row * (100 / rows)}%,
        ${(col + 1) * (100 / cols)}% ${(row + 1) * (100 / rows)}%,
        ${col * (100 / cols)}% ${(row + 1) * (100 / rows)}%
      )`;

      const delay = scrollTrigger ? 0 : Math.random() * maxAnimationDelay;
      return {
        clipPath,
        delay,
        index,
      };
    });
  }, [rows, cols, maxAnimationDelay, scrollTrigger]);

  if (scrollTrigger) {
    // Scroll-triggered animation
    return (
      <div
        ref={ref}
        className={cn("relative h-full w-full select-none", className)}
        role="img"
        aria-label={alt}
      >
        {/* Screen reader accessible fallback image */}
        <img src={src} alt={alt} className="sr-only" aria-hidden="false" />

        {/* Scroll-triggered pixelated animation */}
        {pieces.map((piece, index) => (
          <ScrollTriggeredPixel
            key={index}
            piece={piece}
            src={src}
            grayscaleAnimation={grayscaleAnimation}
            pixelationProgress={pixelationProgress}
            grayscaleProgress={grayscaleProgress}
            totalPieces={pieces.length}
          />
        ))}
      </div>
    );
  }

  // Regular animation
  return (
    <div
      ref={ref}
      className={cn("relative h-full w-full select-none", className)}
      role="img"
      aria-label={alt}
    >
      {/* Screen reader accessible fallback image */}
      <img src={src} alt={alt} className="sr-only" aria-hidden="false" />

      {/* Regular pixelated animation */}
      {pieces.map((piece, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-all ease-out",
            isVisible ? "opacity-100" : "opacity-0"
          )}
          style={{
            clipPath: piece.clipPath,
            transitionDelay: `${piece.delay}ms`,
            transitionDuration: `${pixelFadeInDuration}ms`,
          }}
          aria-hidden="true"
        >
          <img
            src={src}
            alt=""
            className={cn(
              "z-1 w-full h-full object-cover",
              grayscaleAnimation && (showColor ? "grayscale-0" : "grayscale")
            )}
            style={{
              transition: grayscaleAnimation
                ? `filter ${pixelFadeInDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`
                : "none",
            }}
            draggable={false}
            aria-hidden="true"
          />
        </div>
      ))}
    </div>
  );
};
