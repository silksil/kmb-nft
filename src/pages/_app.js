import Head from "next/head";
import { CacheProvider } from "@emotion/react";

import { ThemeSettingsProvider } from "src/contexts/ThemeSettingsContext";

import ThemeConfig from "src/theme";
import GlobalStyles from "src/theme/globalStyles";

import createEmotionCache from "src/utils/createEmotionCache";
import { UIProvider } from "src/contexts/UIContext";

import { ContractProvider } from "src/contexts/ContractContext";

const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <ContractProvider>
      <CacheProvider value={emotionCache}>
        <ThemeSettingsProvider>
          <ThemeConfig>
            <UIProvider>
              <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
              </Head>
              <GlobalStyles />
              <Component {...pageProps} />
            </UIProvider>
          </ThemeConfig>
        </ThemeSettingsProvider>
      </CacheProvider>
    </ContractProvider>
  );
}
