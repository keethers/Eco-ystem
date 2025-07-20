import React, { useState } from 'react';
import useTokenForge from '@/hooks/useTokenForge';

export default function TokenContractBuilder() {
  const { deployERC20Token, previewContractCode } = useTokenForge();
  const [tokenName, setTokenName] = useState('EX$');
  const [symbol, setSymbol] = useState('E$');
  const [supply, setSupply] = useState(1000000);

  return (
    <div className="p-4 bg-emerald-900 text-white rounded-xl">
      <h1 className="text-xl font-bold text-center">Token Contract Builder</h1>
      <div className="flex flex-col space-y-2 mt-4">
        <input className="input" placeholder="Token Name" value={tokenName} onChange={(e) => setTokenName(e.target.value)} />
        <input className="input" placeholder="Symbol" value={symbol} onChange={(e) => setSymbol(e.target.value)} />
        <input className="input" type="number" placeholder="Initial Supply" value={supply} onChange={(e) => setSupply(Number(e.target.value))} />
        <button className="btn" onClick={() => previewContractCode({ tokenName, symbol, supply })}>Preview Code</button>
        <button className="btn" onClick={() => deployERC20Token({ tokenName, symbol, supply })}>Deploy to Chain</button>
      </div>
    </div>
  );
}
