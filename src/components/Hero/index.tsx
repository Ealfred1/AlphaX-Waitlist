'use client';

import Image from "next/image";
import dynamic from "next/dynamic";
import ClickSpark from "@/components/ClickSpark";
import MagnetLines from "@/components/MagnetLines";
import WaitlistForm from "@/components/WaitlistForm";

// Three.js must be client-only (no SSR)
const MagicRings = dynamic(() => import('@/components/MagicRings'), { ssr: false });

const STATS = [
  { label: 'Chains', value: '12+' },
  { label: 'Liquidity', value: '$2.4B' },
  { label: 'Spots', value: '10K' },
];

const Hero = () => {
  return (
    <ClickSpark sparkColor="#9b1fe8" sparkSize={14} sparkRadius={22} sparkCount={10} duration={550}>
      {/*
        Transparent wrapper — Cubes from layout shines through.
        overflow: visible ensures nothing clips the fixed MagicRings canvas.
      */}
      <div className="relative min-h-screen w-full flex flex-col" style={{ background: 'transparent' }}>

        {/* ── MagicRings: fixed, truly full viewport, never clipped ── */}
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 1,
            pointerEvents: 'none',
          }}
        >
          <MagicRings
            color="#9b1fe8"
            colorTwo="#c084fc"
            ringCount={7}
            speed={0.75}
            attenuation={7}
            lineThickness={2.5}
            baseRadius={0.22}
            radiusStep={0.09}
            opacity={0.95}
            noiseAmount={0.06}
            followMouse
            mouseInfluence={0.18}
            hoverScale={1.2}
            parallax={0.04}
            clickBurst
          />
        </div>

        {/* ── MagnetLines: fixed, full viewport ── */}
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 2,
            pointerEvents: 'none',
            opacity: 0.12,
          }}
        >
          <MagnetLines
            rows={14}
            columns={22}
            containerSize="100%"
            lineColor="rgba(155, 31, 232, 0.8)"
            lineWidth="1px"
            lineHeight="18px"
            baseAngle={0}
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        {/* ── Content — truly centered in the viewport ── */}
        <div
          className="relative flex flex-col items-center justify-center px-6 pb-8"
          style={{
            zIndex: 10,
            minHeight: '100vh',
          }}
        >
          <div className="flex flex-col items-center text-center gap-5" style={{ maxWidth: 520 }}>

            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand/30 bg-brand-muted text-brand-light text-[11px] font-semibold uppercase tracking-widest opacity-0 animate-fade-up"
              style={{ animationDelay: '50ms', animationFillMode: 'forwards' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-light" />
              Early Access — Limited Spots
            </div>

            {/* Coin logo */}
            <div
              className="relative w-24 h-24 opacity-0"
              style={{
                animation: 'fadeUp 0.8s cubic-bezier(0.4,0,0.2,1) 100ms forwards, float 6s ease-in-out 1s infinite',
              }}
            >
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(155,31,232,0.5) 0%, transparent 70%)',
                  filter: 'blur(20px)',
                }}
              />
              <Image
                src="/coin.png"
                alt="AlphaX"
                fill
                sizes="96px"
                className="object-contain drop-shadow-[0_0_24px_rgba(155,31,232,0.7)]"
                priority
              />
            </div>

            {/* Headline — max 2 lines */}
            <h1
              className="font-heading text-gradient-white opacity-0 animate-fade-up"
              style={{
                fontSize: 'clamp(2.8rem, 7vw, 4.4rem)',
                letterSpacing: '-0.04em',
                lineHeight: 1.04,
                animationDelay: '150ms',
                animationFillMode: 'forwards',
                maxWidth: '13ch',
              }}
            >
              Trade on the edge of{' '}
              <span className="text-gradient-brand">DeFi.</span>
            </h1>

            {/* Subheadline — max 2 lines, readable */}
            <p
              className="opacity-0 animate-fade-up"
              style={{
                animationDelay: '225ms',
                animationFillMode: 'forwards',
                color: 'rgba(255,255,255,0.72)',
                fontSize: 15,
                lineHeight: 1.65,
                maxWidth: '38ch',
              }}
            >
              Institutional-grade liquidity, sub-second finality,
              and trustless custody — on-chain.
            </p>

            {/* Stats */}
            <div
              className="flex items-center gap-6 py-1 opacity-0 animate-fade-up"
              style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}
            >
              {STATS.map(({ label, value }, i) => (
                <div key={label} className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="font-jakarta font-bold text-xl text-white">{value}</div>
                    <div className="text-[10px] text-white/35 uppercase tracking-widest mt-0.5">{label}</div>
                  </div>
                  {i < STATS.length - 1 && <div className="w-px h-7 bg-white/10" />}
                </div>
              ))}
            </div>

            {/* Inline form — no ElectricBorder wrapping */}
            <div
              className="w-full opacity-0 animate-fade-up"
              style={{ animationDelay: '375ms', animationFillMode: 'forwards' }}
            >
              <WaitlistForm />
            </div>

            {/* Bottom hint */}
            <p
              className="text-[11px] text-white/25 opacity-0 animate-fade-up"
              style={{ animationDelay: '450ms', animationFillMode: 'forwards' }}
            >
              Join 8,200+ on the waitlist. Built for the decentralized future.
            </p>

          </div>
        </div>

      </div>
    </ClickSpark>
  );
};

export default Hero;
