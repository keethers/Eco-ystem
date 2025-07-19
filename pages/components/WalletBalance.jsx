import { useEffect, useState } from "react";

export default function WalletBalance() {
  const [wallet, setWallet] = useState("");
  const [ethPrice, setEthPrice] = useState("...");
  const [balance, setBalance] = useState("...");

  useEffect(() => {
    fetch("/api/wallet")
      .then(res => res.json())
      .then(data => {
        setWallet(data.walletAddress);
      });

    fetch("https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd")
      .then(res => res.json())
      .then(data => setEthPrice(data.ethereum.usd));
  }, []);

  useEffect(() => {
    if (window.ethereum && wallet) {
      window.ethereum
        .request({ method: "eth_getBalance", params: [wallet, "latest"] })
        .then(result => {
          const wei = parseInt(result, 16);
          const eth = wei / 1e18;
          setBalance(eth.toFixed(4));
        });
    }
  }, [wallet]);

  return (
    <div style={{ marginTop: "20px" }}>
      <p><strong>Public Wallet:</strong> {wallet}</p>
      <p><strong>ETH Price:</strong> ${ethPrice}</p>
      <p><strong>Live Balance:</strong> {balance} ETH</p>
      <p><strong>Est. Value:</strong> ${(ethPrice * balance).toFixed(2)} USD</p>
    </div>
  );
}
