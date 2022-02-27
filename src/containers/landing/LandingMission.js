import { styled } from "@mui/material/styles";
import { Grid, Container, Typography } from "@mui/material";
import { varFadeInUp, MotionInView } from "../../components/animate";
import { shadowHeading } from "src/utils/shadowHeading";
import { BackgroundBlur } from "../BackgroundBlur";

const RootStyle = styled("div")(({ theme }) => ({
  position: "relative",
  paddingTop: theme.spacing(10),
}));

const ContentStyle = styled("div")(({ theme }) => ({
  zIndex: 1,
  width: "100%",
  textAlign: "center",

  [theme.breakpoints.up("md")]: {
    textAlign: "left",
  },
}));

const Heading = styled((props) => <Typography {...props} />)(({ theme }) => ({
  filter: shadowHeading(theme.palette.secondary.main),
}));

export function LandingMission() {
  return (
    <RootStyle>
      <BackgroundBlur top="0" right="-350px" bottom="0" width="700px" height="700px" color="secondary" />

      <Container maxWidth="lg" sx={{ zIndex: 1, position: "relative" }}>
        <Grid container spacing={{ xs: 0, md: 10 }} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={4} sx={{ display: "flex", alignItems: "center" }}>
            <ContentStyle>
              <MotionInView variants={varFadeInUp}>
                <Heading variant="h2" sx={{ mb: 3 }}>
                  Support Ukraine
                </Heading>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography>100% of all primary sales will be donated to organizations that support the people in Ukraine.</Typography>
              </MotionInView>
            </ContentStyle>
          </Grid>

          <Grid item>
            <Typography sx={{ fontSize: 180 }}>🇺🇦</Typography>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
