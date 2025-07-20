// pages/VisitorAccessManager.jsx
import { useState } from 'react';

export default function VisitorAccessManager() {
  const [name, setName] = useState('');
  const [visitors, setVisitors] = useState([]);
  const [accessCode, setAccessCode] = useState('');

  const grantAccess = () => {
    if (name.trim()) {
      const entry = {
        name,
        code: accessCode || Math.floor(100000 + Math.random() * 900000).toString(),
        time: new Date().toLocaleTimeString()
      };
      setVisitors([entry, ...visitors]);
      setName('');
      setAccessCode('');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Visitor Access Manager</h1>
      <input
        placeholder="Visitor Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginBottom: 8, width: '100%' }}
      />
      <input
        placeholder="Optional Access Code"
        value={accessCode}
        onChange={(e) => setAccessCode(e.target.value)}
        style={{ marginBottom: 8, width: '100%' }}
      />
      <button onClick={grantAccess}>Grant Access</button>

      <h2>Visitor Log</h2>
      <ul>
        {visitors.map((v, i) => (
          <li key={i}>
            {v.time} — <strong>{v.name}</strong> (Code: {v.code})
          </li>
        ))}
      </ul>
    </div>
  );
}
