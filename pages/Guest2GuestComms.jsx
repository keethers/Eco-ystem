import React, { useState, useEffect } from 'react';
import useGuestChat from '@/hooks/useGuestChat';

export default function Guest2GuestComms() {
  const { getMessages, sendMessage } = useGuestChat();
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  useEffect(() => {
    getMessages().then(setChat);
  }, []);

  return (
    <div className="p-4 bg-indigo-900 text-white rounded-xl">
      <h1 className="text-xl font-bold mb-2">💬 Guest Chat Zone</h1>
      <div className="max-h-48 overflow-y-scroll bg-slate-800 p-2 rounded mb-2">
        {chat.map((msg, i) => (
          <p key={i} className="text-xs">🗣️ {msg.user}: {msg.text}</p>
        ))}
      </div>
      <input
        type="text"
        className="input w-full mb-2"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Say something..."
      />
      <button className="btn w-full bg-blue-700" onClick={() => {
        sendMessage(message);
        setMessage('');
      }}>
        📤 Send
      </button>
    </div>
  );
}
