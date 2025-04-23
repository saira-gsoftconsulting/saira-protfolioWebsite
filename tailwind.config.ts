import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}', // If using App Router later
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8', // Example Blue
        secondary: '#DB2777', // Example Pink
        background: '#0F172A', // Example Dark Blue/Slate
        text_primary: '#E2E8F0', // Example Light Gray/Slate
        text_secondary: '#94A3B8', // Example Gray/Slate
        accent: '#34D399', // Example Green/Teal
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Example: Add Inter font
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
  // darkMode: 'class', // Optional: If you want manual dark mode toggle
};
export default config;