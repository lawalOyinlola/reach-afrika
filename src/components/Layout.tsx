import { useEffect } from "react";
import { useLocation } from "react-router";
import { Navbar } from "@/components/NavBar";
import { AppFooter } from "@/components/AppFooter";
import { Outlet } from "react-router";
import { Toaster } from "sonner";

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
