import React, { useEffect } from 'react';
import useCloneSim from '@/hooks/useCloneSim';

export default function CloneSimulator() {
  const { generateFakeUsers, simulatePlays, autoBalanceCasino } = useCloneSim();

  useEffect(() => {
    generateFakeUsers(100);
    simulatePlays();
    autoBalanceCasino();
  }, []);

  return (
    <div className="p-4 bg-teal-900 text-white rounded-lg">
      <h1 className="text-2xl font-bold text-center">Clone Simulation Engine</h1>
      <p className="text-center text-sm text-teal-200">100+ clones now active. Casino looks alive.</p>
    </div>
  );
}
