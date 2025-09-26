import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2196F3',
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '16px',
          sm: '24px',
          lg: '32px',
        },
        screens: {
          '2xl': '1200px',
        },
      },
      spacing: {
        '18': '4.5rem', // 72px
        '24': '6rem', // 96px
        '32': '8rem', // 128px
        '48': '12rem', // 192px
        '64': '16rem', // 256px
      },
      backgroundImage: {
        'gradient-hero':
          'linear-gradient(180deg, #2196F3 0%, #2196F3 60%, rgba(33,150,243,0.2) 85%, rgba(255,255,255,0) 100%)',
        'gradient-primary': 'linear-gradient(135deg, #2196f3 0%, #1976d2 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function ({ addUtilities }: { addUtilities: (utilities: any) => void }) {
      const newUtilities = {
        '.card': {
          'border-radius': '1rem',
          'box-shadow':
            '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
          border: '1px solid rgb(229 231 235)',
          transition: 'box-shadow 0.15s ease-in-out',
          '&:hover': {
            'box-shadow':
              '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
          },
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
export default config;
