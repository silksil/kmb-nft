import { alpha } from '@mui/material/styles';

export const shadowHeading = (color, size = 3, strength = 1) => `drop-shadow(${size}px ${size}px ${size}px ${alpha(color, strength)})`;
