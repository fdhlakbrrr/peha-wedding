"use client";

import { Button, Container } from "@/components/ui";
import { HeadingText } from "@/components/molecule";
import { usePrefixNavigate } from "@/hooks";

export default function NotFound() {
  const { goToHome } = usePrefixNavigate();

  return (
    <Container align="BETWEEN">
      <Container align="CENTER">
        <HeadingText
          title="Page Not Found"
          subtitle="Looks like you got lost 👀"
        />

        <Button onClick={goToHome}>Back to Home</Button>
      </Container>
    </Container>
  );
}
