import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Component that automatically scrolls to the top when the route changes
 * This is different from the ScrollToTopButton which is a UI element
 */
const RouteScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant", // Changed from "auto" for better semantics
    });
  }, [pathname]);

  return null;
};

export default RouteScrollToTop;
