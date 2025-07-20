import React, { useState } from 'react';
import Link from 'next/link';

export default function MainDashboard() {
  const [active, setActive] = useState('Dashboard');

  const topLinks = [
    { name: '🎰 Casino', path: '/casino/pages/CasinoMain' },
    { name: '🎟 Lucky Draw', path: '/casino/pages/LuckyDraw5150' },
    { name: '🧠 Exotica AI', path: '/ai/ExoticaCore' }
  ];

  const bottomLinks = [
    { name: '👑 Owner Panel', path: '/admin/OwnerDashboard5150' },
    { name: '🛡 Security', path: '/security/SecurityWallConfig' },
    { name: '🛰 Satellite', path: '/surveillance/SatelliteTrackerLink' }
  ];

  const socialLinks = [
    { icon: '📺', name: 'YouTube', url: 'https://youtube.com' },
    { icon: '📸', name: 'Instagram', url: 'https://instagram.com' },
    { icon: '🎵', name: 'TikTok', url: 'https://tiktok.com' },
    { icon: '💬', name: 'WhatsApp', url: 'https://whatsapp.com' },
    { icon: '✈️', name: 'Telegram', url: 'https://telegram.org' },
    { icon: '🔷', name: 'Facebook', url: 'https://facebook.com' },
    { icon: '👾', name: 'Discord', url: 'https://discord.com' },
    { icon: '🎧', name: 'Spotify', url: 'https://spotify.com' }
  ];

  return (
    <div style={{ padding: 20 }}>
      <h1>Welcome to the Main Dashboard</h1>
      <p>Currently viewing: <strong>{active}</strong></p>
      <button onClick={() => setActive('Analytics')}>Switch to Analytics</button>

      <h2>Top Links</h2>
      <ul>
        {topLinks.map((link, i) => (
          <li key={i}>
            <Link href={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>

      <h2>Bottom Links</h2>
      <ul>
        {bottomLinks.map((link, i) => (
          <li key={i}>
            <Link href={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>

      <h2>Social Media</h2>
      <ul>
        {socialLinks.map((link, i) => (
          <li key={i}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.icon} {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
