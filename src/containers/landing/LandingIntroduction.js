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
          <Typography>The Komitet Metaverse Gansters (KMG&lsquo;s) protect the Metaverse from the baddies. Currently they are on a mission to stop Vladimir from conquering the Metaverse. The autocratic leader does not feel respected by other world leaders and want to take revenge by taking over the Metaverse.</Typography>
        </MotionInView>
      </Container>
    </RootStyle>
  );
}
