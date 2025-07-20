import React, { useEffect, useState } from 'react';
import useAccess from '@/hooks/useAccess';

export default function VisitorAccessManager() {
  const { getGuests, toggleAccess } = useAccess();
  const [guests, setGuests] = useState([]);

  useEffect(() => {
    getGuests().then(setGuests);
  }, []);

  return (
    <div className="p-4 bg-slate-800 text-white rounded-xl">
      <h1 className="text-xl font-bold mb-2">🔐 Visitor Access Manager</h1>
      <ul className="text-sm space-y-2">
        {guests.map((guest, i) => (
          <li key={i} className="flex justify-between items-center">
            👤 {guest.name}
            <button
              className="btn btn-xs bg-yellow-700"
              onClick={() => toggleAccess(guest.id)}
            >
              {guest.allowed ? 'Revoke' : 'Grant'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
