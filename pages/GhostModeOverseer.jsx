import React, { useState } from 'react';
import useGhostOps from '@/hooks/useGhostOps';

export default function GhostModeOverseer() {
  const { toggleGhostMode } = useGhostOps();
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    toggleGhostMode(!active);
    setActive(!active);
  };

  return (
    <div className="p-4 bg-gray-900 text-white rounded-xl">
      <h1 className="text-xl font-bold mb-2">👻 Ghost Mode Overseer</h1>
      <p>Status: {active ? '🕵️ Active' : '🟢 Visible'}</p>
      <button className="btn mt-2 bg-gray-700" onClick={handleToggle}>
        {active ? '🔓 Disable Ghost Mode' : '🕶️ Enable Ghost Mode'}
      </button>
    </div>
  );
}
