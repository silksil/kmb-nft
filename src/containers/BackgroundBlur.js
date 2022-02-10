import { Box, styled } from '@mui/system';
import { alpha } from '@mui/material/styles';

export const BackgroundBlur = styled(Box)(({ theme, color = 'primary', opacityStrength = 0.2, ...props }) => ({
  background: `radial-gradient(50% 50% at 50% 50%, ${alpha(theme.palette[color].main, opacityStrength)} 0%, ${theme.palette.background.default} 100%)`,
  position: 'absolute',

  ...props,
}));
