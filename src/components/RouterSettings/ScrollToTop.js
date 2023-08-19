import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!pathname.includes("home")) {
      // Adjust "filter" to the keyword in your URL that indicates the filter
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
