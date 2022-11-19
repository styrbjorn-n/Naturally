/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html, js, ts, vue}", 
    "./src/**/*"
],
  theme: {
    extend: {},
    width: {
      "sm":"52px",
      "md":"76px",
      "lg":"96px",
      "xl":"121px",
      "xxl":"242px",
      "3xl":"364px",
      "4xl":"420px",
      "5xl":"560px",
    },
    height: {
      "sm":"52px",
      "md":"76px",
      "lg":"96px",
      "xl":"121px",
      "xxl":"242px",
      "3xl":"364px",
      "4xl":"420px",
      "5xl":"560px",
    },
    gap: {
      "sm":"52px",
      "md":"76px",
      "lg":"96px",
      "xl":"121px",
      "xxl":"242px",
      "3xl":"364px",
      "4xl":"420px",
      "5xl":"560px",
    }

  },
  plugins: [],
}
