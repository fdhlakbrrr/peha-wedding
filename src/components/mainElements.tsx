import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import BaliBookImage from "@/assets/images/bali-book-copy-min.png";
import BranchTreeImage from "@/assets/images/branch-tree-behind-mosque-copy-min.png";
import CloudBg from "@/assets/images/cloud2.png";
import CloudImage from "@/assets/images/cloud-behind-mosque-copy-min.png";
import FlowerOmbakImage from "@/assets/images/flower-above-ombak-copy-min.png";
import GardenImage from "@/assets/images/garden-infront-mosque-copy-min.png";
import Image from "next/image";
import LeafTreeImage from "@/assets/images/leaf-tree-behind-mosque-copy-min.png";
import MosqueImage from "@/assets/images/mosque-copy-min.png";
import { MotionWrapper } from "./animate";
import OrnamentBackgroundImage from "@/assets/images/ornament-bg-copy-min.png";
import OrnamentOmbakImage from "@/assets/images/ornament-ombak-copy-min.png";
import PinusImage from "@/assets/images/pinus-behind-mosque-copy-min.png";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const MainElements = ({ children }: Props) => {
  return (
    <Parallax pages={1}>
      <ParallaxLayer offset={0} speed={0.8}>
        <MotionWrapper
          style={{
            x: -300,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1 }}
          motionProps={{
            layout: true,
          }}
          afterComplete={{
            initial: { x: -300 },
            animate: { x: 300 },
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
      <ParallaxLayer offset={0.12}>
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
      <ParallaxLayer offset={0.28}>
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

      {children}

      <ParallaxLayer offset={0.75} speed={1.8}>
        <MotionWrapper
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          motionProps={{
            layout: true,
          }}
        >
          <Image alt="ornament background" src={OrnamentBackgroundImage} />
        </MotionWrapper>
      </ParallaxLayer>
      <ParallaxLayer offset={0.85} speed={2}>
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
      <ParallaxLayer offset={0.85} speed={2}>
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
      <ParallaxLayer offset={0.7} speed={2}>
        <MotionWrapper
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          motionProps={{
            layout: true,
          }}
        >
          <Image priority alt="bali book" src={BaliBookImage} />
        </MotionWrapper>
      </ParallaxLayer>
    </Parallax>
  );
};

export default MainElements;
