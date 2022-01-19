import { styled } from '@mui/material/styles';
import { Box, Grid, Container, Typography, Button } from '@mui/material';
import { Icon } from 'src/components/Icon';

import { BackgroundBlur } from '../BackgroundBlur';

import { MotionInView, varFadeInUp, varFadeInDown } from '../../components/animate';

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(28, 0),
  backgroundColor: theme.palette.grey[900],
  position: 'relative',
}));

const ContentStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  textAlign: 'center',
  backgroundColor: theme.palette.background.paper,
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
  borderRadius: theme.shape.borderRadiusMd,
  zIndex: 10,
}));

const ContainerStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  padding: 0,
  margin: 'auto',
  width: '90%',
  [theme.breakpoints.up('md')]: {
    maxWidth: '900px',
  },
}));

export function LandingSocial() {
  return (
    <RootStyle>
      <ContainerStyle>
        <BackgroundBlur color="primary" bottom="0" height="400px" width="100%" opacityStrength={0.7} />
        <BackgroundBlur color="secondary" top="0" width="100%" opacityStrength={0.7} />
        <Box position="relative">
          <ContentStyle>
            <MotionInView variants={varFadeInUp}>
              <Typography variant="overline" sx={{ mb: 2, color: 'text.disabled' }}>
                Community driven
              </Typography>
            </MotionInView>

            <MotionInView variants={varFadeInUp}>
              <Typography variant="h2" sx={{ mb: 3 }}>
                Join the community
              </Typography>
            </MotionInView>
            <Button variant="contained" size="large" color="secondary" endIcon={<Box component="img" src="static/social/discord_white.png" sx={{ width: 24, height: 24 }} />}>
              Join Discord
            </Button>
          </ContentStyle>
        </Box>
      </ContainerStyle>
    </RootStyle>
  );
}
