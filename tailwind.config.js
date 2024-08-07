/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'neutralSilver' : "#F5F7FA",
        'neutralDGrey' : '#4D4D4D',
        'brandPrimary' : '#4CAF4F',
        'neutralGrey' : '#717171',
        'gray900' : '#18191F',
        'pink-purple': {
          DEFAULT: 'linear-gradient(90deg, #ff00ff, #ff99ff, #ff00ff)',
        },
      },
      boxShadow: {
        'green-glow': '0 4px 6px rgba(34, 197, 94, 0.5)', // Customize green color and opacity here
      },

      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        tilt: {
          '0%, 50%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(1deg)' },
          '75%': { transform: 'rotate(-1deg)' },
        },
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-10px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },

        pulse: {
          '0%, 100%': { opacity: 0 },
          '50%': { opacity: 1 },
        },

        shine: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        tilt: 'tilt 10s infinite linear',
        'fade-in-down': 'fade-in-down 0.5s ease-out',
        'fade-in-up': 'fade-in-up 0.5s ease-out',
        'fade-in-left': 'fade-in-left 0.5s ease-out',

        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        shine: 'shine 1.5s infinite',
      },
    },
    variants: {
      extend: {
        animation: ['hover', 'focus'],
        animation: ['hover', 'group-hover'],
      },
    },
  },
  plugins: [],
}