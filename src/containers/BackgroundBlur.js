import { Box, styled } from '@mui/system';
import { alpha } from '@mui/material/styles';

const getPosition = (position, inHalf, width) => {
  const intWidth = parseInt(width, 10);
  if (inHalf) {
    const position = intWidth / 2;
    return -position;
  }
  return position;
};
export const BackgroundBlur = styled(Box)(({ theme, color = 'primary', width = '400px', height = '400px', inHalf, left, right, opacityStrength = 0.5, ...props }) => ({
  background: `radial-gradient(50% 50% at 50% 50%, ${alpha(theme.palette[color].main, opacityStrength)} 0%, ${theme.palette.background.default} 100%)`,
  position: 'absolute',
  width,
  height,
  right: getPosition(right, inHalf, width),
  left: !right && getPosition(left, inHalf, width),
  ...props,
}));
