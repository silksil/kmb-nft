import { styled } from '@mui/material/styles';
import { Box, Container, Typography, Stack } from '@mui/material';

import { MotionInView, varFadeInUp } from '../../components/animate';
import { PuutMarquee } from '../PuutMarquee';
import { PutzieMarquee } from '../PutzieMarquee';

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(15, 0),
}));

export function LandingIntroduction() {
  return (
    <RootStyle>
      <Container maxWidth="lg" sx={{ position: 'relative', textAlign: 'center' }}>
        <MotionInView variants={varFadeInUp}>
          <Typography variant="h2" sx={{ mb: 1 }}>
            Meet the Squat
          </Typography>
        </MotionInView>

        <MotionInView variants={varFadeInUp}>
          <Typography>10,000 unique Putzies</Typography>
        </MotionInView>
      </Container>
      <Container maxWidth="1400px" sx={{ mt: 10, maxWidth: 2200 }}>
        <PuutMarquee />
        <PutzieMarquee />
        <div data-vl-widget="popupTrigger"></div>
      </Container>
    </RootStyle>
  );
}
