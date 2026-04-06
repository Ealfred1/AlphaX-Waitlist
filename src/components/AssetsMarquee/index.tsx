'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';

const ASSETS = [
  { symbol: 'BTC', name: 'Bitcoin', icon: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/color/btc.svg' },
  { symbol: 'ETH', name: 'Ethereum', icon: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/color/eth.svg' },
  { symbol: 'USDT', name: 'Tether', icon: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/color/usdt.svg' },
  { symbol: 'SOL', name: 'Solana', icon: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/color/sol.svg' },
  { symbol: 'BNB', name: 'BNB', icon: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/color/bnb.svg' },
  { symbol: 'TRX', name: 'Tron', icon: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/color/trx.svg' },
  { symbol: 'LTC', name: 'Litecoin', icon: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/color/ltc.svg' },
  // { symbol: 'TON', name: 'Toncoin', icon: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/color/ton.svg' },
  // { symbol: 'NEAR', name: 'Near', icon: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/color/near.svg' },
  { symbol: 'AVAX', name: 'Avalanche', icon: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/color/avax.svg' },
  { symbol: 'ADA', name: 'Cardano', icon: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/color/ada.svg' },
  { symbol: 'NGN', name: 'Naira', icon: 'https://flagcdn.com/w80/ng.png' },
];

const AssetsMarquee = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const element = scrollRef.current;
    const totalWidth = element.scrollWidth / 2;

    gsap.to(element, {
      x: -totalWidth,
      duration: 35,
      ease: 'none',
      repeat: -1,
    });
  }, []);

  return (
    <div className="relative py-8 overflow-hidden bg-transparent">
      <div
        ref={scrollRef}
        className="flex whitespace-nowrap gap-28 items-center"
      >
        {[...ASSETS, ...ASSETS].map((asset, i) => (
          <div
            key={`${asset.symbol}-${i}`}
            className="flex items-center gap-6 group cursor-default"
          >
            <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-110">
              <img
                src={asset.icon}
                alt={asset.symbol}
                className={`w-full h-full object-contain ${asset.symbol === 'NEAR' ? 'invert opacity-90' : ''}`}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${asset.symbol}&background=333&color=fff&bold=true`;
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-black text-xl tracking-tighter leading-none">{asset.symbol}</span>
              <span className="text-white/20 text-[9px] font-black uppercase tracking-[0.2em] mt-1.5 leading-none">{asset.name}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Cinematic Fades */}
      <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-black via-black/40 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-black via-black/40 to-transparent z-10" />
    </div>
  );
};

export default AssetsMarquee;
