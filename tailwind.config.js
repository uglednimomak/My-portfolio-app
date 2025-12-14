/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        retro: ['"VT323"', 'monospace'],
      },
      colors: {
        cyber: {
          black: 'var(--c-bg)',
          dark: 'var(--c-win)',
          slate: 'var(--c-slate)',
          neon: 'var(--c-primary)',
          pink: 'var(--c-accent-1)',
          cyan: 'var(--c-accent-2)',
          yellow: 'var(--c-accent-3)'
        }
      },
      animation: {
        'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glitch': 'glitch 1s linear infinite',
      },
      keyframes: {
        glitch: {
          '2%, 64%': { transform: 'translate(2px,0) skew(0deg)' },
          '4%, 60%': { transform: 'translate(-2px,0) skew(0deg)' },
          '62%': { transform: 'translate(0,0) skew(5deg)' },
        }
      }
    }
  },
  plugins: [],
}
