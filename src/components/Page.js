import Head from 'next/head';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { Box } from '@mui/material';

const viralLoopsScript = `
<script>!function(a,b,c,d,t){var e,f=a.getElementsByTagName("head")[0];if(!a.getElementById(c)){if(e=a.createElement(b),e.id=c,e.setAttribute("data-vrlps-ucid",d),e.setAttribute("data-vrlps-version","2"), e.setAttribute("data-vrlps-template", t),e.src="https://app.viral-loops.com/popup_assets/js/vl_load_v2.min.js",window.ub){jQuery=null,$=null;var g=a.createElement(b);g.src="https://code.jquery.com/jquery-2.2.4.min.js",f.appendChild(g)}f.appendChild(e);var h=a.createElement("link");h.rel="stylesheet",h.type="text/css",h.href="https://app.viral-loops.com/static/vl-loader.css",f.appendChild(h);var i=a.createElement("div");i.id="vl-overlay",i.style.display="none";var j=a.createElement("div");j.id="vl-loader",i.appendChild(j),a.addEventListener("DOMContentLoaded",function(b){a.body.appendChild(i);for(var c=a.getElementsByClassName("vrlps-trigger"),d=0;d<c.length;d++)c[d].removeAttribute("href"),c[d].onclick=function(){a.getElementById("vl-overlay").style.display="block"};var e=a.querySelectorAll("[data-vl-widget='popupTrigger']");[].forEach.call(e,function(b){var c=a.createElement("div");c.className="vl-embedded-cta-loader",b.appendChild(c)})})}}(document,"script","vrlps-js","3mrHExd4uRMrM2IxOU0rRtkYZgM","ranking");</script>`;
const Page = forwardRef(({ children, title = '', ...other }, ref) => (
  <Box ref={ref} sx={{ minHeight: '100%' }} {...other}>
    <Head>
      <div dangerouslySetInnerHTML={{ __html: viralLoopsScript }} />

      <title>{title}</title>
    </Head>
    {children}
  </Box>
));

Page.displayName = 'Search';

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export { Page };
