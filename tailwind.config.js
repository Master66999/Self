/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: {
          50: '#FCFDFD',
          100: '#F8FAFC',
          200: '#F1F5F9',
          300: '#E2E8F0',
        },
        forest: {
          950: '#022C22',
          900: '#064E3B',
          800: '#065F46',
          700: '#047857',
          600: '#059669',
          500: '#10B981',
          400: '#34D399',
          300: '#6EE7B7',
          200: '#A7F3D0',
          100: '#D1FAE5',
          50: '#ECFDF5',
        },
      },
      fontFamily: {
        display: ['"Outfit"', '"Plus Jakarta Sans"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'soft-sm': '0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02)',
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05), 0 2px 8px -1px rgba(0, 0, 0, 0.03)',
        'soft-lg': '0 12px 36px -4px rgba(0, 0, 0, 0.08), 0 4px 14px -2px rgba(0, 0, 0, 0.04)',
        'green-glow': '0 8px 30px -4px rgba(16, 185, 129, 0.25)',
      },
    },
  },
  plugins: [],
}
