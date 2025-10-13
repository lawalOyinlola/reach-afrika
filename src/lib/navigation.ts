/**
 * Navigation configuration
 * Centralized place for all navigation items
 */

export type NavItemType = "page" | "section";

export interface NavItem {
  name: string;
  link: string;
  type: NavItemType;
}

export interface FooterLink {
  title: string;
  href: string;
  type: NavItemType;
}

// Navbar navigation items
export const navItems: NavItem[] = [
  { name: "About", link: "/about", type: "page" },
  { name: "Programs", link: "programs", type: "section" },
  { name: "Impact", link: "impact", type: "section" },
  { name: "Volunteer", link: "contact", type: "section" },
];

// Footer navigation links
export const footerLinks: FooterLink[] = [
  { title: "About", href: "/about", type: "page" },
  { title: "Programs", href: "programs", type: "section" },
  { title: "Impact", href: "impact", type: "section" },
  { title: "Testimonials", href: "testimonials", type: "section" },
  { title: "Contact", href: "contact", type: "section" },
  { title: "Governance & Team", href: "/team", type: "page" },
  { title: "Donate", href: "/donate", type: "page" },
];
