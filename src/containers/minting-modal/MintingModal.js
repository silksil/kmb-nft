import React from 'react';
import { Container, Modal, Typography, Box, IconButton } from '@mui/material';
import { useContract } from 'src/hooks/useContract';
import { useUI } from 'src/hooks/useUI';
import { styled } from '@mui/material/styles';

import { Icon } from '../../components/Icon';
import { MintingFeedback } from './MintingFeedback';

import closeFill from '@iconify/icons-eva/close-fill';
import { getStatusIcon, getStatusText } from './helpers';

const ContainerStyle = styled(Container)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 400,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
  borderRadius: '5px',
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

export function MintingModal() {
  const { status, error, STATUS, transactionHash } = useContract();
  const { mintingModalIsOpen, setMintingModalIsOpen } = useUI();

  return (
    <Modal open={mintingModalIsOpen}>
      <ContainerStyle>
        <IconButtonStyle
          disabled={status === STATUS?.MINTING}
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
