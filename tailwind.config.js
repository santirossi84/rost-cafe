/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          950: '#08090c',
          900: '#0d0e12',
          850: '#121319',
          800: '#17181f',
          700: '#22232c',
        },
        rose: {
          glow: '#ff6b9d',
        },
        cyan: {
          glow: '#5eead4',
        },
      },
      backgroundImage: {
        'rost-gradient':
          'radial-gradient(circle at 15% 20%, rgba(255,107,157,0.25), transparent 45%), radial-gradient(circle at 85% 15%, rgba(94,234,212,0.20), transparent 45%), radial-gradient(circle at 50% 100%, rgba(255,107,157,0.12), transparent 55%)',
        'rost-cta': 'linear-gradient(90deg, #ff6b9d 0%, #a78bfa 50%, #5eead4 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(255,107,157,0.45)',
      },
    },
  },
  plugins: [],
}
