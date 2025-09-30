/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0066CC',    // Main Blue
        secondary: '#00A650',  // Green
        accent: {
          500: '#004D99',      // Darker Blue
        },
        neutral: {
          50: '#F8FAFC',
          100: '#ffffff',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
        success: {
          500: '#00A650',      // Success Green
        },
        danger: {
          500: '#00A650',
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