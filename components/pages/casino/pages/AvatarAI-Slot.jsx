import React from 'react';
import SlotMachine from '@/components/slots/SlotMachine';

export default function AvatarAISlot() {
  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold mb-2">Avatar AI Slot</h1>
      <p className="mb-4 text-gray-400">Spin with advanced Avatar AI control.</p>
      <SlotMachine theme="avatarAI" odds={0.3} />
    </div>
  );
}
