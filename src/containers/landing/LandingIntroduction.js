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
            KMB Manifesto
          </Heading>
        </MotionInView>

        <MotionInView variants={varFadeInUp}>
          <Typography>Crypto is a world with two faces. On one hand it is the world of investment, road to riches and greed. On the other hand it is a world with visionaries, community and the believe that the technology will bring more power to the people. The Komitet Metaverse Builders (KMBs) stand for the latter. They don't despise those who make (a lot of) money. Instead, they represent the people within crypto that (also) want to do good and fight the bad. They are currently on a mission to stop the baddest of them all: Vladimir.</Typography>
        </MotionInView>
      </Container>
    </RootStyle>
  );
}
