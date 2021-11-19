import PropTypes from 'prop-types';
import { createContext, useState } from 'react';
import { ethers } from 'ethers';
import myEpicNft from './MyEpicNFT.json';

const STATUS = {
  IDLE: 'idle',
  MINING: 'mining',
  MINED: 'mined',
  POP_WALLET: 'popWallet',
  MINTED: 'minted',
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

  /**
   * "Capture" our event when our contract throws it.
   */
  const setupEventListener = async () => {
    try {
      const { ethereum } = window;
      const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;

      if (!ethereum) return;

      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const connectedContract = new ethers.Contract(contractAddress, myEpicNft.abi, signer);

      connectedContract.on('NewEpicNFTMinted', (from, tokenId) => {
        console.log(from, tokenId.toNumber());
        alert(`Hey there! We've minted your NFT and sent it to your wallet. It may be blank right now. It can take a max of 10 min to show up on OpenSea. Here's the link: https://testnets.opensea.io/assets/${CONTRACT_ADDRESS}/${tokenId.toNumber()}`);
      });
    } catch (error) {
      console.warn(error);
    }
  };

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
       * Mining
       */
      setStatus({ name: STATUS.MINING, error: null });

      await nftTxn.wait();
      setTransactionHash(nftTxn.hash);

      setStatus({ name: STATUS.MINED, error: null });
    } catch (error) {
      console.warn(error);
      setStatus({ name: STATUS.ERROR, error: 'Something went wrong. Please try again' });
    }
  };

  return <ContractContext.Provider value={{ askContractToMintNft, status: status.name, error: status.error, STATUS, transactionHash, setupEventListener }}>{children}</ContractContext.Provider>;
}

const ContractConsumer = ({ children }) => {
  return <ContractContext.Consumer>{children}</ContractContext.Consumer>;
};

export { ContractProvider, ContractContext, ContractConsumer };
