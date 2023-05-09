/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    fontFamily: {
      display: ["Bruno Ace", "cursive"],
      montserrat: ["Montserrat", "sans-serif"],
      signature: ["Great Vibes", "cursive"],
    },
    extend: {
      backgroundImage: {
        login: "url('/src/components/images/monaco-4563055_1920.jpg')",
        luggage: "url('/src/components/images/luggage-933487_1280.jpg')",
      },
    },
  },
  plugins: [],
};
