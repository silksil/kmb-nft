import { useTheme, styled } from "@mui/material/styles";
import { Grid, Container, Typography, useMediaQuery, alpha, IconButton } from "@mui/material";
import { varFadeInUp, MotionInView } from "../../components/animate";
import { shadowHeading } from "src/utils/shadowHeading";
import twitterIcon from "@iconify/icons-eva/twitter-fill";
import linkedinIcon from "@iconify/icons-eva/linkedin-fill";

import { Icon } from "src/components/Icon";

const DescriptionSil = () => (
  <>
    Former IBM and PayPal engineer. <br />
    Boyfriend of Sophie.
  </>
);

const DescriptionSophie = () => (
  <>
    Graphic & UX designer.
    <br />
    Girlfriend of Sil.
  </>
);

const Persons = [
  {
    icon: "/static/avatars/team/sophie.png",
    title: "Sophie",
    subtitle: "Design",
    description: <DescriptionSophie />,
    linkedin: "https://www.linkedin.com/in/sophie-vosse-131bb7198/",
    twitter: "https://twitter.com/SophieVosse"
  },
  {
    icon: "/static/avatars/team/sil.png",
    title: "Sil",
    subtitle: "Engineering",
    description: <DescriptionSil />,
    linkedin: "https://www.linkedin.com/in/sil-kreulen-41912392/",
    twitter: "https://twitter.com/sil_kreulen"
  }
];

const RootStyle = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(15),
  [theme.breakpoints.up("md")]: {
    paddingBottom: theme.spacing(15)
  }
}));

const CardStyle = styled("div")(({ theme }) => {
  return {
    zIndex: 1,
    borderRadius: 200,
    maxWidth: 380,
    minWidth: 300,
    margin: "auto",
    textAlign: "center",
    padding: theme.spacing(2)
  };
});

const CardContainer = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100%",
  position: "relative",
  borderRadius: theme.shape.borderRadiusMd,
  background: alpha(theme.palette.background.paper, 0.5),

  "&:hover": {
    background: alpha(theme.palette.background.neutral, 0.5)
  },

  "&:hover .icon-container": {
    visibility: "visible"
  },

  "&:hover .blob-image": {
    filter: "blur(3px)"
  }
}));

const CardIconStyle = styled("img")(({ theme }) => ({
  width: 240,
  height: 240,
  margin: "auto"
}));

const IconsContainer = styled("div")(({ theme }) => ({
  position: "absolute",
  right: 0,
  zIndex: 2,

  [theme.breakpoints.up("sm")]: {
    right: "20%"
  },
  [theme.breakpoints.up("md")]: {
    visibility: "hidden",
    right: 0
  }
}));

const PersonDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  zIndex: 1,
  display: "block"
}));

// const BackgroundImage = styled(Image)(({ theme }) => ({
//   position: "absolute",
//   maxHeight: "240px",
//   maxWidth: "240px",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   zIndex: -2
// }));

const Heading = styled((props) => <Typography {...props} />)(({ theme }) => ({
  filter: shadowHeading(theme.palette.secondary.main)
}));

export function LandingTeam() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <RootStyle>
      <Container maxWidth="lg">
        <Container maxWidth="sm" sx={{ mb: { xs: 5 }, textAlign: "center" }}>
          <Heading variant="h2">The Team</Heading>
          <Typography>Made by two people in love.</Typography>
        </Container>
        <Grid container spacing={isDesktop ? 10 : 2} justifyContent="center" sx={{ position: "relative" }}>
          {Persons.map((person, index) => (
            <Grid item xs={12} md={4} key={person.title} justifyContent="center" alignItems="center">
              <CardContainer>
                <IconsContainer className="icon-container">
                  {person.twitter && (
                    <IconButton target="_blank" rel="noreferrer" color="primary" href={person.twitter}>
                      <Icon icon={twitterIcon} size="m" />
                    </IconButton>
                  )}
                  {person.linkedin && (
                    <IconButton target="_blank" rel="noreferrer" color="primary" href={person.linkedin}>
                      <Icon icon={linkedinIcon} size="m" />
                    </IconButton>
                  )}
                </IconsContainer>
                {/* <BackgroundImage src={`static/overlay/blob/${index + 1}.png/`} className="blob-image" /> */}

                <MotionInView variants={varFadeInUp}>
                  <CardStyle>
                    <CardIconStyle src={person.icon} alt={person.title} />
                    <Typography paragraph sx={{ m: 0 }}>
                      {person.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.disabled" }} mb={2}>
                      {person.subtitle}
                    </Typography>
                    <PersonDescription className="person-description" variant="caption">
                      {person.description}
                    </PersonDescription>
                  </CardStyle>
                </MotionInView>
              </CardContainer>
            </Grid>
          ))}
        </Grid>
      </Container>
    </RootStyle>
  );
}
