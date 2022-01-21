import { styled } from '@mui/material/styles';
import { Typography, Button, Grid } from '@mui/material';
import { Icon } from 'src/components/Icon';
import discordIcon from '@iconify/icons-ic/baseline-discord';
import twitterIcon from '@iconify/icons-eva/twitter-fill';

import { BackgroundBlur } from '../BackgroundBlur';

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(28, 0),
  backgroundColor: theme.palette.grey[900],
  position: 'relative',
}));

const ContainerStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  padding: 0,
  margin: 'auto',
  width: '90%',
  [theme.breakpoints.up('md')]: {
    maxWidth: '800px',
  },
}));

const ContentStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(10, 1),
  borderRadius: theme.shape.borderRadiusMd,
  zIndex: 10,
  position: 'relative',
}));

export function LandingSocial() {
  return (
    <RootStyle>
      <ContainerStyle>
        <BackgroundBlur color="primary" top="-75px" height="150px" width="100%" opacityStrength={0.1} />
        <BackgroundBlur color="primary" bottom="-75px" height="150px" width="100%" opacityStrength={0.1} />

        <ContentStyle>
          <Typography variant="h2" sx={{ mb: 3 }}>
            Join the community
          </Typography>

          <Grid container spacing={2} alignItems="center" justifyContent="center">
            <Grid item>
              <Button variant="outlined" size="large" color="secondary" endIcon={<Icon icon={discordIcon} />}>
                Join Discord
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" size="large" color="primary" endIcon={<Icon icon={twitterIcon} />}>
                Follow Twitter
              </Button>
            </Grid>
          </Grid>
        </ContentStyle>
      </ContainerStyle>
    </RootStyle>
  );
}
