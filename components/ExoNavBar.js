import React from "react";
import Link from "next/link";

export default function ExoNavBar() {
  return (
    <nav style={{ padding: "10px", background: "#000", color: "#0f0" }}>
      <h2>🎮 EX$ Casino</h2>
      <ul style={{ listStyle: "none", display: "flex", gap: "15px" }}>
        <li><Link href="/">🏠 Home</Link></li>
        <li><Link href="/casino/slots">🎰 Slots</Link></li>
        <li><Link href="/casino/jackpot">💰 Jackpot</Link></li>
      </ul>
    </nav>
  );
}
