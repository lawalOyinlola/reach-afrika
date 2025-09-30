import {
  Navbar as NavbarComponent,
  NavBody,
  NavItems,
  MobileNav,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";
import { Logo } from "./logo";
import { Link } from "react-router";

export function Navbar() {
  const navItems = [
    { name: "About", link: "#about" },
    { name: "Programs", link: "#programs" },
    { name: "Impact", link: "#impact" },
    { name: "Features", link: "#features" },
    { name: "Contact", link: "#contact" },
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
        <div className="flex items-center gap-4">
          <a href="/donate" className="hidden md:inline-block">
            <NavbarButton variant="primary">Donate</NavbarButton>
          </a>
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
              <NavbarButton variant="primary" className="w-full">
                Donate
              </NavbarButton>
            </a>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </NavbarComponent>
  );
}
