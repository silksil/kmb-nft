import { IconButton, Stack } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { varFadeInRight } from '../components/animate';
import { motion } from 'framer-motion';
import { getMarketplaceCollectionUrl } from 'src/utils/getMarketplaceUrl';

export const MarketPlaces = () => (
  <Stack direction="row" spacing={1.5} justifyContent={{ xs: 'center', md: 'flex-start' }}>
    <motion.div variants={varFadeInRight} src="/static/marketplaces/opensea-logo.png">
      <IconButton target="_blank" href={getMarketplaceCollectionUrl('OPENSEA')}>
        <Box component="img" width="32px" src="/static/marketplaces/opensea-logo.png" />
      </IconButton>
    </motion.div>
    <motion.div variants={varFadeInRight} src="/static/marketplaces/rarible-logo.png">
      <IconButton target="_blank" href={getMarketplaceCollectionUrl('RARIBLE')}>
        <Box component="img" width="32px" src="/static/marketplaces/rarible-logo.png" />
      </IconButton>
    </motion.div>
  </Stack>
);
