import React from 'react';
import RouletteWheel from '@/components/games/RouletteWheel';

export default function Roulette5150() {
  return (
    <div className="p-4 bg-black text-white rounded-2xl">
      <h1 className="text-2xl font-extrabold text-center text-red-500">Roulette 5150</h1>
      <p className="text-center text-sm text-gray-300 mb-3">Red, Black, or E$? Let the wheel decide.</p>
      <RouletteWheel cloneEnabled={true} minBet={1} maxBet={250} />
    </div>
  );
}
