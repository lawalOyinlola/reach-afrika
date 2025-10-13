import { Link } from "react-router";
import { useSmartNavigation } from "@/hooks/useSmartNavigation";
import { cn } from "@/lib/utils";

interface SectionLinkProps {
  sectionId: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void; // For closing mobile menu, etc.
}

/**
 * Smart section link component
 * - Uses Link for SEO benefits
 * - Smoothly scrolls on home page
 * - Navigates + scrolls when on other pages
 */
export const SectionLink = ({
  sectionId,
  children,
  className,
  onClick,
}: SectionLinkProps) => {
  const { navigateToSection } = useSmartNavigation();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    navigateToSection(sectionId, e);
    onClick?.(); // Call additional onClick if provided (e.g., close mobile menu)
  };

  return (
    <Link to={`/#${sectionId}`} onClick={handleClick} className={cn(className)}>
      {children}
    </Link>
  );
};
