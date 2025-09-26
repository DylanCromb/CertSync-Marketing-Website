import type { Config } from 'tailwindcss';
const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2B7FE0',
        secondary: '#764ba2',
        accent: '#f093fb',
        gradient: {
          1: '#1a237e',
          2: '#4a148c',
          3: '#880e4f',
          4: '#2c387e',
          5: '#1565c0',
          6: '#0d47a1',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        sm: '0 2px 10px rgba(0,0,0,0.05)',
        md: '0 5px 20px rgba(0,0,0,0.08)',
        lg: '0 10px 30px rgba(0,0,0,0.12)',
        xl: '0 20px 40px rgba(0,0,0,0.15)',
      },
      borderRadius: {
        sm: '8px',
        md: '15px',
        lg: '25px',
        full: '50px',
      },
      animation: {
        gradient: 'gradientShift 15s ease infinite',
        glow: 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.6s ease-out',
        float: 'floatUp 6s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;
