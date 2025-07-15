/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-michroma)'],
        logo: ['"Matura MT Script Capitals"', "cursive"],
      },
    },
  },
  plugins: [],
};
