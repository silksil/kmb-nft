import { styled } from '@mui/material/styles';
import { Box, Container, Typography, Stack } from '@mui/material';

import { MotionInView, varFadeInUp } from '../../components/animate';
import { WidepMarquee } from '../WidepMarquee';
import { KmgMarquee } from '../KmgMarquee';

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(15, 0),
  textAlign: 'center',
}));

export function LandingIntroduction() {
  return (
    <RootStyle>
      <Container maxWidth="sm" sx={{ position: 'relative' }}>
        <MotionInView variants={varFadeInUp}>
          <Typography variant="h2" sx={{ mb: 1 }}>
            Meet the Squat
          </Typography>
        </MotionInView>

        <MotionInView variants={varFadeInUp}>
          <Typography>Wide P. does not feel respected as world leader. To take revenge he his eyes on the Metaverse. Together with the secret agency service, Komitet Metaverse Gansters (KMG), he plans to conquer this new world.</Typography>
        </MotionInView>
      </Container>
      <Container maxWidth="1400px" sx={{ mt: 10, maxWidth: 2200 }}>
        <Box mb={3}>
          <WidepMarquee />
        </Box>

        <KmgMarquee />
      </Container>
    </RootStyle>
  );
}
