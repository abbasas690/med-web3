// App.js
import { useState } from 'react';
import { Web3 } from 'web3';
import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Register from './components/Register';
const App = () => {
  const [connectedAccount, setConnectedAccount] = useState('null');
    
  async function connectMetamask() {
    //check metamask is installed
    if (window.ethereum) {
      // instantiate Web3 with the injected provider
      const web3 = new Web3(window.ethereum);

      //request user to connect accounts (Metamask will prompt)
      await window.ethereum.request({ method: 'eth_requestAccounts' });

      //get the connected accounts
      const accounts = await web3.eth.getAccounts();

      //show the first connected account in the react page
      setConnectedAccount(accounts[0]);
    } else {
      alert('Please download metamask');
    }
  }
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={"home"} />
        <Route path="/register" element={<Register con={connectMetamask} acc={connectedAccount} />} />
        <Route path="/login" element={"login"} />
        <Route path="/doctor" element={"docter"} />
        <Route path="/patient" element={"patien"} />
        <Route path="/insurance" component={"insuranc"} />
      </Routes>
    </Router>
  );
};

export default App;
