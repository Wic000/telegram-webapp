import React, { useState } from 'react';
import { Language } from '../types';
import { TRANSLATIONS, BUILD_OPTIONS } from '../constants';

interface Props { lang: Language; onConfirm: (total: number, config: any) => void; }

const BuildPC: React.FC<Props> = ({ lang, onConfirm }) => {
  const t = TRANSLATIONS[lang];
  const [config, setConfig] = useState<any>({ 
    cpu: BUILD_OPTIONS.cpu[0], 
    gpu: BUILD_OPTIONS.gpu[0], 
    ram: BUILD_OPTIONS.ram[0], 
    storage: BUILD_OPTIONS.storage[0], 
    psu: BUILD_OPTIONS.psu[0] 
  });

  const total = Object.values(config).reduce<number>((acc, curr: any) => acc + (curr?.price || 0), 0);

  return (
    <div className="mt-12 ultra-glass rounded-[3rem] p-8 border-white mb-10">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
        </div>
        <div>
          <h3 className="text-xl font-[1000] text-slate-900 leading-tight">{t.buildPc}</h3>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">{t.buildDesc}</p>
        </div>
      </div>

      <div className="space-y-6">
        {Object.entries(BUILD_OPTIONS).map(([key, parts]: [string, any]) => (
          <div key={key}>
            <p className="text-[10px] font-[900] uppercase text-slate-400 mb-3 tracking-[0.15em] pl-1">
              {t.parts[key as keyof typeof t.parts]}
            </p>
            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
              {parts.map((p: any) => (
                <button 
                  key={p.id} 
                  onClick={() => setConfig({ ...config, [key]: p })} 
                  className={`px-4 py-3 rounded-2xl whitespace-nowrap text-[11px] font-black transition-all border ${
                    config[key].id === p.id 
                    ? 'bg-slate-900 text-white border-slate-900 shadow-lg scale-[1.02]' 
                    : 'bg-white/40 text-slate-600 border-white/80'
                  }`}
                >
                  {p.name} <span className="opacity-50 ml-1">+${p.price}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 pt-8 border-t border-slate-900/5 flex items-center justify-between">
        <div>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Konstruksiya narxi</p>
          <span className="text-3xl font-[1000] text-slate-900 tracking-tighter">${total}</span>
        </div>
        <button 
          onClick={() => onConfirm(total, config)} 
          className="px-8 py-4 bg-blue-600 text-white rounded-[1.5rem] text-[12px] font-black uppercase tracking-widest shadow-xl shadow-blue-500/20 active:scale-95 transition-all"
        >
          {t.select}
        </button>
      </div>
    </div>
  );
};
export default BuildPC;