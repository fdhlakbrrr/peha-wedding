"use client";

import { Container, Text } from "@/components/ui";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import audio1 from "../../public/audio1.mp3";
import BaliBookImage from "@/assets/images/bali-book-copy-min.png";

// import BaliFlowerImage from "@/assets/images/bali-flower-copy-min.png";
import BranchTreeImage from "@/assets/images/branch-tree-behind-mosque-copy-min.png";
import CloudBg from "@/assets/images/cloud2.png";
import CloudImage from "@/assets/images/cloud-behind-mosque-copy-min.png";
import FlowerOmbakImage from "@/assets/images/flower-above-ombak-copy-min.png";
import GardenImage from "@/assets/images/garden-infront-mosque-copy-min.png";
import Image from "next/image";
import LeafTreeImage from "@/assets/images/leaf-tree-behind-mosque-copy-min.png";
import Map from "@/components/map";
import MosqueImage from "@/assets/images/mosque-copy-min.png";
import { MotionWrapper } from "@/components/animate";
import OrnamentBackgroundImage from "@/assets/images/ornament-bg-copy-min.png";
import OrnamentOmbakImage from "@/assets/images/ornament-ombak-copy-min.png";
import PinusImage from "@/assets/images/pinus-behind-mosque-copy-min.png";
import { useAudio, useMotionSource } from "@/hooks";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import AudioButton from "@/components/audioButton";
import { ParallaxClosed, ParallaxOpened } from "@/components/parallax";

export default function Home() {
  const { matchMedia } = useMotionSource();
  const [opened, setOpened] = useState(false);
  const [render, setRender] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      setRender(true);
    }
  }, [audioRef.current]);

  if (matchMedia) {
    return (
      <>
        {/* <AudioButton /> */}
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
              <ParallaxOpened ref={audioRef} onOpen={() => setOpened(true)} />
            ))}
          {/* <Parallax ref={parallaxRef} pages={3.8}>
            <ParallaxLayer offset={0} speed={0.8}>
              <MotionWrapper
                style={{
                  x: -700,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ duration: 2 }}
                motionProps={{
                  layout: true,
                }}
                afterComplete={{
                  initial: { x: -700 },
                  animate: { x: 700 },
                  transition: {
                    repeat: Infinity,
                    duration: 7,
                    repeatType: "loop",
                  },
                }}
              >
                <Image priority alt="cloud bg" src={CloudBg} />
              </MotionWrapper>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.8}>
              <MotionWrapper
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                motionProps={{
                  layout: true,
                }}
              >
                <Image priority alt="cloud" src={CloudImage} />
              </MotionWrapper>
            </ParallaxLayer>
            <ParallaxLayer offset={0}>
              <MotionWrapper
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                motionProps={{
                  layout: true,
                }}
              >
                <Image priority alt="leaf tree" src={LeafTreeImage} />
              </MotionWrapper>
            </ParallaxLayer>
            <ParallaxLayer offset={0}>
              <MotionWrapper
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                motionProps={{
                  layout: true,
                }}
              >
                <Image priority alt="branch tree" src={BranchTreeImage} />
              </MotionWrapper>
            </ParallaxLayer>
            <ParallaxLayer offset={0.1}>
              <MotionWrapper
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                motionProps={{
                  layout: true,
                }}
              >
                <Image priority alt="pinus tree" src={PinusImage} />
              </MotionWrapper>
            </ParallaxLayer>
            <ParallaxLayer offset={0.15}>
              <MotionWrapper
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
                motionProps={{
                  layout: true,
                }}
              >
                <Image priority alt="mosque" src={MosqueImage} />
              </MotionWrapper>
            </ParallaxLayer>
            <ParallaxLayer offset={0.3}>
              <MotionWrapper
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
                motionProps={{
                  layout: true,
                }}
              >
                <Image priority alt="garden" src={GardenImage} />
              </MotionWrapper>
            </ParallaxLayer>
            <ParallaxLayer offset={0.5}>
              <MotionWrapper
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
                motionProps={{
                  layout: true,
                }}
              >
                <Text
                  variant="TITLE"
                  customClass="text-5xl text-white justify-self-center"
                >
                  Walimatul &apos;Urs
                </Text>
                <button
                  className="button"
                  onClick={() => {
                    setOpened(true);

                    parallaxRef.current?.scrollTo(0.7);
                  }}
                >
                  Buka Undangan
                </button>
              </MotionWrapper>
            </ParallaxLayer>

            <ParallaxLayer offset={0.7} speed={1.8}>
              <MotionWrapper
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
                motionProps={{
                  layout: true,
                }}
              >
                <Image
                  alt="ornament background"
                  src={OrnamentBackgroundImage}
                />
              </MotionWrapper>
            </ParallaxLayer>
            <ParallaxLayer offset={0.8} speed={2}>
              <MotionWrapper
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
                motionProps={{
                  layout: true,
                }}
              >
                <Image priority alt="ornament ombak" src={OrnamentOmbakImage} />
              </MotionWrapper>
            </ParallaxLayer>
            <ParallaxLayer offset={0.8} speed={2}>
              <MotionWrapper
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
                motionProps={{
                  layout: true,
                }}
                afterComplete={{
                  initial: { y: 0 },
                  animate: { y: 5 },
                  transition: {
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 2,
                  },
                }}
              >
                <div className="w-[35%] justify-self-center">
                  <Image priority alt="flower ombak" src={FlowerOmbakImage} />
                </div>
              </MotionWrapper>
            </ParallaxLayer>
            <ParallaxLayer offset={0.65} speed={2}>
              <MotionWrapper
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
                motionProps={{
                  layout: true,
                }}
              >
                <Image priority alt="flower ombak" src={BaliBookImage} />
              </MotionWrapper>
            </ParallaxLayer>

            <ParallaxLayer speed={0.5} offset={1}>
              <MotionWrapper
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
              >
                <div className="text-white p-5 flex flex-col">
                  <Text
                    variant="TITLE"
                    customClass="text-2xl text-center md:text-3xl"
                  >
                    &quot;Dan segala sesuatu Kami ciptakan berpasang-pasangan
                    agarkamu mengingat (kebesaran Allah).&quot;
                  </Text>
                  <Text customClass="text-xl text-center">
                    Qs. Adz-Dzariyat: 21
                  </Text>
                </div>
              </MotionWrapper>
            </ParallaxLayer>
            <ParallaxLayer speed={0.5} offset={1.5}>
              <MotionWrapper
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                transition={{ duration: 2 }}
              >
                <div className="flex flex-col gap-5 pl-5">
                  <Text
                    variant="BODY"
                    customClass="text-xl text-white justify-self-center"
                    textAlign="LEFT"
                  >
                    Calon Mempelai Pria
                    <Text
                      variant="TITLE"
                      customClass="text-7xl"
                      textAlign="LEFT"
                    >
                      Muhammad
                      <br />
                      Bagas
                      <br />
                      Rinaldi
                    </Text>
                  </Text>
                  <Text customClass="text-white">
                    Anak kedua dari Bapak Dody Rinaldi & Ibu Evi Srihandajani
                  </Text>
                </div>
              </MotionWrapper>
            </ParallaxLayer>
            <ParallaxLayer speed={0.5} offset={1.9}>
              <MotionWrapper
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                transition={{ duration: 2 }}
              >
                <div className="flex flex-col items-end gap-5 pr-5">
                  <Text
                    variant="BODY"
                    customClass="text-xl text-white  justify-self-center"
                    textAlign="RIGHT"
                  >
                    Calon Mempelai Wanita
                    <Text
                      variant="TITLE"
                      customClass="text-7xl"
                      textAlign="RIGHT"
                    >
                      Putri
                      <br />
                      Handayani
                    </Text>
                  </Text>
                  <Text customClass="text-white">
                    Anak kedua dari Bapak Junaedi & Ibu Sawiyah
                  </Text>
                </div>
              </MotionWrapper>
            </ParallaxLayer>

            <ParallaxLayer
              offset={2}
              speed={1}
              factor={0.3}
              className="flex items-center gap-5 text-white"
            >
              <div className="flex flex-col w-full h-[100%] items-center">
                <Text variant="TITLE">Minggu, 26 Januari</Text>
                <Text variant="TITLE" customClass="text-9xl">
                  2025
                </Text>
                <Text variant="TITLE">Akad: 08.00 WIB - Selesai</Text>
                <Text variant="TITLE">Resepsi: 10.00 WIB - Selesai</Text>
                {params.get("ver") === "2" && (
                  <Text variant="TITLE">Dresscode: Sage / Coksu</Text>
                )}
              </div>
            </ParallaxLayer>
            <ParallaxLayer offset={2.4} speed={1} factor={0.5}>
              <MotionWrapper
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3 }}
              >
                <Text variant="TITLE" customClass="text-white text-5xl">
                  Alamat
                </Text>
                <Map />
              </MotionWrapper>
            </ParallaxLayer>

            <ParallaxLayer
              offset={2.9}
              speed={0.5}
              className="bg-gradient-to-b from-[#62796b30] to-[#62796f]"
            >
              <MotionWrapper style={{ padding: "10px" }}>
                <Text
                  variant="TITLE"
                  customClass="text-white text-7xl"
                  textAlign="CENTER"
                >
                  بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَ جَمَعَ بَيْنَكُمَا
                  فِي خَيْرٍ
                </Text>
                <Text customClass="text-white text-5xl" textAlign="CENTER">
                  &quot;Semoga Allah memberkahi engkau di waktu lapang maupun di
                  waktu sempit, dan semoga Allah (senantiasa) mengumpulkan
                  kalian berdua dalam kebaikan.&quot; (HR Abu Dawud)
                </Text>
              </MotionWrapper>
            </ParallaxLayer>
            <ParallaxLayer offset={3.2} speed={0.5}>
              <MotionWrapper style={{ padding: "10px" }}>
                <Text customClass="text-white text-5xl" textAlign="CENTER">
                  Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila
                  Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu
                  kepada kami
                </Text>
              </MotionWrapper>
            </ParallaxLayer>
            <ParallaxLayer
              offset={3.3}
              speed={0.5}
              factor={0.5}
              className="bg-[#62796f] flex items-center"
            >
              <MotionWrapper style={{ padding: "10px" }}>
                <Text
                  variant="TITLE"
                  customClass="text-white text-5xl"
                  textAlign="CENTER"
                >
                  - Jazakumullahu Khairan Katsiran -
                </Text>
              </MotionWrapper>
            </ParallaxLayer>
          </Parallax> */}
        </Container>
      </>
    );
  }
}
