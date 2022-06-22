/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
            mytheme: {
              "primary": "#574cad",
              "secondary": "#0668a5",
              "accent": "#e2d544",
              "neutral": "#251D34",
              "base-100": "#FFFFFF",
              "info": "#2DA9F0",
              "success": "#5BDCBE",
              "warning": "#A0630D",
              "error": "#DC323B",
            },
          },
        ],
      },
  plugins: [require("daisyui")],
}
