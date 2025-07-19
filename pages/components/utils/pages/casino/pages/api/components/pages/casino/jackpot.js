import ExoNavBar from "../../components/ExoNavBar";
import JackpotEngine from "../../components/JackpotEngine";

export default function JackpotPage() {
  return (
    <div style={{ padding: "20px" }}>
      <ExoNavBar />
      <h1>💰 5150 Jackpot Draw</h1>
      <p>Each draw simulates a live prize pool. Can you win without alerting the clones?</p>
      <JackpotEngine />
    </div>
  );
}
