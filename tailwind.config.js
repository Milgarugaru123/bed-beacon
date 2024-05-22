/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: { min: '0px', max: '900px' },
        deskTop: { min: '901px'}
      },
      keyframes: {
        slideDown: {
          '0%': {
            transform: 'translateY(-100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          }
        },
        slideUp: {
          '0%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(-100%)',
            opacity: '0',
          }
        },
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-35%)',
            'animation-timing-function': 'cubic-bezier(0.8,0,1,1)',
          },
          '50%': {
            transform: 'none',
            'animation-timing-function': 'cubic-bezier(0,0,0.2,1)',
          },
          to: {
            transform: 'translateY(0)',
          },
        },
        spin: {
          from: {
            transform: 'rotate(0deg)',
          },
          to: {
            transform: 'rotate(360deg)',
          },
        },
      },
      animation: {
        slideDown: 'slideDown 1s ease-in-out',
        slideUp: 'slideUp 1s ease-in-out',
        bounce: 'bounce 1s ',
        spin: 'spin 1s linear infinite',
      }
    },
  },
  plugins: [],
}

