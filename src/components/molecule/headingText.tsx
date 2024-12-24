import { Container, Text } from "../ui";
import type { LayoutAlign, TextAlign } from "@/types";
import { memo } from "react";

interface Props {
  title: string;
  subtitle: string;
  textAlign?: TextAlign;
  contentAlign?: LayoutAlign;
  customClass?: string;
}

export const HeadingText = memo(function HeadingText({
  title,
  subtitle,
  textAlign = "CENTER",
  contentAlign = "CENTER",
  customClass = "",
}: Props) {
  return (
    <Container align={contentAlign} customClass={`gap-1 w-full ${customClass}`}>
      <Text
        textAlign={textAlign}
        variant="TITLE"
        textCase="CAPITALIZE"
      >
        {title}
      </Text>
      
      <Text textAlign={textAlign} variant="SUBTITLE" textCase="NORMAL_CASE">
        {subtitle}
      </Text>
    </Container>
  );
});
