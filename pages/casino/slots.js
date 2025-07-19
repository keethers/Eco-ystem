import SlotMachine from "../../components/SlotMachine";
import ExoNavBar from "../../components/ExoNavBar";

export default function SlotPage() {
  return (
    <div style={{ padding: "20px" }}>
      <ExoNavBar />
      <h1>🎰 EX$ Slot Machine</h1>
      <SlotMachine />
    </div>
  );
}
