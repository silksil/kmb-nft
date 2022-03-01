import { styled } from "@mui/material/styles";
import { Container, Typography } from "@mui/material";

import { MotionInView, varFadeInUp } from "../../components/animate";
import { shadowHeading } from "src/utils/shadowHeading";

const RootStyle = styled("div")(({ theme }) => ({
  textAlign: "center",
  width: "100%",
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
          <Typography>The Komitet Metaverse Gangsters (KMG) protect the Metaverse from the baddies. They’re currently on a mission to stop the baddest of ‘em all: Vladimir. The autocratic leader does not feel respected by other world leaders so he decided to take revenge with a twisted plot to take over the Metaverse. The KMG&lsquo;s are here to stop him.</Typography>
        </MotionInView>
      </Container>
    </RootStyle>
  );
}
