import Head from 'next/head';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useContract } from 'src/hooks/useContract';

const BoxStyle = styled(Box)(({ theme }) => ({
  position: 'fixed',
  left: '0px',
  bottom: '0px',
  zIndex: 2,
  padding: theme.spacing(2),
  borderTopRightRadius: theme.shape.borderRadiusMd,
  backgroundColor: theme.palette.background.paper,
}));

const MintingCount = () => {
  const { totalMinted, totalSupply } = useContract();

  /**
   * Don't show the modal if the count has not been retrieved yet
   */
  if (!totalSupply) return null;

  return (
    <BoxStyle>
      <Typography>{`${totalMinted} of ${totalSupply} minted`}</Typography>
    </BoxStyle>
  );
};

export { MintingCount };
