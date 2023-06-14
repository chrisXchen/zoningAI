/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-bg-color': '#101010',
        'custom-panel-color': '#222',
        'custom-color': '#fff',
        'custom-color-brand': '#24b47e',
        'custom-color-secondary': '#666',
        'custom-border-color': '#333',
      },
      borderRadius: {
        custom: '5px',
      },
      spacing: {
        custom: '5px',
      },
      boxShadow: {
        custom: '0 2px 8px 0 rgba(0, 0, 0, 0.8)',
      },
    },
  },
  variants: {},
  plugins: []
};
