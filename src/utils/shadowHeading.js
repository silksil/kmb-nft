import { alpha } from "@mui/material/styles";

export const shadowHeading = (color, size = 2.4, strength = 0.5) => `drop-shadow(${size}px ${size}px ${size}px ${alpha(color, strength)})`;
