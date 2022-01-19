import PropTypes from 'prop-types';
import { createContext, useState, useCallback, useEffect } from 'react';
import { ethers } from 'ethers';
import abi from '../config/abi.json';
import { removeSpacingAndToLowerCase } from 'src/utils/account';

const MINTING_STATUS = {
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
  status: { name: MINTING_STATUS.IDLE, error: null },
  error: null,
  transactionHash: null,
  isConnected: false,
  error: null,
  connect: () => {},
  connectionStatus: { isConnected: false, error: null },
};

const ContractContext = createContext(initialState);

ContractProvider.propTypes = {
  children: PropTypes.node,
};

function ContractProvider({ children }) {
  /**
   * States related to an account.
   */
  const [connectionStatus, setConnectionStatus] = useState({ isConnected: false, error: null });
  const [account, setAccount] = useState();

  /**
   * States related to the contract.
   */
  const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;
  const [mintingStatus, setMintingStatus] = useState({ name: MINTING_STATUS.IDLE, error: null });
  const [transactionHash, setTransactionHash] = useState();
  const [tokenId, setTokenId] = useState();
  const [totalSupply, setTotalSupply] = useState();
  const [totalMinted, setTotalMinted] = useState();

  /**
   * Determine whether the collection is already sold-out or not.
   */
  useEffect(() => {
    if (totalSupply === undefined || totalMinted === undefined) return;

    if (totalSupply === totalMinted) {
      setMintingStatus({ name: MINTING_STATUS.SOLD_OUT, error: null });
    }
  }, [totalMinted, totalSupply, setMintingStatus]);

  /**
   * "Capture" events when our contract throws it.
   */
  const setupEventListener = useCallback(async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) return;

      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const connectedContract = new ethers.Contract(contractAddress, abi.abi, signer);

      const minted = await connectedContract.totalSupply();
      const supply = await connectedContract.maxSupply();

      setTotalSupply(supply.toNumber());
      setTotalMinted(minted.toNumber());

      connectedContract.on('minted', (from, tokenId) => {
        if (removeSpacingAndToLowerCase(from) === removeSpacingAndToLowerCase(account)) {
          setMintingStatus({ name: MINTING_STATUS.MINTED, error: null });
          setTokenId(tokenId.toNumber());
        }
      });
    } catch (error) {
      console.warn(error);
    }
  }, [account, contractAddress]);

  /**
   * Checks whether an account is connected.
   * Initiate eventListener to listen to the contract.
   */
  const checkConnection = useCallback(async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        return setConnectionStatus({ isConnected: false, error: null });
      }

      const accounts = await ethereum.request({ method: 'eth_accounts' });
      const accountIsAvailable = accounts.length !== 0;

      if (!accountIsAvailable) {
        setConnectionStatus({ isConnected: false, error: null });
        return;
      }

      setAccount(accounts[0]);
      setConnectionStatus({ isConnected: true, error: null });
      setupEventListener();
    } catch (e) {
      console.warn(e);
    }
  }, [setupEventListener]);

  /**
   * Check whether an account is connected when provider is initialized.
   */
  useEffect(() => {
    checkConnection();
  }, [checkConnection]);

  /*
   * Connect an account.
   */
  const connect = useCallback(async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        setConnectionStatus({ isConnected: false, error: "Looks like you don't have MetaMask. Download the extension to proceed" });
      }

      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      const accountsAvailable = accounts.length === 0;

      if (!accountsAvailable) {
        setConnectionStatus({ isConnected: false, error: 'No authorized account found' });
      }

      setAccount(accounts[0]);
      setConnectionStatus({ isConnected: true, error: null });
      setupEventListener();
    } catch (error) {
      setConnectionStatus({ isConnected: false, error: 'No authorized account found' });
    }
  }, [setupEventListener]);

  const mintNft = useCallback(async () => {
    /**
     * In case a user mints multiple times set the tokenId en transactionHash everytime to null.
     */
    setTokenId(null);
    setTransactionHash(null);

    try {
      const { ethereum } = window;

      if (!ethereum) {
        setMintingStatus({ name: MINTING_STATUS.ERROR, error: "Seems you don't have the correct wallet extension. Please install MetaMask" });
      }

      if (mintingStatus.name === MINTING_STATUS.SOLD_OUT) return;

      const connectedChainId = await ethereum.request({ method: 'eth_chainId' });
      const shouldBeConnectedToChainId = process.env.NEXT_PUBLIC_CHAIN_ID;

      if (connectedChainId !== shouldBeConnectedToChainId) {
        return setMintingStatus({ name: MINTING_STATUS.ERROR, error: `You are not connected to the correct network. Please connect with the ${process.env.NEXT_PUBLIC_NETWORK_NAME} network.` });
      }

      /**
       * Get the abstraction used for issuing queries and sending signed state changing transactions.
       */
      const provider = new ethers.providers.Web3Provider(ethereum);

      /**
       * Sign messages and transactions and send signed transactions to the network to execute state changing operations.
       */
      const signer = provider.getSigner();

      /**
       * Connect to our contract.
       */
      const connectedContract = new ethers.Contract(contractAddress, abi.abi, signer);

      /**
       * Pop the wallet.
       */
      setMintingStatus({ name: MINTING_STATUS.POP_WALLET, error: null });

      /**
       * Start minting.
       */
      let nftTxn = await connectedContract.mint('1');
      setMintingStatus({ name: MINTING_STATUS.MINTING, error: null });

      /**
       * When completed, mined. The setupEvenListener gives feedback when it is minted.
       */
      await nftTxn.wait();

      setTransactionHash(nftTxn.hash);
    } catch (error) {
      console.log(error);
      setMintingStatus({ name: MINTING_STATUS.ERROR, error: 'Something went wrong. Please try again' });
    }
  }, [contractAddress, mintingStatus.name]);

  return <ContractContext.Provider value={{ mintNft, mintingStatus: mintingStatus.name, mintingError: mintingStatus.error, transactionHash, tokenId, totalSupply, totalMinted, account, isConnected: connectionStatus.isConnected, error: connectionStatus.error, connect }}>{children}</ContractContext.Provider>;
}

const ContractConsumer = ({ children }) => {
  return <ContractContext.Consumer>{children}</ContractContext.Consumer>;
};

export { ContractProvider, ContractContext, ContractConsumer };
