import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useResponsivePadding = (showInput: boolean) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const shouldShowSearchButton =
    currentPath === "/" || currentPath.startsWith("/movie/");
  const shouldShowAddButton = currentPath === "/" || currentPath === "/search";
  const searchPath =
    showInput && currentPath === "/search" && windowWidth < 1024;
  const shouldApplyPadding =
    showInput &&
    (currentPath.startsWith("/movie/") || currentPath === "/") &&
    windowWidth < 1024;
  const paddingClass = searchPath
    ? "pt-[56px] pb-[18.4px]"
    : shouldApplyPadding
    ? "pt-[100px]"
    : "pt-0";

  return { shouldShowSearchButton, shouldShowAddButton, paddingClass };
};

export const useSearchPathActive = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const searchPath = currentPath === "/search";
  const searchPathMobile = searchPath && windowWidth < 1024;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return { searchPath, searchPathMobile };
};
