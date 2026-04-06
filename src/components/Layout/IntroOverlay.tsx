'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

const IntroOverlay = () => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setIsDone(true);
      }
    });

    // ─────────────────────────────────────────────────────────────
    // PHASE 0: Initial State (Centered & Large)
    // ─────────────────────────────────────────────────────────────
    tl.to(logoRef.current, {
      duration: 2.2,
      opacity: 1,
      scale: 1.8,
      ease: 'power2.out',
    });

    // ─────────────────────────────────────────────────────────────
    // PHASE 1: Move to Navbar position (Dynamic coordinate calc)
    // ─────────────────────────────────────────────────────────────
    tl.to(logoRef.current, {
      duration: 1.4,
      scale: 1,
      x: () => {
        const target = document.getElementById('navbar-brand-logo');
        if (!target) return 0;
        const rect = target.getBoundingClientRect();
        const center = window.innerWidth / 2;
        return rect.left + rect.width / 2 - center;
      },
      y: () => {
        const target = document.getElementById('navbar-brand-logo');
        if (!target) return 0;
        const rect = target.getBoundingClientRect();
        const center = window.innerHeight / 2;
        return rect.top + rect.height / 2 - center;
      },
      ease: 'power4.inOut',
    });

    // CRITICAL: Reveal the actual navbar brand FIRST, while the overlay is still covering it.
    // This removes the "blip" because the handoff happens behind the clone.
    tl.set('#navbar-brand-logo', { opacity: 1 });

    // Fade out the black overlay
    tl.to(overlayRef.current, {
      duration: 1.0,
      opacity: 0,
      pointerEvents: 'none',
      ease: 'power2.inOut',
    }, '-=0.2');

    // ONLY hide the clone once the overlay is nearly gone
    tl.set(logoRef.current, { opacity: 0 }, '-=0.4');

    // ─────────────────────────────────────────────────────────────
    // PHASE 2: Navbar Reveal (Fluid Expo sweep)
    // ─────────────────────────────────────────────────────────────
    tl.to('#nav-links-container > a', {
      duration: 1.4,
      opacity: 1,
      y: 0,
      stagger: 0.12,
      ease: 'expo.out', // Use expo for a single, confident sweep
    }, '-=0.6');

    tl.to('#nav-cta-container', {
      duration: 0.8,
      opacity: 1,
      scale: 1.2,
      ease: 'back.out(1.7)',
    }, '-=0.8');

    tl.to('#nav-cta-container', {
      duration: 0.4,
      scale: 1,
      ease: 'power2.inOut',
    });

    // ─────────────────────────────────────────────────────────────
    // PHASE 3: Background Reveal (Cubes)
    // ─────────────────────────────────────────────────────────────
    tl.to('#cubes-bg-container', {
      duration: 1.8,
      opacity: 0.85,
      ease: 'power2.inOut',
    }, '-=1.4');

    // ─────────────────────────────────────────────────────────────
    // PHASE 4: Hero Content Reveal (Cinematic "Portal" Coin)
    // ─────────────────────────────────────────────────────────────
    tl.fromTo('#hero-coin-logo', 
      { opacity: 0, scale: 7, y: 1000 },
      { opacity: 1, scale: 1, y: 0, duration: 1.6, ease: 'expo.out' },
      '-=1.2'
    );

    tl.to([
      '#hero-headline',
      '#hero-subheadline',
      '#hero-stats',
      '#hero-form',
      '#hero-bottom-hint'
    ], {
      duration: 1.2, // Slightly slower for more "weight"
      opacity: 1,
      y: 0,
      stagger: 0.18,
      ease: 'expo.out', // Match the fluid expo sweep
    }, '-=1.0');

    return () => {
      tl.kill();
    };
  }, []);

  if (isDone) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
    >
      <div
        ref={logoRef}
        className="flex items-center gap-3 opacity-0"
      >
        <Image 
          src="/alphaX.png" 
          alt="AlphaX" 
          width={28} 
          height={28} 
          className="object-contain"
          priority
        />
        <span 
          className="font-heading font-bold tracking-tight text-white" 
          style={{ fontSize: 22, letterSpacing: '-0.02em' }} 
        >
          AlphaX
        </span>
      </div>
    </div>
  );
};

export default IntroOverlay;
