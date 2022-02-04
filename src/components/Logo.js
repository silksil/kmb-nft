import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

// eslint-disable-next-line react/display-name
const Logo = forwardRef(({ sx }, ref) => {
  return <Box as="img" src="/static/logo.gif" ref={ref} sx={{ width: 60, height: 'auto', cursor: 'pointer', ...sx }}></Box>;
});

Logo.propTypes = {
  sx: PropTypes.object,
};

export default Logo;
