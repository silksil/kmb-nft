import React from "react";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";
import { Box, Container, Typography } from "@mui/material";

import { shadowHeading } from "src/utils/shadowHeading";

const RootStyle = styled("div")(() => ({
  position: "relative",
  height: "100vh",
  width: "100%"
}));

const ContentStyle = styled((props) => <Box {...props} />)(({ theme }) => ({
  position: "relative",
  zIndex: 2,
  maxWidth: 520,
  margin: "auto",
  textAlign: "center",
  position: "relative",
  marginTop: theme.spacing(8),

  [theme.breakpoints.up("lg")]: {
    marginTop: theme.spacing(8)
  }
}));

const Heading = styled((props) => <Typography {...props} />)(({ theme }) => ({
  filter: shadowHeading(theme.palette.secondary.main)
}));

const SubTitle = styled((props) => <Typography {...props} />)(({ theme }) => ({
  filter: shadowHeading(theme.palette.secondary.main, 0.0001)
}));

const BackgroundBlur = styled((props) => <Box {...props} />)(({ theme, color }) => ({
  position: "absolute",
  zIndex: 0,
  marginTop: theme.spacing(30),
  filter: "blur(70px)",
  backgroundColor: theme.palette[color].main,

  height: 100,
  width: 120,
  left: "calc(50% - 70px)",

  [theme.breakpoints.up("md")]: {
    filter: "blur(90px)",
    marginTop: theme.spacing(30),

    height: 140,
    width: 200,
    left: "calc(50% - 100px)"
  },
  [theme.breakpoints.up("lg")]: {
    width: 320,
    height: 320,

    left: "calc(50% - 160px)"
  }
}));

const HeroImgStyle = styled(motion.img)(({ theme }) => ({
  zIndex: 1,
  position: "relative",
  margin: "auto",
  height: "auto",
  width: "80%",

  [theme.breakpoints.up("sm")]: {
    width: 320,
    marginTop: `-${theme.spacing(4)}`
  },

  [theme.breakpoints.up("md")]: {
    width: 400,
    marginTop: `-${theme.spacing(6)}`
  },

  [theme.breakpoints.up("lg")]: {
    width: 600,
    marginTop: `-${theme.spacing(10)}`
  }
}));

const AstronautStyle = styled(motion.img)(({ theme }) => ({
  height: "120px",
  width: "120px",
  position: "absolute",
  left: "0",
  marginLeft: "0",
  marginTop: theme.spacing(14),

  [theme.breakpoints.up("sm")]: {
    marginLeft: "20%"
  },

  [theme.breakpoints.up("lg")]: {
    position: "absolute",
    top: "0%",
    marginLeft: "30%"
  }
}));

export function LandingHero() {
  return (
    <RootStyle>
      <motion.div animate={{ y: [-50, 50, -50], x: [-50, 50, -50] }} transition={{ duration: 7, repeat: Infinity }}>
        <BackgroundBlur color="secondary" />
      </motion.div>

      <motion.div animate={{ y: [50, -50, 50], x: [50, -50, 50] }} transition={{ duration: 7, repeat: Infinity }}>
        <BackgroundBlur color="primary" />
      </motion.div>

      <AstronautStyle animate={{ y: [10, -10, 10] }} transition={{ duration: 5, repeat: Infinity }} src="/static/avatars/astronaut.png" />

      <ContentStyle>
        <Heading variant="h2" gutterBottom>
          KMB vs Vladimir
        </Heading>
        <Container>
          <SubTitle>KMBs are characters on the Ethereum blockchain that protect the Metaverse from Vladimir and other bad guys.</SubTitle>
        </Container>
      </ContentStyle>
      <Box>
        <HeroImgStyle alt="hero" src="/static/avatars/hero-characters.png" />
      </Box>
    </RootStyle>
  );
}
