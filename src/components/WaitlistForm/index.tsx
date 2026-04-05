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
        className={`inline-flex items-center transition-all duration-500 ease-out ${
          isExpanded ? 'bg-[#05000a] border border-white/15 p-1 rounded-2xl' : 'bg-transparent'
        }`}
      >
        <form onSubmit={handleSubmit} className="flex items-center">
          {isExpanded && (
            <div
              ref={inputContainerRef}
              className="overflow-hidden flex flex-col px-4 py-1.5 text-left"
            >
              <label htmlFor="waitlist-email" className="text-[10px] font-bold text-white/40 uppercase tracking-widest leading-none mb-1">
                Your Email
              </label>
              <input
                id="waitlist-email"
                type="email"
                placeholder="designer@example.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                autoFocus
                autoComplete="email"
                className="bg-transparent text-[14px] font-medium text-white placeholder-white/20 focus:outline-none w-full"
              />
            </div>
          )}

          <div ref={buttonWrapperRef}>
            <StarBorder
              as="button"
              type={isExpanded ? "submit" : "button"}
              onClick={toggleExpand}
              disabled={loading}
              color="#9b1fe8"
              speed="4s"
              className="!w-auto"
            >
              <span className="flex items-center gap-2 font-bold px-1 py-0.5">
                {loading ? (
                  <>
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    Joining...
                  </>
                ) : (
                  'Join Waitlist →'
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
