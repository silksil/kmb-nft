import { styled } from "@mui/material/styles";
import { Box, Container, Grid, Typography, alpha } from "@mui/material";
import { varFadeInUp, MotionInView } from "../../components/animate";

const RootStyle = styled("div")(({ theme }) => ({
  position: "relative",
  marginTop: theme.spacing(-8),

  [theme.breakpoints.up("sm")]: {
    marginTop: theme.spacing(-5)
  },

  [theme.breakpoints.up("md")]: {
    marginTop: theme.spacing(10)
  }
}));

const Heading = styled(Typography)(({ theme }) => ({}));

const SectionTitle = styled((props) => <Typography variant="body2" {...props} />)(({ theme }) => ({
  fontWeight: "bold",
  marginBottom: theme.spacing(0.5)
}));

const SectionText = styled((props) => <Typography variant="body2" {...props} />)(({ theme }) => ({}));

const SectionContainer = styled((props) => <Box {...props} />)(({ theme }) => ({
  background: alpha(theme.palette.primary.main, 0.1),
  borderRadius: theme.shape.borderRadiusMd,
  padding: theme.spacing(1, 2),

  [theme.breakpoints.up("md")]: {
    minHeight: "380px",
    padding: theme.spacing(3, 2)
  }
}));

const GridItem = ({ children }) => (
  <Grid item xs={12} md={4}>
    {children}
  </Grid>
);

export function LandingMission() {
  return (
    <RootStyle id="mission_section">
      <Container maxWidth="xl" sx={{ zIndex: 1, position: "relative" }}>
        <MotionInView variants={varFadeInUp}>
          <Heading variant="h2" textAlign="center" sx={{ mb: 1 }}>
            Support Ukraine 🇺🇦
          </Heading>
          <Typography sx={{ mb: { xs: 2, md: 4 } }} textAlign="center">
            100% of primary sales and <br />
            royalties go to Ukraine.
          </Typography>
        </MotionInView>

        <Grid container spacing={{ xs: 1, md: 4 }} justifyContent="center">
          <GridItem>
            <SectionContainer>
              <SectionTitle>How does it work?</SectionTitle>
              <SectionText>
                Though the collection has a funny tone, the cause is not. The intention of this initiative is not to downplay the seriousness of the war in Ukraine. Instead, we want to offer an alternative way to help the people of the country. All income will be distributed through{" "}
                <a href="https://unchain.fund/" target="_blank" rel="noreferrer">
                  Unchain.fund
                </a>{" "}
                to the people in Ukraine. Unchain.fund is a blockchain initiative aimed at raising and distributing funds for humanitarian needs in Ukraine.
              </SectionText>
            </SectionContainer>
          </GridItem>
          <GridItem>
            <SectionContainer>
              <SectionTitle>Why not just donate?</SectionTitle>
              <SectionText>We aim to provide an alternative for helping the people of Ukraine and want to demonstrate that NFTs are a way to accomplish meaningful effects in the real world. If just one person would buy an NFT, who would otherwise not have donated, this project has fulfilled its purpose. 100% of the proceeds from primary, as well royalties on secondary sales, go to Ukraine.</SectionText>
            </SectionContainer>
          </GridItem>
        </Grid>
      </Container>
    </RootStyle>
  );
}
