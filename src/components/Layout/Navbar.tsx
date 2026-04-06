'use client';

import { useEffect, useRef } from 'react';
import Link from "next/link";
import Image from "next/image";
import StarBorder from "@/components/StarBorder";
import gsap from 'gsap';

const Navbar = () => {
  const brandRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial hidden state for GSAP intro to handle
    gsap.set(brandRef.current, { opacity: 0 });
    gsap.set(linksRef.current?.children || [], { opacity: 0, y: 100 }); // Increased y for more dramatic reveal
    gsap.set(ctaRef.current, { opacity: 0, scale: 0 });
  }, []);

  const scrollToForm = () => {
    const formElement = document.getElementById('waitlist-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
      const joinButton = formElement.querySelector('button');
      if (joinButton) joinButton.click();
    }
  };

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 flex items-center justify-between px-16 py-6 h-[80px]">
      {/* Brand: Targeted by GSAP IntroOverlay */}
      <div
        id="navbar-brand-logo"
        ref={brandRef}
        className="flex items-center gap-3 font-heading font-bold tracking-tight text-white"
        style={{ fontSize: 22, letterSpacing: '-0.02em' }}
      >
        <Image
          src="/alphaX.png"
          alt="AlphaX logo"
          width={28}
          height={28}
          className="rounded-md"
        />
        AlphaX
      </div>

      {/* Primary Links: Staggered entry from Hero timing */}
      <div
        id="nav-links-container"
        ref={linksRef}
        className="hidden lg:flex items-center gap-10"
      >
        {['Protocol', 'Network', 'Governance', 'Ecosystem'].map((link, i) => (
          <Link
            key={link}
            id={`nav-link-${i}`}
            href="#"
            className="text-[14px] font-semibold text-white/50 hover:text-white transition-all duration-200"
          >
            {link}
          </Link>
        ))}
      </div>

      {/* CTA: Magnify pop entry */}
      <div
        id="nav-cta-container"
        ref={ctaRef}
        className="flex items-center"
      >
        <StarBorder
          as="button"
          onClick={scrollToForm}
          color="#9b1fe8"
          speed="5s"
          className="!w-auto"
        >
          <span className="flex items-center px-5 py-2 font-bold text-xs text-white hover:text-brand-light transition-all duration-300">
            Join Waitlist
          </span>
        </StarBorder>
      </div>
    </nav>
  );
};

export default Navbar;
