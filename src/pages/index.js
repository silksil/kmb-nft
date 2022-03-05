import MainLayout from "src/layouts/main";
import { Page } from "src/components/Page";
import { LandingFAQs, LandingHero, LandingIntroduction, LandingMission, LandingSquat } from "src/containers/landing";
import { MintingModal } from "src/containers/minting-modal/MintingModal";
import { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { styled } from "@mui/system";
import { LandingCloudAndCo } from "src/containers/landing/ParallaxCloudAndCo";
import { ParallaxBackgroundStars } from "src/containers/landing/ParallaxBackgroundStars";

export default function LandingPage() {
  const parallax = useRef();

  const ContentStyle = styled("div")(({ theme }) => ({
    minHeight: "100vh",
    backgroundColor: theme.palette.background.default,
  }));

  return (
    <Page title="The KMG vs Vladimir" id="move_top" sx={{ height: "100%" }}>
      <MainLayout>
        <MintingModal />

        <ContentStyle>
          <Parallax ref={parallax} pages={7}>
            <ParallaxBackgroundStars />
            <ParallaxLayer offset={0} speed={1}>
              <LandingHero />
            </ParallaxLayer>

            <ParallaxLayer sticky={{ start: 1, end: 2 }} style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
              <LandingIntroduction />
            </ParallaxLayer>
            <LandingCloudAndCo />

            <ParallaxLayer offset={3} speed={0.2}>
              <LandingMission />
            </ParallaxLayer>

            <ParallaxLayer offset={4} speed={0.2}>
              <LandingSquat />
            </ParallaxLayer>
            <ParallaxLayer offset={5} speed={0.2}>
              <LandingFAQs />
            </ParallaxLayer>
          </Parallax>
        </ContentStyle>
      </MainLayout>
    </Page>
  );
}
