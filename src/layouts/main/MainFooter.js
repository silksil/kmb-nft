import { Link as ScrollLink } from "react-scroll";
import { Container, IconButton, Box, Stack, alpha } from "@mui/material";
import Logo from "../../components/Logo";
import { Icon } from "src/components/Icon";
import { styled } from "@mui/system";
import { Image } from "src/components/Image.js";
import { SOCIALS } from "src/utils/socials";

const Opensea = styled((props) => <Image src="static/marketplaces/open-sea.svg" alt="open sea log" {...props} />)(({ theme }) => ({
  width: theme.icons.m.width,
  height: theme.icons.m.height,
  filter: shadowIcon(theme.palette.secondary.main)
}));

const shadowIcon = (color) => `drop-shadow(4px 4px 4px ${alpha(color, 0.6)})`;

const SocialIcon = styled((props) => <Icon {...props} />)(({ theme }) => ({
  filter: shadowIcon(theme.palette.secondary.main)
}));

export default function MainFooter() {
  return (
    <Box
      sx={{
        width: "100%",
        bottom: 0,
        py: 5,
        textAlign: "center"
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={1.5} direction="row" justifyContent={{ xs: "center" }} sx={{ mt: 5, mb: { xs: 5 } }}>
          {SOCIALS.map((social) => (
            <IconButton key={social.name} color="primary" sx={{ p: 1 }}>
              <SocialIcon icon={social.icon} size="m" />
            </IconButton>
          ))}

          <IconButton key="open-sea" color="primary" sx={{ p: 1 }}>
            <Opensea />
          </IconButton>
        </Stack>
        <ScrollLink to="move_top" spy smooth>
          <Logo sx={{ mb: 1, mx: "auto", cursor: "pointer" }} />
        </ScrollLink>
      </Container>
    </Box>
  );
}
