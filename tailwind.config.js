/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#ffffff',
        'secondary': '#3b82f6',
        'tertiary': '#f3f4f6',
        'lightText': '#4b5563',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
}
