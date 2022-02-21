import NextLink from "next/link";
import { styled } from "@mui/material/styles";
import { Button, AppBar, Toolbar, Container, IconButton, Stack } from "@mui/material";
import useOffSetTop from "../../hooks/useOffSetTop";
import Logo from "../../components/Logo";
import Label from "../../components/Label";

import { useWallet } from "src/hooks/useWallet";
import { useUI } from "src/hooks/useUI";

import { Icon } from "src/components/Icon";
import { showPartialAccountAddress } from "src/utils/account";
import { alpha } from "@mui/material/styles";
import { useTheme } from "@mui/material";
import { useWindowSize } from "src/hooks/useWindowSize";
import { MHidden } from "../../components/@material-extend";

import { Image } from "src/components/Image.js";
import { SOCIALS } from "../../utils/socialIcons";
import ethereumIcon from "@iconify/icons-mdi/ethereum";

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 88;

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: APP_BAR_MOBILE,
  transition: theme.transitions.create(["height", "background-color"], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  [theme.breakpoints.up("md")]: {
    height: APP_BAR_DESKTOP,
  },
}));

const shadowIcon = (color) => `drop-shadow(4px 4px 4px ${alpha(color, 0.6)})`;

const SocialIcon = styled((props) => <Icon {...props} />)(({ theme }) => ({
  filter: shadowIcon(theme.palette.secondary.main),
}));

const Opensea = styled((props) => <Image src="static/marketplaces/open-sea.svg" alt="open sea logo" {...props} />)(({ theme }) => ({
  width: theme.icons.l.width,
  height: theme.icons.l.height,
  filter: shadowIcon(theme.palette.secondary.main),
}));

export default function MainNavbar() {
  const { isConnected, connect, account } = useWallet();
  const isLaunched = true;

  /**
   * Styling variables.
   */
  const { setMintingModalIsOpen } = useUI();
  const { height } = useWindowSize();
  const theme = useTheme();
  const isOffset = useOffSetTop(height);

  const handleClick = async () => {
    if (!isConnected) return connect();

    setMintingModalIsOpen(true);
  };

  return (
    <AppBar sx={{ boxShadow: 0, bgcolor: "transparent" }}>
      <ToolbarStyle
        sx={{
          p: 1,
          ...(isOffset && {
            height: { md: APP_BAR_DESKTOP - 16 },
          }),
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <MHidden width="mdDown">
            <NextLink href="/">
              <Logo sx={{ mr: 2 }} />
            </NextLink>
          </MHidden>

          <Stack spacing={0.5} direction="row" justifyContent="center" alignItems="center" sx={{ mt: 5, mb: { xs: 5 }, mr: 1 }}>
            {SOCIALS.map((social) => (
              <IconButton key={social.name} color="primary">
                <SocialIcon icon={social.icon} size="m" />
              </IconButton>
            ))}
            {/* <IconButton color="primary">
              <Opensea />
            </IconButton> */}
          </Stack>

          {isLaunched && (
            <Stack direction="row" alignItems="center">
              {isLaunched && account && (
                <Label color="info" sx={{ mr: 2 }}>
                  <Icon icon={ethereumIcon} size="s" />
                  {showPartialAccountAddress(account)}
                </Label>
              )}

              <Button variant="contained" onClick={handleClick}>
                {isConnected ? "Mint NFT" : "Connect wallet"}
              </Button>
            </Stack>
          )}
        </Container>
      </ToolbarStyle>
    </AppBar>
  );
}
