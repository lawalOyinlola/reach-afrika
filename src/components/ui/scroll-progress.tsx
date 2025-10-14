import { motion, useScroll } from "motion/react";
import type { MotionProps } from "motion/react";

import { cn } from "@/lib/utils";
import { forwardRef, type HTMLAttributes } from "react";

type ScrollProgressProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  keyof MotionProps
>;

export const ScrollProgress = forwardRef<HTMLDivElement, ScrollProgressProps>(
  ({ className, ...props }, ref) => {
    const { scrollYProgress } = useScroll();

    return (
      <motion.div
        ref={ref}
        className={cn(
          "fixed inset-x-0 top-0 z-500 h-1 origin-left bg-gradient-to-r from-primary via-chart-3 to-chart-4",
          className
        )}
        style={{
          scaleX: scrollYProgress,
        }}
        {...props}
      />
    );
  }
);

ScrollProgress.displayName = "ScrollProgress";
