/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    "bg-red-500",
    "hover:bg-red-500",
    "bg-lime-500",
    "hover:bg-lime-500",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
