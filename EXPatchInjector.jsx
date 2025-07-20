import React, { useState } from 'react';
import useInjector from '@/hooks/useInjector';

export default function EXPatchInjector() {
  const [code, setCode] = useState('');
  const { injectCode, verifyPatch } = useInjector();

  return (
    <div className="p-4 bg-zinc-900 text-white rounded-lg">
      <h1 className="text-xl font-bold text-center mb-3">🧩 EX$ Patch Injector</h1>
      <textarea
        className="input mb-2"
        placeholder="Paste JS/logic patch code here..."
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <div className="flex justify-center gap-2">
        <button className="btn bg-green-700" onClick={() => injectCode(code)}>🚀 Inject Patch</button>
        <button className="btn" onClick={verifyPatch}>✅ Verify</button>
      </div>
    </div>
  );
}
