"use client";

import {
  animated,
  useIsomorphicLayoutEffect,
  useSpring,
} from "@react-spring/web";

interface Props {
  from: { [key: string]: string };
  to: { [key: string]: string } | { [key: string]: string }[];
  loop: boolean;
}

export const Test = ({ from, to, loop }: Props) => {
  const [props, api] = useSpring(
    () => ({
      from: { x: 0 },
      to: { y: 0 },
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
  }, [to]);

  return (
    <animated.div
      style={{
        background: "red",
        width: "200px",
        height: "100px",
        position: "fixed",
        bottom: 0,
        ...props,
      }}
    />
  );
};
