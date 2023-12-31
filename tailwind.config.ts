import type { Config } from 'tailwindcss'
const plugin = require('tailwindcss/plugin')

const lengthVars = {
  '128': '32rem',
  '136': '34rem',
  '144': '36rem',
  '152': '38rem',
  '160': '40rem',
  '168': '42rem',
  '176': '44rem',
  '184': '46rem',
  '192': '48rem',
};

interface IUtilities {
  addUtilities: (utilities: Record<string, any>, options?: any) => void;
}


const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      height: lengthVars,
      margin: lengthVars
    }
  },
  plugins: [
    require("flowbite/plugin"),
    plugin(({ addUtilities }: IUtilities) => {
      addUtilities({
        '.no-scrollbar::-webkit-scrollbar': {
          'display': 'none',
        },
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none'
        }
      })
    })
  ],
}

export default config
