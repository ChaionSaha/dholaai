/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        bangla: '"Hind Siliguri", serif',
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#3971C1",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#3d4451",
          success: "#ACEEAC",
          "success-content": "#017E01",
          info: "#FFC3FD",
          "info-content": "#A1039C",
          error: "#FF7E7E",
          "error-content": "#A60202",
          warning: "#FDCEA2",
          "warning-content": "#C05F04",
          "base-100": "#ffffff",
          "base-200": "#ccc",
          "base-300": "#565657",
        },
      },
      "light",
    ],
  },
};
