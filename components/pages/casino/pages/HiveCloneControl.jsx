import React from 'react';
import useCloneNetwork from '@/hooks/useCloneNetwork';

export default function HiveCloneControl() {
  const { launchClone, assignMission, terminateClone } = useCloneNetwork();

  return (
    <div className="p-4 bg-slate-800 text-white rounded-lg">
      <h1 className="text-xl font-semibold text-center">Hive Clone Control</h1>
      <div className="mt-3 text-center">
        <button onClick={() => launchClone('Surveillance')} className="btn">Deploy Surveillance Clone</button>
        <button onClick={() => assignMission('Tesla Delivery')} className="btn mt-2">Assign Prize Clone</button>
        <button onClick={() => terminateClone()} className="btn mt-2">Terminate Rogue Clone</button>
      </div>
    </div>
  );
}
