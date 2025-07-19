import WalletBalance from "../components/WalletBalance";
import ExoNavBar from "../components/ExoNavBar";

export default function WalletPage() {
  return (
    <div style={{ padding: "20px" }}>
      <ExoNavBar />
      <h1>💼 Wallet Dashboard</h1>
      <WalletBalance />
    </div>
  );
}
