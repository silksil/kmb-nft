import { forwardRef } from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import Image from "next/image";

// eslint-disable-next-line react/display-name
const Logo = forwardRef(({ sx }, ref) => {
  return (
    <Typography ref={ref} sx={{ width: 48, height: "auto", cursor: "pointer", ...sx }}>
      <Image src="/favicon/android-chrome-512x512.png" alt="KMB Logo" width="16px" height="16px" />
    </Typography>
  );
});

Logo.propTypes = {
  sx: PropTypes.object
};

export default Logo;
