import React from 'react';
import BlackjackTable from '@/components/games/BlackjackTable';

export default function Blackjack5150() {
  return (
    <div className="p-4 bg-green-900 text-white rounded-xl">
      <h1 className="text-3xl font-bold mb-2 text-center">Blackjack 5150</h1>
      <p className="text-center mb-4 text-gray-300">Beat the clone dealer. 21 or bust.</p>
      <BlackjackTable maxBet={100} cloneMode={true} />
    </div>
  );
}
