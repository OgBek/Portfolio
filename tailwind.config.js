/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode with class strategy
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        dark: {
          DEFAULT: '#1F2937',
          light: '#374151',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark'],
      textColor: ['dark'],
      ringWidth: ['hover', 'active', 'focus'],
      ringColor: ['hover', 'active', 'focus'],
      ringOffsetWidth: ['hover', 'active', 'focus'],
      ringOffsetColor: ['hover', 'active', 'focus'],
      scale: ['hover', 'active'],
      transform: ['hover', 'active'],
    },
  },
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
