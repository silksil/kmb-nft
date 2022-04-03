import { styled } from "@mui/material/styles";
import { Typography, Button, Grid, alpha, Container } from "@mui/material";
import { Icon } from "src/components/Icon";
import discordIcon from "@iconify/icons-ic/baseline-discord";
import twitterIcon from "@iconify/icons-eva/twitter-fill";

import { shadowHeading } from "src/utils/shadowHeading";
import { DISCORD, TWITTER } from "src/utils/socials";

const RootStyle = styled("div")(() => ({
  position: "relative"
}));

const ContainerStyle = styled("div")(() => ({
  position: "relative",
  padding: 0,
  margin: "auto",
  width: "100%"
}));

const ContentStyle = styled("div")(({ theme }) => ({
  textAlign: "center",
  background: alpha(theme.palette.background.paper, 0.5),

  padding: theme.spacing(26, 1),

  zIndex: 10,
  position: "relative"
}));

const Heading = styled((props) => <Typography {...props} />)(({ theme }) => ({
  filter: shadowHeading(theme.palette.secondary.main)
}));

export function LandingSocial() {
  return (
    <RootStyle>
      <ContainerStyle>
        <ContentStyle>
          <Heading variant="h2">Join the community</Heading>
          <Container maxWidth="sm">
            <Typography variant="body2" sx={{ mb: 3 }}>
              Wanna join a group that make fun of <br />
              Putin and fights against injustice?
            </Typography>
          </Container>

          <Grid container spacing={2} alignItems="center" justifyContent="center">
            <Grid item>
              <Button variant="outlined" sx={{ minWidth: "180px" }} size="large" color="secondary" target="_blank" rel="noreferrer" href={DISCORD.url} endIcon={<Icon icon={discordIcon} />}>
                Join Discord
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" sx={{ minWidth: "180px" }} size="large" color="primary" href={TWITTER.url} target="_blank" rel="noreferrer" endIcon={<Icon icon={twitterIcon} />}>
                Follow Twitter
              </Button>
            </Grid>
          </Grid>
        </ContentStyle>
      </ContainerStyle>
    </RootStyle>
  );
}
