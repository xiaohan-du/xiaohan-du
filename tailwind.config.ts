import type { Config } from 'tailwindcss'

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
    },
    screens: {
      // desktop-first breakpoints
      '2xl': { 'max': '1536px' },
      // => @media (max-width: 1536px) { ... }

      'xl': { 'max': '1280px' },
      // => @media (max-width: 1279px) { ... }

      'lg': { 'max': '1024px' },
      // => @media (max-width: 1024px) { ... }

      'md': { 'max': '768px' },
      // => @media (max-width: 768px) { ... }

      'sm': { 'max': '640px' },
      // => @media (max-width: 640px) { ... }
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}

export default config
