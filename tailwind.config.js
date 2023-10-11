/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-primary": "#75C4E7",
        "my-black": "#1D1D1B",
        "my-white": "#FFFFFF",
      },
      fontFamily: {
        cormorant: ["Cormorant", "serif"],
      },
      screens: {
        xs: "396px",
      },
    },
  },
  plugins: [],
};
