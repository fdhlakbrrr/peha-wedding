import { LayoutAlign, LayoutDirection } from "@/types";
import { useCallback } from "react";

export const useContainer = () => {
  const getContainerClassName = useCallback(
    (
      direction: LayoutDirection,
      justify: LayoutAlign,
      align: LayoutAlign
    ): string => {
      let className = "flex gap-5 p-5 box-border ";
      const concatClassName = (str: string): string => (className += `${str} `);

      if (direction === "COL") {
        concatClassName("flex-col");
      }

      switch (justify) {
        case "START":
          concatClassName("justify-start");
          break;
        case "CENTER":
          concatClassName("justify-center");
          break;
        case "END":
          concatClassName("justify-end");
          break;
        case "BETWEEN":
          concatClassName("justify-between");
          break;
      }

      switch (align) {
        case "START":
          concatClassName("items-start");
          break;
        case "CENTER":
          concatClassName("items-center");
          break;
        case "END":
          concatClassName("items-end");
          break;
        case "BETWEEN":
          concatClassName("items-between");
          break;
      }

      return className;
    },
    []
  );

  return { getContainerClassName };
};
