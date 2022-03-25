import { forwardRef } from "react";
import PropTypes from "prop-types";
import Image from "next/image";

// eslint-disable-next-line react/display-name
const Logo = forwardRef(({ sx }, ref) => {
  return <Image src="/favicon/android-chrome-512x512.png" alt="KMB Logo" width="24px" height="24px" />;
});

Logo.propTypes = {
  sx: PropTypes.object
};

export default Logo;
