import PropTypes from 'prop-types';
import { createContext, useState, useCallback, useEffect } from 'react';
import { ethers } from 'ethers';
import myEpicNft from './MyEpicNFT.json';
import { ConstructionOutlined } from '@mui/icons-material';

const STATUS = {
  IDLE: 'idle',
  MINTING: 'minting',
  SOLD_OUT: 'soldOut',
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
  const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;
  const [status, setStatus] = useState({ name: STATUS.IDLE, error: null });
  const [transactionHash, setTransactionHash] = useState();
  const [tokenId, setTokenId] = useState();
  const [totalSupply, setTotalSupply] = useState();
  const [totalMinted, setTotalMinted] = useState();

  useEffect(() => {
    if (!totalSupply || !totalMinted) return;
    if (totalSupply === totalMinted) {
      console.log('hi,', totalSupply, totalMinted);
      setStatus({ name: STATUS.SOLD_OUT, error: null });
    }
  }, [totalMinted, totalSupply, setStatus]);

  /**
   * "Capture" event when our contract throws it.
   */
  const setupEventListener = useCallback(async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) return;

      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const connectedContract = new ethers.Contract(contractAddress, myEpicNft.abi, signer);

      const supply = await connectedContract.totalSupply();
      const minted = await connectedContract.totalMinted();

      setTotalSupply(supply.toNumber());
      setTotalMinted(minted.toNumber());

      connectedContract.on('NewEpicNFTMinted', (from, tokenId, totalMinted) => {
        console.log('1', from, tokenId, totalMinted);
        setStatus({ name: STATUS.MINTED, error: null });
        setTokenId(tokenId.toNumber());
        setTotalMinted(totalMinted.toNumber());
      });
    } catch (error) {
      console.warn(error);
    }
  }, [contractAddress]);

  const mintNft = useCallback(async () => {
    /**
     * In case a user mints multiple times,
     * set the tokenId en transactionHash to null
     */
    setTokenId(null);
    setTransactionHash(null);

    try {
      const { ethereum } = window;

      if (!ethereum) {
        setStatus({ name: STATUS.ERROR, error: "Seems you don't have the correct wallet extension. Please install MetaMask" });
      }

      if (status.name === STATUS.SOLD_OUT) return;

      const connectedChainId = await ethereum.request({ method: 'eth_chainId' });
      const shouldBeConnectedToChainId = process.env.NEXT_PUBLIC_CHAIN_ID;

      if (connectedChainId !== shouldBeConnectedToChainId) {
        return setStatus({ name: STATUS.ERROR, error: `You are not connected to the correct network. Please connect with the ${process.env.NEXT_PUBLIC_NETWORK_NAME} network.` });
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

      setStatus({ name: STATUS.MINTING, error: null });
      await nftTxn.wait();

      /**
       * Mined (setupEvenListener gives feedback if it minted)
       */

      setTransactionHash(nftTxn.hash);
    } catch (error) {
      setStatus({ name: STATUS.ERROR, error: 'Something went wrong. Please try again' });
    }
  }, [contractAddress, status]);

  return <ContractContext.Provider value={{ mintNft, status: status.name, error: status.error, STATUS, transactionHash, setupEventListener, tokenId, totalSupply, totalMinted }}>{children}</ContractContext.Provider>;
}

const ContractConsumer = ({ children }) => {
  return <ContractContext.Consumer>{children}</ContractContext.Consumer>;
};

export { ContractProvider, ContractContext, ContractConsumer };
