import PropTypes from 'prop-types';
import { createContext, useState, useEffect } from 'react';

const initialState = {
  isConnected: false,
  error: null,
  connect: () => {},
};

const WalletContext = createContext(initialState);

WalletProvider.propTypes = {
  children: PropTypes.node,
};

function WalletProvider({ children, setupEventListener }) {
  const [connectionStatus, setConnectionStatus] = useState({ isConnected: false, error: null });
  const [account, setAccount] = useState();

  const checkConnection = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        return setConnectionStatus({ isConnected: false, error: null });
      }

      const accounts = await ethereum.request({ method: 'eth_accounts' });
      const accountIsAvailable = accounts.length !== 0;

      if (!accountIsAvailable) {
        setConnectionStatus({ isConnected: false, error: null });
        setupEventListener();
        return;
      }

      setAccount(accounts[0]);
      setConnectionStatus({ isConnected: true, error: null });

      setupEventListener();
    } catch (e) {
      console.warn(e);
    }
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
  };

  useEffect(() => {
    checkConnection();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setupEventListener, setConnectionStatus]);

  return <WalletContext.Provider value={{ account, isConnected: connectionStatus.isConnected, error: connectionStatus.error, connect }}>{children}</WalletContext.Provider>;
}

export { WalletProvider, WalletContext };
