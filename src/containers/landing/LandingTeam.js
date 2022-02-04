import { alpha, useTheme, styled } from '@mui/material/styles';
import { Grid, Card, Container, Typography, useMediaQuery } from '@mui/material';
import { varFadeInUp, MotionInView } from '../../components/animate';
import { shadowHeading } from 'src/utils/shadowHeading';

const CARDS = [
  {
    icon: '/static/avatars/kmg/kmg-4.png',
    title: 'Sophie',
    subtitle: 'Design',
    description: 'The girlfriend of Sil',
  },
  {
    icon: '/static/avatars/kmg/kmg-1.png',
    title: 'Sil',
    subtitle: 'Engineering',
    description: 'The boyfriend of Sophie',
  },

  {
    icon: '/static/avatars/kmg/kmg-5.png',
    title: 'Oscar',
    subtitle: 'Community',
    description: 'The brother of Sophie',
  },
];

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(15),
  },
}));

const CardStyle = styled(Card)(({ theme }) => {
  const shadowCard = (opacity) => (theme.palette.mode === 'light' ? alpha(theme.palette.grey[500], opacity) : alpha(theme.palette.common.black, opacity));

  return {
    maxWidth: 380,
    margin: 'auto',
    textAlign: 'center',
    padding: theme.spacing(5, 5, 5),
    boxShadow: `-40px 40px 80px 0 ${shadowCard(0.48)}`,
  };
});

const CardIconStyle = styled('img')(({ theme }) => ({
  width: 120,
  height: 120,
  margin: 'auto',
  marginBottom: theme.spacing(2),
}));

const Heading = styled((props) => <Typography {...props} />)(({ theme }) => ({
  filter: shadowHeading(theme.palette.secondary.main),
}));

export function LandingTeam() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <RootStyle>
      <Container maxWidth="lg">
        <Container maxWidth="sm" sx={{ mb: { xs: 5 }, textAlign: 'center' }}>
          <Heading variant="h2">The Team</Heading>
          <Typography>One big happy family</Typography>
        </Container>

        <Grid container spacing={isDesktop ? 10 : 5}>
          {CARDS.map((card) => (
            <Grid key={card.title} item xs={12} md={4}>
              <MotionInView variants={varFadeInUp}>
                <CardStyle>
                  <CardIconStyle src={card.icon} alt={card.title} />
                  <Typography variant="h5" paragraph sx={{ m: 0 }}>
                    {card.title}
                  </Typography>
                  <Typography sx={{ color: 'text.disabled' }}>{card.subtitle}</Typography>
                  <Typography variant="body2" sx={{ mt: 2 }}>
                    {card.description}
                  </Typography>
                </CardStyle>
              </MotionInView>
            </Grid>
          ))}
        </Grid>
      </Container>
    </RootStyle>
  );
}
