import Head from 'next/head';
import { CacheProvider } from '@emotion/react';

import { SettingsProvider } from 'src/contexts/SettingsContext';

import ThemeConfig from 'src/theme';
import GlobalStyles from 'src/theme/globalStyles';

import createEmotionCache from 'src/utils/createEmotionCache';
import ProgressBar from 'src/components/ProgressBar';
import LoadingScreen from 'src/components/LoadingScreen';
import { CollapseDrawerProvider } from 'src/contexts/CollapseDrawerContext';

const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <SettingsProvider>
      {/* In case you want to include a drawer,
      this provider allows you to change the settings of that drawer */}
      <CollapseDrawerProvider>
        <CacheProvider value={emotionCache}>
          <Head>
            <meta name="viewport" content="initial-scale=1, width=device-width" />
          </Head>

          <ThemeConfig>
            <GlobalStyles />
            <ProgressBar />
            <LoadingScreen />
            <Component {...pageProps} />
          </ThemeConfig>
        </CacheProvider>
      </CollapseDrawerProvider>
    </SettingsProvider>
  );
}
