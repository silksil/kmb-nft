import PropTypes from 'prop-types';
import { createContext, useState, useEffect } from 'react';
import { ethers } from 'ethers';
import myEpicNft from './MyEpicNFT.json';

const initialState = {
  walletIsAvailable: false,
  walletIsConnected: false,
  connectWallet: () => {},
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
  const [walletIsConnected, setWalletIsConnected] = useState(false);

  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window;
    if (!ethereum) return;

    const accounts = await ethereum.request({ method: 'eth_accounts' });
    const accountIsAvailable = accounts.length !== 0;

    if (accountIsAvailable) {
      setWalletIsConnected(true);

      // Setup listener! This is for the case where a user comes to our site
      // and ALREADY had their wallet connected + authorized.
      setupEventListener();
    }
  };

  /*
   * Implement your connectWallet method here
   */
  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert('Get MetaMask!');
        return;
      }

      /*
       * Fancy method to request access to account.
       */
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });

      /*
       * Boom! This should print out public address once we authorize Metamask.
       */
      if (accounts[0]) {
        setWalletIsConnected(true);
        return accounts[0];
      }

      //   // Setup listener! This is for the case where a user comes to our site
      //   // and connected their wallet for the first time.
      //   setupEventListener();
      return { error: 'No accounts' };
    } catch (error) {
      return { error: 'Something went wrong' };
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return <WalletContext.Provider value={{ walletIsConnected, connectWallet }}>{children}</WalletContext.Provider>;
}

export { WalletProvider, WalletContext };
