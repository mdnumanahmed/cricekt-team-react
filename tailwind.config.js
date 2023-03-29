/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#5968c1",
          secondary: "#46fc5e",
          accent: "#35c419",
          neutral: "#202127",
          "base-100": "#EDE9F1",
          info: "#90BAE9",
          success: "#14907F",
          warning: "#B88205",
          error: "#DF2A54",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
