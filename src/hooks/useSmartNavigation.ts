import { useNavigate, useLocation } from "react-router";
import { useCallback, useEffect } from "react";

export const useSmartNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Handle initial page load with hash or after navigation with hash
  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace("#", "");
      const element = document.getElementById(sectionId);

      if (element) {
        // Small delay to ensure page has loaded
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }
    }
  }, [location.hash, location.pathname]);

  const navigateToSection = useCallback(
    (sectionId: string, event?: React.MouseEvent) => {
      event?.preventDefault();

      // First, check if the section exists on the current page
      const element = document.getElementById(sectionId);

      if (element) {
        // Section exists on current page - scroll to it
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else {
        // Section doesn't exist on current page - navigate to home page
        // (assuming home page has all sections)
        navigate(`/#${sectionId}`);
      }
    },
    [navigate]
  );

  return { navigateToSection, isHomePage: location.pathname === "/" };
};
