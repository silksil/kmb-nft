import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import flashFill from '@iconify/icons-eva/flash-fill';
import { styled } from '@mui/material/styles';
import { Box, Stack, Button, Container, Typography } from '@mui/material';

import { varFadeIn, varFadeInUp, varWrapEnter, varFadeInRight } from '../../animate';
import { useWallet } from 'src/hooks/useWallet';
import { useContract } from 'src/hooks/useContract';

import { useUI } from 'src/hooks/useUI';

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.grey[400],
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    position: 'fixed',
    alignItems: 'center',
  },
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  zIndex: 10,
  maxWidth: 520,
  margin: 'auto',
  textAlign: 'center',
  position: 'relative',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
    textAlign: 'left',
  },
}));

const HeroOverlayStyle = styled(motion.img)({
  zIndex: 9,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

const HeroImgStyle = styled(motion.img)(({ theme }) => ({
  top: 0,
  right: 0,
  bottom: 0,
  zIndex: 8,
  width: '100%',
  margin: 'auto',
  position: 'absolute',
  [theme.breakpoints.up('lg')]: {
    right: '8%',
    width: 'auto',
    height: '48vh',
  },
}));

export default function LandingHero() {
  const { askContractToMintNft, setupEventListener } = useContract();
  const { isConnected, connect } = useWallet(setupEventListener);
  const { setMintingModalIsOpen } = useUI();

  const handleClick = async () => {
    if (!isConnected) return connect();

    setMintingModalIsOpen(true);
    askContractToMintNft();
  };

  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <HeroOverlayStyle alt="overlay" src="/static/overlay.svg" variants={varFadeIn} />
        <HeroImgStyle alt="hero" src="/static/home/hero.png" variants={varFadeInUp} />
        <Container maxWidth="lg">
          <ContentStyle>
            <motion.div variants={varFadeInRight}>
              <Typography variant="h1" sx={{ color: 'common.white' }}>
                Putin's
                <Typography component="span" variant="h1" sx={{ color: 'primary.main' }}>
                  &nbsp;Putzies
                </Typography>
              </Typography>
            </motion.div>

            <motion.div variants={varFadeInRight}>
              <Typography sx={{ color: 'common.white' }}>Putin has big plans with his army of Putzies. Get your Putzie and make history.</Typography>
            </motion.div>

            <motion.div variants={varFadeInRight}>
              <Button size="large" variant="contained" startIcon={<Icon icon={flashFill} width={20} height={20} />} onClick={handleClick}>
                {isConnected ? 'Mint NFT' : 'Connect wallet'}
              </Button>
            </motion.div>

            <Stack direction="row" spacing={1.5} justifyContent={{ xs: 'center', md: 'flex-start' }}>
              <motion.img variants={varFadeInRight} src="/static/home/ic_sketch.svg" />
              <motion.img variants={varFadeInRight} src="/static/home/ic_figma.svg" />
            </Stack>
          </ContentStyle>
        </Container>
      </RootStyle>
      <Box sx={{ height: { md: '100vh' } }} />
    </>
  );
}
