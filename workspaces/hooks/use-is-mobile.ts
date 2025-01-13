import { breakpoints } from "@tokens";
import { useLayoutEffect, useState } from "preact/hooks";
import { Breakpoints } from "../tokens/breakpoints/types";

export const useIsMobile = (breakpoint: Breakpoints = "DESKTOP_S") => {
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const updateSize = (): void => {
      setIsMobile(window.innerWidth < breakpoints[breakpoint]);
    };

    updateSize();
  }, []);

  return isMobile;
};
