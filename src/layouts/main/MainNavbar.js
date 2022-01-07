import NextLink from 'next/link';
import { styled } from '@mui/material/styles';
import { Box, Button, AppBar, Toolbar, Container } from '@mui/material';
import useOffSetTop from '../../hooks/useOffSetTop';
import Logo from '../../components/Logo';
import Label from '../../components/Label';

import { useWallet } from 'src/hooks/useWallet';
import { useContract } from 'src/hooks/useContract';
import { useUI } from 'src/hooks/useUI';

import { Icon } from 'src/components/Icon';
import { showPartialAccountAddress } from 'src/utils/account';
import { alpha } from '@mui/material/styles';
import { useTheme } from '@mui/material';
import { useWindowDimensions } from 'src/hooks/useWindowDimensions';

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 88;

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: APP_BAR_MOBILE,
  transition: theme.transitions.create(['height', 'background-color'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  [theme.breakpoints.up('md')]: {
    height: APP_BAR_DESKTOP,
  },
}));

export default function MainNavbar() {
  const { isConnected, connect, account } = useWallet();
  const { mintNft } = useContract();

  /**
   * Styling variables.
   */
  const { setMintingModalIsOpen } = useUI();
  const { height } = useWindowDimensions();
  const theme = useTheme();
  const isOffset = useOffSetTop(height);
  const bgColor = alpha(theme.palette.background.default, 0.9);

  const handleClick = async () => {
    if (!isConnected) return connect();

    setMintingModalIsOpen(true);
    mintNft();
  };

  return (
    <AppBar sx={{ boxShadow: 0, bgcolor: 'transparent', position: 'static' }}>
      <ToolbarStyle
        sx={{
          ...(isOffset && {
            bgcolor: bgColor,
            height: { md: APP_BAR_DESKTOP - 16 },
          }),
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <NextLink href="/">
            <Logo />
          </NextLink>

          {account && (
            <Label color="info" sx={{ mr: 2 }}>
              <Icon />
              <Box component="img" src="/static/networks/polygon-logo.svg" sx={{ height: 12, marginRight: 1 }} />
              {showPartialAccountAddress(account)}
            </Label>
          )}

          <Button variant="contained" onClick={handleClick}>
            {isConnected ? 'Mint NFT' : 'Connect wallet'}
          </Button>
        </Container>
      </ToolbarStyle>
    </AppBar>
  );
}
