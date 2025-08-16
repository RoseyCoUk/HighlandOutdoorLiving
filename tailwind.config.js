/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
        // Mobile-optimized responsive text sizes
        'mobile-h1': ['clamp(2rem,8vw,4rem)', { lineHeight: '1.1', fontWeight: '700' }],
        'mobile-h2': ['clamp(1.5rem,6vw,3rem)', { lineHeight: '1.2', fontWeight: '600' }],
        'mobile-h3': ['clamp(1.25rem,5vw,2.25rem)', { lineHeight: '1.3', fontWeight: '600' }],
        'mobile-body': ['clamp(1rem,4vw,1.125rem)', { lineHeight: '1.6' }],
        'mobile-caption': ['clamp(0.875rem,3.5vw,1rem)', { lineHeight: '1.4' }],
      },
    },
  },
  plugins: [],
};
