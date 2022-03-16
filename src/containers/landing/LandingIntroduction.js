import { styled } from "@mui/material/styles";
import { Container, Typography } from "@mui/material";

import { MotionInView, varFadeInUp } from "../../components/animate";
import { shadowHeading } from "src/utils/shadowHeading";

const RootStyle = styled("div")(() => ({
  textAlign: "center",
  width: "100%"
}));

const Heading = styled((props) => <Typography {...props} />)(({ theme }) => ({
  filter: shadowHeading(theme.palette.secondary.main)
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
          <Typography>
            Komitet Metaverse Builders (KMB) protect the Metaverse from the bad guys. They are currently on a mission to stop the baddest of them all: Vladimir. The autocratic leader is isolated by the rest of the world and has his eyes on the Metaverse. <br /> KMB is here to stop him.
          </Typography>
        </MotionInView>
      </Container>
    </RootStyle>
  );
}
