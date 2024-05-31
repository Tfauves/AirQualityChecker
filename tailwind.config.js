/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        nav: "#18222f",
        page: "#2b3441",
        card: "#47566a",
        "card-hover": "#4f5e74",
        "default-text": "black",
        "blue-accent": "#0084d4",
        "blue-accent-hover": "#0099fff",
        pollutantCardGood: "#38761d",
        pollutantCardModerate: "#FFFF00",
        pollutantCardSensitive: "#FF7E00",
        pollutantCardUnhealthy: "#FF0000",
        pollutantCardVeryUnhealthy: "#8F3E96",
        pollutantCardHazardous: "#7E0023",
        pollutantCardUnknown: "#47566a",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
