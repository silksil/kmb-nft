import { styled } from "@mui/material/styles";
import { Box, Grid, Container, Typography } from "@mui/material";
import { varFadeInUp, MotionInView } from "../../components/animate";
import { BackgroundBlur } from "../BackgroundBlur";
import { shadowHeading } from "src/utils/shadowHeading";

const RootStyle = styled("div")(({ theme }) => ({
  position: "relative",
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
      <BackgroundBlur top="0" left="-350px" bottom="0" width="700px" height="700px" color="primary" />

      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4} sx={{ display: "flex", alignItems: "center" }}>
            <ContentStyle>
              <MotionInView variants={varFadeInUp}>
                <Heading variant="h2" sx={{ mb: 3 }}>
                  Mission
                </Heading>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography
                  sx={{
                    mb: 2,
                  }}
                >
                  VKMG aims to support the people in Ukraine that suffer the consequences of power hungry people. This is done by donating 90% of all sales to organizations that support the people in Ukraine. The community will decide to which organization(s) the donations will go. The remaining 10% will be used by the creators behind the VKMG to work full-time on this mission.
                </Typography>
              </MotionInView>
            </ContentStyle>
          </Grid>

          <Grid item xs={10} md={4} sx={{ zIndex: 1 }}>
            <Typography sx={{ fontSize: 240 }}>🇺🇦</Typography>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
