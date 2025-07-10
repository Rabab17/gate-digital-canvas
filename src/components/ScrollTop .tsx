// src/components/ScrollToTop.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // كل ما يتغير المسار، الصفحة ترجع لأعلى
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // ممكن تخليها "auto" لو عايزه بدون انيميشن
    });
  }, [pathname]);

  return null;
}
