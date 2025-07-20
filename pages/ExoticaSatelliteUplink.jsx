import React, { useEffect, useState } from 'react';
import useUplink from '@/hooks/useUplink';

export default function ExoticaSatelliteUplink() {
  const { getUplinkStatus } = useUplink();
  const [status, setStatus] = useState(null);

  useEffect(() => {
    getUplinkStatus().then(setStatus);
  }, []);

  return (
    <div className="p-4 bg-black text-white rounded-xl">
      <h1 className="text-xl font-bold mb-2">🛰️ Satellite Uplink</h1>
      {status ? (
        <>
          <p>📡 Link: {status.link}</p>
          <p>📶 Signal Strength: {status.signal}%</p>
          <p>🎥 Feed Status: {status.feed}</p>
        </>
      ) : (
        <p>Connecting...</p>
      )}
    </div>
  );
}
