import { useEffect, useMemo, useState, useRef } from "react";
import {
  useInView,
  useScroll,
  useTransform,
  useSpring,
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
  scrollStart?: ScrollOffset; // e.g., "start end"
  scrollEnd?: ScrollOffset; // e.g., "end start"
}

type ScrollEdge = "start" | "center" | "end";
type ScrollOffset = `${ScrollEdge} ${ScrollEdge}`;

export const PixelImage = ({
  src,
  alt,
  grid = "6x4",
  grayscaleAnimation = true,
  pixelFadeInDuration = 1000,
  maxAnimationDelay = 1200,
  colorRevealDelay = 1300,
  delay = 0,
  isView = false,
  customGrid,
  className,
  scrollTrigger = false,
  scrollStart = "start end",
  scrollEnd = "end start",
}: PixelImageProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showColor, setShowColor] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, {
    once: !scrollTrigger,
    margin: "-10%",
  });

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
  }, [shouldAnimate, delay, colorRevealDelay]);

  // Scroll-driven animation value (used only when scrollTrigger is true)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [scrollStart, scrollEnd],
  });

  // Keep color reveal bound to the end of the scroll range
  const maxThreshold = 1;

  // Keep entire image grayscale until pixelation completes, then quickly reveal color
  const colorRevealWindow = 0.04; // 4% scroll window for punchy flip to color
  const globalGrayValue = useTransform(
    scrollYProgress,
    [0, maxThreshold, Math.min(1, maxThreshold + colorRevealWindow)],
    [1, 1, 0]
  );
  const smoothGrayValue = useSpring(globalGrayValue, {
    stiffness: 120,
    damping: 28,
    mass: 0.8,
  });
  const globalFilterMotion = useTransform(
    smoothGrayValue,
    (v) => `grayscale(${v})`
  );

  // Single piece component to safely use hooks per piece in scroll mode
  const PixelPiece = ({
    src,
    clipPath,
    threshold,
    grayscaleAnimation,
    yProgress,
    filterMotion,
  }: {
    src: string;
    clipPath: string;
    threshold: number; // 0..1 position in scroll
    grayscaleAnimation: boolean;
    yProgress: MotionValue<number>;
    filterMotion?: MotionValue<string>;
  }) => {
    // Reveal opacity around the threshold
    const opacity = useTransform(
      yProgress,
      [Math.max(0, threshold - 0.1), Math.min(1, threshold + 0.1)],
      [0, 1]
    );

    return (
      <motion.div
        className="absolute inset-0"
        style={{
          clipPath,
          opacity,
        }}
        aria-hidden="true"
      >
        <motion.img
          src={src}
          alt=""
          className={cn("z-1 w-full h-full object-cover")}
          style={
            grayscaleAnimation && filterMotion
              ? { filter: filterMotion }
              : undefined
          }
          draggable={false}
          aria-hidden="true"
        />
      </motion.div>
    );
  };

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

      const delay = Math.random() * maxAnimationDelay;
      return {
        clipPath,
        delay,
        index,
      };
    });
  }, [rows, cols, maxAnimationDelay]);

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

      {/* Pixelated animation - scroll driven when enabled, else time-based */}
      {scrollTrigger
        ? pieces.map((piece, index) => (
            <PixelPiece
              key={index}
              src={src}
              clipPath={piece.clipPath}
              threshold={piece.delay / maxAnimationDelay}
              grayscaleAnimation={grayscaleAnimation}
              yProgress={scrollYProgress}
              filterMotion={globalFilterMotion}
            />
          ))
        : pieces.map((piece, index) => (
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
                  grayscaleAnimation &&
                    (showColor ? "grayscale-0" : "grayscale")
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
