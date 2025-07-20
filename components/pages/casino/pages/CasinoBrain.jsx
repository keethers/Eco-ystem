import React, { useEffect } from 'react';
import useCasinoAI from '@/hooks/useCasinoAI';

export default function CasinoBrain() {
  const { updateHouseEdge, deployCloneDealer, autoBalance } = useCasinoAI();

  useEffect(() => {
    updateHouseEdge(0.06); // 6% edge
    deployCloneDealer();
    autoBalance();
  }, []);

  return (
    <div className="p-4 bg-neutral-950 text-green-400 rounded-xl">
      <h1 className="text-xl font-bold text-center">Casino Brain AI</h1>
      <p className="text-center text-sm text-gray-400">House edge adjusted. Clones deployed. Fairness balanced.</p>
    </div>
  );
}
