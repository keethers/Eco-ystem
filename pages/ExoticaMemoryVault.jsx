import React, { useEffect, useState } from 'react';
import useMemory from '@/hooks/useMemory';

export default function ExoticaMemoryVault() {
  const { getVaultLogs } = useMemory();
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    getVaultLogs().then(setLogs);
  }, []);

  return (
    <div className="p-4 bg-gray-950 text-white rounded-xl">
      <h1 className="text-xl font-bold mb-2">🧠 Exotica Memory Vault</h1>
      <ul className="text-xs max-h-60 overflow-y-scroll space-y-1">
        {logs.map((entry, i) => (
          <li key={i}>📅 {entry.timestamp} — {entry.summary}</li>
        ))}
      </ul>
    </div>
  );
}
