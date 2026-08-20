import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        charcoal: {
          50: '#f5f5f6',
          100: '#e6e6e7',
          200: '#d1d1d3',
          300: '#b1b2b5',
          400: '#898a8f',
          500: '#686a71',
          600: '#53545b',
          700: '#43444b',
          800: '#383a40',
          900: '#313237',
          950: '#1b1b1e',
        },
        gold: {
          400: '#c29d5b',
          500: '#b48a47',
          600: '#9b7337',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
