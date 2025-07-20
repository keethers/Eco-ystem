import React from 'react';
import useProAssistant from '@/hooks/useProAssistant';

export default function RealtorDoctor() {
  const { listHome, checkVitals, prescribeTreatment } = useProAssistant();

  return (
    <div className="p-4 bg-blue-900 text-white rounded-lg">
      <h1 className="text-xl font-semibold text-center">🏠 Realtor + 👨‍⚕️ Doctor Assistant</h1>
      <div className="mt-3 space-y-2 text-center">
        <button className="btn" onClick={() => listHome('123 Paradise St.')}>List Property</button>
        <button className="btn" onClick={() => checkVitals()}>Check Vitals</button>
        <button className="btn" onClick={() => prescribeTreatment('fatigue')}>Prescribe</button>
      </div>
    </div>
  );
}
