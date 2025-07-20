import React from "react";
import Link from "next/link";
import ExoNavBar from "../components/ExoNavBar";

export default function HomePage() {
  return (
    <div style={{ padding: "20px" }}>
      <ExoNavBar />
      <h1>Welcome, friend… want to play the lottery? 🎁</h1>
      <p>You could win this brand new Tesla 🚗</p>
      <div style={{ marginTop: "20px" }}>
        <Link href="/casino/slots">🎰 Play Slots</Link>
      </div>
    </div>
  );
}
