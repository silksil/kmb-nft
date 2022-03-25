import NextLink from "next/link";
import { styled } from "@mui/material/styles";
import { Button, AppBar, Toolbar, Container, Stack, useTheme, Typography } from "@mui/material";
import useOffSetTop from "../../hooks/useOffSetTop";
import Logo from "../../components/Logo";
import Label from "../../components/Label";

import { useWallet } from "src/hooks/useWallet";
import { useUI } from "src/hooks/useUI";

import { Icon } from "src/components/Icon";
import { showPartialAccountAddress } from "src/utils/account";
import { useWindowSize } from "src/hooks/useWindowSize";

import ethereumIcon from "@iconify/icons-mdi/ethereum";

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 88;

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: APP_BAR_MOBILE,
  transition: theme.transitions.create(["height", "background-color"], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter
  }),
  [theme.breakpoints.up("md")]: {
    height: APP_BAR_DESKTOP
  }
}));

// const Opensea = styled((props) => <Image src="static/marketplaces/open-sea.svg" alt="open sea logo" {...props} />)(({ theme }) => ({
//   width: theme.icons.l.width,
//   height: theme.icons.l.height,
//   filter: shadowIcon(theme.palette.secondary.main)
// }));

export default function MainNavbar() {
  const { isConnected, connect, account } = useWallet();
  const isLaunched = false;
  const theme = useTheme();

  /**
   * Styling variables.
   */
  const { setMintingModalIsOpen } = useUI();
  const { height } = useWindowSize();
  const isOffset = useOffSetTop(height);

  const handleClick = async () => {
    if (!isConnected) return connect();

    setMintingModalIsOpen(true);
  };

  return (
    <AppBar sx={{ boxShadow: 0, bgcolor: "transparent" }}>
      <ToolbarStyle
        sx={{
          ...(isOffset && {
            height: { md: APP_BAR_DESKTOP }
          })
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            padding: theme.spacing(1),
            marginTop: "24px",
            border: `1px solid ${theme.palette.background.neutral}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderRadius: theme.shape.borderRadiusXs,
            backgroundColor: theme.palette.background.default
          }}
        >
          <NextLink href="/">
            <Logo sx={{ mr: 2 }} />
          </NextLink>

          {isLaunched && (
            <Stack direction="row" alignItems="center">
              {isLaunched && account && (
                <Label color="info" sx={{ mr: 2 }}>
                  <Icon icon={ethereumIcon} size="s" />
                  {showPartialAccountAddress(account)}
                </Label>
              )}

              <Button variant="outlined" onClick={handleClick} sx={{ fontFamily: "IBMPlexMono" }}>
                {isConnected ? "Mint NFT" : "Connect wallet"}
              </Button>
            </Stack>
          )}

          {!isLaunched && <Typography variant="body2"> Minting soon ...</Typography>}
        </Container>
      </ToolbarStyle>
    </AppBar>
  );
}
