import React from 'react';
import useHiveControl from '@/hooks/useHiveControl';

export default function HivePurgeProtocol() {
  const { purgeHive } = useHiveControl();

  return (
    <div className="p-4 bg-red-900 text-white rounded-xl">
      <h1 className="text-xl font-bold mb-2">💣 Hive Purge Protocol</h1>
      <p className="text-sm mb-3">
        ⚠️ This will disable all clone logic, wipe temp memory, and seal command ports. Only run if security fails or system is compromised.
      </p>
      <button onClick={purgeHive} className="btn bg-red-700 w-full text-white font-bold">
        🚨 INITIATE TOTAL PURGE
      </button>
    </div>
  );
}
