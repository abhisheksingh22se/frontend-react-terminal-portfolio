/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // We will add custom terminal colors here later
        terminal: {
          black: "#0d1117",
          green: "#00ff00",
          gray: "#8b949e",
        }
      },
      fontFamily: {
        mono: ['"Fira Code"', 'monospace'], // The hacker font
      }
    },
  },
  plugins: [],
}