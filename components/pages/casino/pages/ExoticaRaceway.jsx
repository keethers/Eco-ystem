import React from 'react';
import HorseRace from '@/components/racing/HorseRace';

export default function ExoticaRaceway() {
  return (
    <div className="p-4 bg-indigo-900 text-white rounded-xl">
      <h1 className="text-3xl font-black text-center mb-2">Exotica Raceway</h1>
      <p className="text-center text-indigo-300 mb-4">Predict the winner. Ride the odds.</p>
      <HorseRace predictiveAI={true} entryFee={5} prizePoolSplit={true} />
    </div>
  );
}
