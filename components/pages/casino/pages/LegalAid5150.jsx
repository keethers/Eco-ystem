import React from 'react';
import useLegalAssistant from '@/hooks/useLegalAssistant';

export default function LegalAid5150() {
  const { generateMotion, fileCase, runLegalResearch } = useLegalAssistant();

  return (
    <div className="p-4 bg-slate-900 text-white rounded-lg">
      <h1 className="text-2xl font-bold text-center">Legal Aid 5150</h1>
      <p className="text-center text-gray-400 mb-4">Court-ready AI for motions, filings, research.</p>
      <div className="flex flex-col space-y-2 items-center">
        <button className="btn" onClick={() => generateMotion('Motion to Dismiss')}>Draft Motion</button>
        <button className="btn" onClick={() => fileCase('Small Claims')}>File Case</button>
        <button className="btn" onClick={() => runLegalResearch('wrongful termination')}>Legal Research</button>
      </div>
    </div>
  );
}
