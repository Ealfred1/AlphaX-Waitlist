'use client';

import { useEffect, useRef } from 'react';
import Image from "next/image";
import dynamic from "next/dynamic";
import ClickSpark from "@/components/ClickSpark";
import MagnetLines from "@/components/MagnetLines";
import WaitlistForm from "@/components/WaitlistForm";
import gsap from 'gsap';

// Three.js and Canvas elements must be client-only (no SSR)
const MagicRings = dynamic(() => import('@/components/MagicRings'), { ssr: false });

const STATS = [
  { label: 'Chains', value: '12+' },
  { label: 'Liquidity', value: '$2.4B' },
  { label: 'Spots', value: '10K' },
];

const Hero = () => {
  const coinRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const bottomHintRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // 1. Set initial hidden states (Phase 4: Stagger reveal)
    gsap.set([
      coinRef.current,
      headlineRef.current,
      subheadlineRef.current,
      statsRef.current,
      formRef.current,
      bottomHintRef.current
    ], { opacity: 0, y: 150 }); // Dramatic slide from 150px
  }, []);

  return (
    <ClickSpark sparkColor="#9b1fe8" sparkSize={14} sparkRadius={22} sparkCount={10} duration={550}>
      <div className="relative min-h-screen w-full flex flex-col" style={{ background: 'transparent' }}>

        {/* ── MagicRings Background ── */}
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 1, pointerEvents: 'none' }}>
          <MagicRings
            color="#9b1fe8"
            colorTwo="#c084fc"
            ringCount={7}
            speed={0.5} // Ultra-ambient slow-down
            attenuation={7}
            lineThickness={2.5}
            baseRadius={0.22}
            radiusStep={0.09}
            opacity={0.85}
            noiseAmount={0.06}
            followMouse
            mouseInfluence={0.18}
            hoverScale={1.2}
            parallax={0.04}
            clickBurst
          />
        </div>

        {/* ── MagnetLines Background ── */}
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 2, pointerEvents: 'none', opacity: 0.12 }}>
          <MagnetLines
            rows={14}
            columns={22}
            containerSize="100%"
            lineColor="rgba(155, 31, 232, 0.8)"
            lineWidth="1px"
            lineHeight="18px"
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        {/* ── Main Hero Content ── */}
        <div className="relative flex flex-col items-center justify-center px-6 pb-20 pt-10" style={{ zIndex: 10, minHeight: '100vh' }}>
          <div className="flex flex-col items-center text-center gap-8" style={{ maxWidth: 1000 }}>

            {/* Coin logo (Phase 4 GSAP Target: "Portal" Entrance) */}
            <div
              id="hero-coin-logo"
              ref={coinRef}
              className="relative w-32 h-32"
            >
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(155,31,232,0.6) 0%, transparent 75%)',
                  filter: 'blur(30px)',
                }}
              />
              <Image
                src="/coin.png"
                alt="AlphaX Coin"
                fill
                sizes="128px"
                className="object-contain drop-shadow-[0_0_48px_rgba(155,31,232,0.85)]"
                priority
              />
            </div>

            {/* Headline (Upscaled to be wider and bigger) */}
            <h1
              id="hero-headline"
              ref={headlineRef}
              className="font-heading text-gradient-white"
              style={{
                fontSize: 'clamp(4.5rem, 11vw, 7.5rem)', // Dramatic upgrade in size
                letterSpacing: '-0.05em',
                lineHeight: 1.05,
                maxWidth: '15ch', // Wider text flow
                paddingBottom: '0.1em',
              }}
            >
              Trade on the edge of{' '}
              <span className="text-gradient-brand">Crypto Markets.</span>
            </h1>

            {/* Subheadline (Higher contrast, more presence) */}
            <p
              id="hero-subheadline"
              ref={subheadlineRef}
              style={{
                color: 'rgba(255,255,255,0.92)',
                fontSize: 18,
                fontWeight: 500,
                lineHeight: 1.6,
                maxWidth: '42ch',
              }}
            >
              Seamless P2P transfers, advanced trading tools, and secure asset management—all in one powerful platform.
            </p>

            {/* Stats (More robust spacing) */}
            {/* <div
              id="hero-stats"
              ref={statsRef}
              className="flex items-center gap-14 py-4"
            >
              {STATS.map(({ label, value }) => (
                <div key={label} className="flex flex-col items-center">
                  <div className="font-jakarta font-extrabold text-3xl text-white">{value}</div>
                  <div className="text-[12px] font-bold text-brand-light uppercase tracking-[0.2em] mt-1.5">{label}</div>
                </div>
              ))}
            </div> */}

            {/* Waitlist Form */}
            <div
              id="hero-form"
              ref={formRef}
              className="w-full mt-6 scroll-mt-20"
            >
              <WaitlistForm />
            </div>

            {/* Bottom Hint */}
            <p
              id="hero-bottom-hint"
              ref={bottomHintRef}
              className="text-[12px] font-medium text-white/30 mt-6"
            >
              Built for the decentralized future. Join 8,200+ on the waitlist.
            </p>

          </div>
        </div>

      </div>
    </ClickSpark>
  );
};

export default Hero;
