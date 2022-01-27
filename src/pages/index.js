import MainLayout from 'src/layouts/main';
import { styled } from '@mui/material/styles';
import { Page } from 'src/components/Page';
import { LandingHero, LandingTeam, LandingSocial, LandingRoadmap, LandingTechnical, LandingIntroduction, LandingFAQs } from 'src/containers/landing';
import { MintingModal } from 'src/containers/minting-modal/MintingModal';
import { MintingCount } from 'src/containers/MintingCount';
import { useEffect } from 'react';
import { LandingWhitelist } from 'src/containers/landing/LandingWhitelist';

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));

export default function LandingPage() {
  useEffect(() => {
    var script = document.createElement('script'); // is a node
    script.innerHTML = `
  !function(a,b,c,d,t){var e,f=a.getElementsByTagName("head")[0];if(!a.getElementById(c)){if(e=a.createElement(b),e.id=c,e.setAttribute("data-vrlps-ucid",d),e.setAttribute("data-vrlps-version","2"), e.setAttribute("data-vrlps-template", t),e.src="https://app.viral-loops.com/popup_assets/js/vl_load_v2.min.js",window.ub){jQuery=null,$=null;var g=a.createElement(b);g.src="https://code.jquery.com/jquery-2.2.4.min.js",f.appendChild(g)}f.appendChild(e);var h=a.createElement("link");h.rel="stylesheet",h.type="text/css",h.href="https://app.viral-loops.com/static/vl-loader.css",f.appendChild(h);var i=a.createElement("div");i.id="vl-overlay",i.style.display="none";var j=a.createElement("div");j.id="vl-loader",i.appendChild(j),a.addEventListener("DOMContentLoaded",function(b){a.body.appendChild(i);for(var c=a.getElementsByClassName("vrlps-trigger"),d=0;d<c.length;d++)c[d].removeAttribute("href"),c[d].onclick=function(){a.getElementById("vl-overlay").style.display="block"};var e=a.querySelectorAll("[data-vl-widget='popupTrigger']");[].forEach.call(e,function(b){var c=a.createElement("div");c.className="vl-embedded-cta-loader",b.appendChild(c)})})}}(document,"script","vrlps-js","3mrHExd4uRMrM2IxOU0rRtkYZgM","ranking")`;
    document.body.appendChild(script);
  });

  return (
    <MainLayout>
      <Page title="The Putzies" id="move_top" sx={{ height: '100%' }}>
        <MintingModal />
        <LandingHero />
        <ContentStyle>
          <LandingIntroduction />
          <LandingTechnical />
          {/* <LandingRoadmap /> */}
          <LandingSocial />
          <LandingTeam />
          <LandingWhitelist />
          <LandingFAQs />
        </ContentStyle>
        <MintingCount />
      </Page>
    </MainLayout>
  );
}
