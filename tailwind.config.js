/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'brand-primary':'#dc8701',
        'brand-secondary': '#faf2de',
        'brand-tertiary': '#fadf0c',
        'brand-obnoxious': '#7d903f',
        'full-black': '#0b0b0b',
        'full-white': '#ffffff',
        'custom-bg-color': '#faf2de',
        'custom-panel-color': '#222',
        'custom-color': '#0b0b0b',
        'custom-color-brand': '#dc8701',
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
        'nb-assistant': '-3px 3px 0 0 rgba(0, 0, 0, 1)',
        'nb-user': '3px 3px 0 0 rgba(0, 0, 0, 1)'
      },
    },
  },
  variants: {},
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        ".scrollbar-hide": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
        ".scrollbar-hide::-webkit-scrollbar": {
          display: "none",
        },
      }
      addUtilities(newUtilities)
    }
  ]
};
