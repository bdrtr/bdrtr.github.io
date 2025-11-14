/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0f172a',
        'dark-surface': '#1e293b',
        'dark-surface-elevated': '#334155',
        'dark-border': '#475569',
        'dark-text': '#f1f5f9',
        'dark-text-secondary': '#cbd5e1',
        'accent-primary': '#3b82f6',
        'accent-secondary': '#10b981',
        'accent-tertiary': '#f59e0b',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #3b82f6 0%, #10b981 50%, #0ea5e9 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}

