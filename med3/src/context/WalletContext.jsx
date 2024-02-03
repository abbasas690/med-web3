// WalletContext.js

import React, { createContext, useContext, useState } from 'react';

// Create the context
const WalletContext = createContext();

// Create a custom hook to access the context
export const useWallet = () => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
};

// Create the context provider component
export const WalletProvider = ({ children }) => {
  const [walletDetails, setWalletDetails] = useState(null);

  // Function to set wallet details
  const setWallet = (details) => {
    setWalletDetails(details);
  };

  // Value object to be provided by the context
  const value = {
    walletDetails,
    setWallet,
  };

  return <WalletContext.Provider value={value}>{children}</WalletContext.Provider>;
};
