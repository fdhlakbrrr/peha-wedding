import { TextAlign, TextCase } from "@/types";
import { useCallback } from "react";

export const useText = () => {
  const getTextCaseClassName = useCallback((textCase: TextCase): string => {
    switch (textCase) {
      case "NORMAL_CASE":
        return "normal-case";
      case "UPPER_CASE":
        return "uppercase";
      case "CAPITALIZE":
        return "capitalize";
    }
  }, []);

  const getTextAlignClassName = useCallback((textAlign: TextAlign): string => {
    switch (textAlign) {
      case "LEFT":
        return "text-left";
      case "CENTER":
        return "text-center";
      case "RIGHT":
        return "text-right";
      case "START":
        return "text-start";
      case "END":
        return "text-end";
      case "JUSTIFY":
        return "text-justify";
    }
  }, []);

  return {
    getTextCaseClassName,
    getTextAlignClassName,
  };
};
