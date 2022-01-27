import * as React from 'react';

import Document, { Html, Head, Main, NextScript } from 'next/document';

import createEmotionServer from '@emotion/server/create-instance';

import createEmotionCache from 'src/utils/createEmotionCache';

import palette from 'src/theme/palette';

const metaInfo = {
  author: 'Putzies',
  keywords: 'NFT, Opensea, Rarible',
  description: 'NFT project',
};

const viralLoopsScript = `
<script>!function(a,b,c,d,t){var e,f=a.getElementsByTagName("head")[0];if(!a.getElementById(c)){if(e=a.createElement(b),e.id=c,e.setAttribute("data-vrlps-ucid",d),e.setAttribute("data-vrlps-version","2"), e.setAttribute("data-vrlps-template", t),e.src="https://app.viral-loops.com/popup_assets/js/vl_load_v2.min.js",window.ub){jQuery=null,$=null;var g=a.createElement(b);g.src="https://code.jquery.com/jquery-2.2.4.min.js",f.appendChild(g)}f.appendChild(e);var h=a.createElement("link");h.rel="stylesheet",h.type="text/css",h.href="https://app.viral-loops.com/static/vl-loader.css",f.appendChild(h);var i=a.createElement("div");i.id="vl-overlay",i.style.display="none";var j=a.createElement("div");j.id="vl-loader",i.appendChild(j),a.addEventListener("DOMContentLoaded",function(b){a.body.appendChild(i);for(var c=a.getElementsByClassName("vrlps-trigger"),d=0;d<c.length;d++)c[d].removeAttribute("href"),c[d].onclick=function(){a.getElementById("vl-overlay").style.display="block"};var e=a.querySelectorAll("[data-vl-widget='popupTrigger']");[].forEach.call(e,function(b){var c=a.createElement("div");c.className="vl-embedded-cta-loader",b.appendChild(c)})})}}(document,"script","vrlps-js","3mrHExd4uRMrM2IxOU0rRtkYZgM","ranking");</script>`;
export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />

          <meta name="theme-color" content={palette.light.primary.main} />
          <link rel="manifest" href="/manifest.json" />

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href={`https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700;800&display=swap`} rel="stylesheet" />
          <link href={`https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;&display=swap`} rel="stylesheet" />

          <meta name="description" content={metaInfo.description} />
          <meta name="keywords" content={metaInfo.keywords} />
          <meta name="author" content={metaInfo.author} />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div dangerouslySetInnerHTML={{ __html: viralLoopsScript }} />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;

  const cache = createEmotionCache();

  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      // eslint-disable-next-line react/display-name
      enhanceApp: (App) => (props) => <App emotionCache={cache} {...props} />,
    });

  const initialProps = await Document.getInitialProps(ctx);

  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    styles: [...React.Children.toArray(initialProps.styles), ...emotionStyleTags],
  };
};
