import { styled } from '@mui/material/styles';
import { Typography, Button, Grid } from '@mui/material';
import { Icon } from 'src/components/Icon';
import discordIcon from '@iconify/icons-ic/baseline-discord';
import twitterIcon from '@iconify/icons-eva/twitter-fill';

import { BackgroundBlur } from '../BackgroundBlur';
import { shadowHeading } from 'src/utils/shadowHeading';

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(14, 0),
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

const Heading = styled((props) => <Typography {...props} />)(({ theme }) => ({
  filter: shadowHeading(theme.palette.secondary.main),
}));

export function LandingSocial() {
  return (
    <RootStyle>
      <ContainerStyle>
        <BackgroundBlur color="primary" top="-100px" height="200px" width="100%" />
        <BackgroundBlur color="secondary" bottom="-100px" height="200px" width="100%" />

        <ContentStyle>
          <Heading variant="h2" sx={{ mb: 2 }}>
            Join the community
          </Heading>

          <Grid container spacing={2} alignItems="center" justifyContent="center">
            <Grid item>
              <Button variant="outlined" sx={{ minWidth: '180px' }} size="large" color="secondary" endIcon={<Icon icon={discordIcon} />}>
                Join Discord
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" sx={{ minWidth: '180px' }} size="large" color="primary" endIcon={<Icon icon={twitterIcon} />}>
                Follow Twitter
              </Button>
            </Grid>
          </Grid>
        </ContentStyle>
      </ContainerStyle>
    </RootStyle>
  );
}
