"use client";

// import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Container } from "@/components/ui";
// import Image from "next/image";
// import { Text } from "@/components/ui/text";
// import bottomImage from "@/assets/images/bottom.png";
// import mosqueImage from "@/assets/images/mosque.png";
// import sideImage from "@/assets/images/side.png";
// import { useSpring } from "@react-spring/web";
import { Test } from "@/components/animate";

export default function Home() {
  // const springs =
  return (
    <Container
      direction="COL"
      align="CENTER"
      customClass={`w-[100%] h-[100vh]
        justify-self-center gap-5 xl:gap-10 
        2xl:gap-20 md:w-[100%] lg:w-[50%] xl:w-[35%] 
        2xl:w-[30%] relative overflow-y-auto container
        `}
    >
      <Test
        loop
        from={{ transform: "rotate(0deg)", background: "black" }}
        to={[{ transform: "rotate(15deg)" }, { transform: "rotate(0deg)" }]}
      />
      {/* <Parallax pages={10} style={{ top: "0", left: "0" }}>
        <ParallaxLayer
          factor={0.7}
          offset={0}
          speed={-0.1}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            variant="TITLE"
            textAlign="CENTER"
            customClass="text-2xl text-[white]"
          >
            Pembukaan Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </Text>
        </ParallaxLayer>
        <ParallaxLayer factor={0.6} offset={1} speed={0.3}>
          <Text
            variant="TITLE"
            textAlign="CENTER"
            customClass="text-2xl text-[white] md:text-7xl"
          >
            Putri Handayani <br /> & <br /> Calon Suami
          </Text>
          <Image alt="mosque-image" src={mosqueImage} className="w-full" />
        </ParallaxLayer>

        <ParallaxLayer offset={1.3} speed={1.3} factor={0.6}>
          <Image alt="side-image" src={sideImage} className="w-full" />
        </ParallaxLayer>

        <ParallaxLayer offset={1.3} speed={1} factor={0.6}>
          <Image alt="footer" src={bottomImage} className="w-full" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0.3}
          factor={0.5}
        >
          <Text
            variant="TITLE"
            textAlign="CENTER"
            customClass="text-6xl text-[white]"
          >
            Konten 3
          </Text>
          <Text
            variant="BODY"
            textAlign="CENTER"
            customClass="text-6xl text-[white]"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
            necessitatibus totam atque veniam odit molestiae optio rem iusto
            placeat, ducimus vitae nemo. Provident deleniti dicta nisi quod!
            Labore provident sit voluptas? Ipsum doloribus iste minima
            praesentium dicta quod laudantium maxime voluptatem unde esse
            sapiente, soluta consectetur ullam quidem officia nam, libero
          </Text>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.7}
          speed={1}
          factor={0.5}
        >
          <Text
            variant="TITLE"
            textAlign="CENTER"
            customClass="text-6xl text-[white] mb-[30px]"
          >
            Waktu & Tempat
          </Text>

          <Text
            variant="BODY"
            textAlign="CENTER"
            customClass="text-6xl text-[white] mb-[30px]"
          >
            Senin, 26 Januari 2025
          </Text>
          <Text
            variant="BODY"
            textAlign="CENTER"
            customClass="text-6xl text-[white] mb-[30px]"
          >
            07:00 WIB - Selesai
          </Text>

          <Text
            variant="BODY"
            textAlign="CENTER"
            customClass="text-6xl text-[white] mb-[30px]"
          >
            Jalan Malioboro Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ullam iusto saepe, dolorem officia incidunt.
          </Text>

          
        </ParallaxLayer>
      </Parallax> */}
    </Container>
  );
}
