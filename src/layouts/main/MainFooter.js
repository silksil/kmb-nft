import { Container, IconButton, Box, Typography, Stack } from "@mui/material";
import { styled } from "@mui/system";
import { Image } from "src/components/Image.js";

const Logo = styled((props) => <Image {...props} />)(({ theme }) => ({
  width: theme.icons.m.width,
  height: theme.icons.m.height
}));

export function MainFooter() {
  return (
    <Box
      sx={{
        width: "100%",
        bottom: 0,
        mt: 1,
        textAlign: "center"
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="caption">As seen on: </Typography>
        <Stack direction="row" justifyContent={{ xs: "center" }}>
          <IconButton key="open-sea" href="https://www.non-fungi.com/" target="_blank">
            <Logo src="static/listing-websites/nonfungi.webp" alt="non fungi logo" />
          </IconButton>
          <IconButton href="https://raritysniper.com/nft-drops-calendar" target="_blank">
            <Logo src="static/listing-websites/rarity.png" />
          </IconButton>
        </Stack>
        {/* <Stack spacing={1.5} direction="row" justifyContent={{ xs: "center" }} sx={{ mt: 5, mb: { xs: 5 } }}>
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
        </ScrollLink> */}
      </Container>
    </Box>
  );
}
