export default function handler(req, res) {
  const entries = Math.floor(Math.random() * 120); // fake user pool
  const pool = entries * 5; // $5 per spin

  const payoutLimit = 500;
  const winner = Math.random() < 0.07; // ~7% chance to win

  let result = {
    entries,
    pool,
    jackpot: winner ? pool : 0,
    status: winner ? "✅ WINNER" : "❌ Try Again",
  };

  if (result.jackpot > payoutLimit) {
    result.status = "🔒 BLOCKED: Exceeds payout limit";
    result.jackpot = 0;
  }

  res.status(200).json(result);
}
