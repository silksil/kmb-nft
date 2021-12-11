import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import flashFill from '@iconify/icons-eva/flash-fill';
import { styled } from '@mui/material/styles';
import { Box, Stack, Button, Container, Typography, IconButton } from '@mui/material';

import { varFadeInUp, varWrapEnter, varFadeInRight } from '../../components/animate';
import { useWallet } from 'src/hooks/useWallet';
import { useContract } from 'src/hooks/useContract';

import { useUI } from 'src/hooks/useUI';
import { getMarketplaceCollectionUrl } from 'src/utils/getMarketplaceUrl';
import { BackgroundBlur } from '../BackgroundBlur';

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: 'relative',
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

export function LandingHero() {
  const { mintNft, setupEventListener } = useContract();
  const { isConnected, connect } = useWallet(setupEventListener);
  const { setMintingModalIsOpen } = useUI();

  const handleClick = async () => {
    if (!isConnected) return connect();

    setMintingModalIsOpen(true);
    mintNft();
  };

  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter} position="relative">
        <HeroImgStyle alt="hero" src="/static/avatars/putin-1.png" variants={varFadeInUp} />
        <BackgroundBlur color="secondary" left="0" height="400px" inHalf blurRadius="300px" />
        <BackgroundBlur color="primary" right="0" height="400px" inHalf blurRadius="300px" />

        <Container maxWidth="lg">
          <ContentStyle>
            <Box>
              <motion.div variants={varFadeInRight}>
                <Typography variant="h1">
                  Putin's
                  <Typography component="span" variant="h1">
                    &nbsp;Putzies
                  </Typography>
                </Typography>
              </motion.div>

              <motion.div variants={varFadeInRight}>
                <Typography variant="h5">Putin has big plans for the MetaVerse.</Typography>
              </motion.div>
            </Box>

            <motion.div variants={varFadeInRight}>
              <Button size="large" variant="contained" startIcon={<Icon icon={flashFill} width={20} height={20} />} onClick={handleClick}>
                {isConnected ? 'Mint NFT' : 'Connect wallet'}
              </Button>
            </motion.div>

            <Stack direction="row" spacing={1.5} justifyContent={{ xs: 'center', md: 'flex-start' }}>
              <motion.div variants={varFadeInRight} src="/static/marketplaces/opensea-logo.png">
                <IconButton target="_blank" href={getMarketplaceCollectionUrl('OPENSEA')}>
                  <Box component="img" width="32px" src="/static/marketplaces/opensea-logo.png" />
                </IconButton>
              </motion.div>
              <motion.div variants={varFadeInRight} src="/static/marketplaces/rarible-logo.png">
                <IconButton target="_blank" href={getMarketplaceCollectionUrl('RARIBLE')}>
                  <Box component="img" width="32px" src="/static/marketplaces/rarible-logo.png" />
                </IconButton>
              </motion.div>
            </Stack>
          </ContentStyle>
        </Container>
      </RootStyle>
      <Box sx={{ height: { md: '100vh' } }} />
    </>
  );
}
