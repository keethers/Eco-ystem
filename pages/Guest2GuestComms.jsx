import { useState } from 'react';

export default function Guest2GuestComms() {
  const [input, setInput] = useState('');
  const [thread, setThread] = useState([]);

  const send = () => {
    if (input.trim()) {
      const msg = {
        text: input.trim(),
        sender: 'Guest',
        time: new Date().toLocaleTimeString()
      };
      setThread([msg, ...thread]);
      setInput('');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Guest 2 Guest Comms</h1>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
        rows={3}
        style={{ width: '100%', marginBottom: 10 }}
      />
      <button onClick={send}>Send</button>

      <h2>Conversation Thread</h2>
      <ul>
        {thread.map((msg, i) => (
          <li key={i}>
            <strong>{msg.sender}</strong> [{msg.time}]: {msg.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
