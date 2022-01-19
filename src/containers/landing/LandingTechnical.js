import { styled } from '@mui/material/styles';
import { Box, Grid, Container, Typography } from '@mui/material';
import { varFadeInUp, MotionInView } from '../../components/animate';
import { BackgroundBlur } from '../BackgroundBlur';

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(24, 0),
}));

const ContentStyle = styled('div')(({ theme }) => ({
  zIndex: 1,
  width: '100%',
  textAlign: 'center',
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    marginBottom: 0,
  },
}));

export function LandingTechnical() {
  return (
    <RootStyle>
      <BackgroundBlur color="secondary" top="0" inHalf />
      <BackgroundBlur color="primary" right="0px" bottom="0" inHalf />

      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4} sx={{ display: 'flex', alignItems: 'center' }}>
            <ContentStyle>
              <MotionInView variants={varFadeInUp}>
                <Typography component="p" variant="overline" sx={{ mb: 2, color: 'text.secondary' }}>
                  TECH SPEC
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography variant="h2" sx={{ mb: 3 }}>
                  Every Putzie is unique
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography
                  sx={{
                    mb: 5,
                  }}
                >
                  ABC is a collection of 10,000 NFTs on the Ethereum blockchain. Each trait is meticulously hand-drawn and crafted, then generated by an algorithm to create unique art pieces.{' '}
                </Typography>
              </MotionInView>
            </ContentStyle>
          </Grid>

          <Grid item xs={12} md={8}>
            <Box as="img" src="/static/avatars/putin-1.png" />
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
