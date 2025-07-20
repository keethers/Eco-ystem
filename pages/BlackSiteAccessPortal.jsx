import React, { useState } from 'react';
import useBlackSite from '@/hooks/useBlackSite';

export default function BlackSiteAccessPortal() {
  const { authenticate, unlockBlacksite } = useBlackSite();
  const [code, setCode] = useState('');

  const handleEnter = async () => {
    const verified = await authenticate(code);
    if (verified) unlockBlacksite();
  };

  return (
    <div className="p-4 bg-black text-red-500 rounded-xl border border-red-700">
      <h1 className="text-xl font-bold mb-2">🕳️ BlackSite Access</h1>
      <input
        type="password"
        className="w-full p-2 bg-red-900 rounded text-white"
        placeholder="Enter clearance code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button onClick={handleEnter} className="btn mt-2 bg-red-700 w-full text-white font-bold">
        🔐 UNLOCK BLACKSITE
      </button>
    </div>
  );
}
