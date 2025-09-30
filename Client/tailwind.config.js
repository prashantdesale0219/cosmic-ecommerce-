/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#92c15b',    // Dark Green
        secondary: '#92c15b',  // Medium Green
        accent: {
          500: '#92c51b',
        },
        neutral: {
          50: '#FAFAFA',
          100: '#ffffff',
          200: '#EEEEEE',
          300: '#E0E0E0',
          400: '#BDBDBD',
          500: '#9E9E9E',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#222222',
        },
        success: {
          500: '#14B37D',
        },
        danger: {
          500: '#E11D48',
        },
        // Ensure white is available as a color
        white: '#ffffff',
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        'slow-zoom': 'slowZoom 20s ease-out infinite alternate',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'autoSlideProgress': 'autoSlideProgress 5s linear infinite',
      },
      keyframes: {
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        autoSlideProgress: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}