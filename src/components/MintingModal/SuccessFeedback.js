import React from 'react';
import { Stack, Box, Typography, IconButton } from '@mui/material';
import { useContract } from 'src/hooks/useContract';

function SuccessFeedback() {
  const { transactionHash } = useContract();

  return (
    <Box mt={2}>
      <Typography variant="caption" color="text.secondary">
        Check your minted NFT on OpenSea, Rarible or Eitherscan.
      </Typography>
      <Stack spacing={1} direction="row">
        <IconButton href={`${process.env.NEXT_PUBLIC_OPENSEA_PREFIX}/${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}/${transactionHash}`}>
          <Box component="img" width="24px" src="/static/marketplaces/opensea-logo.png" />
        </IconButton>
        <IconButton href={`${process.env.NEXT_PUBLIC_RARIBLE_PREFIX}/${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}:${transactionHash}`}>
          <Box component="img" width="24px" src="/static/marketplaces/rarible-logo.png" />
        </IconButton>
        <IconButton href={`${process.env.NEXT_PUBLIC_EITHERSCAN_PREFIX}/tx/${transactionHash}`}>
          <Box component="img" width="24px" src="/static/marketplaces/eitherscan-logo.png" />
        </IconButton>
        <Box />
      </Stack>
    </Box>
  );
}

export { SuccessFeedback };
