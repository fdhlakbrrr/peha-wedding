"use client";

import BaliBookImage from "@/assets/images/bali-book.png";
import BaliFlowerImage from "@/assets/images/bali-flower.png";
import BranchTreeImage from "@/assets/images/branch-tree-behind-mosque.png";
import { Container, Text } from "@/components/ui";
import CloudImage from "@/assets/images/cloud-behind-mosque.png";
import FlowerOmbakImage from "@/assets/images/flower-above-ombak.png";
import GardenImage from "@/assets/images/garden-infront-mosque.png";
import Image from "next/image";
import LeafTreeImage from "@/assets/images/leaf-tree-behind-mosque.png";
import MosqueImage from "@/assets/images/mosque.png";
import { MotionWrapper } from "@/components/animate";
import OrnamentBackgroundImage from "@/assets/images/ornament-bg.png";
import OrnamentOmbakImage from "@/assets/images/ornament-ombak.png";
import PinusImage from "@/assets/images/pinus-behind-mosque.png";
import { useMemo } from "react";

export default function Home() {
  const defaultTransition = useMemo(() => {
    return { duration: 2, ease: "easeIn" };
  }, []);

  return (
    <Container
      direction="COL"
      align="START"
      justify="START"
      customClass={`w-[100%] h-[100vh]
        justify-self-center gap-5 xl:gap-10 
        2xl:gap-20 md:w-[100%] lg:w-[50%] xl:w-[35%] 
        2xl:w-[30%] relative overflow-y-auto container p-0
        `}
    >
      <MotionWrapper
        style={{
          position: "absolute",
          width: "100%",
          top: "-50px",
          // scale: 1.2,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ...defaultTransition, duration: 5 }}
      >
        <Image alt="cloud" src={CloudImage} className="w-full" />
      </MotionWrapper>
      <MotionWrapper
        style={{
          position: "absolute",
          width: "100%",
          top: "-50px",
          // scale: 1.2,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ...defaultTransition, duration: 5 }}
      >
        <Image alt="leaf tree" src={LeafTreeImage} className="w-full" />
      </MotionWrapper>
      <MotionWrapper
        style={{
          position: "absolute",
          width: "100%",
          top: "-50px",
          // scale: 1.2,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ...defaultTransition, duration: 4 }}
        afterComplete={{
          initial: {
            opacity: 1,
          },
          animate: {
            transform: "rotate(-1deg)",
          },
          transition: {
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2,
          },
        }}
      >
        <Image alt="branch tree" src={BranchTreeImage} className="w-full" />
      </MotionWrapper>
      <MotionWrapper
        style={{
          position: "absolute",
          width: "100%",
          top: "-50px",
          // scale: 1.2,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ...defaultTransition, duration: 3 }}
        afterComplete={{
          initial: {
            opacity: 1,
          },
          animate: {
            transform: "rotate(1deg)",
          },
          transition: {
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2,
          },
        }}
      >
        <Image alt="pinus tree" src={PinusImage} className="w-full" />
      </MotionWrapper>

      <MotionWrapper
        style={{
          position: "absolute",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          width: "100%",
          // padding: 0,
        }}
        initial={{ opacity: 0 }}
        animate={{ marginTop: "-50px", opacity: 1 }}
        transition={{ ...defaultTransition }}
      >
        <Image alt="mosque" src={MosqueImage} className="w-full" />
      </MotionWrapper>

      <MotionWrapper
        style={{
          position: "absolute",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          width: "100%",
          // padding: 0,
        }}
        initial={{ opacity: 0 }}
        animate={{ marginTop: "-50px", opacity: 1 }}
        transition={{ ...defaultTransition, duration: 3 }}
      >
        <Image alt="garden" src={GardenImage} className="w-full" />
      </MotionWrapper>

      {/* BOTTOM */}
      <MotionWrapper
        style={{
          position: "absolute",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          width: "100%",
          bottom: 0,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ...defaultTransition, duration: 3 }}
      >
        <Image
          alt="ornament background"
          src={OrnamentBackgroundImage}
          className="w-full"
        />
      </MotionWrapper>
      <MotionWrapper
        style={{
          position: "absolute",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          width: "100%",
          bottom: 0,
        }}
        initial={{ opacity: 0, bottom: "-30px" }}
        animate={{ opacity: 1, bottom: 0 }}
        transition={{ ...defaultTransition, duration: 2.8 }}
      >
        <Image
          alt="ornament Ombak"
          src={OrnamentOmbakImage}
          className="w-full"
        />
      </MotionWrapper>
      <MotionWrapper
        style={{
          position: "absolute",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          width: "100%",
          bottom: 0,
        }}
        initial={{ opacity: 0, bottom: "-30px" }}
        animate={{ opacity: 1, bottom: 0 }}
        transition={{ ...defaultTransition, duration: 2.8 }}
        afterComplete={{
          initial: {
            bottom: 0,
          },
          animate: {
            bottom: "-3px",
          },
          transition: {
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2,
          },
        }}
      >
        <Image alt="Flower Ombak" src={FlowerOmbakImage} className="w-full" />
      </MotionWrapper>
      <MotionWrapper
        style={{
          position: "absolute",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          width: "100%",
          bottom: 0,
        }}
        initial={{ opacity: 0, bottom: "-30px" }}
        animate={{ opacity: 1, bottom: 0 }}
        transition={{ ...defaultTransition, duration: 2.8 }}
      >
        <Image alt="Bali Book" src={BaliBookImage} className="w-full" />
      </MotionWrapper>
      <MotionWrapper
        style={{
          position: "absolute",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          width: "100%",
          bottom: 0,
        }}
        initial={{ opacity: 0, bottom: "-30px" }}
        animate={{ opacity: 1, bottom: 0 }}
        transition={{ ...defaultTransition, duration: 2.8 }}
      >
        <Image alt="Bali Flower" src={BaliFlowerImage} className="w-full" />
      </MotionWrapper>

      <MotionWrapper
        style={{
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ...defaultTransition, duration: 2.8 }}
      >
        <Text variant="TITLE" customClass="text-[white]">Walimatul `Urs</Text>
      </MotionWrapper>
    </Container>
  );
}
