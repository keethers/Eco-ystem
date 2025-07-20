export default function UniversalCommandRelay() {
  const sendCommand = (cmd) => {
    console.log('🛰️ Dispatching:', cmd);
    // Connect this to ExoticaCore
  };

  return (
    <div className="p-4 bg-black text-white rounded-xl">
      <h2 className="text-xl font-bold mb-2">🛠️ Universal Command Relay</h2>
      <input
        className="w-full p-2 text-black rounded mb-2"
        placeholder="Type system command (e.g. DeployDrone Alpha)"
        onKeyDown={(e) => e.key === 'Enter' && sendCommand(e.target.value)}
      />
      <button onClick={() => sendCommand('Shutdown All Clones')} className="bg-red-700 px-4 py-2 rounded">⚠️ Emergency Shutdown</button>
    </div>
  );
}
