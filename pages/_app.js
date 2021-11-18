import Head from 'next/head';
import { CacheProvider } from '@emotion/react';

import { SettingsProvider } from 'src/contexts/SettingsContext';

import ThemeConfig from 'src/theme';
import GlobalStyles from 'src/theme/globalStyles';

import createEmotionCache from 'src/utils/createEmotionCache';
import { CollapseDrawerProvider } from 'src/contexts/CollapseDrawerContext';
import { WalletProvider } from 'src/contexts/WalletContext';
import { ContractProvider } from 'src/contexts/ContractContext';

const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    // Place here the web3 providers
    <WalletProvider>
      <ContractProvider>
        {/* Theming and styling providers */}
        <CacheProvider value={emotionCache}>
          <SettingsProvider>
            <ThemeConfig>
              {/* Components provider */}
              <CollapseDrawerProvider>
                {/* The rest of the logic*/}
                <Head>
                  <meta name="viewport" content="initial-scale=1, width=device-width" />
                </Head>
                <GlobalStyles />
                <Component {...pageProps} />
              </CollapseDrawerProvider>
            </ThemeConfig>
          </SettingsProvider>
        </CacheProvider>
      </ContractProvider>
    </WalletProvider>
  );
}
