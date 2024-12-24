import { Fragment, memo } from "react";
import { Pacifico, Roboto } from "next/font/google";
import type { TextAlign, TextCase, TextVariant } from "@/types";
import type { ReactNode } from "react";
import { useText } from "@/hooks/ui";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });
const pacifico = Pacifico({ weight: "400", subsets: ["latin"] });

interface Props {
  variant?: TextVariant;
  subText?: boolean;
  textCase?: TextCase;
  textAlign?: TextAlign;
  customClass?: string;
  children: ReactNode;
}

export const Text = memo(function Text({
  variant = "BODY",
  subText = false,
  textCase = "NORMAL_CASE",
  textAlign = "LEFT",
  customClass = "",
  children,
}: Props) {
  const { getTextCaseClassName, getTextAlignClassName } = useText();

  if (variant === "BODY") {
    return (
      <Fragment>
        <p
          className={`text-base ${getTextCaseClassName(
            textCase
          )} ${getTextAlignClassName(textAlign)} ${
            subText ? "opacity-55 " : " "
          } ${roboto.className} ${customClass}`}
        >
          {children}
        </p>
      </Fragment>
    );
  }

  if (variant === "TITLE") {
    return (
      <Fragment>
        <h1
          className={`text-4xl ${getTextCaseClassName(
            textCase
          )} ${getTextAlignClassName(textAlign)} ${customClass}`}
        >
          {children}
        </h1>
      </Fragment>
    );
  }

  if (variant === "SUBTITLE") {
    return (
      <Fragment>
        <h1
          className={`text-xl opacity-55 ${getTextCaseClassName(
            textCase
          )} ${getTextAlignClassName(textAlign)} ${customClass}`}
        >
          {children}
        </h1>
      </Fragment>
    );
  }

  if (variant === "BRAND") {
    return (
      <Fragment>
        <h1
          className={`text-2xl ${getTextCaseClassName(
            textCase
          )} ${getTextAlignClassName(textAlign)} ${
            subText ? "opacity-55 " : " "
          } ${pacifico.className} ${customClass}`}
        >
          {children}
        </h1>
      </Fragment>
    );
  }
});
