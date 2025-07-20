import React from 'react';
import CrapsTable from '@/components/games/CrapsTable';

export default function CrapsCloneRun() {
  return (
    <div className="p-4 bg-gray-800 text-white rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-2">Craps Clone Run</h1>
      <p className="text-center text-sm text-gray-400 mb-4">Clones shoot dice. You shoot profits.</p>
      <CrapsTable aiAssist={true} />
    </div>
  );
}
