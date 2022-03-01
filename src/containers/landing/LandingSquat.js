import { styled } from "@mui/material/styles";
import { Box, Container, Typography } from "@mui/material";

import { MotionInView, varFadeInUp } from "../../components/animate";
import { VladimirMarquee } from "../VladimirMarquee";
import { KmgMarquee } from "../KmgMarquee";
import { shadowHeading } from "src/utils/shadowHeading";

const RootStyle = styled("div")(({ theme }) => ({
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
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
          <Typography>With every character you purchase, you’ll be strengthening the force against Vladimir. The KMG&lsquo;s makes up 90% of the collection. With a KMG purchase, you’re financing him/her in the fight against Vlad. Rather annoy him on a personal level? Then get your own Vladimir. 10% of the collection is made up of Vlad&lsquo;s and by purchasing one, you are doing the one thing he hates: being owned by others. So, what’s your strategy in the fight?.</Typography>
        </MotionInView>
      </Container>

      <Box sx={{ mt: 10, maxWidth: 1600 }}>
        <Box mb={3}>
          <KmgMarquee />
        </Box>
        <VladimirMarquee />
      </Box>
    </RootStyle>
  );
}
