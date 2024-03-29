// import { styled } from '@mui/material/styles';
// import { Typography, Button } from '@mui/material';
// import { Icon } from 'src/components/Icon';

// import { BackgroundBlur } from '../BackgroundBlur';

// const RootStyle = styled('div')(({ theme }) => ({
//   padding: theme.spacing(28, 0),
//   backgroundColor: theme.palette.grey[900],
//   position: 'relative',
// }));

// const ContainerStyle = styled('div')(({ theme }) => ({
//   position: 'relative',
//   padding: 0,
//   margin: 'auto',
//   width: '90%',
//   [theme.breakpoints.up('md')]: {
//     maxWidth: '800px',
//   },
// }));

// const ContentStyle = styled('div')(({ theme }) => ({
//   textAlign: 'center',
//   backgroundColor: theme.palette.background.paper,
//   padding: theme.spacing(10, 1),
//   borderRadius: theme.shape.borderRadiusMd,
//   zIndex: 10,
//   position: 'relative',
// }));

// export function LandingWhitelist() {
//   return (
//     <RootStyle>
//       <ContainerStyle>
//         <BackgroundBlur color="secondary" top="-60px" height="120px" width="100%" opacityStrength={0.1} />
//         <BackgroundBlur color="secondary" bottom="-60px" height="120px" width="100%" opacityStrength={0.1} />

//         <ContentStyle>
//           <Typography variant="h2" sx={{ mb: 3 }}>
//             Win being Whitelisted
//           </Typography>

//           <Button variant="outlined" size="large" color="secondary">
//             Join Whitelist
//           </Button>
//         </ContentStyle>
//       </ContainerStyle>
//     </RootStyle>
//   );
// }

import { styled } from "@mui/material/styles";
import { Box, Grid, Container, Typography } from "@mui/material";
import { varFadeInUp, MotionInView } from "../../components/animate";
import { BackgroundBlur } from "../BackgroundBlur";
import { shadowHeading } from "src/utils/shadowHeading";

const RootStyle = styled("div")(({ theme }) => ({
  position: "relative",
  padding: theme.spacing(22, 0)
}));

const ContentStyle = styled("div")(({ theme }) => ({
  zIndex: 1,
  width: "100%",
  textAlign: "center",

  [theme.breakpoints.up("md")]: {
    textAlign: "left"
  }
}));

const Heading = styled((props) => <Typography {...props} />)(({ theme }) => ({
  filter: shadowHeading(theme.palette.secondary.main)
}));

export function LandingWhitelist() {
  return (
    <RootStyle>
      <BackgroundBlur right="-350px" bottom="0" width="700px" height="700px" zIndex={0} color="secondary" />

      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={10} md={4}>
            <Box as="img" src="/static/avatars/kmb/kmb-6.png" zIndex={1} position="relative" />
          </Grid>
          <Grid item xs={12} md={4} sx={{ display: "flex", alignItems: "center" }}>
            <ContentStyle>
              <MotionInView variants={varFadeInUp}>
                <Heading variant="h2" sx={{ mb: 3 }}>
                  Vision
                </Heading>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography
                  sx={{
                    mb: 2
                  }}
                >
                  The visions is to create a community of builders that
                  <br />
                  50% of the royalties of secondary sales will be put into the treasury to start new iniatives. It is up to the community to decide what these initiatives will be. For example, if the community decided so, the treasury could fund a second collection where The KMBs fight the Tinder Swindler to help his victims.
                </Typography>
              </MotionInView>
            </ContentStyle>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
