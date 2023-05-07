/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        parlourTheme: {
          primary: '#F63E7B',
          secondary: '#D926AA',
          accent: '#1FB2A5',
          neutral: '#191D24',
          "base-100": "#FFFFFF",
        }
      }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}