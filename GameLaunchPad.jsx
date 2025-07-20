import React from 'react';
import { useRouter } from 'next/router';

export default function GameLaunchPad() {
  const router = useRouter();

  const games = [
    { name: 'Avatar AI', path: '/casino/pages/AvatarAI-Slot' },
    { name: 'Blackjack', path: '/casino/pages/Blackjack5150' },
    { name: 'Raceway', path: '/casino/pages/ExoticaRaceway' },
    { name: 'Jackpot', path: '/casino/pages/Jackpot5150' },
    { name: 'Lucky Draw', path: '/casino/pages/LuckyDraw5150' },
  ];

  return (
    <div className="p-4 bg-blue-950 text-white rounded-xl">
      <h1 className="text-2xl font-bold mb-3 text-center">🎮 Game Launch Pad</h1>
      <div className="grid grid-cols-2 gap-3">
        {games.map((game, i) => (
          <button key={i} className="btn" onClick={() => router.push(game.path)}>
            {game.name}
          </button>
        ))}
      </div>
    </div>
  );
}
