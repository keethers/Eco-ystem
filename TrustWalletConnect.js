// components/TrustWalletConnect.js
import React, { useState } from 'react';
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from "web3";

export default function TrustWalletConnect() {
  const [wallet, setWallet] = useState("");

  const connectWallet = async () => {
    const provider = new WalletConnectProvider({
      rpc: {
        1: "https://mainnet.infura.io/v3/", // 0x9743f6B009A0F701746C586EeDC401E8bF818069
      },
    });

    await provider.enable();
    const web3 = new Web3(provider);

    const accounts = await web3.eth.getAccounts();
    setWallet(accounts[0]);

    console.log("Connected Trust Wallet:", accounts[0]);
  };

  return (
    <div className="p-4 bg-black text-white rounded">
      <button onClick={connectWallet} className="bg-blue-600 px-4 py-2 rounded">
        Connect Trust Wallet
      </button>
      {wallet && <p className="mt-2">Connected Wallet: {wallet}</p>}
    </div>
  );
      }
  
