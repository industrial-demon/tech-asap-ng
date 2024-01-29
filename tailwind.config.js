/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,html,css,svg}"],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        "grey-10": "hsl(210, 15%, 95%)",
        "grey-15": "hsla(214, 10%, 87%, 1)",
        "grey-20": "hsla(198, 19%, 89%, 1)",
        "grey-30": "hsl(0, 0%, 75%)",
        "grey-40": "hsl(0, 1%, 57%)",
        "grey-50": "hsl(0, 0%, 48%)",
        "grey-55": "hsla(0, 0%, 46%, 1)",
        "grey-60": "hsl(218, 8%, 20%)",
        "grey-70": "hsl(193, 9%, 19%)",
        "grey-80": "hsl(220, 9%, 13%)",
        "grey-90": "hsl(220, 12%, 10%)",
        "black-60": "hsla(0, 0%, 50%, 0.467)",
        "blue-10": "hsl(150, 100%, 98%)",
        green: "hsl(151, 83%, 34%)",
        blue: "hsl(208, 100%, 39%)",
        red: "hsla(0, 95%, 39%, 1)",
      },
      boxShadow: {
        headerBottom: "0px 12px 23px 0px rgba(0, 0, 0, 0.05)",
        userDropdown: "0px 4px 124px rgba(44, 39, 40, 0.25)",
      },
    },
  },
  plugins: [],
};
