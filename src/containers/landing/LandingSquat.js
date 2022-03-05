import { styled } from "@mui/material/styles";
import { Box, Container, Grid, Typography, alpha } from "@mui/material";

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

// const GridContainer = styled((props) => <Grid {...props} />)(({ theme }) => ({
//   // background: theme.palette.gradients.primaryAndSecondary.horizontal.dark,
//   borderRadius: theme.shape.borderRadiusMd,

//   marginTop: theme.spacing(2),
//   // width: "100%",
//   // height: "100%",
//   margin: 0,
// }));

const CollectionType = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadiusMd,
  padding: theme.spacing(3),
  width: "100%",
  height: "100%",
  opacity: "10",
  textAlign: "center",
  background: alpha(theme.palette.primary.main, 0.1),
  "&:hover": {
    background: alpha(theme.palette.primary.main, 0.4),
  },

  [theme.breakpoints.up("sm")]: {
    textAlign: "left",
  },
}));

const Percentage = styled((props) => <Typography {...props} />)(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(3),
  right: theme.spacing(3),
  color: theme.palette.primary.main,
}));

export function LandingSquat() {
  return (
    <RootStyle>
      <Container maxWidth="md" sx={{ position: "relative" }}>
        <MotionInView variants={varFadeInUp}>
          <Heading variant="h2" sx={{ mb: 1 }}>
            The Collection
          </Heading>
        </MotionInView>
      </Container>
      <Container maxWidth="sm" sx={{ mt: 2 }}>
        <MotionInView variants={varFadeInUp}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6}>
              <CollectionType>
                <Typography fontWeight="bold">KMG's</Typography>
                <Percentage variant="caption">90%</Percentage>
                <Typography variant="body2">With a KMG purchase, you’re financing him/her in the fight against Vlad.</Typography>
              </CollectionType>
            </Grid>
            <Grid item xs={12} md={6}>
              <CollectionType>
                <Typography fontWeight="bold">Vladimirs</Typography>
                <Percentage variant="caption">10%</Percentage>

                <Typography variant="body2">By owning a Vladimir, you are doing the one thing he hates: being owned by others.</Typography>
              </CollectionType>
            </Grid>
          </Grid>
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
