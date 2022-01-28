import { styled } from '@mui/material/styles';
import { Box, Grid, Container, Typography } from '@mui/material';
import { varFadeInUp, MotionInView } from '../../components/animate';
import { BackgroundBlur } from '../BackgroundBlur';

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(22, 0),
}));

const ContentStyle = styled('div')(({ theme }) => ({
  zIndex: 1,
  width: '100%',
  textAlign: 'center',

  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
  },
}));

export function LandingTechnical() {
  return (
    <RootStyle>
      <BackgroundBlur top="0" left="-200px" bottom="0" width="400px" height="400px" color="secondary" />

      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4} sx={{ display: 'flex', alignItems: 'center' }}>
            <ContentStyle>
              <MotionInView variants={varFadeInUp}>
                <Typography variant="h2" sx={{ mb: 3 }}>
                  Every character is unique
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography
                  sx={{
                    mb: 2,
                  }}
                >
                  It is a collection of 8,888 NFTs on the blockchain. Each trait is seperetly crafted with love. Then some algorithm computer wizardry is used to blend these traits and create unique characters.
                </Typography>
              </MotionInView>
            </ContentStyle>
          </Grid>

          <Grid item xs={10} md={4} sx={{ zIndex: 1 }}>
            <Box as="img" src="/static/avatars/puut-1.png" />
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
