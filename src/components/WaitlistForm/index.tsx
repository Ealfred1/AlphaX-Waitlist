'use client';

import { useState, FormEvent } from 'react';
import StarBorder from '@/components/StarBorder';

const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

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
        <p className="text-white/80 text-sm">You&apos;re on the list — we&apos;ll notify you at</p>
        <span className="px-3 py-1 rounded-full border border-brand/30 text-brand-light text-xs bg-brand-muted">
          {email}
        </span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      {/* Outer container — subtle glass pill like the reference */}
      <div
        className="flex items-center w-full rounded-2xl border border-white/10"
        style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)' }}
      >
        {/* Label + input stacked on the left */}
        <div className="flex flex-col flex-1 px-5 py-3 gap-0.5 min-w-0">
          <label htmlFor="waitlist-email" className="text-[11px] font-semibold text-white/35 uppercase tracking-widest leading-none">
            Your email
          </label>
          <input
            id="waitlist-email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            autoComplete="email"
            className="bg-transparent text-[14px] text-white placeholder-white/25 focus:outline-none w-full"
          />
        </div>

        {/* StarBorder button on the right */}
        <div className="pr-1.5 py-1.5 flex-shrink-0">
          <StarBorder
            as="button"
            type="submit"
            disabled={loading}
            color="#9b1fe8"
            speed="4s"
            className="!w-auto"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-3.5 w-3.5" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                Joining...
              </span>
            ) : 'Join Waitlist →'}
          </StarBorder>
        </div>
      </div>

      <p className="text-center text-[11px] text-white/25 mt-3">
        No spam. Unsubscribe anytime.
      </p>
    </form>
  );
};

export default WaitlistForm;
