import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import BuildPC from './components/BuildPC';
import { Product, CartItem, Language, MainCategory } from './types';
import { PRODUCTS, TRANSLATIONS } from './constants';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('uz');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [mainCat, setMainCat] = useState<MainCategory>(MainCategory.LAPTOPS);
  const [view, setView] = useState<'store' | 'checkout'>('store');
  const [exchangeRate] = useState(12950);
  
  const t = TRANSLATIONS[lang];
  const tg = (window as any).Telegram?.WebApp;

  useEffect(() => { 
    if (tg) { 
      tg.ready(); 
      tg.expand();
      tg.headerColor = '#f0fdfa';
      tg.backgroundColor = '#f8fafc';
    } 
  }, [tg]);

  const totalUSD = useMemo(() => cart.reduce((acc, item) => acc + item.price * item.quantity, 0), [cart]);

  useEffect(() => {
    if (!tg) return;
    if (cart.length > 0) {
      tg.MainButton.setText(view === 'store' ? `${t.confirm} ($${totalUSD})` : t.order);
      tg.MainButton.show();
      const click = () => {
        if (view === 'store') setView('checkout');
        else {
          tg.sendData(JSON.stringify({ cart, total: totalUSD }));
          tg.close();
        }
      };
      tg.MainButton.onClick(click);
      return () => tg.MainButton.offClick(click);
    } else tg.MainButton.hide();
  }, [cart, view, totalUSD, t, tg]);

  const addToCart = (p: Product) => setCart(prev => {
    const ex = prev.find(i => i.id === p.id);
    return ex ? prev.map(i => i.id === p.id ? { ...i, quantity: i.quantity + 1 } : i) : [...prev, { ...p, quantity: 1 }];
  });

  return (
    <div className="pb-32 pt-44 px-5 max-w-lg mx-auto min-h-screen">
      <Header lang={lang} setLang={setLang} exchangeRate={exchangeRate} />
      
      {view === 'store' ? (
        <>
          <div className="flex gap-2 mb-6 overflow-x-auto no-scrollbar py-2">
            {Object.values(MainCategory).map(cat => (
              <button 
                key={cat} 
                onClick={() => setMainCat(cat)} 
                className={`px-6 py-3 rounded-2xl text-[11px] font-black uppercase transition-all whitespace-nowrap ${mainCat === cat ? 'bg-slate-900 text-white shadow-xl' : 'ultra-glass text-slate-500'}`}
              >
                {t[cat]}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {PRODUCTS.filter(p => p.mainCategory === mainCat).map(p => (
              <ProductCard 
                key={p.id} 
                product={p} 
                lang={lang} 
                onAddToCart={addToCart} 
                count={cart.find(i => i.id === p.id)?.quantity || 0} 
              />
            ))}
          </div>

          <BuildPC 
            lang={lang} 
            onConfirm={(p) => { 
              addToCart({ 
                id: 'custom-' + Date.now(), 
                name: { uz: 'Yig\'ilgan PK', ru: 'Сборка ПК', en: 'Custom Build' }, 
                price: p, 
                mainCategory: MainCategory.PC, 
                subCategory: 'all', 
                description: { uz: 'Premium konfiguratsiya', ru: 'Премиум конфиг', en: 'Premium Config' }, 
                image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&q=80' 
              }); 
              setView('checkout'); 
            }} 
          />
        </>
      ) : (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
           <button onClick={() => setView('store')} className="mb-6 flex items-center gap-2 text-blue-600 font-black text-xs uppercase tracking-widest bg-white/50 px-4 py-2 rounded-full border border-white/50 w-fit">
             <span className="text-lg">←</span> {t.all}
           </button>
           
           <h2 className="text-3xl font-[900] mb-6 tracking-tighter text-slate-900">{t.cart}</h2>
           
           <div className="space-y-3 mb-8">
             {cart.length === 0 ? (
               <div className="text-center py-10 opacity-50 font-medium">Savatcha bo'sh</div>
             ) : cart.map(i => (
               <div key={i.id} className="ultra-glass p-4 rounded-[2rem] flex items-center justify-between border-white/80">
                 <div className="flex items-center gap-4">
                   <div className="w-14 h-14 bg-white/60 rounded-2xl flex items-center justify-center p-1 border border-white">
                     <img src={i.image} className="w-full h-full object-contain" />
                   </div>
                   <div>
                     <p className="text-[13px] font-[900] text-slate-900 leading-tight">{i.name[lang]}</p>
                     <p className="text-[11px] font-bold text-slate-500 mt-1">{i.quantity} x ${i.price}</p>
                   </div>
                 </div>
                 <span className="font-black text-slate-900 text-lg">${i.price * i.quantity}</span>
               </div>
             ))}
           </div>
           
           <div className="p-8 ultra-glass rounded-[2.5rem] border-blue-100 bg-blue-50/20">
             <div className="flex justify-between items-center">
               <span className="font-bold text-slate-500 uppercase text-[10px] tracking-[0.2em]">{t.total}</span>
               <span className="font-black text-3xl text-blue-600 tracking-tighter">${totalUSD}</span>
             </div>
           </div>
        </div>
      )}
    </div>
  );
};
export default App;