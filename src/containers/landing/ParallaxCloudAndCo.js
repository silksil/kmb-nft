import { ParallaxLayer } from "@react-spring/parallax";

export const LandingCloudAndCo = () => {
  return (
    <>
      <ParallaxLayer offset={1.3} speed={0} style={{ pointerEvents: "none" }}>
        <img src="static/illustrations/cloud.svg" alt="cloud" style={{ width: "15%", marginLeft: "70%" }} />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
        <img src="static/illustrations/cloud.svg" alt="cloud" style={{ display: "block", width: "20%", marginLeft: "55%" }} />
        <img src="static/illustrations/cloud.svg" alt="cloud" style={{ display: "block", width: "10%", marginLeft: "20%" }} />
      </ParallaxLayer>
      <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
        <img src="static/illustrations/cloud.svg" alt="cloud" style={{ display: "block", width: "20%", marginLeft: "70%" }} />
        <img src="static/illustrations/cloud.svg" alt="cloud" style={{ display: "block", width: "20%", marginLeft: "40%" }} />
      </ParallaxLayer>
      <ParallaxLayer offset={1.75} speed={0.1} style={{ opacity: 0.6 }}>
        <img src="static/illustrations/doge.png" alt="cloud" style={{ display: "block", width: "5%", marginLeft: "10%" }} />
      </ParallaxLayer>
      <ParallaxLayer offset={1.5} speed={0.2} style={{ opacity: 0.9 }}>
        <img src="static/illustrations/wojak.png" alt="cloud" style={{ display: "block", width: "5%", marginLeft: "90%" }} />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
        <img src="static/illustrations/cloud.svg" alt="cloud" style={{ display: "block", width: "10%", marginLeft: "10%" }} />
        <img src="static/illustrations/cloud.svg" alt="cloud" style={{ display: "block", width: "20%", marginLeft: "75%" }} />
      </ParallaxLayer>
      <ParallaxLayer offset={1.5} speed={-0.1} style={{ opacity: 0.4 }}>
        <img src="static/illustrations/bitcoin.png" alt="cloud" style={{ display: "block", width: "5%", marginLeft: "70%" }} />
      </ParallaxLayer>
      <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
        <img src="static/illustrations/cloud.svg" alt="cloud" style={{ display: "block", width: "20%", marginLeft: "60%" }} />
        <img src="static/illustrations/cloud.svg" alt="cloud" style={{ display: "block", width: "25%", marginLeft: "30%" }} />
        <img src="static/illustrations/pepe.png" alt="cloud" style={{ display: "block", width: "8%", marginLeft: "80%" }} />
        <img src="static/illustrations/ethereum.png" alt="cloud" style={{ display: "block", width: "5%", marginLeft: "20%" }} />
      </ParallaxLayer>
      <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
        <img src="static/illustrations/cloud.svg" alt="cloud" style={{ display: "block", width: "20%", marginLeft: "5%" }} />
        <img src="static/illustrations/cloud.svg" alt="cloud" style={{ display: "block", width: "15%", marginLeft: "75%" }} />
      </ParallaxLayer>
      <ParallaxLayer
        offset={2.0}
        speed={2}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        <img src="static/illustrations/earth.svg" style={{ width: "60%" }} />
      </ParallaxLayer>
    </>
  );
};
