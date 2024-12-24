import type { LayoutAlign, LayoutDirection } from "@/types";
import { ReactNode, memo } from "react";
import { useContainer } from "@/hooks/ui";

interface Props {
  customClass?: string;
  direction?: LayoutDirection;
  justify?: LayoutAlign;
  align?: LayoutAlign;
  children: ReactNode;
}

export const Container = memo(function Container({
  customClass = "w-full",
  children,
  direction = "COL",
  justify = "START",
  align = "START",
}: Props) {
  const { getContainerClassName } = useContainer();

  return (
    <div
      className={`${getContainerClassName(
        direction,
        justify,
        align
      )} ${customClass}`}
    >
      {children}
    </div>
  );
});
