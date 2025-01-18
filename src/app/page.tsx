"use client";

import { ParallaxClosed, ParallaxOpened } from "@/components/parallax";
import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui";
// import audio1 from "../../public/audio1.mp3";
import { useMotionSource } from "@/hooks";

export default function Home() {
  const { matchMedia } = useMotionSource();
  const [opened, setOpened] = useState(true);
  const [render, setRender] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // useEffect(() => {
  //   if (audioRef.current) {
  //     setRender(true);
  //   }
  // }, [audioRef]);

  if (matchMedia) {
    return (
      <>
        <Container
          customClass={`w-[100vw] h-[100vh]
          justify-self-center flex flex-col justify-center items-center gap-5 xl:gap-10 
          2xl:gap-20 md:w-[100%] lg:w-[50%] xl:w-[35%] 
          2xl:w-[30%] relative overflow-y-auto overflow-x-hidden container
          `}
        >
          {/* <audio ref={audioRef} autoPlay loop>
            <source src={audio1} type="audio/mp3" />
          </audio> */}
          {/* {render &&
            (!opened ? (
              <ParallaxClosed ref={audioRef} onOpen={() => setOpened(true)} />
            ) : (
              <ParallaxOpened ref={audioRef} onOpen={() => setOpened(true)} />
            ))} */}
          {!opened ? (
            <ParallaxClosed ref={audioRef} onOpen={() => setOpened(true)} />
          ) : (
            <ParallaxOpened ref={audioRef} onOpen={() => setOpened(true)} />
          )}
        </Container>
      </>
    );
  }
}
