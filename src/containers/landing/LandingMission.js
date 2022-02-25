import { styled } from "@mui/material/styles";
import { Grid, Container, Typography } from "@mui/material";
import { varFadeInUp, MotionInView } from "../../components/animate";
import { shadowHeading } from "src/utils/shadowHeading";

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
      <Container maxWidth="lg" sx={{ zIndex: 1, position: "relative" }}>
        <Grid container spacing={{ xs: 0, md: 10 }} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={6} sx={{ display: "flex", alignItems: "center" }}>
            <ContentStyle>
              <MotionInView variants={varFadeInUp}>
                <Heading variant="h2" sx={{ mb: 3 }}>
                  Mission
                </Heading>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography>VKMG aims to support the people in Ukraine that suffer the consequences of war. 90% of all sales will be donated to organizations that support the people in Ukraine. The community will decide to which organization(s) the donations will go. The remaining 10% will be used by the creators to drive this project, and thereby increasing the amount donated to Ukraine.</Typography>
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
