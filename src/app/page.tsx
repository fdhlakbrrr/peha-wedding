"use client";

// import { Parallax, ParallaxLayer } from "@react-spring/parallax";
// import { AnimateWrapper } from "@/components/animate";
import { Target, TargetAndTransition, Transition, motion } from "motion/react";
import { Container } from "@/components/ui";
import { useState } from "react";
// import Image from "next/image";
// import { Text } from "@/components/ui/text";
// import bottomImage from "@/assets/images/bottom.png";
// import mosqueImage from "@/assets/images/mosque.png";
// import sideImage from "@/assets/images/side.png";
// import { useSpring } from "@react-spring/web";

export default function Home() {
  const [initial, setInitial] = useState<Target | boolean>({
    marginTop: 100,
    opacity: 0,
  });
  const [animate, setAnimate] = useState<TargetAndTransition>({
    marginTop: 0,
    opacity: 1,
  });
  const [transition, setTransition] = useState<Transition>({
    ease: "easeOut",
    duration: 1,
  });

  return (
    <Container
      direction="COL"
      align="CENTER"
      customClass={`w-[100%] h-[100vh]
        justify-self-center gap-5 xl:gap-10 
        2xl:gap-20 md:w-[100%] lg:w-[50%] xl:w-[35%] 
        2xl:w-[30%] relative overflow-y-auto container
        `}
    >
      <motion.div
        style={{ background: "red", width: "100px", height: "100px" }}
        initial={initial}
        animate={animate}
        transition={transition}
        onAnimationComplete={() => {
          setInitial({ marginTop: 0 });
          setAnimate({
            transform: "rotate(-5deg)",
            background: "blue",
          });

          setTransition({
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeOut",
            duration: 1,
          });
        }}
      />
    </Container>
  );
}
