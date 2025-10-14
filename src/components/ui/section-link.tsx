import { useSmartNavigation } from "@/hooks/useSmartNavigation";
import { cn } from "@/lib/utils";

interface SectionLinkProps {
  sectionId: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void; // For closing mobile menu, etc.
}

export const SectionLink = ({
  sectionId,
  children,
  className,
  onClick,
}: SectionLinkProps) => {
  const { navigateToSection } = useSmartNavigation();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigateToSection(sectionId, e);
    onClick?.(); // Call additional onClick if provided (e.g., close mobile menu)
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "text-left cursor-pointer bg-transparent border-none p-0 font-inherit",
        className
      )}
    >
      {children}
    </button>
  );
};
