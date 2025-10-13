import { useEffect } from "react";
import { useLocation } from "react-router";
import { Navbar } from "@/components/NavBar";
import { AppFooter } from "@/components/AppFooter";
import { Outlet } from "react-router";
import { Toaster } from "sonner";

/**
 * Application layout that provides global chrome and manages scroll behavior on navigation.
 *
 * When the route changes this component scrolls the page to the top unless the new location includes a hash (preserving in-page anchor navigation). It renders the global Toaster, Navbar, a main content area that hosts nested routes via an Outlet, and the AppFooter.
 *
 * @returns The layout JSX element containing the Toaster, Navbar, main Outlet container, and AppFooter
 */
export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change, unless there's a hash for section navigation
    if (!location.hash) {
      window.scrollTo({
        top: 0,
        behavior: "instant", // Instant scroll for page changes
      });
    }
  }, [location.pathname, location.hash]);

  return (
    <>
      <Toaster />
      <Navbar />
      <main className="min-h-screen flex flex-col">
        <Outlet />
      </main>
      <AppFooter />
    </>
  );
}