import React, { useState } from 'react';

export default function SlotMachine() {
  const symbols = ['🍒', '🍋', '🔔', '💎', '7️⃣'];
  const [reels, setReels] = useState(['🍒', '🍒', '🍒']);
  const [message, setMessage] = useState('');

  const spin = () => {
    const newReels = Array(3).fill(null).map(() => {
      return symbols[Math.floor(Math.random() * symbols.length)];
    });
    setReels(newReels);

    if (newReels.every((val) => val === newReels[0])) {
      setMessage('🎉 Jackpot! You win!');
    } else {
      setMessage('Try again!');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h2>🎰 Spin to Win!</h2>
      <div style={{ fontSize: '60px' }}>{reels.join(' ')}</div>
      <button onClick={spin} style={{ padding: '10px 20px', marginTop: '20px' }}>
        Spin
      </button>
      <p>{message}</p>
    </div>
  );
}
