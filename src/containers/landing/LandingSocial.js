import { styled } from '@mui/material/styles';
import { Box, Grid, Container, Typography } from '@mui/material';
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

const ContainerStyle = styled((props) => <Container {...props} />)(({ theme }) => ({
  position: 'relative',
}));

export function LandingSocial() {
  return (
    <RootStyle>
      <ContainerStyle maxWidth="md">
        <BackgroundBlur color="primary" bottom="0" right="-40px" height="400px" width="100%" />
        <BackgroundBlur color="secondary" top="0" left="-80px" width="100%" opacityStrength={0.3} />
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
          </ContentStyle>
        </Box>
      </ContainerStyle>
    </RootStyle>
  );
}
