import { CircularProgress } from '@mui/material';
import { Icon } from '../../components/Icon';

import checkmarkFill from '@iconify/icons-eva/checkmark-fill';
import alertTriangleFill from '@iconify/icons-eva/alert-triangle-outline';
import flashFill from '@iconify/icons-eva/flash-fill';

export const getStatusText = (status, STATUS, error) => {
  if (status === STATUS.POP_WALLET) return 'Poppin your wallet.';
  if (status === STATUS.MINTING) return 'Minting';
  if (status === STATUS.SOLD_OUT) return 'Sold out';
  if (status === STATUS.MINTED) return 'Succesfully minted';
  if (status === STATUS.ERROR) return error;

  return null;
};

export const getStatusIcon = (status, STATUS) => {
  if (status === STATUS.POP_WALLET) return <Icon icon={flashFill} size="s" />;
  if (status === STATUS.MINTING) return <CircularProgress size="20px" />;
  if (status === STATUS.MINTED) return <Icon icon={checkmarkFill} color="success" size="s" />;
  if (status === STATUS.SOLD_OUT) return <Icon icon={checkmarkFill} color="success" size="s" />;
  if (status === STATUS.ERROR) return <Icon icon={alertTriangleFill} color="error" size="s" />;

  return null;
};
