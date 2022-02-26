import React from "react";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";
import { Box, Container, Typography } from "@mui/material";

import { shadowHeading } from "src/utils/shadowHeading";

const RootStyle = styled("div")(() => ({
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
  marginTop: theme.spacing(8),

  [theme.breakpoints.up("lg")]: {
    marginTop: theme.spacing(8),
  },
}));

const Heading = styled((props) => <Typography {...props} />)(({ theme }) => ({
  filter: shadowHeading(theme.palette.secondary.main),
}));

const BackgroundBlur = styled((props) => <Box {...props} />)(({ theme, color }) => ({
  position: "absolute",
  zIndex: 0,
  marginTop: theme.spacing(28),
  filter: "blur(90px)",
  backgroundColor: theme.palette[color].main,

  height: 160,
  width: 160,
  left: "calc(50% - 70px)",

  [theme.breakpoints.up("md")]: {
    marginTop: theme.spacing(28),

    height: 200,
    width: 300,
    left: "calc(50% - 150px)",
  },
  [theme.breakpoints.up("lg")]: {
    width: 300,
    height: 300,

    left: "calc(50% - 200px)",
  },
}));

const HeroImgStyle = styled(motion.img)(({ theme }) => ({
  zIndex: 1,
  position: "relative",
  margin: "auto",
  height: "auto",
  width: "80%",

  [theme.breakpoints.up("sm")]: {
    width: 320,
    marginTop: `-${theme.spacing(4)}`,
  },

  [theme.breakpoints.up("md")]: {
    width: 400,
    marginTop: `-${theme.spacing(6)}`,
  },

  [theme.breakpoints.up("lg")]: {
    width: 600,
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
    <RootStyle>
      <motion.div animate={{ y: [-50, 50, -50], x: [-50, 50, -50] }} transition={{ duration: 6, repeat: Infinity }}>
        <BackgroundBlur color="secondary" />
      </motion.div>

      <motion.div animate={{ y: [50, -50, 50], x: [50, -50, 50] }} transition={{ duration: 6, repeat: Infinity }}>
        <BackgroundBlur color="primary" />
      </motion.div>

      <ContentStyle>
        <Heading variant="h2" gutterBottom>
          The KMG vs Vladimir
        </Heading>
        <Container>
          <Typography>KMG&lsquo;s are characters on the Ethereum blockchain that protect the Metaverse from Vladimir and other baddies.</Typography>
        </Container>
      </ContentStyle>
      <HeroImgStyle alt="hero" src="/static/avatars/hero-characters.png" />
    </RootStyle>
  );
}
