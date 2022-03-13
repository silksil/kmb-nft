import { ParallaxLayer } from "@react-spring/parallax";
import { Image } from "src/components/Image.js";

export const LandingCloudAndCo = () => {
  return (
    <>
      <ParallaxLayer offset={1.3} speed={0} style={{ pointerEvents: "none" }}>
        <Image src="static/illustrations/cloud.svg" alt="cloud" style={{ width: "15%", marginLeft: "70%" }} />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
        <Image src="static/illustrations/cloud.svg" alt="cloud" style={{ display: "block", marginLeft: "55%" }} />
        <Image src="static/illustrations/cloud.svg" alt="cloud" width="10%" style={{ display: "block", marginLeft: "20%" }} />
      </ParallaxLayer>
      <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
        <Image src="static/illustrations/cloud.svg" alt="cloud" style={{ display: "block", width: "20%", marginLeft: "70%" }} />
        <Image src="static/illustrations/cloud.svg" alt="cloud" style={{ display: "block", width: "20%", marginLeft: "40%" }} />
      </ParallaxLayer>
      <ParallaxLayer offset={1.2} speed={0.1} style={{ opacity: 0.6 }}>
        <Image src="static/illustrations/doge.png" alt="doge" style={{ display: "block", width: "7%", marginLeft: "10%" }} />
      </ParallaxLayer>
      <ParallaxLayer offset={1.1} speed={0.2}>
        <Image src="static/illustrations/wojak.png" alt="wojak" style={{ display: "block", width: "7%", marginLeft: "85%" }} />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
        <Image src="static/illustrations/cloud.svg" alt="cloud" style={{ display: "block", width: "10%", marginLeft: "10%" }} />
        <Image src="static/illustrations/cloud.svg" alt="cloud" style={{ display: "block", width: "20%", marginLeft: "75%" }} />
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={-0.3} style={{ opacity: 0.4 }}>
        <Image src="static/illustrations/bitcoin.png" alt="bitcoin" style={{ display: "block", width: "5%", marginLeft: "70%" }} />
      </ParallaxLayer>
      <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
        <Image src="static/illustrations/cloud.svg" alt="cloud" style={{ display: "block", width: "20%", marginLeft: "60%" }} />
        <Image src="static/illustrations/cloud.svg" alt="cloud" style={{ display: "block", width: "25%", marginLeft: "30%" }} />
      </ParallaxLayer>

      <ParallaxLayer offset={2.4} speed={-0.1} style={{ opacity: 0.8 }}>
        <Image src="static/illustrations/pepe.png" alt="pepe" style={{ display: "block", width: "8%", marginLeft: "80%" }} />
      </ParallaxLayer>
      <ParallaxLayer offset={2.4} speed={-0.5} style={{ opacity: 0.6 }}>
        <Image src="static/illustrations/ethereum.png" alt="ethereum" style={{ display: "block", width: "5%", marginLeft: "20%" }} />
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
