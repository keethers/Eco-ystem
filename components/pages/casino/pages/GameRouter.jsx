import React from 'react';
import { useUser } from '@/hooks/useUser';
import SharkMode from '@/components/modes/SharkMode';
import CasualMode from '@/components/modes/CasualMode';
import CloneSim from '@/components/modes/CloneSim';

export default function GameRouter() {
  const { walletBalance, accessLevel } = useUser();

  if (walletBalance >= 100) {
    return <SharkMode />;
  } else if (accessLevel === 'sim') {
    return <CloneSim />;
  } else {
    return <CasualMode />;
  }
}
