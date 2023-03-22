module.exports = {
    darkMode: "class",
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            "Dark-Blue-dark": "hsl(209, 23%, 22%)",
            "Very-Dark-Blue-dark": "hsl(207, 26%, 17%)",
            "Very-Dark-Blue-light": "hsl(200, 15%, 8%)",
            "Dark-Gray-light": "hsl(0, 0%, 52%)",
            "Very-Light-Gray-light": "hsl(0, 0%, 98%)",
            "White": "hsl(0, 0%, 100%)",
        },
        fontFamily: {
            'Nunito-Sans': ['Nunito Sans', 'sans-serif']
        }
    },
  },
  plugins: [],
}
