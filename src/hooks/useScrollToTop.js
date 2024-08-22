import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToTop = (path) => {
  const location = useLocation();
  
  useEffect(() => {
    if (location.pathname === path) {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }, [location, path]);
};

export default useScrollToTop;