module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Playfair Display', 'sans-serif'],
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
