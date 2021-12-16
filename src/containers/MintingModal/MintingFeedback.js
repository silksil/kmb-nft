import React from 'react';
import { Stack, Box, Typography, IconButton } from '@mui/material';
import { useContract } from 'src/hooks/useContract';

function MintingFeedback() {
  const { transactionHash, tokenId } = useContract();
  const feedbackText = tokenId ? 'Check your minted NFT on OpenSea, Rarible or Eitherscan.' : 'Check the minting progress on Etherscan';

  

  return (
    <Box mt={2}>
      <Typography variant="caption" color="text.secondary">
        {feedbackText}
      </Typography>
      <Stack spacing={1} direction="row">
        {tokenId && (
          <>
            <IconButton href={`${process.env.NEXT_PUBLIC_OPENSEA_PREFIX}/${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}/${tokenId}`} target="_blank">
              <Box component="img" width="24px" src="/static/marketplaces/opensea-logo.png" />
            </IconButton>
            <IconButton href={`${process.env.NEXT_PUBLIC_RARIBLE_PREFIX}/${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}:${tokenId}`} target="_blank">
              <Box component="img" width="24px" src="/static/marketplaces/rarible-logo.png" />
            </IconButton>
          </>
        )}
        <IconButton href={`${process.env.NEXT_PUBLIC_EITHERSCAN_PREFIX}/tx/${transactionHash}`}>
          <Box component="img" width="24px" src="/static/marketplaces/eitherscan-logo.png" />
        </IconButton>
        <Box />
      </Stack>
    </Box>
  );
}

export { MintingFeedback };
