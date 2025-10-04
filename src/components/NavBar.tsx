import { useState } from "react";
import { Link } from "react-router";
import {
  Navbar as NavbarComponent,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";
import { Logo } from "./logo";
import { Button } from "./ui/button";

export function Navbar() {
  const navItems = [
    { name: "About", link: "/about" },
    { name: "Programs", link: "#programs" },
    { name: "Impact", link: "#impact" },
    { name: "Volunteer", link: "#contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <NavbarComponent>
      {/* Desktop Navigation */}
      <NavBody>
        <Link to="/" className="flex-center  cursor-pointer">
          <Logo />
        </Link>
        <NavItems items={navItems} />
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
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-neutral-600 dark:text-neutral-300"
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
          <div className="flex w-full flex-col gap-4">
            <AnimatedThemeToggler className="z-20" text="Switch Theme" />
            <a href="/donate" onClick={() => setIsMobileMenuOpen(false)}>
              {/* <NavbarButton variant="primary" className="w-full">
                Donate
              </NavbarButton> */}
              <Button size="lg" className="w-full">
                Donate
              </Button>
            </a>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </NavbarComponent>
  );
}
