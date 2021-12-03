import MainLayout from 'src/layouts/main';
import { styled } from '@mui/material/styles';
import { Page } from 'src/components/Page';
import { LandingHero, LandingOptions, LandingDarkMode, LandingThemeColor, LandingCleanInterfaces, LandingHugePackElements } from 'src/components/_external-pages/landing';
import { MintingModal } from 'src/components/MintingModal/MintingModal';
import { MintingCount } from 'src/components/MintingCount';

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));

export default function LandingPage() {
  return (
    <MainLayout>
      <Page title="The starting point for your next project | Minimal-UI" id="move_top" sx={{ height: '100%' }}>
        <MintingModal />

        <LandingHero />
        <ContentStyle>
          <LandingOptions />
          <LandingHugePackElements />
          <LandingDarkMode />
          <LandingThemeColor />
          <LandingCleanInterfaces />
        </ContentStyle>
        <MintingCount />
      </Page>
    </MainLayout>
  );
}
