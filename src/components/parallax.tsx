import { Button, Text } from "./ui";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import { forwardRef, useRef, useState } from "react";
import AudioButton from "./audioButton";
import BaliFlowerImage from "@/assets/images/bali-flower-copy-min.png";
import { Copy } from "lucide-react";
import Image from "next/image";
import MainElements from "./mainElements";
import Map from "@/components/map";
import { MotionWrapper } from "@/components/animate";
import PutriLogo from "@/assets/images/putri_logo.png";
import { useSearchParams } from "next/navigation";

interface Props {
  onOpen: () => void;
}

export const ParallaxClosed = forwardRef<HTMLAudioElement, Props>(
  function ParallaxClosed({ onOpen }: Props, ref) {
    return (
      <MainElements>
        <ParallaxLayer offset={0.35}>
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
            <div className="flex flex-col items-center gap-1 md:mt-10">
              <Text
                variant="TITLE"
                customClass="text-xl text-white md:text-3xl"
                textAlign="CENTER"
              >
                Walimatul &apos;Urs <br /> Bagas & Putri
              </Text>
              <Image alt="putri wedding" src={PutriLogo} width={120} />
              <AudioButton ref={ref} type="OPEN" onOpen={onOpen} />
            </div>
          </MotionWrapper>
        </ParallaxLayer>
      </MainElements>
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

    const copyText = async (text: string) => {
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
        <Parallax ref={parallaxRef} pages={7}>
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
              <div className=" py-5 bg-[#62786b]/50 w-[100%] h-[30%] flex flex-col justify-between border-t-2 border-b-2 border-dashed">
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
            <div className="text-white flex flex-col bg-[#62786b] w-full h-fit gap-10 px-5">
              <Image priority alt="flower ombak" src={BaliFlowerImage} />
              <MotionWrapper
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 1.3 }}
              >
                <Text variant="TITLE" textAlign="LEFT" customClass="text-xl">
                  Dengan memohon rahmat dan ridho Allah &apos;Azza wa Jalla,
                  kami mengundang Bapak/Ibu/Saudara/i, untuk menghadiri acara
                  pernikahan kami
                </Text>
              </MotionWrapper>
              <MotionWrapper
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                transition={{ duration: 2 }}
              >
                <div className="flex flex-col gap-5">
                  <Text variant="NAME" customClass="text-5xl" textAlign="LEFT">
                    Muhammad
                    <br />
                    Bagas
                    <br />
                    Rinaldi
                  </Text>
                  <Text customClass="text-white text-xl">
                    Putra kedua dari Bapak Dody Rinaldi & Ibu Evi Srihandajani
                  </Text>
                </div>
              </MotionWrapper>
              <MotionWrapper
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
              >
                <Text variant="TITLE" customClass="text-6xl" textAlign="CENTER">
                  &
                </Text>
              </MotionWrapper>
              <MotionWrapper
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                transition={{ duration: 2 }}
              >
                <div className="flex flex-col items-end gap-5">
                  <Text variant="NAME" customClass="text-5xl" textAlign="RIGHT">
                    Putri
                    <br />
                    Handayani
                  </Text>
                  <Text customClass="text-white text-xl" textAlign="RIGHT">
                    Putri kedua dari Bapak Junaedi & Ibu Sawiyah
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
              className="flex flex-col w-full h-fit py-5 items-center date bg-[#62786b] gap-10"
              style={{
                backgroundRepeat: formalMode ? "repeat" : "no-repeat",
                backgroundSize: formalMode ? "contain" : "cover",
              }}
            >
              <div className="flex flex-col items-center">
                <MotionWrapper
                  transition={{ duration: 1.5, ease: "easeIn" }}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                >
                  <Text variant="TITLE" customClass="text-xl">
                    Minggu, 26 Januari
                  </Text>
                </MotionWrapper>
                <MotionWrapper
                  transition={{ duration: 1.8, ease: "easeIn" }}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                >
                  <Text variant="TITLE" customClass="text-5xl">
                    2025
                  </Text>
                </MotionWrapper>
                <MotionWrapper
                  transition={{ duration: 2, ease: "easeIn" }}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                >
                  <Text variant="BODY" customClass="text-xl">
                    Akad: 08.00 WIB - Selesai
                  </Text>
                  <Text variant="BODY" customClass="text-xl">
                    Resepsi: 11.00 WIB - Selesai
                  </Text>
                </MotionWrapper>
              </div>
              {formalMode && (
                <div className="flex flex-col items-center gap-5">
                  <Text
                    variant="TITLE"
                    customClass="text-xl"
                    textAlign="CENTER"
                  >
                    Dress Code
                  </Text>
                  <div className="flex justify-center gap-6">
                    <MotionWrapper
                      initial={{ y: 30 }}
                      animate={{ y: 0 }}
                      transition={{
                        bounce: 1,
                        duration: 1.5,
                      }}
                    >
                      <div className="flex flex-col items-center">
                        <div className="w-[50px] h-[50px] rounded-full bg-[#86A788]"></div>
                        <Text variant="BODY">
                          Sage
                          <br />
                          green
                        </Text>
                      </div>
                    </MotionWrapper>

                    <MotionWrapper
                      initial={{ y: 30 }}
                      animate={{ y: 0 }}
                      transition={{
                        bounce: 1,
                        duration: 2,
                      }}
                    >
                      <div className="flex flex-col items-center">
                        <div className="w-[50px] h-[50px] rounded-full bg-[#F1E5D1]"></div>
                        <Text variant="BODY">Cream</Text>
                      </div>
                    </MotionWrapper>

                    <MotionWrapper
                      initial={{ y: 30 }}
                      animate={{ y: 0 }}
                      transition={{
                        bounce: 1,
                        duration: 2.5,
                      }}
                    >
                      <div className="flex flex-col items-center">
                        <div className="w-[50px] h-[50px] rounded-full bg-[#A79277]"></div>
                        <Text variant="BODY">Coksu</Text>
                      </div>
                    </MotionWrapper>
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
              <div className="address w-full flex flex-col items-center bg-[#62796b] border-t-2 border-b-2 border-dotted">
                {/* <Text variant="TITLE" customClass="text-white text-5xl">
                  Alamat
                </Text> */}
                <Map />
              </div>
            </MotionWrapper>
          </ParallaxLayer>

          <ParallaxLayer offset={4} speed={0.5}>
            <MotionWrapper>
              <div className="w-full h-[300px] flex flex-col gap-5 justify-between bg-[#62796f]/50 border-t-2 border-b-2 border-dashed">
                <Text
                  variant="TITLE"
                  customClass="text-white text-xl"
                  textAlign="CENTER"
                >
                  Doa untuk pengantin
                </Text>
                <div className="flex flex-col gap-5">
                  <Text
                    variant="TITLE"
                    customClass="text-white text-3xl"
                    textAlign="CENTER"
                  >
                    بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَ جَمَعَ
                    بَيْنَكُمَا فِي خَيْرٍ
                  </Text>
                  <Text customClass="text-white text-5xl" textAlign="CENTER">
                    &quot;Semoga Allah memberkahi engkau di waktu lapang maupun
                    di waktu sempit, dan semoga Allah (senantiasa) mengumpulkan
                    kalian berdua dalam kebaikan.&quot; (HR Abu Dawud)
                  </Text>
                </div>
              </div>
            </MotionWrapper>
          </ParallaxLayer>
          <ParallaxLayer offset={5} speed={0.5} factor={0.8}>
            <div
              className={
                formalMode
                  ? "bg-[#62786b] h-full flex flex-col items-center justify-center"
                  : "bg-[#62786b] h-full flex flex-col items-center justify-between"
              }
            >
              {!formalMode && (
                <div className="flex flex-col items-center gap-5 px-5">
                  <Text variant="TITLE" customClass="text-white text-xl md:text-3xl">
                    Wedding Gift
                  </Text>
                  <Text variant="BODY" customClass="text-white text-center">
                    Apabila berkenan, Bapak/I/Saudara/i dapat memberikan doa
                    restu serta tanda kasih melalui transfer ke rekening
                    berikut:
                  </Text>
                  <div className="flex flex-col items-center">
                    <Text variant="BODY" customClass="text-xl text-white">
                      Bank BSI
                    </Text>
                    <div className="flex flex-col items-center justify-center gap-5 text-white cursor-pointer">
                      <Text variant="BODY" customClass="text-xl">
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
              <div className="flex flex-col items-center">
                <MotionWrapper
                  style={{ padding: "10px" }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 2 }}
                >
                  <Text customClass="text-white text-5xl" textAlign="CENTER">
                    Merupakan suatu kehormatan dan kebahagiaan bagi kami,
                    apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan
                    doa restu kepada kami
                  </Text>
                </MotionWrapper>
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={6} speed={0.5}>
            <MainElements>
              <ParallaxLayer offset={0.5}>
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
                    Jazakumullahu Khairan Katsiran
                  </Text>
                </MotionWrapper>
              </ParallaxLayer>
            </MainElements>
          </ParallaxLayer>
        </Parallax>

        
      </>
    );
  }
);
