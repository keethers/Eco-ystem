import React, { useState } from 'react';
import useComms from '@/hooks/useComms';

export default function EmergencyCommsUplink() {
  const [msg, setMsg] = useState('');
  const { sendSOS } = useComms();

  return (
    <div className="p-4 bg-red-950 text-white rounded-xl">
      <h1 className="text-xl font-bold mb-2">📞 Emergency Comms Uplink</h1>
      <textarea
        className="w-full bg-black p-2 rounded text-white"
        placeholder="Type emergency message..."
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
      />
      <button onClick={() => sendSOS(msg)} className="btn mt-2 w-full bg-red-700">
        🚨 Send Emergency Signal
      </button>
    </div>
  );
}
