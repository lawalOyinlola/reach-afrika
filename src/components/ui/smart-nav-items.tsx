import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useState } from "react";
import { Link } from "react-router";
import { SectionLink } from "./section-link";
import type { NavItem } from "@/lib/navigation";

interface SmartNavItemsProps {
  items: NavItem[];
  className?: string;
}

/**
 * Desktop navigation items with smart section link handling
 */
export const SmartNavItems = ({ items, className }: SmartNavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-zinc-600 transition duration-200 hover:text-zinc-800 lg:flex lg:space-x-2",
        className
      )}
    >
      {items.map((item, idx) => {
        const isSection = item.type === "section";

        return isSection ? (
          <SectionLink
            key={`nav-${idx}`}
            sectionId={item.link}
            className="relative px-4 py-2 text-neutral-600 dark:text-neutral-300"
          >
            {hovered === idx && (
              <motion.div
                layoutId="hovered"
                className="absolute inset-0 h-full w-full rounded-full bg-gray-100 dark:bg-neutral-800"
              />
            )}
            <span
              className="relative z-20"
              onMouseEnter={() => setHovered(idx)}
            >
              {item.name}
            </span>
          </SectionLink>
        ) : (
          <Link
            key={`nav-${idx}`}
            to={item.link}
            onMouseEnter={() => setHovered(idx)}
            className="relative px-4 py-2 text-neutral-600 dark:text-neutral-300"
          >
            {hovered === idx && (
              <motion.div
                layoutId="hovered"
                className="absolute inset-0 h-full w-full rounded-full bg-gray-100 dark:bg-neutral-800"
              />
            )}
            <span className="relative z-20">{item.name}</span>
          </Link>
        );
      })}
    </motion.div>
  );
};
