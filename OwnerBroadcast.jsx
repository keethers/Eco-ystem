import React, { useState } from 'react';
import useOwnerVoice from '@/hooks/useOwnerVoice';

export default function OwnerBroadcast() {
  const [announcement, setAnnouncement] = useState('');
  const { broadcastToGuests } = useOwnerVoice();

  return (
    <div className="p-4 bg-indigo-900 text-white rounded-xl">
      <h2 className="text-xl font-bold text-center">📣 Owner Broadcast</h2>
      <textarea className="input mt-3" value={announcement} onChange={(e) => setAnnouncement(e.target.value)} placeholder="Global message to all guests…" />
      <button className="btn mt-3" onClick={() => { broadcastToGuests(announcement); setAnnouncement(''); }}>
        Broadcast Now
      </button>
    </div>
  );
}
