/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#003366",
          50: "#e6f0f7",
          100: "#cce0ee",
          200: "#99c2dd",
          300: "#66a3cc",
          400: "#3385bb",
          500: "#0066aa",
          600: "#005288",
          700: "#003d66",
          800: "#002944",
          900: "#001422",
        },
        secondary: {
          DEFAULT: "#EC4E20",
          50: "#fef3f0",
          100: "#fde8e1",
          200: "#fbd0c3",
          300: "#f8b8a5",
          400: "#f6a087",
          500: "#f48869",
          600: "#EC4E20",
          700: "#bc3e1a",
          800: "#752713",
          900: "#4a190c",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
