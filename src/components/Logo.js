import { forwardRef } from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";

// eslint-disable-next-line react/display-name
const Logo = forwardRef(({ sx }, ref) => {
  return (
    <Typography ref={ref} sx={{ width: 48, height: "auto", cursor: "pointer", ...sx }}>
      VKMG
    </Typography>
  );
});

Logo.propTypes = {
  sx: PropTypes.object
};

export default Logo;
