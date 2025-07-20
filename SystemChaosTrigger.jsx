import React from 'react';
import useSystemCore from '@/hooks/useSystemCore';

export default function SystemChaosTrigger() {
  const { triggerLockdown } = useSystemCore();

  return (
    <div className="p-4 bg-red-900 text-white rounded-xl">
      <h1 className="text-xl font-bold mb-2">🧨 CHAOS TRIGGER MODE</h1>
      <p className="text-sm mb-2">
        ⚠️ Use only in critical threat conditions. This will:
        <br />• Lock all accounts<br />• Burn firewalls<br />• Activate Hive clones<br />• Alert Exotica HQ
      </p>
      <button onClick={triggerLockdown} className="btn bg-red-700 w-full text-white font-bold">
        🚨 INITIATE CHAOS PROTOCOL
      </button>
    </div>
  );
}
