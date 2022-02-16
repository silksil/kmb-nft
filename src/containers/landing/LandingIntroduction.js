import { styled } from '@mui/material/styles';
import { Box, Container, Typography, Stack } from '@mui/material';

import { MotionInView, varFadeInUp } from '../../components/animate';
import { VladimirMarquee } from '../VladimirMarquee';
import { KmgMarquee } from '../KmgMarquee';
import { shadowHeading } from 'src/utils/shadowHeading';

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(15, 0),
  textAlign: 'center',
}));

const Heading = styled((props) => <Typography {...props} />)(({ theme }) => ({
  filter: shadowHeading(theme.palette.secondary.main),
}));

export function LandingIntroduction() {
  return (
    <RootStyle>
      <Container maxWidth="sm" sx={{ position: 'relative' }}>
        <MotionInView variants={varFadeInUp}>
          <Heading variant="h2" sx={{ mb: 1 }}>
            Meet the Squat
          </Heading>
        </MotionInView>

        <MotionInView variants={varFadeInUp}>
          <Typography>Vladimir & does not feel respected as a world leader. To take revenge, he aims to conquer the Metaverse. Together with the secret agency service, Komitet Metaverse Gansters (KMG), he plans to make his vision reality.</Typography>
        </MotionInView>
      </Container>
      <Container maxWidth="1400px" sx={{ mt: 10, maxWidth: 2200 }}>
        <Box mb={3}>
          <VladimirMarquee />
        </Box>

        <KmgMarquee />
      </Container>
    </RootStyle>
  );
}
