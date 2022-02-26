import { styled } from "@mui/material/styles";
import { Box, Container, Typography } from "@mui/material";

import { MotionInView, varFadeInUp } from "../../components/animate";
import { VladimirMarquee } from "../VladimirMarquee";
import { KmgMarquee } from "../KmgMarquee";
import { shadowHeading } from "src/utils/shadowHeading";

const RootStyle = styled("div")(({ theme }) => ({
  textAlign: "center",
}));

const Heading = styled((props) => <Typography {...props} />)(({ theme }) => ({
  filter: shadowHeading(theme.palette.secondary.main),
}));

export function LandingSquat() {
  return (
    <RootStyle>
      <Container maxWidth="sm" sx={{ position: "relative" }}>
        <MotionInView variants={varFadeInUp}>
          <Heading variant="h2" sx={{ mb: 1 }}>
            The Collection
          </Heading>
        </MotionInView>
        <MotionInView variants={varFadeInUp}>
          <Typography>10% of the collection are a Vladimir, 90% are KMG&lsquo;s. If you buy an KMG you are financing him/her to fight against Vladimir. If you buy a Vladimir you are doing the one thing he hates; being owned by others.</Typography>
        </MotionInView>
      </Container>
      <Box sx={{ mt: 10, maxWidth: 2200 }}>
        <Box mb={3}>
          <KmgMarquee />
        </Box>
        <VladimirMarquee />
      </Box>
    </RootStyle>
  );
}
