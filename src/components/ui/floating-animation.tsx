import { motion } from "motion/react";
import { type ReactNode } from "react";

interface FloatingAnimationProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
  duration?: number;
  delay?: number;
}

export const FloatingAnimation = ({
  children,
  className = "",
  intensity = 10,
  duration = 3,
  delay = 0,
}: FloatingAnimationProps) => {
  return (
    <motion.div
      className={className}
      animate={{
        y: [-intensity, intensity, -intensity],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};
