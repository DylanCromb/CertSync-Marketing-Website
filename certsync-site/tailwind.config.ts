import type { Config } from 'tailwindcss';
const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: { primary: '#2196F3' },
      boxShadow: { card: '0 5px 20px rgba(0,0,0,0.08)' },
    },
  },
  plugins: [],
};
export default config;
