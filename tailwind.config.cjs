module.exports = {
    darkMode: "class",
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            "Dark-Blue-dark": "hsl(209, 23%, 22%)", // Dark mode elements
            "Very-Dark-Blue-bgDark": "hsl(207, 26%, 17%)", // Dark mode background
            "Very-Dark-Blue-light-text": "hsl(200, 15%, 8%)", //
            "Dark-Gray-light-input": "hsl(0, 0%, 52%)",
            "Very-Light-Gray-bgLight": "hsl(0, 0%, 98%)",
            "White": "hsl(0, 0%, 100%)",
        },
        fontFamily: {
            'Nunito-Sans': ['Nunito Sans', 'sans-serif']
        }
    },
  },
    variants: {
        backgroundColor: ['yazz']
    },
  plugins: [],
}
