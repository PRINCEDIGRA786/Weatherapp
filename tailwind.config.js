/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'img': "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Ol2Yqn9VGNxpclH9mqjIlV9AjIgCdCccFw&usqp=CAU')",
      },
      fontFamily: {
        Mono: 'Rubik Moonrocks'
      }
    },
    plugins: [],
  }
}