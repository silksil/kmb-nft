import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider, alpha } from '@mui/material/styles';
import useThemeSettings from '../hooks/useThemeSettings';
import shape from './shape';
import palette from './palette';
import typography from './typography';
import breakpoints from './breakpoints';
import icons from './icons';
import componentsOverride from './overrides';
import shadows, { customShadows } from './shadows';

ThemeConfig.propTypes = {
  children: PropTypes.node,
};

export default function ThemeConfig({ children }) {
  const { themeMode, primaryColor } = useThemeSettings();
  const isLight = themeMode === 'light';

  const themeOptions = useMemo(
    () => ({
      palette: isLight ? { ...palette.light, mode: 'light', primary: primaryColor } : { ...palette.dark, mode: 'dark', primary: primaryColor },
      shape,
      icons: { ...icons },
      typography,
      breakpoints,
      shadows: isLight ? shadows.light : shadows.dark,
      customShadows: isLight ? { ...customShadows.light, primary: `0 8px 16px 0 ${alpha(primaryColor.main, 0.24)}` } : { ...customShadows.dark, primary: `0 8px 16px 0 ${alpha(primaryColor.main, 0.24)}` },
    }),
    [isLight, primaryColor]
  );

  const theme = createTheme(themeOptions);
  theme.components = componentsOverride(theme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
