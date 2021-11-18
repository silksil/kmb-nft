import PropTypes from 'prop-types';
import { createContext, useState } from 'react';
import { ethers } from 'ethers';
import myEpicNft from './MyEpicNFT.json';

const MINTING_STATUS = {
  SUCCESS: 'success',
  LOADING: 'loading',
  IDLE: 'idle',
};

const initialState = {
  amountOfMintedNfts: null,
  mintNft: () => {},
  mintingStatus: MINTING_STATUS.IDLE,
  isConnectedToCorrectNetwork: true,
  tokenIdMintedNft: null,
};

const ContractContext = createContext(initialState);

ContractProvider.propTypes = {
  children: PropTypes.node,
};

function ContractProvider({ children }) {
  const [mintingStatus, setMintingStatus] = useState(MINTING_STATUS.IDLE);

  const askContractToMintNft = async () => {
    const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;
    setMintingStatus(MINTING_STATUS.LOADING);

    try {
      const { ethereum } = window;

      if (!ethereum) {
        setMintingStatus(MINTING_STATUS.IDLE);
        return { error: "Ethereum object doesn't exist! Please install MetaMask" };
      }

      const connectedChainId = await ethereum.request({ method: 'eth_chainId' });
      const shouldBeConnectedToChainId = process.env.NEXT_PUBLIC_CHAIN_ID;

      if (connectedChainId !== shouldBeConnectedToChainId) {
        setMintingStatus(MINTING_STATUS.IDLE);
        return { error: 'You are not connected to the correct network' };
      }

      /**
       * A "Provider" is a abstraction used for issuing queries
       * and sending signed state changing transactions.
       */
      const provider = new ethers.providers.Web3Provider(ethereum);

      /**
       * Can be used to sign messages and transactions and send signed transactions
       * to the Ethereum Network to execute state changing operations.
       */
      const signer = provider.getSigner();

      /**
       * Ceates the connection to our contract.
       */
      const connectedContract = new ethers.Contract(contractAddress, myEpicNft.abi, signer);

      /**
       * Pop the wallet.
       */
      let nftTxn = await connectedContract.makeAnEpicNFT();

      /**
       * Minting.
       */
      await nftTxn.wait();

      setMintingStatus(MINTING_STATUS.SUCCESS);
      const transactionHash = nftTxn.hash;

      console.log(`Mined, see transaction: https://rinkeby.etherscan.io/tx/${transactionHash}`);
    } catch (error) {
      console.log(error);
      return { error };
    }
  };

  return <ContractContext.Provider value={{ askContractToMintNft, mintingStatus }}>{children}</ContractContext.Provider>;
}

export { ContractProvider, ContractContext };
