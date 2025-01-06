"use client";

import * as React from "react";

export const useMotionSource = () => {
  const matchMedia = React.useMemo(() => {
    if (typeof window !== "undefined") {
      return {
        sm: window.matchMedia("(min-width: 500px)"),
        md: window.matchMedia("(min-width: 850px)"),
        lg: window.matchMedia("(min-width: 1024px)"),
        xl: window.matchMedia("(min-width: 1280px)"),
        xxl: window.matchMedia("(min-width: 1536px)"),
      };
    }
  }, []);

  const defaultTransition = React.useMemo(() => {
    return { duration: 2, ease: "easeIn" };
  }, []);

  return { matchMedia, defaultTransition };
};
