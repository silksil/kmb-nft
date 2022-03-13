import { styled } from "@mui/material/styles";
import { Typography, Button, Grid } from "@mui/material";
import { Icon } from "src/components/Icon";
import discordIcon from "@iconify/icons-ic/baseline-discord";
import twitterIcon from "@iconify/icons-eva/twitter-fill";

import { shadowHeading } from "src/utils/shadowHeading";

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
  backgroundColor: theme.palette.secondary.main,
  padding: theme.spacing(20, 1),

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
          <Heading variant="h2" sx={{ mb: 2 }}>
            Join the Fam
          </Heading>

          <Grid container spacing={2} alignItems="center" justifyContent="center">
            <Grid item>
              <Button variant="outlined" sx={{ minWidth: "180px" }} size="large" color="secondary" endIcon={<Icon icon={discordIcon} />}>
                Join Discord
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" sx={{ minWidth: "180px" }} size="large" color="primary" endIcon={<Icon icon={twitterIcon} />}>
                Follow Twitter
              </Button>
            </Grid>
          </Grid>
        </ContentStyle>
      </ContainerStyle>
    </RootStyle>
  );
}
