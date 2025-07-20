import React, { useEffect, useState } from 'react';
import useBeacon from '@/hooks/useBeacon';

export default function BehaviorBeacon() {
  const { getRecentPings } = useBeacon();
  const [pings, setPings] = useState([]);

  useEffect(() => {
    getRecentPings().then(setPings);
  }, []);

  return (
    <div className="p-4 bg-slate-900 text-white rounded-xl">
      <h1 className="text-xl font-bold mb-2">📍 Behavior Beacon</h1>
      <ul className="text-xs max-h-60 overflow-y-scroll space-y-1">
        {pings.map((ping, i) => (
          <li key={i}>🕒 {ping.time} — {ping.unit} @ {ping.location}</li>
        ))}
      </ul>
    </div>
  );
}
