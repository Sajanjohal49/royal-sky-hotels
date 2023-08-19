/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    fontFamily: {
      display: ["Bruno Ace", "cursive"],
      montserrat: ["Montserrat", "sans-serif"],
      greatVibes: ["Great Vibes", "cursive"],
      euclidRegular: ["Euclid Circular A Regular", "sans-serif"],
      euclidBold: ["Euclid Circular A Bold", "sans-serif"],
      euclidSemibold: ["Euclid Circular A Semibold", "sans-serif"],
    },
    extend: {
      colors: {
        defaultWhite: "#F3F0EA",
        defaultGreen: "#2C4B48",
        defaultOrange: "#704031",
      },
      backgroundImage: {
        login: "url('/src/components/images/monaco-4563055_1920.jpg')",
        luggage: "url('/src/components/images/luggage-933487_1280.jpg')",
      },
    },
  },
  plugins: [],
};
