/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: '#00161D',     // Custom color name and value
        mediumBlue: '#183B50',   // Custom color name and value
        customGreen: '#51CAAD',  // Custom color name and value
        white: '#FFFFFF',        // Custom color name and value
      },
      // ... you can add other theme customizations here
    },
  },
  plugins: [],
}
