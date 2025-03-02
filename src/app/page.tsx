"use client";

import { ParallaxClosed, ParallaxOpened } from "@/components/parallax";
import { useEffect, useRef, useState } from "react";
import BranchTreeImage from "@/assets/images/branch-tree-behind-mosque-copy-min.png";
import CloudImage from "@/assets/images/cloud-behind-mosque-copy-min.png";
import { Container } from "@/components/ui";
import Image from "next/image";
import MosqueImage from "@/assets/images/mosque-copy-min.png";
import { MotionWrapper } from "@/components/animate";
import OrnamentOmbakImage from "@/assets/images/ornament-ombak-copy-min.png";
import PinusImage from "@/assets/images/pinus-behind-mosque-copy-min.png";
import audio1 from "../../public/audio1.mp3";
import { useMotionSource } from "@/hooks";
// import CloudBg from "@/assets/images/cloud2.png";
// import FlowerOmbakImage from "@/assets/images/flower-above-ombak-copy-min.png";
// import GardenImage from "@/assets/images/garden-infront-mosque-copy-min.png";
// import LeafTreeImage from "@/assets/images/leaf-tree-behind-mosque-copy-min.png";

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
            <source src={audio1} type="audio/mp3" />
          </audio>
          {render &&
            (!opened ? (
              <ParallaxClosed ref={audioRef} onOpen={() => setOpened(true)} />
            ) : (
              <>
                <div className="h-[100vh] w-full relative">
                  {/* <div style={{ position: "absolute", top: 0 }}> */}
                  <MotionWrapper
                    initial={{ opacity: 1, scale: 1 }}
                    animate={{ opacity: 0.2, scale: 1.3 }}
                    transition={{ duration: 1.8 }}
                    motionProps={{
                      layout: true,
                    }}
                    style={{ position: "absolute" }}
                  >
                    <Image priority alt="cloud" src={CloudImage} />
                  </MotionWrapper>
                  <MotionWrapper
                    initial={{ opacity: 1, scale: 1 }}
                    animate={{ opacity: 0.5, scale: 1.3 }}
                    transition={{ duration: 2.5 }}
                    motionProps={{
                      layout: true,
                    }}
                    style={{ position: "absolute" }}
                  >
                    <Image priority alt="branch tree" src={BranchTreeImage} />
                  </MotionWrapper>
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
                  <MotionWrapper
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ duration: 2 }}
                    motionProps={{
                      layout: true,
                    }}
                    style={{ position: "absolute", bottom: 0 }}
                  >
                    <Image priority alt="mosque" src={OrnamentOmbakImage} />
                  </MotionWrapper>
                  {/* </div> */}
                </div>
                <ParallaxOpened ref={audioRef} onOpen={() => setOpened(true)} />
              </>
            ))}
        </Container>
      </>
    );
  }
}
