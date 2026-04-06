'use client';

import { useState, FormEvent, useRef, useEffect } from 'react';
import StarBorder from '@/components/StarBorder';
import gsap from 'gsap';

const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputContainerRef = useRef<HTMLDivElement>(null);
  const buttonWrapperRef = useRef<HTMLDivElement>(null);

  const toggleExpand = () => {
    if (!isExpanded) {
      setIsExpanded(true);
    }
  };

  useEffect(() => {
    if (isExpanded && inputContainerRef.current) {
      // Animate expansion
      gsap.fromTo(inputContainerRef.current,
        { width: 0, opacity: 0, x: -20 },
        { width: '300px', opacity: 1, x: 0, duration: 0.5, ease: 'power3.out' }
      );
    }
  }, [isExpanded]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setLoading(false);
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="flex flex-col items-center gap-3 py-2 animate-fade-up text-center">
        <div className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/5 border border-white/10">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c084fc" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <p className="text-white/90 text-sm font-semibold">You&apos;re on the list!</p>
        <span className="px-4 py-1.5 rounded-full border border-brand/30 text-brand-light text-xs bg-brand-muted font-bold tracking-tight">
          {email}
        </span>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center w-full">
      <div
        ref={containerRef}
        className={`inline-flex items-center transition-all duration-500 ease-out group ${
          isExpanded 
            ? 'bg-[#05000a] border border-brand/50 p-1.5 rounded-2xl shadow-[0_0_50px_rgba(155,31,232,0.3)]' 
            : 'bg-transparent'
        }`}
      >
        <form onSubmit={handleSubmit} className="flex items-center">
          {isExpanded && (
            <div
              ref={inputContainerRef}
              className="overflow-hidden flex flex-col px-6 py-2 text-left min-w-[280px]"
            >
              <label htmlFor="waitlist-email" className="text-[11px] font-bold text-brand-light/90 leading-none mb-1.5 tracking-tight">
                Get Early Access
              </label>
              <input
                id="waitlist-email"
                type="email"
                placeholder="name@company.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                autoFocus
                autoComplete="email"
                className="bg-transparent text-[16px] font-medium text-white placeholder-white/30 focus:outline-none w-full"
              />
            </div>
          )}

          <div 
            ref={buttonWrapperRef}
            className="relative"
          >
            {/* Massive external glow for visibility */}
            <div className="absolute inset-0 rounded-xl bg-brand/30 blur-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            <div className="absolute inset-0 rounded-xl shadow-[0_0_35px_rgba(155,31,232,0.45)] group-hover:shadow-[0_0_55px_rgba(155,31,232,0.65)] transition-all duration-500 -z-10" />
            
            <StarBorder
              as="button"
              type={isExpanded ? "submit" : "button"}
              onClick={toggleExpand}
              disabled={loading}
              color="#9b1fe8"
              speed="3.5s"
              className="!w-auto"
            >
              <span className="flex items-center gap-3 font-extrabold px-6 py-2.5 text-[15px] md:text-[17px] tracking-tight">
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    Joining...
                  </>
                ) : (
                  <>
                    {isExpanded ? 'Secure Spot' : 'Join Waitlist'}
                    <span className="text-brand-light">→</span>
                  </>
                )}
              </span>
            </StarBorder>
          </div>
        </form>
      </div>

      <p className="text-center text-[12px] font-medium text-white/50 mt-4 leading-relaxed tracking-tight">
        No spam. Unsubscribe anytime.
      </p>
    </div>
  );
};

export default WaitlistForm;
