import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Grid, Card, Container, Typography, useMediaQuery } from '@mui/material';
import { varFadeInUp, MotionInView } from '../../components/animate';

const CARDS = [
  {
    icon: '/static/avatars/puut-1.png',
    title: 'Sophie',
    description: 'Design',
  },
  {
    icon: '/static/avatars/puut-1.png',
    title: 'Sil',
    description: 'Engineering',
  },

  {
    icon: '/static/avatars/puut-1.png',
    title: 'Oscar',
    description: 'Community',
  },
];

const shadowIcon = (color) => `drop-shadow(2px 2px 2px ${alpha(color, 0.48)})`;

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
  filter: shadowIcon(theme.palette.primary.main),
}));

export function LandingTeam() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <RootStyle>
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 5 } }}>
          <Typography variant="h2" sx={{ textAlign: 'center' }}>
            The Team
          </Typography>
        </Box>

        <Grid container spacing={isDesktop ? 10 : 5}>
          {CARDS.map((card) => (
            <Grid key={card.title} item xs={12} md={4}>
              <MotionInView variants={varFadeInUp}>
                <CardStyle>
                  <CardIconStyle src={card.icon} alt={card.title} />
                  <Typography variant="h5" paragraph>
                    {card.title}
                  </Typography>
                  <Typography>{card.description}</Typography>
                </CardStyle>
              </MotionInView>
            </Grid>
          ))}
        </Grid>
      </Container>
    </RootStyle>
  );
}
