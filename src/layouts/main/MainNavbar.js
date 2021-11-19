import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { styled } from '@mui/material/styles';
import { Box, Button, AppBar, Toolbar, Container } from '@mui/material';
import useOffSetTop from '../../hooks/useOffSetTop';
import Logo from '../../components/Logo';
import Label from '../../components/Label';
import { MHidden } from '../../components/@material-extend';
import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';
import navConfig from './MenuConfig';
import { useWallet } from 'src/hooks/useWallet';
import { useContract } from 'src/hooks/useContract';
import { useUI } from 'src/hooks/useUI';

import polygonIcon from '../../../public/static/networks/polygon-logo.svg';
import { Icon } from 'src/components/Icon';

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

const ToolbarShadowStyle = styled('div')(({ theme }) => ({
  left: 0,
  right: 0,
  bottom: 0,
  height: 24,
  zIndex: -1,
  margin: 'auto',
  borderRadius: '50%',
  position: 'absolute',
  width: `calc(100% - 48px)`,
  boxShadow: theme.customShadows.z8,
}));

// ----------------------------------------------------------------------

export default function MainNavbar() {
  const { isConnected, connect } = useWallet();
  const { askContractToMintNft } = useContract();
  const { setMintingModalIsOpen } = useUI();

  const isOffset = useOffSetTop(100);
  const { pathname } = useRouter();
  const isHome = pathname === '/';

  const handleClick = async () => {
    if (!isConnected) return connect();

    setMintingModalIsOpen(true);
    askContractToMintNft();
  };

  return (
    <AppBar sx={{ boxShadow: 0, bgcolor: 'transparent' }}>
      <ToolbarStyle
        disableGutters
        sx={{
          ...(isOffset && {
            bgcolor: 'background.default',
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
          {isConnected && (
            <Label color="info" sx={{ ml: 1 }}>
              <Icon />
              <Box component="img" src="/static/networks/polygon-logo.svg" sx={{ height: 12, marginRight: 1 }} />
              Wallet Connected
            </Label>
          )}
          <Box sx={{ flexGrow: 1 }} />

          <MHidden width="mdDown">
            <MenuDesktop isOffset={isOffset} isHome={isHome} navConfig={navConfig} />
          </MHidden>

          <Button variant="contained" onClick={handleClick}>
            {isConnected ? 'Mint NFT' : 'Connect wallet'}
          </Button>

          <MHidden width="mdUp">
            <MenuMobile isOffset={isOffset} isHome={isHome} navConfig={navConfig} />
          </MHidden>
        </Container>
      </ToolbarStyle>

      {isOffset && <ToolbarShadowStyle />}
    </AppBar>
  );
}
