import React, { useEffect, useState } from 'react';
import useSpyTranscripts from '@/hooks/useSpyTranscripts';

export default function TranscriptLogger() {
  const [logs, setLogs] = useState([]);
  const { fetchTranscripts } = useSpyTranscripts();

  useEffect(() => {
    fetchTranscripts().then(setLogs);
  }, []);

  return (
    <div className="p-4 bg-neutral-950 text-gray-200 rounded-lg">
      <h1 className="text-xl font-bold mb-3">📄 Spy Transcript Logger</h1>
      <div className="max-h-72 overflow-y-scroll text-sm border border-gray-700 p-2 rounded">
        {logs.map((entry, i) => (
          <div key={i} className="mb-2 border-b border-gray-600 pb-1">
            <strong>{entry.device}:</strong> {entry.text}
          </div>
        ))}
      </div>
    </div>
  );
}
