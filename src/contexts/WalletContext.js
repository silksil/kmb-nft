import PropTypes from 'prop-types';
import { createContext, useState, useEffect } from 'react';
import { ethers } from 'ethers';
import myEpicNft from './MyEpicNFT.json';

const initialState = {
  isConnected: false,
  error: null,
  connect: () => {},
};

const WalletContext = createContext(initialState);

WalletProvider.propTypes = {
  children: PropTypes.node,
};

// Setup our listener.
const setupEventListener = async () => {
  // Most of this looks the same as our function askContractToMintNft
  try {
    const { ethereum } = window;
    const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;

    if (ethereum) {
      // Same stuff again
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const connectedContract = new ethers.Contract(contractAddress, myEpicNft.abi, signer);

      // THIS IS THE MAGIC SAUCE.
      // This will essentially "capture" our event when our contract throws it.
      // If you're familiar with webhooks, it's very similar to that!
      connectedContract.on('NewEpicNFTMinted', (from, tokenId) => {
        console.log(from, tokenId.toNumber());
        alert(`Hey there! We've minted your NFT and sent it to your wallet. It may be blank right now. It can take a max of 10 min to show up on OpenSea. Here's the link: https://testnets.opensea.io/assets/${CONTRACT_ADDRESS}/${tokenId.toNumber()}`);
      });

      console.log('Setup event listener!');
    } else {
      console.log("Ethereum object doesn't exist!");
    }
  } catch (error) {
    console.log(error);
  }
};

function WalletProvider({ children }) {
  const [connectionStatus, setConnectionStatus] = useState({ isConnected: false, error: null });

  const checkConnection = async () => {
    const { ethereum } = window;
    if (!ethereum) {
      return setConnectionStatus({ isConnected: false, error: null });
    }

    const accounts = await ethereum.request({ method: 'eth_accounts' });
    const accountIsAvailable = accounts.length !== 0;

    if (!accountIsAvailable) {
      setConnectionStatus({ isConnected: false, error: null });
    }

    setConnectionStatus({ isConnected: true, error: null });
    setupEventListener();
  };

  /*
   * Connect the wallet.
   */
  const connect = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        setConnectionStatus({ isConnected: false, error: "Looks like you don't have MetaMask. Download the extension to proceed" });
      }

      /*
       * Request access to the account.
       */
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      const accountsAvailable = accounts.length === 0;

      if (!accountsAvailable) {
        setConnectionStatus({ isConnected: false, error: 'No authorized account found' });
      }

      setConnectionStatus({ isConnected: true, error: null });
      setupEventListener();
    } catch (error) {
      setConnectionStatus({ isConnected: false, error: 'No authorized account found' });
    }
  };

  useEffect(() => {
    checkConnection();
  }, []);

  return <WalletContext.Provider value={{ isConnected: connectionStatus.isConnected, error: connectionStatus.error, connect }}>{children}</WalletContext.Provider>;
}

export { WalletProvider, WalletContext };
