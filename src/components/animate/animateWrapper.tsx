"use client";

import {
  animated,
  useIsomorphicLayoutEffect,
  useSpring,
} from "@react-spring/web";
import { ReactNode } from "react";

interface Props {
  from: { [key: string]: string | number };
  to: { [key: string]: string | number } | { [key: string]: string | number }[];
  loop?: boolean | { [key: string]: any };
  children: ReactNode;
}

export const AnimateWrapper = ({ from, to, loop, children }: Props) => {
  const [props, api] = useSpring(
    () => ({
      from,
      to,
    }),
    []
  );

  useIsomorphicLayoutEffect(() => {
    api.start({
      from,
      to,
      loop,
      config: {
        duration: 1000,
      },
    });
  }, []);

  return (
    <animated.div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "200px",
        height: "100px",
        position: "fixed",
        ...props,
      }}
    >
      {children}
    </animated.div>
  );
};
