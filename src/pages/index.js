import MainLayout from 'src/layouts/main';
import { styled } from '@mui/material/styles';
import { Page } from 'src/components/Page';
import { LandingHero, LandingTeam, LandingSocial, LandingRoadmap, LandingTechnical, LandingIntroduction, LandingFAQs } from 'src/containers/landing';
import { MintingModal } from 'src/containers/minting-modal/MintingModal';
import { MintingCount } from 'src/containers/MintingCount';

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));

export default function LandingPage() {
  return (
    <MainLayout>
      <Page title="The Puzies: 100,000 unique NFTs" id="move_top" sx={{ height: '100%' }}>
        <MintingModal />
        <LandingHero />
        <ContentStyle>
          <LandingIntroduction />
          <LandingTechnical />
          {/* <LandingRoadmap /> */}
          <LandingSocial />
          <LandingTeam />
          <LandingFAQs />
        </ContentStyle>
        <MintingCount />
      </Page>
    </MainLayout>
  );
}
