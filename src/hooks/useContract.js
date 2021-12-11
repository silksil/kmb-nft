import { useContext } from 'react';
import { ContractContext } from '../contexts/ContractContext';

export const useContract = () => {
  const { mintNft, mintingStatus, mintingError, transactionHash, tokenId, totalSupply, totalMinted, MINTING_STATUS } = useContext(ContractContext);

  return { mintNft, status: mintingStatus, error: mintingError, STATUS: MINTING_STATUS, transactionHash, tokenId, totalSupply, totalMinted };
};
