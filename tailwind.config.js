module.exports = {
  content: ['./src/**/*.{js}'],
  theme: {
    extend: {
      fontFamily: {
        /** Custom font name format
         * '"Font Name"'
         * | https://tailwindcss.com/docs/font-family
         */
        Cupcake: ['cupcake', "sans-serif"],
        // 'sans': ['"Future History"', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'background': '#fef6ea',
        'canvas': '#fce7cf',
        'flavors': {
          'regular': '#f4933b',
          'chocolate': '#aa5318',
          'strawberry': '#e8859c',
        },
      },
    },
  },
  plugins: [],
}