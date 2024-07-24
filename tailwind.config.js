/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-light': 'linear-gradient(to bottom, #ffffff, #e5e5e5, #cccccc, #b3b3b3)',
      'bg-dark': 'radial-gradient(ellipse 80% 100% at 50% -20%, rgba(8,91,195,0.35), rgba(12,31,52,0))',
      },
    },
  },
  plugins: [],
}
