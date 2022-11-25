/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html, js, ts, vue}", 
    "./src/**/*"
],
  theme: {
    extend: {
      width: {
      "sm":"52px",
      "md":"76px",
      "lg":"96px",
      "xl":"121px",
      "xxl":"196px",
      "3xl":"310px",
      "4xl":"413px",
      "5xl":"560px",
    },
    height: {
      "sm":"52px",
      "md":"76px",
      "lg":"96px",
      "xl":"121px",
      "xxl":"196px",
      "3xl":"310px",
      "4xl":"413px",
      "5xl":"560px",
    },
    gap: {
      "sm":"52px",
      "md":"76px",
      "lg":"96px",
      "xl":"121px",
      "xxl":"196px",
      "3xl":"310px",
      "4xl":"413px",
      "5xl":"560px",
    },
    colors: {
      "primary":"#2A3640",
      "secondary":"#458963",
      "tertiary":"#F1F6E9"
    },
  },
  },
  plugins: [],
}
