import { Box, styled } from '@mui/system';

const getPosition = (position, inHalf, width) => {
  const intWidth = parseInt(width, 10);
  if (inHalf) {
    const position = intWidth / 2;
    return -position;
  }
  return position;
};
export const BackgroundBlur = styled(Box)(({ theme, color, blurRadius = '160px', width = '280px', height = '280px', inHalf, left, right }) => ({
  backgroundColor: theme.palette[color].main,
  position: 'absolute',
  width,
  height,
  filter: `blur(${blurRadius})`,
  right: getPosition(right, inHalf, width),
  left: !right && getPosition(left, inHalf, width),
}));
