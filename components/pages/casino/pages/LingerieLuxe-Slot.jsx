import React from 'react';
import SlotMachine from '@/components/slots/SlotMachine';

export default function LingerieLuxeSlot() {
  return (
    <div className="p-4 text-center bg-pink-100 dark:bg-pink-900 rounded-2xl">
      <h1 className="text-2xl font-bold text-pink-700 dark:text-pink-300">Lingerie Luxe</h1>
      <p className="text-sm text-pink-600 dark:text-pink-200">Fashion spins for luxury rewards.</p>
      <SlotMachine theme="lingerieLuxe" odds={0.25} />
    </div>
  );
}
