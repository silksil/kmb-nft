import NextLink from 'next/link';
import { styled } from '@mui/material/styles';
import { Box, Button, AppBar, Toolbar, Container, IconButton, Stack } from '@mui/material';
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
import { useWindowSize } from 'src/hooks/useWindowSize';
import flashFill from '@iconify/icons-eva/flash-fill';

import twitter from '@iconify/icons-eva/twitter-fill';
import discord from '@iconify/icons-ic/baseline-discord';

const SOCIALS = [
  { name: 'Linkedin', icon: discord },
  { name: 'Twitter', icon: twitter },
];

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

const shadowIcon = (color) => `drop-shadow(4px 4px 4px ${alpha(color, 0.6)})`;

const SocialIcon = styled((props) => <Icon {...props} />)(({ theme }) => ({
  filter: shadowIcon(theme.palette.secondary.main),
}));

export default function MainNavbar() {
  const { isConnected, connect, account } = useWallet();
  const { mintNft } = useContract();
  const isLaunched = false;

  /**
   * Styling variables.
   */
  const { setMintingModalIsOpen } = useUI();
  const { height } = useWindowSize();
  const theme = useTheme();
  const isOffset = useOffSetTop(height);
  const bgColor = alpha(theme.palette.background.default, 0.9);

  const handleClick = async () => {
    if (!isConnected) return connect();

    setMintingModalIsOpen(true);
    mintNft();
  };

  return (
    <AppBar sx={{ boxShadow: 0, bgcolor: 'transparent' }}>
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

          <Stack spacing={1.5} direction="row" justifyContent={{ xs: 'center' }} sx={{ mt: 5, mb: { xs: 5 } }}>
            {SOCIALS.map((social) => (
              <IconButton key={social.name} color="primary" sx={{ p: 1 }}>
                <SocialIcon icon={social.icon} size="l" />
              </IconButton>
            ))}
          </Stack>
          {isLaunched && (
            <Button startIcon={<Icon icon={flashFill} width={20} height={20} />} variant="contained" onClick={handleClick}>
              {isConnected ? 'Mint NFT' : 'Connect wallet'}
            </Button>
          )}
        </Container>
      </ToolbarStyle>
    </AppBar>
  );
}
