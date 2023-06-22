/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('src/assets/base.pmg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        doctortheme: {
          primary: "#1E66FF",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
}

