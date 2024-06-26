  import flowbite from 'flowbite-react/tailwind'
  /** @type {import('tailwindcss').Config} */
  export default {
    content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",flowbite.content()],
    theme: {
      extend: {},
    },
    plugins: [flowbite.plugin({
      charts:true,  
    })],
    screens: {
      'xs': {'min': '339px'},
      'sm': {'min': '766px'},
      'md': {'min': '767px'},
      'lg': {'min': '1023px'},
      'xl': {'min': '1279px'},
    },
    theme: {
      extend: {
        fontFamily: {
          Ubuntu: ["Ubuntu", "sans-serif"],
          Jacquard: ["Jacquard", "sans-serif"],
          Jacquarda: ["Jacquarda Bastarda 9 Charted", "sans-serif"],
        }
      },
    },
  }

