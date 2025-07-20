// pages/HivePurgeProtocol.jsx
import { useState } from 'react';

export default function HivePurgeProtocol() {
  const [status, setStatus] = useState('Idle');
  const [logs, setLogs] = useState([]);

  const activatePurge = () => {
    setStatus('⚠️ Purge Sequence Initiated');
    const timestamp = new Date().toLocaleTimeString();
    setLogs([{ time: timestamp, action: 'Hive Purge Started' }, ...logs]);

    setTimeout(() => {
      setStatus('✅ Hive Purge Completed');
      const completeTime = new Date().toLocaleTimeString();
      setLogs(prev => [{ time: completeTime, action: 'Hive Cleared' }, ...prev]);
    }, 3000);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Hive Purge Protocol</h1>
      <p>Status: <strong>{status}</strong></p>
      <button onClick={activatePurge}>Activate Purge</button>

      <h2>Purge Logs</h2>
      <ul>
        {logs.map((log, index) => (
          <li key={index}>
            [{log.time}] {log.action}
          </li>
        ))}
      </ul>
    </div>
  );
}
