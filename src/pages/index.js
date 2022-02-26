import MainLayout from "src/layouts/main";
import { Page } from "src/components/Page";
import { LandingHero, LandingIntroduction, LandingFAQs, LandingMission, LandingSquat, LandingTechnical, LandingTeam } from "src/containers/landing";
import { MintingModal } from "src/containers/minting-modal/MintingModal";
import { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const LandingCloudParallaxLayer = () => {
  const url = (name, wrap = false) => `${wrap ? "url(" : ""}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ")" : ""}`;

  return (
    <>
      <ParallaxLayer offset={1.3} speed={0} style={{ pointerEvents: "none" }}>
        <img src={url("satellite4")} style={{ width: "15%", marginLeft: "70%" }} />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
        <img src={url("cloud")} style={{ display: "block", width: "20%", marginLeft: "55%" }} />
        <img src={url("cloud")} style={{ display: "block", width: "10%", marginLeft: "15%" }} />
      </ParallaxLayer>
      <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
        <img src={url("cloud")} style={{ display: "block", width: "20%", marginLeft: "70%" }} />
        <img src={url("cloud")} style={{ display: "block", width: "20%", marginLeft: "40%" }} />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
        <img src={url("cloud")} style={{ display: "block", width: "10%", marginLeft: "10%" }} />
        <img src={url("cloud")} style={{ display: "block", width: "20%", marginLeft: "75%" }} />
      </ParallaxLayer>
      <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
        <img src={url("cloud")} style={{ display: "block", width: "20%", marginLeft: "60%" }} />
        <img src={url("cloud")} style={{ display: "block", width: "25%", marginLeft: "30%" }} />
        <img src={url("cloud")} style={{ display: "block", width: "10%", marginLeft: "80%" }} />
      </ParallaxLayer>
      <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
        <img src={url("cloud")} style={{ display: "block", width: "20%", marginLeft: "5%" }} />
        <img src={url("cloud")} style={{ display: "block", width: "15%", marginLeft: "75%" }} />
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
        <img src={url("earth")} style={{ width: "60%" }} />
      </ParallaxLayer>
    </>
  );
};
export default function LandingPage() {
  const parallax = useRef();
  const url = (name, wrap = false) => `${wrap ? "url(" : ""}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ")" : ""}`;

  return (
    <Page title="Vladimir & the KMG" id="move_top" sx={{ height: "100%" }}>
      <MainLayout>
        <MintingModal />

        <Parallax ref={parallax} pages={9}>
          <ParallaxLayer
            offset={0}
            speed={0}
            factor={3}
            style={{
              backgroundImage: url("stars", true),
              backgroundSize: "cover",
              width: "100%",
            }}
          />
          <ParallaxLayer
            offset={3}
            speed={0}
            factor={3}
            style={{
              backgroundImage: url("stars", true),
              backgroundSize: "cover",
              width: "100%",
            }}
          />
          <ParallaxLayer
            offset={6}
            speed={0}
            factor={3}
            style={{
              backgroundImage: url("stars", true),
              backgroundSize: "cover",
              width: "100%",
            }}
          />

          <ParallaxLayer offset={0} speed={1}>
            <LandingHero />
          </ParallaxLayer>

          <ParallaxLayer sticky={{ start: 1, end: 2 }} style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
            <LandingIntroduction />
          </ParallaxLayer>

          <LandingCloudParallaxLayer />
          <ParallaxLayer offset={3} speed={0.2}>
            <LandingMission />
          </ParallaxLayer>

          <ParallaxLayer offset={4} speed={0.2}>
            <LandingSquat />
          </ParallaxLayer>

          <ParallaxLayer offset={5} speed={0.2}>
            <LandingTechnical />
          </ParallaxLayer>

          <ParallaxLayer offset={6} speed={0.2}>
            <LandingTeam />
          </ParallaxLayer>

          <ParallaxLayer offset={7} speed={0.2}>
            <LandingFAQs />
          </ParallaxLayer>
        </Parallax>
      </MainLayout>
    </Page>
  );
}
