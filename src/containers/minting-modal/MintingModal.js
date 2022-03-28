import React, { useState } from "react";
import { Modal, Typography, Box, IconButton, Button, Alert } from "@mui/material";
import TextField from "@mui/material/TextField";

import { useContract } from "src/hooks/useContract";
import { useUI } from "src/hooks/useUI";
import { styled } from "@mui/material/styles";

import { Icon } from "../../components/Icon";
import { MintingFeedback } from "./MintingFeedback";

import closeFill from "@iconify/icons-eva/close-fill";
import { getFeedbackStatusIcon, getButtonStatusIcon, getStatusText, getButtonText, buttonIsDisabled, getMarketplacesFeedbackText } from "./helpers";
import { collectionInfo } from "src/config/collectionInfo";

const ContainerStyle = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  maxWidth: "570px",
  padding: theme.spacing(6),
  backgroundColor: theme.palette.background.default,
  borderRadius: "5px"
}));

const IconButtonStyle = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: "0px",
  right: "0px",
  padding: theme.spacing(2)
}));

const StatusCircleStyle = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.neutral,
  minWidth: "40px",
  minHeight: "40px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: theme.spacing(2)
}));

const MintingCount = () => {
  const { totalMinted, totalSupply, isSoldOut } = useContract();
  const text = isSoldOut ? "Sold out" : `${totalMinted} of ${totalSupply} minted`;

  /**
   * Don't show the modal if the count has not been retrieved yet
   */
  if (!totalSupply) return null;

  return (
    <Alert severity="info" sx={{ mb: 2, mt: 1 }}>
      {text}
    </Alert>
  );
};

export function MintingModal() {
  const { status, error, STATUS, transactionHash, mintNft, isSoldOut } = useContract();
  const { mintingModalIsOpen, setMintingModalIsOpen } = useUI();
  const [mintAmount, setMintAmount] = useState(1);
  const isValidMintAmount = mintAmount >= 1 && mintAmount <= 10;

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
        <MintingCount />
        <Typography variant="body2">· {collectionInfo.price} ETH each</Typography>
        <Typography variant="body2">· Use Metamask only</Typography>
        <Typography variant="body2">· Max. {collectionInfo.maxTransactions} NFTs per transaction</Typography>
        <Typography variant="body2">· Once you mint, you cannot undo the transaction</Typography>
        <Typography variant="body2">
          ·{" "}
          <a href={`${process.env.NEXT_PUBLIC_EITHERSCAN_PREFIX}/address/${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}#code`} target="_blank" rel="noreferrer">
            Link{" "}
          </a>
          to etherscan contract
        </Typography>
        {!isSoldOut && (
          <>
            <TextField
              error={!isValidMintAmount}
              label="Amount"
              type="number"
              variant="filled"
              helperText={!isValidMintAmount && "Value should be between 1 and 10"}
              value={mintAmount}
              onChange={(event) => {
                setMintAmount(event.target.value);
              }}
              sx={{ width: "100%", my: 2 }}
              InputProps={{
                inputMode: "numeric",
                inputProps: {
                  max: 5,
                  min: 1
                }
              }}
            />

            <Button variant="contained" disabled={buttonIsDisabled(status)} sx={{ width: "100%" }} onClick={() => mintNft(mintAmount)} endIcon={getButtonStatusIcon(status, STATUS)}>
              {getButtonText(status)}
            </Button>
          </>
        )}

        <Box display="flex" flexDirection="row" alignItems="center" mt={1}>
          {getFeedbackStatusIcon(status, STATUS) && <StatusCircleStyle>{getFeedbackStatusIcon(status, STATUS)}</StatusCircleStyle>}
          <Typography color="text.secondary" variant="caption">
            {getStatusText(status, error)}
            {getMarketplacesFeedbackText(transactionHash)}
          </Typography>
        </Box>
        {transactionHash && <MintingFeedback />}
      </ContainerStyle>
    </Modal>
  );
}
