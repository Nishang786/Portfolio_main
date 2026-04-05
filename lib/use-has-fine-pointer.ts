"use client";

import { useEffect, useState } from "react";

export function useHasFinePointer() {
  const [hasFinePointer, setHasFinePointer] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const updateMatch = () => setHasFinePointer(mediaQuery.matches);

    updateMatch();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", updateMatch);

      return () => mediaQuery.removeEventListener("change", updateMatch);
    }

    mediaQuery.addListener(updateMatch);

    return () => mediaQuery.removeListener(updateMatch);
  }, []);

  return hasFinePointer;
}
