import React from 'react';
import LuckyDraw from '@/components/lottery/LuckyDraw';

export default function LuckyDraw5150() {
  return (
    <div className="p-4 bg-purple-800 text-white rounded-2xl text-center">
      <h1 className="text-2xl font-bold">Lucky Draw 5150</h1>
      <p className="text-sm text-purple-300 mb-2">One draw. One jackpot. One Tesla?</p>
      <LuckyDraw prize="Tesla Model Y" ticketPrice={1} maxPayoutCap={10000} />
    </div>
  );
}
