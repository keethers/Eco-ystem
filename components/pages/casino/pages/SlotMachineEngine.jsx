import React, { useState } from 'react';

export default function SlotMachineEngine({ theme = 'classic', odds = 0.2 }) {
  const [result, setResult] = useState(null);
  const symbols = ['💎', '🔔', '🍒', '7️⃣'];

  const spin = () => {
    const isWin = Math.random() < odds;
    const outcome = isWin
      ? Array(3).fill('7️⃣')
      : Array(3).fill().map(() => symbols[Math.floor(Math.random() * symbols.length)]);
    setResult(outcome);
  };

  return (
    <div className="p-4 bg-black text-white text-center rounded-lg">
      <h2 className="text-lg font-bold mb-2">Slot Machine ({theme})</h2>
      <div className="text-4xl flex justify-center gap-4">{result ? result : ['❓', '❓', '❓']}</div>
      <button className="btn mt-3" onClick={spin}>Spin</button>
    </div>
  );
}
