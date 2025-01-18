import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import { forwardRef, useEffect, useRef, useState } from "react";
import AudioButton from "./audioButton";
import BaliBookImage from "@/assets/images/bali-book-copy-min.png";
import BaliFlowerImage from "@/assets/images/bali-flower-copy-min.png";
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
import { Button, Text } from "./ui";
import { useSearchParams } from "next/navigation";
import { Copy } from "lucide-react";

interface Props {
  onOpen: () => void;
}

export const ParallaxClosed = forwardRef<HTMLAudioElement, Props>(
  function ParallaxClosed({ onOpen }: Props, ref) {
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
        <ParallaxLayer offset={0.5}>
          <MotionWrapper
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
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
            <div className="justify-self-center">
              <AudioButton ref={ref} type="OPEN" onOpen={onOpen} />
            </div>
          </MotionWrapper>
        </ParallaxLayer>

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
  }
);

export const ParallaxOpened = forwardRef<HTMLAudioElement, Props>(
  function ParallaxOpened({ onOpen }: Props, ref) {
    const parallaxRef = useRef<IParallax>(null);
    const params = useSearchParams();
    const formalMode = params.get("ver") === "2";
    const [copy, setCopy] = useState(false);
    // useEffect(() => {
    //   parallaxRef.current && parallaxRef.current.scrollTo(0.7);
    // }, [parallaxRef]);

    const copyText = async (text) => {
      await navigator.clipboard.writeText(text);

      setCopy(true);
    };

    // useEffect(() => {
    //   const readClipboard = async () => {
    //     const clip = await navigator.clipboard.readText();

    //     if (clip === "7202949422") {
    //       return setCopy(true);
    //     }
    //   };

    //   readClipboard();
    // }, []);

    return (
      <>
        <AudioButton ref={ref} type="TOGGLE" onOpen={onOpen} />
        <Parallax ref={parallaxRef} pages={6}>
          <ParallaxLayer speed={0.5} offset={0}>
            <MotionWrapper
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              style={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className=" py-5 bg-[#62786b] w-[100%] h-[30%] flex flex-col justify-between">
                <Text
                  variant="BODY"
                  customClass="text-xl text-white text-center"
                >
                  &quot;Dan segala sesuatu Kami ciptakan berpasang-pasangan
                  agarkamu mengingat (kebesaran Allah).&quot;
                </Text>
                <Text customClass="text-xl text-white text-center">
                  Qs. Adz-Dzariyat: 21
                </Text>
              </div>
            </MotionWrapper>
          </ParallaxLayer>
          <ParallaxLayer
            speed={0.5}
            offset={1}
            className="flex justify-center items-center"
          >
            <div className="text-white flex flex-col bg-[#62786b] w-full h-fit gap-10">
              <Image priority alt="flower ombak" src={BaliFlowerImage} />
              <MotionWrapper
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                transition={{ duration: 2 }}
              >
                <div className="flex flex-col gap-5 px-5">
                  <Text variant="TITLE" customClass="text-6xl" textAlign="LEFT">
                    Muhammad
                    <br />
                    Bagas
                    <br />
                    Rinaldi
                  </Text>
                  <Text customClass="text-white text-xl">
                    Anak kedua dari Bapak Dody Rinaldi & Ibu Evi Srihandajani
                  </Text>
                </div>
              </MotionWrapper>
              <MotionWrapper
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
              >
                <Text
                  variant="TITLE"
                  customClass="text-6xl justify-self-center"
                >
                  &
                </Text>
              </MotionWrapper>
              <MotionWrapper
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                transition={{ duration: 2 }}
              >
                <div className="flex flex-col items-end gap-5 px-5">
                  <Text
                    variant="TITLE"
                    customClass="text-6xl"
                    textAlign="RIGHT"
                  >
                    Putri
                    <br />
                    Handayani
                  </Text>
                  <Text customClass="text-white text-xl" textAlign="RIGHT">
                    Anak kedua dari Bapak Junaedi & Ibu Sawiyah
                  </Text>
                </div>
              </MotionWrapper>
              <Image priority alt="flower ombak" src={BaliFlowerImage} />
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={2}
            speed={0.5}
            className="flex items-center gap-5 text-white"
          >
            <div
              className="flex flex-col w-full py-5 items-center date bg-[#62786b] gap-10"
              style={{
                backgroundRepeat: formalMode ? "repeat" : "no-repeat",
                backgroundSize: formalMode ? "contain" : "cover",
              }}
            >
              <div className="flex flex-col items-center">
                <Text variant="TITLE">Minggu, 26 Januari</Text>
                <Text variant="TITLE" customClass="text-9xl">
                  2025
                </Text>
                <Text variant="BODY" customClass="text-xl">
                  Akad: 08.00 WIB - Selesai
                </Text>
                <Text variant="BODY" customClass="text-xl">
                  Resepsi: 10.00 WIB - Selesai
                </Text>
              </div>
              {formalMode && (
                <div className="flex flex-col gap-5">
                  <Text
                    variant="TITLE"
                    customClass="text-2xl"
                    textAlign="CENTER"
                  >
                    Dress Code
                  </Text>
                  <div className="flex gap-10">
                    <div className="flex flex-col items-center">
                      <div className="w-[100px] h-[100px] rounded-full bg-[#86A788]"></div>
                      <Text variant="BODY">Sage green</Text>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="w-[100px] h-[100px] rounded-full bg-[#F1E5D1]"></div>
                      <Text variant="BODY">Cream</Text>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="w-[100px] h-[100px] rounded-full bg-[#A79277]"></div>
                      <Text variant="BODY">Coksu</Text>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={3} speed={0.5}>
            <MotionWrapper
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              <div className="address w-full flex flex-col items-center bg-[#62796b]">
                <Text variant="TITLE" customClass="text-white text-5xl">
                  Alamat
                </Text>
                <Map />
              </div>
            </MotionWrapper>
          </ParallaxLayer>

          <ParallaxLayer offset={4} speed={0.5}>
            <MotionWrapper>
              <div className="w-full h-[300px] flex flex-col gap-5 justify-center bg-[#62796f]">
                <Text
                  variant="TITLE"
                  customClass="text-white text-3xl"
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
              </div>
            </MotionWrapper>
          </ParallaxLayer>
          <ParallaxLayer offset={5} speed={0.5}>
            <div className={formalMode ? "bg-[#62786b] h-full flex flex-col items-center justify-center" : "bg-[#62786b] h-full flex flex-col items-center justify-between"}>
              {!formalMode && (
                <div className="flex flex-col items-center gap-5">
                  <Text variant="TITLE" customClass="text-white">
                    Angpao
                  </Text>
                  <Text variant="BODY" customClass="text-white text-center">
                    Apabila berkenan, Bapak/Ibu/Saudara/i dapat memberikan doa
                    restu serta tanda kasih melalui transfer ke rekening
                    berikut:
                  </Text>
                  <div className="flex flex-col items-center">
                    <Text variant="TITLE" customClass="text-xl text-white">
                      Bank BSI
                    </Text>
                    <div className="flex items-center justify-center gap-5 text-white cursor-pointer">
                      <Text variant="TITLE" customClass="text-xl">
                        7202949422 a/n Putri Handayani
                      </Text>
                      <Button
                        onClick={() => copyText("7202949422")}
                        className="bg-transparent hover:bg-transparent border border-white flex items-center gap-2"
                      >
                        {copy ? "" : <Copy />}
                        {copy ? "Disalin!" : "Salin"}
                      </Button>
                    </div>
                  </div>
                </div>
              )}
              <div className="flex flex-col items-center mb-10">
                <MotionWrapper
                  style={{ padding: "10px" }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 2 }}
                >
                  <Text customClass="text-white text-5xl" textAlign="CENTER">
                    Merupakan suatu kehormatan dan kebahagiaan bagi kami,
                    apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan
                    doa restu kepada kami
                  </Text>
                </MotionWrapper>
                <MotionWrapper
                  initial={{ y: 10 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 3 }}
                >
                  <Text
                    variant="TITLE"
                    customClass="text-white text-xl"
                    textAlign="CENTER"
                  >
                    - Jazakumullahu Khairan Katsiran -
                  </Text>
                </MotionWrapper>
              </div>
            </div>
          </ParallaxLayer>
          {/* <ParallaxLayer
            offset={4}
            speed={0.5}
            className="bg-[#62796f] flex items-center justify-content-center"
          >
            <MotionWrapper
              style={{
                padding: "10px",
                display: "flex",
                width: "100%",
                justifyContent: "center",
              }}
            >
              <Text
                variant="TITLE"
                customClass="text-white text-5xl"
                textAlign="CENTER"
              >
                - Jazakumullahu Khairan Katsiran -
              </Text>
            </MotionWrapper>
          </ParallaxLayer> */}
        </Parallax>
      </>
    );
  }
);
