import React from 'react';
import { Container, Modal, Typography, CircularProgress, Box, IconButton, Alert } from '@mui/material';
import { useContract } from 'src/hooks/useContract';
import { useUI } from 'src/hooks/useUI';
import { styled } from '@mui/material/styles';

import checkmarkFill from '@iconify/icons-eva/checkmark-fill';
import alertTriangleFill from '@iconify/icons-eva/alert-triangle-outline';
import flashFill from '@iconify/icons-eva/flash-fill';
import { Icon } from '../Icon';
import { MintingFeedback } from './MintingFeedback';

import closeFill from '@iconify/icons-eva/close-fill';

const ContainerStyle = styled(Container)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadiusMd,
  backgroundColor: theme.palette.background.paper,
}));

const IconButtonStyle = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '0px',
  right: '0px',
  padding: theme.spacing(2),
}));

const StatusCircleStyle = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.neutral,
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: theme.spacing(2),
}));

const getStatusText = (status, STATUS, error) => {
  if (status === STATUS.POP_WALLET) return 'Poppin your wallet.';
  if (status === STATUS.MINTING) return 'Minting';
  if (status === STATUS.SOLD_OUT) return 'Sold out';
  if (status === STATUS.MINTED) return 'Succesfully minted';
  if (status === STATUS.ERROR) return error;

  return null;
};

const getStatusIcon = (status, STATUS) => {
  if (status === STATUS.POP_WALLET) return <Icon icon={flashFill} size="s" />;
  if (status === STATUS.MINTING) return <CircularProgress size="20px" />;
  if (status === STATUS.MINTED) return <Icon icon={checkmarkFill} color="success" size="s" />;
  if (status === STATUS.SOLD_OUT) return <Icon icon={checkmarkFill} color="success" size="s" />;
  if (status === STATUS.ERROR) return <Icon icon={alertTriangleFill} color="error" size="s" />;

  return null;
};

export function MintingModal() {
  const { status, error, STATUS, transactionHash } = useContract();
  const { mintingModalIsOpen, setMintingModalIsOpen } = useUI();

  return (
    <Modal open={mintingModalIsOpen}>
      <ContainerStyle>
        <IconButtonStyle
          disabled={status === STATUS.MINTING}
          onClick={() => {
            setMintingModalIsOpen(false);
          }}
        >
          <Icon icon={closeFill} />
        </IconButtonStyle>

        <Typography variant="h3">Mint your NFT</Typography>

        <Box display="flex" flexDirection="row" alignItems="center" mt={1}>
          <StatusCircleStyle>{getStatusIcon(status, STATUS)}</StatusCircleStyle>

          <Typography color="text.secondary">{getStatusText(status, STATUS, error)}</Typography>
        </Box>
        {transactionHash && <MintingFeedback />}
      </ContainerStyle>
    </Modal>
  );
}
