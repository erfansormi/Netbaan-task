/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        brand: {
          cyan: {
            DEFAULT: "#327794",
          },
          muted: {
            300: "#464660",
            500: "#2a2b3f",
            700: "#1d1e2c",
          },
          gray: {
            700: "#1d2229",
            900: "#101419",
          },
        },
      },
    },
  },
  plugins: [],
};
