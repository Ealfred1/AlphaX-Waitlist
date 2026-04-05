import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#9b1fe8',
          light: '#b34df2',
          muted: 'rgba(155, 31, 232, 0.15)',
          glow: 'rgba(155, 31, 232, 0.35)',
        },
        surface: {
          bg: '#080808',
          raised: '#111111',
          overlay: '#1a1a1a',
        },
        border: {
          subtle: 'rgba(255,255,255,0.08)',
          accent: 'rgba(155, 31, 232, 0.4)',
        },
      },
      fontFamily: {
        heading: ['var(--font-jakarta)', 'Raleway', 'sans-serif'],
        body: ['var(--font-jakarta)', 'Lexend', 'sans-serif'],
        jakarta: ['var(--font-jakarta)', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.4,0,0.2,1) forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(155,31,232,0.3)' },
          '50%': { boxShadow: '0 0 50px rgba(155,31,232,0.6)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};

export default config;
