import { styled } from "@mui/material/styles";
import { Container, Typography } from "@mui/material";

import { MotionInView, varFadeInUp } from "../../components/animate";
import { KmgMarquee } from "../KmgMarquee";
import { shadowHeading } from "src/utils/shadowHeading";

const RootStyle = styled("div")(({ theme }) => ({
  textAlign: "center",
}));

const Heading = styled((props) => <Typography {...props} />)(({ theme }) => ({
  filter: shadowHeading(theme.palette.secondary.main),
}));

export function LandingIntroduction() {
  return (
    <RootStyle>
      <Container maxWidth="sm" sx={{ position: "relative" }}>
        <MotionInView variants={varFadeInUp}>
          <Heading variant="h2" sx={{ mb: 1 }}>
            The Story
          </Heading>
        </MotionInView>

        <MotionInView variants={varFadeInUp}>
          <Typography>Vladimir does not feel respected as a world leader. To take revenge, he aims to conquer the Metaverse. The Komitet Metaverse Gansters (KMG) are here to stop him.</Typography>
        </MotionInView>
      </Container>
      <Container maxWidth="1400px" sx={{ mt: 10, maxWidth: 2200 }}>
        <KmgMarquee />
      </Container>
    </RootStyle>
  );
}
