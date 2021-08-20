module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      cyan: "hsl(180, 66%, 49%)",
      darkviolet: "hsl(257, 27%, 26%)",
      gray: "hsl(0, 0%, 75%)",
      grayish: "hsl(257, 7%, 63%)",
      verydarkblue: "hsl(255, 11%, 22%)",
      red: "hsl(0, 87%, 67%)",
      verydarkviolet: "hsl(260, 8%, 14%)",
      transparent: 'hsl(44 , 24% , 91%)',
      grey: '#DBEAFE'
    },
    extend: {
      backgroundImage: theme => ({
        'boost-pattern': "url(../src/images/bg-boost-desktop.svg)"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};