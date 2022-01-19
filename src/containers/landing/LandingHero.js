import React from 'react';
import { motion } from 'framer-motion';
import flashFill from '@iconify/icons-eva/flash-fill';
import { styled } from '@mui/material/styles';
import { Box, Button, Container, Typography, useMediaQuery, useTheme } from '@mui/material';

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
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.up('lg')]: {
    paddingTop: theme.spacing(24),
  },
}));

const HeroImgStyle = styled(motion.img)(({ theme }) => ({
  position: 'absolute',
  marginTop: theme.spacing(20),

  [theme.breakpoints.up('lg')]: {
    width: '500px',
    marginLeft: '-250px',
    left: '50%',
    marginTop: theme.spacing(50),
  },
}));
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
        <HeroImgStyle alt="hero" src="/static/avatars/putin-1.png" variants={varFadeInUp} />
        <BackgroundBlur color="secondary" width="300px" height="90vh" blurRadius="100px" inHalf opacityStrength={0.2} zIndex={-1} />
        <BackgroundBlur color="primary" right="0" width="300px" height="90vh" inHalf opacityStrength={0.2} zIndex={-1} />

        <Container maxWidth="lg">
          <ContentStyle>
            <motion.div variants={varFadeInDown}>
              <Typography variant="h1" gutterBottom>
                The Putzies
              </Typography>

              <Typography>Wide Putin and his squad of Putzies have big plans for the Metaverse.</Typography>
            </motion.div>

            {isDesktop && (
              <motion.div variants={varFadeInRight}>
                <Button sx={{ marginTop: 3 }} size="large" variant="contained" startIcon={<Icon icon={flashFill} width={20} height={20} />} onClick={handleClick}>
                  {isConnected ? 'Mint NFT' : 'Connect wallet'}
                </Button>
              </motion.div>
            )}
          </ContentStyle>
        </Container>
      </RootStyle>
      <Box sx={{ height: { md: '90vh' } }} />
    </>
  );
}
