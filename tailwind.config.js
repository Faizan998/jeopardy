/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'gradient': 'gradient 15s ease infinite',
        'gradient-x': 'gradient-x 3s ease infinite',
        'slow-zoom': 'slow-zoom 20s ease infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'twinkle-reverse': 'twinkle 3s ease-in-out infinite reverse',
        'fade-in': 'fade-in 1s ease-out',
        'slide-up': 'slide-up 0.8s ease-out',
        'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 1s',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shooting-star-1': 'shooting-star 5s linear infinite',
        'shooting-star-2': 'shooting-star 5s linear infinite 1.67s',
        'shooting-star-3': 'shooting-star 5s linear infinite 3.33s',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        'slow-zoom': {
          '0%, 100%': {
            transform: 'scale(1.05)'
          },
          '50%': {
            transform: 'scale(1.1)'
          },
        },
        twinkle: {
          '0%, 100%': {
            opacity: 1
          },
          '50%': {
            opacity: 0.7
          },
        },
        'fade-in': {
          '0%': {
            opacity: 0,
            transform: 'translateY(10px)'
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)'
          },
        },
        'slide-up': {
          '0%': {
            opacity: 0,
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)'
          },
        },
        'bounce-subtle': {
          '0%, 100%': {
            transform: 'translateY(-2px)'
          },
          '50%': {
            transform: 'translateY(2px)'
          },
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0)'
          },
          '50%': {
            transform: 'translateY(-10px)'
          },
        },
        'shooting-star': {
          '0%': {
            transform: 'translateX(0) translateY(0) rotate(45deg)',
            opacity: 1
          },
          '10%': {
            transform: 'translateX(200px) translateY(-200px) rotate(45deg)',
            opacity: 0
          },
          '100%': {
            transform: 'translateX(200px) translateY(-200px) rotate(45deg)',
            opacity: 0
          }
        },
      },
    },
  },
  plugins: [],
} 