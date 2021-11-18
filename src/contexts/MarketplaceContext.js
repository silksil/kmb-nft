import PropTypes from 'prop-types';
import { createContext } from 'react';

const initialState = {
  walletIsConnected: false,
  connectWallet: () => {},
  accountAddress: null,
};

const WallletContext = createContext(initialState);

WallletProvider.propTypes = {
  children: PropTypes.node,
};

function WallletProvider({ children }) {
  return <WallletContext.Provider value={{}}>{children}</WallletContext.Provider>;
}

export { WallletProvider, WallletContext };
