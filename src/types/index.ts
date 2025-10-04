// Product types
export interface Product {
  title: string;
  link?: string;
  thumbnail: string;
}

// Navbar types
export interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

export interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

export interface NavItemsProps {
  items: {
    name: string;
    link: string;
    onClick?: () => void;
  }[];
  className?: string;
  onItemClick?: (e: React.MouseEvent, item: { name: string; link: string; onClick?: () => void }) => void;
}

export interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

export interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

// Highlighter types
export type AnnotationAction =
  | "underline"
  | "box"
  | "circle"
  | "highlight"
  | "strike-through"
  | "crossed-off"
  | "bracket";

export interface HighlighterProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
  strokeWidth?: number;
  iterations?: number;
  animationDuration?: number;
  action?: AnnotationAction;
  padding?: number;
  multiline?: boolean;
  inView?: boolean;
  delay?: number; // in ms - delay before animation starts
}

// Theme toggler types
export interface ThemeTogglerProps {
  className?: string;
  text?: string;
}
