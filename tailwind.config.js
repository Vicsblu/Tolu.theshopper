/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Palette extracted from the brand logo (cream / ink / blush)
        // and the owner's portrait (navy). Gold is a designed
        // complement that bridges both.
        cream: '#FBF1E6',
        ink: '#17130F',
        blush: {
          DEFAULT: '#DB9398',
          light: '#F0D7CF',
          dark: '#C97B81',
        },
        gold: {
          DEFAULT: '#C6A15B',
          light: '#DAC08C',
        },
        navy: {
          DEFAULT: '#0B0F1E',
          light: '#141A30',
        },
        cocoa: '#603A36',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 8px 40px -12px rgba(23, 19, 15, 0.18)',
        gold: '0 8px 30px -8px rgba(198, 161, 91, 0.45)',
      },
    },
  },
  plugins: [],
}
