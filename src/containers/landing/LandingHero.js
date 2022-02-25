import React from "react";
import { motion } from "framer-motion";
import flashFill from "@iconify/icons-eva/flash-fill";
import { styled } from "@mui/material/styles";
import { Box, Button, Container, Typography, useMediaQuery, useTheme } from "@mui/material";

import { varFadeInUp, varWrapEnter, varFadeInDown } from "../../components/animate";
import { useWallet } from "src/hooks/useWallet";
import { useContract } from "src/hooks/useContract";

import { useUI } from "src/hooks/useUI";
import { Icon } from "src/components/Icon";
import { BackgroundBlur as BaseBackgroundBlur } from "../BackgroundBlur";
import { shadowHeading } from "src/utils/shadowHeading";

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: "relative",
  height: "100vh",
  width: "100%",
}));

const ContentStyle = styled((props) => <Box {...props} />)(({ theme }) => ({
  position: "relative",
  zIndex: 2,
  maxWidth: 520,
  margin: "auto",
  textAlign: "center",
  position: "relative",
  marginTop: theme.spacing(16),
  [theme.breakpoints.up("lg")]: {
    marginTop: theme.spacing(16),
  },
}));

const Heading = styled((props) => <Typography {...props} />)(({ theme }) => ({
  filter: shadowHeading(theme.palette.secondary.main),
}));

const BackgroundBlur = styled((props) => <Box {...props} />)(({ theme, color }) => ({
  position: "absolute",
  zIndex: 0,
  top: "20vh",
  filter: "blur(100px)",
  backgroundColor: theme.palette[color].main,

  height: 140,
  width: 140,
  left: "calc(50% - 70px)",

  [theme.breakpoints.up("md")]: {
    height: 200,
    width: 300,
    left: "calc(50% - 150px)",
  },
  [theme.breakpoints.up("lg")]: {
    width: 300,
    left: "calc(50% - 200px)",
  },
}));

const HeroImgStyle = styled(motion.img)(({ theme }) => ({
  zIndex: 1,
  position: "relative",
  margin: "auto",
  height: "auto",
  width: "80%",

  [theme.breakpoints.up("md")]: {
    width: 420,
    marginTop: `-${theme.spacing(10)}`,
  },

  [theme.breakpoints.up("lg")]: {
    width: 520,
    marginTop: `-${theme.spacing(12)}`,
  },
}));

const AstronautStyle = styled(motion.img)(({ theme }) => ({
  height: "120px",
  position: "absolute",
  left: "0",
  marginLeft: "0",
  marginTop: theme.spacing(25),

  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(6),
  },

  [theme.breakpoints.up("lg")]: {
    height: "200px",
    position: "absolute",
    top: "10%",
    left: "45%",
    marginLeft: "-400px",
  },
}));

export function LandingHero() {
  return (
    <RootStyle initial="initial" animate="animate" variants={varWrapEnter} position="relative">
      <motion.div animate={{ y: [-50, 50, -50], x: [-50, 50, -50] }} transition={{ duration: 8, repeat: Infinity }}>
        <BackgroundBlur color="secondary" />
      </motion.div>

      <motion.div animate={{ y: [50, -50, 50], x: [50, -50, 50] }} transition={{ duration: 8, repeat: Infinity }}>
        <BackgroundBlur color="primary" />
      </motion.div>

      {/* <motion.div animate={{ y: [-50, 50, -50] }} transition={{ duration: 4, repeat: Infinity }}>
        <BackgroundBlur color="secondary" sx={{ right: "25%" }} inHalf />
      </motion.div> */}
      {/* <motion.div animate={{ y: [-20, 20, -20] }} transition={{ duration: 4, repeat: Infinity }}>
        <AstronautStyle alt="hero" src="/static/avatars/astronaut.png" />
      </motion.div> */}

      <ContentStyle>
        <Heading variant="h2" gutterBottom>
          KMG vs Vladimir
        </Heading>
        <Heading variant="h3" gutterBottom></Heading>
        <Heading variant="h2" gutterBottom></Heading>
        <Container maxWidth="xs">
          <Typography>KMG'rs are characters on the Ethereum blockchain with a mission to protect the Metaverse from Vladimir.</Typography>
        </Container>
      </ContentStyle>
      <HeroImgStyle alt="hero" src="/static/avatars/hero-characters.png" />
    </RootStyle>
  );
}
