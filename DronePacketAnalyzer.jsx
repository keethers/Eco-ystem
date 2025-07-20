export default function DronePacketAnalyzer() {
  return (
    <div className="p-4 bg-black text-cyan-300 rounded-xl">
      <h2 className="text-xl font-bold mb-2">📡 Drone Packet Analyzer</h2>
      <p>Decode incoming drone packets (GPS, camera, metadata, commands).</p>
      <div className="bg-slate-900 p-2 mt-2 rounded text-sm font-mono">
        Example Packet: <br />[ID: X-511] → GPS: 37.7749°N / 122.4194°W
      </div>
    </div>
  );
}
