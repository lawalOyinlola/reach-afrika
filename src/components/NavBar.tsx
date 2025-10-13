import { useState } from "react";
import { Link } from "react-router";
import {
  Navbar as NavbarComponent,
  NavBody,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";
import { Logo } from "./logo";
import { Button } from "./ui/button";
import { SectionLink } from "./ui/section-link";
import { SmartNavItems } from "./ui/smart-nav-items";
import { navItems } from "@/lib/navigation";

/**
 * Renders a responsive navigation bar with desktop and mobile variants, including the site logo, navigation items, a theme toggler, and a donate action.
 *
 * The component manages internal state for the mobile menu and provides:
 * - Desktop layout: logo link to "/", rendered navigation items, a donate button (hidden on small screens), and a theme toggler.
 * - Mobile layout: header with logo and toggle, a slide-out menu populated from `navItems` (section links use `SectionLink`), a theme toggler, and a full-width donate button. Menu closes when an item or the donate link is clicked or when the menu requests close.
 *
 * @returns The React element for the responsive Navbar UI
 */
export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <NavbarComponent>
      {/* Desktop Navigation */}
      <NavBody>
        <Link
          to="/"
          className="flex-center cursor-pointer"
          aria-label="Go to homepage"
        >
          <Logo />
        </Link>
        <SmartNavItems items={navItems} />
        <div className="flex items-center gap-2">
          <Button size="lg" className="max-md:hidden z-2" asChild>
            <Link to="/donate">Donate</Link>
          </Button>
          <AnimatedThemeToggler className="z-20" />
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <Logo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) =>
            item.type === "section" ? (
              <SectionLink
                key={`mobile-link-${idx}`}
                sectionId={item.link}
                className="relative text-neutral-600 dark:text-neutral-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="block">{item.name}</span>
              </SectionLink>
            ) : (
              <Link
                key={`mobile-link-${idx}`}
                to={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </Link>
            )
          )}
          <div className="flex w-full flex-col gap-4">
            <AnimatedThemeToggler className="z-20" text="Switch Theme" />
            <Button size="lg" className="w-full" asChild>
              <Link to="/donate" onClick={() => setIsMobileMenuOpen(false)}>
                Donate
              </Link>
            </Button>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </NavbarComponent>
  );
}