import { CircularProgress } from '@mui/material';
import { Icon } from '../../components/Icon';

import checkmarkFill from '@iconify/icons-eva/checkmark-fill';
import alertTriangleFill from '@iconify/icons-eva/alert-triangle-outline';
import flashFill from '@iconify/icons-eva/flash-fill';

export const getStatusText = (status, STATUS, error) => {
  if (status === 'popWallet') return 'Poppin your wallet.';
  if (status === 'minting') return 'Minting';
  if (status === 'soldOut') return 'Sold out';
  if (status === 'minted') return 'Succesfully minted';
  if (status === 'error') return error;

  return null;
};

export const getStatusIcon = (status, STATUS) => {
  if (status === 'popWallet') return <Icon icon={flashFill} size="s" />;
  if (status === 'minting') return <CircularProgress size="20px" />;
  if (status === 'minted') return <Icon icon={checkmarkFill} color="success" size="s" />;
  if (status === 'soldOut') return <Icon icon={checkmarkFill} color="success" size="s" />;
  if (status === 'error') return <Icon icon={alertTriangleFill} color="error" size="s" />;

  return null;
};
