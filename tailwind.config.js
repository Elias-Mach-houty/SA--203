module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Title' : ['Square Peg'],
        'Corps' : ['Oswald'],
      },
      colors:{
        'bleu' : '#64BDEB',
        'orange' : '#F1861D',
        'rouge' : '#D12617'
      },
      width:{
        '286' : '286px'
      }
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],
}
