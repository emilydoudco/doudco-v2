/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50:  '#FDFAF4',
          100: '#F8F2E4',
          200: '#F2E8D0',
          DEFAULT: '#F5F0E8',
        },
        rose: {
          deep: '#9B2335',
          mid:  '#B83347',
          light:'#D4687A',
          pale: '#F0D0D5',
        },
        sage: {
          dark:  '#4A6B49',
          DEFAULT:'#7D9E7C',
          light: '#AABFAA',
          pale:  '#D6E5D6',
        },
        brown: {
          deep:  '#2A1A0F',
          DEFAULT:'#3D2B1F',
          mid:   '#5C4033',
          light: '#8C6B5A',
          warm:  '#C4956B',
        },
      },
      fontFamily: {
        serif:  ['Cormorant Garamond', 'Georgia', 'serif'],
        sans:   ['DM Sans', 'system-ui', 'sans-serif'],
        mono:   ['JetBrains Mono', 'Menlo', 'monospace'],
        display:['Cormorant', 'Georgia', 'serif'],
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 8vw, 7rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2rem, 5vw, 4.5rem)', { lineHeight: '1.1',  letterSpacing: '-0.015em' }],
        'display-md': ['clamp(1.5rem, 3vw, 2.75rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      spacing: {
        section: '8rem',
        'section-sm': '4rem',
      },
      transitionTimingFunction: {
        botanical: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      boxShadow: {
        'card': '0 4px 24px -4px rgba(61, 43, 31, 0.12), 0 1px 4px rgba(61, 43, 31, 0.08)',
        'card-hover': '0 12px 40px -8px rgba(61, 43, 31, 0.2), 0 4px 12px rgba(61, 43, 31, 0.1)',
        'rose': '0 8px 32px -4px rgba(155, 35, 53, 0.25)',
      },
      backgroundImage: {
        'grain': "url('/images/grain.png')",
        'botanical-hero': "url('/images/botanical-bg.png')",
      },
    },
  },
  plugins: [],
};
