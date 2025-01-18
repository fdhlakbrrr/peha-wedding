"use client";

import { ParallaxClosed, ParallaxOpened } from "@/components/parallax";
import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui";
import audio1 from "../../public/audio1.mp3";
import { useMotionSource } from "@/hooks";
import Image from "next/image";
import MosqueImage from "@/assets/images/mosque-copy-min.png";
import { MotionWrapper } from "@/components/animate";
import PinusImage from "@/assets/images/pinus-behind-mosque-copy-min.png";

export default function Home() {
  const { matchMedia } = useMotionSource();
  const [opened, setOpened] = useState(false);
  const [render, setRender] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      setRender(true);
    }
  }, [audioRef]);

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
          <audio ref={audioRef} autoPlay loop>
            {/* <source src={audio1} type="audio/mp3" /> */}
          </audio>
          {render &&
            (!opened ? (
              <ParallaxClosed ref={audioRef} onOpen={() => setOpened(true)} />
            ) : (
              <>
                <div className="h-[100vh] w-full bg-[red] relative">
                  {/* <div style={{ position: "absolute", top: 0 }}> */}
                  <MotionWrapper
                    initial={{ opacity: 1, scale: 1 }}
                    animate={{ opacity: 0.5, scale: 1.3 }}
                    transition={{ duration: 2.5 }}
                    motionProps={{
                      layout: true,
                    }}
                    style={{ position: "absolute", top: "115px" }}
                  >
                    <Image priority alt="pinus" src={PinusImage} />
                  </MotionWrapper>
                  <MotionWrapper
                    initial={{ opacity: 1, scale: 1 }}
                    animate={{ opacity: 0.5, scale: 1.3 }}
                    transition={{ duration: 2 }}
                    motionProps={{
                      layout: true,
                    }}
                    style={{ position: "absolute", top: "135px" }}
                  >
                    <Image priority alt="mosque" src={MosqueImage} />
                  </MotionWrapper>
                  {/* </div> */}
                </div>
                <ParallaxOpened ref={audioRef} onOpen={() => setOpened(true)} />
              </>
            ))}

          {/* {!opened ? (
            <ParallaxClosed ref={audioRef} onOpen={() => setOpened(true)} />
          ) : (
            <>
              <div className="h-[100vh] w-full bg-[red]">
                <div>
                  <MotionWrapper
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2 }}
                    motionProps={{
                      layout: true,
                    }}
                  >
                    <Image
                      priority
                      alt="mosque"
                      src={MosqueImage}
                      className="w-full opacity-[0.5]"
                    />
                  </MotionWrapper>
                </div>
              </div>
              <ParallaxOpened ref={audioRef} onOpen={() => setOpened(true)} />
            </>
          )} */}
        </Container>
      </>
    );
  }
}
