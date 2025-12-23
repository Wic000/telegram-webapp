import React from 'react';
import { Language } from '../types';

interface HeaderProps { lang: Language; setLang: (l: Language) => void; exchangeRate: number; }

const Header: React.FC<HeaderProps> = ({ lang, setLang, exchangeRate }) => {
  const tg = (window as any).Telegram?.WebApp;
  const user = tg?.initDataUnsafe?.user;

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] px-4 pt-4 pb-2 max-w-lg mx-auto">
      <div className="ultra-glass rounded-[2.5rem] px-6 py-6 flex flex-col gap-4 border-white/90">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className="flex items-baseline select-none cursor-default">
              <span className="text-3xl font-[1000] tracking-tighter bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] bg-clip-text text-transparent">PC</span>
              <span className="text-3xl font-[1000] tracking-tighter text-[#001d4a] ml-1.5">App</span>
            </div>
            <div className="ml-4 h-8 w-[1.5px] bg-slate-900/10"></div>
            <div className="flex flex-col ml-2 leading-none">
                <span className="text-[10px] font-black text-slate-900 uppercase tracking-tighter">Premium</span>
                <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Store</span>
            </div>
          </div>
          <div className="bg-white/80 px-4 py-2.5 rounded-2xl border border-white shadow-sm">
            <span className="text-[11px] font-black text-slate-800 tracking-tighter">$1 = {exchangeRate.toLocaleString()}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between border-t border-slate-900/5 pt-5">
          <div className="flex gap-2">
            {(['uz', 'ru', 'en'] as Language[]).map(l => (
              <button 
                key={l} 
                onClick={() => setLang(l)} 
                className={`w-11 h-11 flex items-center justify-center rounded-2xl text-[10px] font-black uppercase transition-all shadow-sm ${lang === l ? 'bg-slate-900 text-white ring-4 ring-slate-900/10' : 'bg-white/50 text-slate-500 border border-white'}`}
              >
                {l}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3 bg-white/50 pl-4 pr-2 py-2 rounded-2xl border border-white/80 shadow-sm">
            <span className="text-[12px] font-black text-slate-900">{user?.first_name || 'Mehmon'}</span>
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-[12px] text-white font-black shadow-md">
              {user?.first_name?.[0] || 'M'}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;