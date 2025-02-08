/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scans all JS, JSX, TS, and TSX files in /src
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4CAF50", // Custom primary color
        secondary: "#FF9800", // Custom secondary color
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
      boxShadow: {
        "3d": "4px 4px 10px rgba(0,0,0,0.2), -4px -4px 10px rgba(255,255,255,0.2)", // 3D-like shadow
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
