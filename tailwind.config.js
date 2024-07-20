/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "grayish-blue": "hsl(237, 18%, 59%)",
        "soft-red": "hsl(345, 95%, 68%)",
        "dark-desat-blue": "hsl(236, 21%, 26%)",
        "very-dark-blue": "hsl(235, 16%, 14%)",
        "mostly-black-blue": "hsl(234, 17%, 12%)",
      },
      backgroundImage: {
        "pattern-hills": "url(/images/pattern-hills.svg)",
        "pattern-stars": "url(/images/bg-stars.svg)"
      }, 
      fontFamily: {
        "red-hat": "Red Hat Text, sans-serif"
      },
      boxShadow: {
        'hard-shadow': "0 10px 10px 2px rgba(0, 0, 0, 0.2)"
      },
    },
  },
  plugins: [],
}

