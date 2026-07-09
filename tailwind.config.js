/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary background
        background: '#0A0A0A',
        
        // Surface layers
        surface: {
          DEFAULT: '#141414',
          elevated: '#1C1C1C',
          glass: 'rgba(255, 255, 255, 0.05)',
        },
        
        // Brand colors - Luxury Gold
        gold: {
          DEFAULT: '#C9A84C',
          light: '#E8D1A7',
          dark: '#A8893A',
          glow: 'rgba(201, 168, 76, 0.3)',
        },
        
        // Secondary accent
        orange: '#D87C4A',
        burgundy: '#8B3A3A',
        
        // Text colors
        text: {
          primary: '#FFFFFF',
          secondary: '#B0B0B0',
          tertiary: '#6A6A6A',
          inverted: '#0A0A0A',
        },
        
        // Status colors
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
      
      fontSize: {
        'display-2xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-md': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-sm': ['1.875rem', { lineHeight: '1.3' }],
        'body-xl': ['1.25rem', { lineHeight: '1.5' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body-md': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        'body-xs': ['0.75rem', { lineHeight: '1.4' }],
      },
      
      spacing: {
        18: '4.5rem',
        88: '22rem',
        128: '32rem',
      },
      
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '12px',
        lg: '24px',
        xl: '40px',
      },
      
      boxShadow: {
        glass: '0 8px 32px rgba(0, 0, 0, 0.4)',
        'glass-lg': '0 16px 48px rgba(0, 0, 0, 0.5)',
        glow: '0 0 30px rgba(201, 168, 76, 0.15)',
        'glow-lg': '0 0 60px rgba(201, 168, 76, 0.25)',
      },
      
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      
      animation: {
        shimmer: 'shimmer 2s infinite linear',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'slow-spin': 'spin 3s linear infinite',
      },
      
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.6 },
          '50%': { opacity: 1 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}