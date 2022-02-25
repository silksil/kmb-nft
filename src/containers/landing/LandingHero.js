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
  zIndex: 1,
  maxWidth: 520,
  margin: "auto",
  textAlign: "center",
  position: "relative",
  marginTop: theme.spacing(18),
  [theme.breakpoints.up("lg")]: {
    marginTop: theme.spacing(25),
  },
}));

const Heading = styled((props) => <Typography {...props} />)(({ theme }) => ({
  filter: shadowHeading(theme.palette.secondary.main),
}));

const BackgroundBlur = styled((props) => <BaseBackgroundBlur {...props} />)(({ theme }) => ({
  zIndex: -1,
  width: 200,
  height: "90vh",

  [theme.breakpoints.up("md")]: {
    width: 300,
  },
  [theme.breakpoints.up("lg")]: {
    width: 500,
  },
}));

const HeroImgStyle = styled(motion.img)(({ theme }) => ({
  margin: "auto",
  marginTop: `-${theme.spacing(10)}`,
  height: "55vh",
  width: "auto",

  [theme.breakpoints.up("lg")]: {
    height: "80%",
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
  const { mintNft, setupEventListener } = useContract();
  const { isConnected, connect } = useWallet(setupEventListener);
  const { setMintingModalIsOpen } = useUI();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const isLaunched = false;

  const handleClick = async () => {
    if (!isConnected) return connect();

    setMintingModalIsOpen(true);
    mintNft();
  };

  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter} position="relative">
        <BackgroundBlur color="secondary" sx={{ left: { xs: -100, md: -150, lg: -250 } }} inHalf />

        <BackgroundBlur color="primary" sx={{ right: { xs: -100, md: -150, lg: -250 } }} inHalf />
        <motion.div animate={{ y: [-20, 20, -20] }} transition={{ duration: 4, repeat: Infinity }}>
          <AstronautStyle alt="hero" src="/static/avatars/astronaut.png" />
        </motion.div>

        <ContentStyle>
          <Heading variant="h1" gutterBottom>
            Vladimir и KMG
          </Heading>
          <Container maxWidth="xs">
            <Typography>Ruthless characters on the Ethereum blockchain with a mission to conquer the Metaverse.</Typography>
          </Container>
        </ContentStyle>
        <HeroImgStyle alt="hero" src="/static/avatars/hero-characters.png" />
      </RootStyle>
    </>
  );
}
