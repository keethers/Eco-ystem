// pages/ExoticaSatelliteUplink.jsx
import { useState } from 'react';

export default function ExoticaSatelliteUplink() {
  const [status, setStatus] = useState('Disconnected');
  const [coordinates, setCoordinates] = useState('');

  const connectSatellite = () => {
    setStatus('Uplink Initialized');
    setTimeout(() => setStatus('📡 Satellite Feed Active'), 1500);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Satellite Uplink Control</h1>
      <p>Status: <strong>{status}</strong></p>
      <input
        placeholder="Enter target coordinates"
        value={coordinates}
        onChange={(e) => setCoordinates(e.target.value)}
        style={{ marginTop: 10, marginBottom: 10, width: '100%' }}
      />
      <button onClick={connectSatellite}>Connect Uplink</button>
      {coordinates && <p>📍 Targeting: {coordinates}</p>}
    </div>
  );
}
