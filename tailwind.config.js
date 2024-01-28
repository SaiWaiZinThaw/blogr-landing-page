/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    fontFamily: {
      Overpass: ["Overpass", "sans-serif"],
      Ubuntu: ["Ubuntu", "sans-serif"],
    },
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        "txt-light-red": "hsl(356, 100%, 66%)",
        "very-light-red": "hsl(355, 100%, 74%)",
        "very-dark-blue": "hsl(208, 49%, 24%)",
        "grayish-blue": "hsl(240, 2%, 79%)",
        "very-dark-grayish-blue": "hsl(207, 13%, 34%)",
        "very-dark-black-blue": "hsl(240, 10%, 16%)",
        "very-light-red": "hsl(13, 100%, 72%)",
        "light-red": "hsl(353, 100%, 62%)",
        "very-dark-gray-blue": "hsl(237, 17%, 21%)",
        "very-dark-de-blue": "hsl(237, 23%, 32%)",
      },
    },
  },
  plugins: [],
};
