import PropTypes from 'prop-types';
import { createContext, useState } from 'react';
import { ethers } from 'ethers';
import myEpicNft from './MyEpicNFT.json';

const STATUS = {
  IDLE: 'idle',
  MINTING: 'minting',
  POP_WALLET: 'popWallet',
  SUCCESS: 'success',
  ERROR: 'error',
};

const initialState = {
  amountOfMintedNfts: null,
  mintNft: () => {},
  status: { name: STATUS.IDLE, error: null },
  error: null,
  transactionHash: null,
};

const ContractContext = createContext(initialState);

ContractProvider.propTypes = {
  children: PropTypes.node,
};

function ContractProvider({ children }) {
  const [status, setStatus] = useState({ name: STATUS.IDLE, error: null });
  const [transactionHash, setTransactionHash] = useState();

  const askContractToMintNft = async () => {
    const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;

    try {
      const { ethereum } = window;

      if (!ethereum) {
        setStatus({ name: STATUS.ERROR, error: "Seems you don't have the correct wallet extension. Please install MetaMask" });
      }

      const connectedChainId = await ethereum.request({ method: 'eth_chainId' });
      const shouldBeConnectedToChainId = process.env.NEXT_PUBLIC_CHAIN_ID;

      if (connectedChainId !== shouldBeConnectedToChainId) {
        setStatus({ name: STATUS.ERROR, error: 'You are not connected to the correct network' });
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
      setStatus({ name: STATUS.POP_WALLET, error: null });

      let nftTxn = await connectedContract.makeAnEpicNFT();

      /**
       * Minting.
       */
      setStatus({ name: STATUS.MINTING, error: null });

      await nftTxn.wait();
      setTransactionHash(nftTxn.hash);

      setStatus({ name: STATUS.SUCCESS, error: null });
    } catch (error) {
      console.warn(error);
      setStatus({ name: STATUS.ERROR, error: 'Something went wrong. Please try again' });
    }
  };

  return <ContractContext.Provider value={{ askContractToMintNft, status: status.name, error: status.error, STATUS, transactionHash }}>{children}</ContractContext.Provider>;
}

export { ContractProvider, ContractContext };
