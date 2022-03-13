import PropTypes from "prop-types";
import { forwardRef } from "react";
import { IconButton } from "@mui/material";

// eslint-disable-next-line react/display-name
const MIconButton = forwardRef(({ children, ...other }, ref) => (
  <IconButton ref={ref} {...other}>
    {children}
  </IconButton>
));

MIconButton.propTypes = {
  children: PropTypes.node
};

export default MIconButton;
