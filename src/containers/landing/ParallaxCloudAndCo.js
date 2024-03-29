import { ParallaxLayer } from "@react-spring/parallax";
import { Image } from "src/components/Image.js";

export const LandingCloudAndCo = () => {
  return (
    <>
      <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
        <Image src="static/illustrations/cloud.svg" alt="cloud" style={{ display: "block", marginLeft: "55%" }} />
        <Image src="static/illustrations/cloud.svg" alt="cloud" width="10%" style={{ display: "block", marginLeft: "20%" }} />
      </ParallaxLayer>
      <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
        <Image src="static/illustrations/cloud.svg" alt="cloud" style={{ display: "block", width: "20%", marginLeft: "70%" }} />
        <Image src="static/illustrations/cloud.svg" alt="cloud" style={{ display: "block", width: "20%", marginLeft: "40%" }} />
      </ParallaxLayer>
      <ParallaxLayer offset={1.1} speed={-0.1} style={{ opacity: 0.6 }}>
        <Image src="static/illustrations/doge.png" alt="doge" sx={{ display: "block", width: { xs: "40px", md: "100px" }, marginLeft: "10%" }} />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.2}>
        <Image src="static/illustrations/wojak.png" alt="wojak" sx={{ display: "block", width: { xs: "40px", md: "100px" }, marginLeft: "85%" }} />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
        <Image src="static/illustrations/cloud.svg" alt="cloud" style={{ display: "block", width: "10%", marginLeft: "10%" }} />
        <Image src="static/illustrations/cloud.svg" alt="cloud" style={{ display: "block", width: "20%", marginLeft: "75%" }} />
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={-0.3} style={{ opacity: 0.4 }}>
        <Image src="static/illustrations/bitcoin.png" alt="bitcoin" sx={{ display: "block", width: { xs: "40px", md: "100px" }, marginLeft: "70%" }} />
      </ParallaxLayer>

      <ParallaxLayer offset={2.4} speed={-0.1} style={{ opacity: 0.8 }}>
        <Image src="static/illustrations/pepe.png" alt="pepe" sx={{ display: "block", width: { xs: "40px", md: "100px" }, marginLeft: "90%" }} />
      </ParallaxLayer>
      <ParallaxLayer offset={2.4} speed={-0.5} style={{ opacity: 0.6 }}>
        <Image src="static/illustrations/ethereum.png" alt="ethereum" sx={{ display: "block", width: { xs: "40px", md: "100px" }, marginLeft: "20%" }} />
      </ParallaxLayer>
      <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
        <Image src="static/illustrations/cloud.svg" alt="cloud" style={{ display: "block", width: "20%", marginLeft: "5%" }} />
        <Image src="static/illustrations/cloud.svg" alt="cloud" style={{ display: "block", width: "15%", marginLeft: "75%" }} />
      </ParallaxLayer>
      <ParallaxLayer
        offset={2.0}
        speed={2}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none"
        }}
      >
        <Image src="static/illustrations/earth.svg" alt="earth" style={{ width: "60%" }} />
      </ParallaxLayer>
    </>
  );
};
