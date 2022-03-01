import { useTheme, styled } from "@mui/material/styles";
import { Grid, Card, Container, Typography, useMediaQuery, Box } from "@mui/material";
import { varFadeInUp, MotionInView } from "../../components/animate";
import { shadowHeading } from "src/utils/shadowHeading";

const CARDS = [
  {
    icon: "/static/avatars/kmg/kmg-4.png",
    title: "Sophie",
    subtitle: "Design",
    description: "The girlfriend of Sil",
  },
  {
    icon: "/static/avatars/kmg/kmg-1.png",
    title: "Sil",
    subtitle: "Engineering",
    description: "The boyfriend of Sophie",
  },

  {
    icon: "/static/avatars/kmg/kmg-5.png",
    title: "Oscar",
    subtitle: "Community",
    description: "The brother of Sophie",
  },
];

const RootStyle = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(15),
  [theme.breakpoints.up("md")]: {
    paddingBottom: theme.spacing(15),
  },
}));

const CardStyle = styled(Card)(({ theme }) => {
  return {
    zIndex: 1,
    borderRadius: 200,
    maxWidth: 380,
    minWidth: 300,
    margin: "auto",
    textAlign: "center",
    padding: theme.spacing(5, 5, 5),
  };
});

const CardIconStyle = styled("img")(({ theme }) => ({
  width: 80,
  height: 80,
  margin: "auto",
  marginBottom: theme.spacing(2),
}));

const BlurEffect = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  width: "95%",
  height: "95%",
  position: "absolute",
  top: 0,
  filter: "blur(20px)",
  borderRadius: 200,
  zIndex: 0,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
}));

const Heading = styled((props) => <Typography {...props} />)(({ theme }) => ({
  filter: shadowHeading(theme.palette.secondary.main),
}));

export function LandingTeam() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <RootStyle>
      <Container maxWidth="lg">
        <Container maxWidth="sm" sx={{ mb: { xs: 5 }, textAlign: "center" }}>
          <Heading variant="h2">The Team</Heading>
        </Container>
        <Grid container spacing={isDesktop ? 10 : 5} justifyContent="center">
          {CARDS.map((card) => (
            <Grid key={card.title} item justifyContent="center" alignItems="center">
              <Box sx={{ width: "auto", height: "auto", position: "relative" }}>
                <MotionInView variants={varFadeInUp}>
                  <CardStyle>
                    <CardIconStyle src={card.icon} alt={card.title} />
                    <Typography variant="h5" paragraph sx={{ m: 0 }}>
                      {card.title}
                    </Typography>
                    <Typography sx={{ color: "text.disabled" }}>{card.subtitle}</Typography>
                    <Typography variant="body2" sx={{ mt: 2 }}>
                      {card.description}
                    </Typography>
                  </CardStyle>
                  <BlurEffect />
                </MotionInView>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </RootStyle>
  );
}
