// src/app/[locale]/tailwind.config.js
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
        primary: '#2A5C8A',
        secondary: '#4BCF93',
        background: {
          light: '#F8F9FA',
          dark: '#121212',
        },
        text: {
          light: '#212121',
          dark: '#E0E0E0',
        },
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      animation: {
        'glitch': 'glitch 5s infinite linear alternate-reverse',
        'particle-drift': 'particle-drift 20s infinite linear',
      },
      keyframes: {
        glitch: {
          '0%': { clip: 'rect(31px, 9999px, 94px, 0)' },
          '10%': { clip: 'rect(112px, 9999px, 76px, 0)' },
          '20%': { clip: 'rect(85px, 9999px, 77px, 0)' },
          '30%': { clip: 'rect(27px, 9999px, 97px, 0)' },
          '40%': { clip: 'rect(64px, 9999px, 98px, 0)' },
          '50%': { clip: 'rect(61px, 9999px, 85px, 0)' },
          '60%': { clip: 'rect(99px, 9999px, 114px, 0)' },
          '70%': { clip: 'rect(34px, 9999px, 115px, 0)' },
          '80%': { clip: 'rect(98px, 9999px, 129px, 0)' },
          '90%': { clip: 'rect(43px, 9999px, 96px, 0)' },
          '100%': { clip: 'rect(82px, 9999px, 64px, 0)' },
        },
        'particle-drift': {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(30px, 30px)' },
        },
      },
    },
  },
  plugins: [],
};
