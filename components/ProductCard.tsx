import React from 'react';
import { Product, Language } from '../types';

interface Props { product: Product; lang: Language; onAddToCart: (p: Product) => void; count: number; }

const ProductCard: React.FC<Props> = ({ product, lang, onAddToCart, count }) => {
  return (
    <div className="ultra-glass rounded-[2.5rem] p-4 flex flex-col border-white/90 animate-card tap-scale bg-white/20">
      <div className="relative aspect-square rounded-[2rem] overflow-hidden mb-4 bg-white/60 border border-white/80 shadow-inner flex items-center justify-center">
        <img src={product.image} className="w-[85%] h-[85%] object-contain transition-transform duration-500 hover:scale-110" loading="lazy" />
        {count > 0 && (
          <div className="absolute top-3 right-3 bg-blue-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-black shadow-lg ring-4 ring-blue-600/20">
            {count}
          </div>
        )}
      </div>
      <h3 className="text-[13px] font-[900] text-slate-900 leading-tight mb-2 px-1 line-clamp-2 min-h-[2.5rem]">{product.name[lang]}</h3>
      <div className="mt-auto flex items-center justify-between px-1">
        <span className="text-[15px] font-[1000] text-slate-900">${product.price.toLocaleString()}</span>
        <button 
          onClick={() => onAddToCart(product)} 
          className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center text-blue-600 shadow-xl border border-white hover:bg-blue-600 hover:text-white transition-all active:scale-90"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
        </button>
      </div>
    </div>
  );
};
export default ProductCard;