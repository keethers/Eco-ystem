import React from 'react';
import SlotMachine from '@/components/slots/SlotMachine';

export default function EXClassicSlot() {
  return (
    <div className="p-4 bg-yellow-50 dark:bg-yellow-900 text-center rounded-lg shadow-md">
      <h1 className="text-3xl font-extrabold text-yellow-700 dark:text-yellow-300">EX$ Classic</h1>
      <p className="mb-2 text-yellow-600 dark:text-yellow-100">Where it all began. Bet your Exotics.</p>
      <SlotMachine theme="exClassics" odds={0.2} />
    </div>
  );
}
