import { useState } from "react";

export default function JackpotEngine() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const draw = () => {
    setLoading(true);
    fetch("/api/jackpot")
      .then(res => res.json())
      .then(data => {
        setResult(data);
        setLoading(false);
      });
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <button onClick={draw} disabled={loading} style={{ padding: "10px", fontSize: "16px" }}>
        {loading ? "Drawing..." : "🎯 Draw Jackpot"}
      </button>
      {result && (
        <div style={{ marginTop: "20px" }}>
          <p><strong>Entries:</strong> {result.entries}</p>
          <p><strong>Prize Pool:</strong> ${result.pool}</p>
          <p><strong>Status:</strong> {result.status}</p>
          <p><strong>Payout:</strong> ${result.jackpot}</p>
        </div>
      )}
    </div>
  );
}
