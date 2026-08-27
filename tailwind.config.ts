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
        primary: {
          50: '#edf1f9',
          100: '#dce4f3',
          200: '#b9c9e7',
          300: '#96aedb',
          400: '#5079c3',
          500: '#142B6D',
          600: '#122762',
          700: '#0f2052',
          800: '#0c1a41',
          900: '#0a1534',
          950: '#060d21',
        },
        secondary: {
          400: '#fcc57a',
          500: '#FBB150',
          600: '#e19f48',
        },
        // Keeping legacy names mapped to new colors to prevent breaking changes
        charcoal: {
          50: '#edf1f9',
          100: '#dce4f3',
          200: '#b9c9e7',
          300: '#96aedb',
          400: '#5079c3',
          500: '#142B6D',
          600: '#122762',
          700: '#0f2052',
          800: '#0c1a41',
          900: '#0a1534',
          950: '#060d21',
        },
        gold: {
          400: '#fcc57a',
          500: '#FBB150',
          600: '#e19f48',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'sans-serif'],
        serif: ['var(--font-outfit)', 'sans-serif'],
        mono: ['var(--font-outfit)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
