import { useNavigate, useLocation } from "react-router";
import { useCallback, useEffect } from "react";

// Global flag to track if we should allow hash-based scrolling
// This prevents mobile nav state changes from triggering scrolls
let hasHandledInitialHash = false;
let lastProcessedHash = "";

export const useSmartNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Handle initial page load with hash or after navigation with hash
  // Only scroll once per unique hash
  useEffect(() => {
    const currentHash = location.hash;

    // If there's a hash that we've already processed, remove it immediately
    if (
      currentHash &&
      currentHash === lastProcessedHash &&
      hasHandledInitialHash
    ) {
      window.history.replaceState(null, "", location.pathname);
      return;
    }

    // Only process if:
    // 1. There's a hash in the URL
    // 2. We haven't handled initial hash yet OR this is a new hash we haven't processed
    // 3. This is a different hash than the last one we processed
    if (
      currentHash &&
      (!hasHandledInitialHash || currentHash !== lastProcessedHash)
    ) {
      const sectionId = currentHash.replace("#", "");
      const element = document.getElementById(sectionId);

      if (element) {
        // Small delay to ensure page has loaded
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
          // Remove hash from URL after scrolling
          window.history.replaceState(null, "", location.pathname);
        }, 100);
      }

      hasHandledInitialHash = true;
      lastProcessedHash = currentHash;
    }
  }, [location.hash, location.pathname]);

  // Reset the global flags when pathname changes (navigating to a different page)
  useEffect(() => {
    hasHandledInitialHash = false;
    lastProcessedHash = "";
  }, [location.pathname]);

  const navigateToSection = useCallback(
    (sectionId: string, event?: React.MouseEvent<HTMLElement>) => {
      event?.preventDefault();

      // Check if the section exists on the current page
      const element = document.getElementById(sectionId);

      if (element) {
        // Section exists on current page - scroll to it
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else {
        // Section doesn't exist on current page - navigate to home page
        navigate(`/#${sectionId}`);
      }
    },
    [navigate]
  );

  return { navigateToSection, isHomePage: location.pathname === "/" };
};
