/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0A',
        surface: {
          DEFAULT: '#141414',
          elevated: '#1C1C1C',
        },
        gold: {
          DEFAULT: '#C9A84C',
          light: '#E8D1A7',
        },
        orange: '#D87C4A',
        burgundy: '#8B3A3A',
        text: {
          primary: '#FFFFFF',
          secondary: '#B0B0B0',
          tertiary: '#6A6A6A',
        },
        success: '#4CAF50',
        warning: '#FFB74D',
        error: '#E53935',
        info: '#4FC3F7',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        glass: '0 8px 32px rgba(0, 0, 0, 0.4)',
        glow: '0 0 20px rgba(201, 168, 76, 0.3)',
      },
      animation: {
        shimmer: 'shimmer 2s infinite linear',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}