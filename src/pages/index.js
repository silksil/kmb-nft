import MainLayout from "src/layouts/main";
import { Page } from "src/components/Page";
import { LandingFAQs, LandingHero, LandingIntroduction, LandingMission, LandingSocial, LandingSquat, LandingTeam } from "src/containers/landing";
import { MintingModal } from "src/containers/minting-modal/MintingModal";
import { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { ParallaxBackgroundStars } from "src/containers/landing/ParallaxBackgroundStars";
import { LandingCloudAndCo } from "src/containers/landing/ParallaxCloudAndCo";

export default function LandingPage() {
  const parallax = useRef();

  return (
    <Page title="KMB vs Vladimir" id="move_top" sx={{ height: "100%" }}>
      <MainLayout>
        <MintingModal />

        <Parallax ref={parallax} pages={8}>
          <ParallaxBackgroundStars />
          <ParallaxLayer offset={0} speed={1}>
            <LandingHero />
          </ParallaxLayer>

          <ParallaxLayer sticky={{ start: 1, end: 2 }} style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
            <LandingIntroduction />
          </ParallaxLayer>
          <LandingCloudAndCo />

          <ParallaxLayer offset={3} speed={0.2}>
            <LandingSquat />
          </ParallaxLayer>

          <ParallaxLayer offset={4} speed={0.2}>
            <LandingMission />
          </ParallaxLayer>

          <ParallaxLayer offset={5} speed={0.2}>
            <LandingSocial />
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
