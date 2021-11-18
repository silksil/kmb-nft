import React from 'react';
import { Box, Modal, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useContract } from 'src/hooks/useContract';

const ModalStyle = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor: '#000',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}));

export function MintingModal({ modalIsOpen }) {
  const { mintingStatus } = useContract();

  return (
    <Modal open={modalIsOpen}>
      <ModalStyle>
        <Typography>{mintingStatus}</Typography>
      </ModalStyle>
    </Modal>
  );
}
