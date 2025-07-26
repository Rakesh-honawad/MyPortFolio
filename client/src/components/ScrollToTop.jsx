import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    // Using a timeout to debounce the scroll action
    const timeoutId = setTimeout(handleScroll, 100); // Adjust the timeout as needed

    return () => clearTimeout(timeoutId); // Cleanup on unmount
  }, [pathname]);

  return null;
};

export default ScrollToTop;
