import React from 'react';
import { motion } from 'framer-motion';
import flashFill from '@iconify/icons-eva/flash-fill';
import { styled } from '@mui/material/styles';
import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material';

import { varFadeInUp, varWrapEnter, varFadeInRight, varFadeInDown } from '../../components/animate';
import { useWallet } from 'src/hooks/useWallet';
import { useContract } from 'src/hooks/useContract';

import { useUI } from 'src/hooks/useUI';
import { Icon } from 'src/components/Icon';
import { BackgroundBlur } from '../BackgroundBlur';

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  height: '90vh',
  width: '100%',
  overflow: 'hidden',
  [theme.breakpoints.up('lg')]: {
    height: '90vh',
    position: 'fixed',
  },
}));

const ContentStyle = styled((props) => <Box {...props} />)(({ theme }) => ({
  zIndex: 10,
  maxWidth: 520,
  margin: 'auto',
  textAlign: 'center',
  overflow: 'hidden',
  marginTop: theme.spacing(25),
  [theme.breakpoints.up('lg')]: {
    marginTop: theme.spacing(30),
  },
}));

const HeroImgStyle = styled(motion.img)(({ theme }) => ({
  margin: 'auto',
  marginTop: `-${theme.spacing(8)}`,
  width: '600px',

  [theme.breakpoints.up('lg')]: {
    width: '900px',
    marginTop: '-160px',
  },
}));

const AstronautStyle = styled(motion.img)(({ theme }) => ({
  height: '120px',
  position: 'absolute',
  left: '0',
  marginLeft: '0',
  marginTop: theme.spacing(10),
  [theme.breakpoints.up('lg')]: {
    height: '200px',
    position: 'absolute',
    top: '10%',
    left: '50%',
    marginLeft: '-400px',
  },
}));

const HeroOverlayStyle = styled(motion.img)({
  zIndex: 9,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

export function LandingHero() {
  const { mintNft, setupEventListener } = useContract();
  const { isConnected, connect } = useWallet(setupEventListener);
  const { setMintingModalIsOpen } = useUI();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  const handleClick = async () => {
    if (!isConnected) return connect();

    setMintingModalIsOpen(true);
    mintNft();
  };

  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter} position="relative">
        <BackgroundBlur color="secondary" width="300px" height="90vh" blurRadius="100px" inHalf opacityStrength={0.2} zIndex={-1} />
        <BackgroundBlur color="primary" right="0" width="300px" height="90vh" inHalf opacityStrength={0.2} zIndex={-1} />
        <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity }}>
          <AstronautStyle alt="hero" src="/static/avatars/astronaut.png" />
        </motion.div>

        <ContentStyle>
          <motion.div variants={varFadeInDown}>
            <Typography variant="h1" gutterBottom>
              The Putzies
            </Typography>

            <Typography>The Putzies have big plans for the Metaverse.</Typography>
          </motion.div>

          {isDesktop && (
            <motion.div variants={varFadeInRight}>
              <Button sx={{ marginTop: 3 }} size="large" variant="contained" startIcon={<Icon icon={flashFill} width={20} height={20} />} onClick={handleClick}>
                {isConnected ? 'Mint NFT' : 'Connect wallet'}
              </Button>
            </motion.div>
          )}
        </ContentStyle>
        <HeroImgStyle alt="hero" src="/static/avatars/hero-characters.png" />
      </RootStyle>
      <Box sx={{ height: { md: '90vh' } }} />
    </>
  );
}
