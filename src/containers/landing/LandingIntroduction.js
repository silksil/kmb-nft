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
          <Typography>Express your own style with just one click.</Typography>
        </MotionInView>
      </Container>
      <Box sx={{ mt: 10 }}>
        <PuutMarquee />
        <PutzieMarquee />
      </Box>
    </RootStyle>
  );
}
