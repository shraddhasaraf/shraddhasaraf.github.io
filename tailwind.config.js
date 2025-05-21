/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#ffffff',
        'secondary': '#2563eb', // Slightly deeper blue for better contrast
        'secondaryLight': '#60a5fa', // Light blue for hover states
        'tertiary': '#f3f4f6',
        'accent': '#f97316', // Orange for highlighting important elements
        'success': '#10b981', // Green for success states
        'lightText': '#4b5563',
        'darkText': '#1f2937',
        'background': {
          light: '#f8fafc',
          dark: '#f1f5f9',
        },
      },
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
}
