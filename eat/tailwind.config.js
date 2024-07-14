/** @type {import('tailwindcss').Config} */
export default {
darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#F9FAFB',
        'gray': '#E5E7EB',
        'text': '#111827',
        'green': '#34D399',
        'black': '#111827',
        'darkGray': '#1F2937',
      },
    },
    fontFamily: {
      'IBM': ['IBM Plex Mono', 'monospace']
    },
  },
  plugins: [],
}