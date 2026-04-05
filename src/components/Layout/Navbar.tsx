'use client';

import Link from "next/link";
import Image from "next/image";
import StarBorder from "@/components/StarBorder";

const Navbar = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('waitlist-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
      // Trigger the form expansion by finding the button and clicking it
      const joinButton = formElement.querySelector('button');
      if (joinButton) {
        joinButton.click();
      }
    }
  };

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 flex items-center justify-between px-16 py-6 h-[80px]">
      <div
        className="flex items-center gap-3 font-heading font-bold tracking-tight text-white"
        style={{ fontSize: 22, letterSpacing: '-0.02em' }}
      >
        <Image src="/alphaX.png" alt="AlphaX logo" width={28} height={28} className="rounded-md" />
        AlphaX
      </div>

      <div className="hidden lg:flex items-center gap-10">
        {['Protocol', 'Network', 'Governance', 'Ecosystem'].map(link => (
          <Link
            key={link}
            href="#"
            className="text-[14px] font-semibold text-white/50 hover:text-white transition-all duration-200 uppercase tracking-widest"
          >
            {link}
          </Link>
        ))}
      </div>

      <div className="flex items-center">
        <StarBorder
          as="button"
          onClick={scrollToForm}
          color="#9b1fe8"
          speed="5s"
          className="!w-auto"
        >
          <span className="flex items-center px-4 py-1.5 font-bold text-xs uppercase tracking-widest bg-black/50 text-white hover:bg-black/80 transition-all duration-300">
            Join Waitlist
          </span>
        </StarBorder>
      </div>
    </nav>
  );
};

export default Navbar;
