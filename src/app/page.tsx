"use client";

import { Container, Text } from "@/components/ui";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
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
import { useMotionSource } from "@/hooks";

export default function Home() {
  const { matchMedia } = useMotionSource();

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
          <Parallax pages={10}>
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
                <div className="flex pl-5">
                  <Text
                    variant="BODY"
                    customClass="text-xl text-white  justify-self-center"
                    textAlign="LEFT"
                  >
                    Calon Mempelai Pria
                    <Text
                      variant="TITLE"
                      customClass="text-7xl justify-self-center"
                      textAlign="LEFT"
                    >
                      Muhammad
                      <br />
                      Bagas
                      <br />
                      Rinaldi
                    </Text>
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
                <div className="flex justify-end pr-5">
                  <Text
                    variant="BODY"
                    customClass="text-xl text-white  justify-self-center"
                    textAlign="RIGHT"
                  >
                    Calon Mempelai Wanita
                    <Text
                      variant="TITLE"
                      customClass="text-7xl justify-self-center"
                      textAlign="RIGHT"
                    >
                      Putri
                      <br />
                      Handayani
                    </Text>
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
                {/* <Text variant="TITLE" customClass="text-5xl">
                  26 Januari
                  </Text> */}
                <Text variant="TITLE" customClass="text-9xl">
                  2025
                </Text>
                <Text variant="TITLE">Akad: 08.00 WIB - Selesai</Text>
                <Text variant="TITLE">Resepsi: 10.00 WIB - Selesai</Text>
              </div>
            </ParallaxLayer>
            <ParallaxLayer offset={2.4} speed={1}>
              <Map />
            </ParallaxLayer>
          </Parallax>
        </Container>
      </>
    );
  }
}
