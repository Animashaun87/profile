import { useEffect } from "react";

function ScrollToTop({ children, location }) {
  useEffect(() => window.scrollTo(0, 0), [location.pathname]);
  return children;
}

export default ScrollToTop;
