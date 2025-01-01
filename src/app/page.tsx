"use client";

import { Container, Text } from "@/components/ui";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import BaliBookImage from "@/assets/images/bali-book-copy-min.png";
// import BaliFlowerImage from "@/assets/images/bali-flower-copy-min.png";
import BranchTreeImage from "@/assets/images/branch-tree-behind-mosque-copy-min.png";
import CloudImage from "@/assets/images/cloud-behind-mosque-copy-min.png";
import CloudBg from "@/assets/images/cloud2.png";
import FlowerOmbakImage from "@/assets/images/flower-above-ombak-copy-min.png";
import GardenImage from "@/assets/images/garden-infront-mosque-copy-min.png";
import Image from "next/image";
import LeafTreeImage from "@/assets/images/leaf-tree-behind-mosque-copy-min.png";
import MosqueImage from "@/assets/images/mosque-copy-min.png";
import { MotionWrapper } from "@/components/animate";
import OrnamentBackgroundImage from "@/assets/images/ornament-bg-copy-min.png";
import OrnamentOmbakImage from "@/assets/images/ornament-ombak-copy-min.png";
import PinusImage from "@/assets/images/pinus-behind-mosque-copy-min.png";
// import SideFlowerImage from "@/assets/images/side-min.png";
import { useMotionSource } from "@/hooks";

export default function Home() {
  const {  matchMedia } = useMotionSource();

  if (matchMedia) {
    return (
      <>
        {/* <Container
          direction="COL"
          align="START"
          justify="START"
          customClass={`w-[100%] h-[100vh]
          justify-self-center flex flex-col justify-start items-center gap-5 xl:gap-10 
          2xl:gap-20 md:w-[100%] lg:w-[50%] xl:w-[35%] 
          2xl:w-[30%] relative overflow-y-auto overflow-x-hidden container
          `}
        >
          <MotionWrapper
            style={{
              position: "absolute",
              width: "100%",
              top: matchMedia.md.matches ? "-50px" : 0,
              y: 100,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ ...defaultTransition, duration: 5 }}
            afterComplete={{
              initial: { x: 0 },
              animate: { x: 700 },
              transition: {
                duration: 10,
                repeat: Infinity,
                repeatType: "loop",
              },
            }}
          >
            <Image alt="cloud-bg" src={CloudImage} className="w-full" />
          </MotionWrapper>

          <MotionWrapper
            style={{
              position: "absolute",
              width: "100%",
              top: matchMedia.md.matches ? "-50px" : 0,
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
            }}
            initial={{ opacity: 0, top: "100px" }}
            animate={{ opacity: 1, top: "100px" }}
            transition={{ ...defaultTransition, duration: 3 }}
            afterComplete={{
              initial: {
                opacity: 1,
              },
              animate: {
                transform: "rotate(1.5deg)",
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
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              width: "100%",
            }}
            initial={{ opacity: 0, top: "150px" }}
            animate={{ opacity: 1, top: "120px" }}
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
            }}
            initial={{
              opacity: 0,
              top: matchMedia.md.matches ? "350px" : "230px",
            }}
            animate={{
              opacity: 1,
              top: matchMedia.md.matches ? "330px" : "220px",
            }}
            transition={{ ...defaultTransition, duration: 3 }}
          >
            <Image alt="garden" src={GardenImage} className="w-full" />
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
              width: "90%",
              bottom: "120px",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
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
              width: "50%",
            }}
            initial={{ opacity: 0, bottom: "-10px" }}
            animate={{ opacity: 1, bottom: "50px" }}
            transition={{ ...defaultTransition, duration: 2.8 }}
            afterComplete={{
              initial: {
                bottom: "50px",
              },
              animate: {
                bottom: "40px",
              },
              transition: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 2,
              },
            }}
          >
            <Image
              alt="Flower Ombak"
              src={FlowerOmbakImage}
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
              bottom: "115px",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
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
            transition={{
              ...defaultTransition,
              duration: 5,
              ease: "anticipate",
            }}
          >
            <Text variant="TITLE" customClass="text-[white]">
              Walimatul `Urs
            </Text>
          </MotionWrapper>
        </Container> */}
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
                  Walimatul 'Urs
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
              </MotionWrapper>
            </ParallaxLayer>

            <ParallaxLayer speed={0.5} offset={1}></ParallaxLayer>
          </Parallax>
        </Container>

        {/* 
        <Container
          direction="COL"
          align="START"
          justify="START"
          customClass={`w-[100vw] h-[100vh]
          justify-self-center flex flex-col justify-center items-center gap-5 xl:gap-10 
          2xl:gap-20 md:w-[100%] lg:w-[50%] xl:w-[35%] 
          2xl:w-[30%] relative overflow-y-auto overflow-x-hidden container
          `}
        >
          <MotionWrapper
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "10px",
            }}
            initial={{ opacity: 0, y: 50 }}
            transition={{
              duration: 2,
            }}
            motionProps={{
              viewport: { root: ayatRef },
              whileInView: { opacity: 1, y: 0 },
            }}
          >
            <Text customClass="text-2xl text-white text-center md:text-3xl">
              &quot;Dan segala sesuatu Kami ciptakan berpasang-pasangan agarkamu
              mengingat (kebesaran Allah).&quot;
            </Text>
            <Text customClass="text-xl text-white text-center">
              Qs. Adz-Dzariyat: 21
            </Text>
          </MotionWrapper>

          <div className="flex flex-col">
            <MotionWrapper
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.5,
                bounce: 0.5,
              }}
            >
              <Text variant="TITLE">Calon Mempelai Wanita</Text>
              <ul>
                <li>Nama Lengkap : Putri Handayani</li>
                <li>Nama Panggilan : Putri Nama Lengkap</li>
                <li>
                  Orangtua Anak ke 2 Putri ke 1 dari Bapak Junaedi & Ibu Sawiyah
                </li>
              </ul>
            </MotionWrapper>
          </div>
        </Container> */}
        {/* <Text>
              Calon Mempelai Wanita a. Nama Lengkap : Putri Handayani b. Nama
              Panggilan : Putri c. Nama Lengkap Orangtua Anak ke 2 Putri ke 1
              dari Bapak Junaedi & Ibu Sawiyah
            </Text>

            <Text>
              Calon Mempelai Pria a. Nama Lengkap : Muhammad Bagas Rinaldi b.
              Nama Panggilan : Bagas c. Nama Lengkap Orangtua Anak ke 2 Putra ke
              2 dari Bapak Dody Rinaldi & Ibu Evi Srihandajani
            </Text>

            <Text>
              AKAD NIKAH a. Hari, Tanggal : Minggu, 26 Januari 2025 b. Jam :
              08.00 s/d selesai c. Tempat : Kediaman mempelai wanita
            </Text>

            <Text>
              RESEPSI a. Hari, Tanggal : Minggu, 26 Januari 2025 b. Jam : 10.00
              s/d selesai c. Tempat : Kediaman mempelai wanita
            </Text>  */}
      </>
    );
  }
}
