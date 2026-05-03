import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,js,jsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Brand Copiloto.Digital
        brand: {
          50: '#fef1f3',
          100: '#fde3e7',
          200: '#fbccd2',
          300: '#f8a3ae',
          400: '#f37083',
          500: '#eb3350', // accent secundario
          600: '#e61f3e', // accent principal
          700: '#c1142f',
          800: '#a01429',
          900: '#85162a',
          950: '#490611'
        },
        // Tonos oscuros premium (Linear/Vercel-style)
        ink: {
          0: '#000000',
          50: '#0a0a0c',
          100: '#0f0f12',
          200: '#15151a',
          300: '#1c1c22',
          400: '#26262e',
          500: '#3a3a45',
          600: '#5a5a68',
          700: '#8a8a98',
          800: '#b8b8c4',
          900: '#e6e6ec',
          950: '#fafafa'
        }
      },
      fontFamily: {
        display: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'monospace']
      },
      fontSize: {
        // Display sizes (Space Grotesk)
        'display-2xl': ['clamp(3rem, 6vw + 1rem, 6rem)', { lineHeight: '0.95', letterSpacing: '-0.04em' }],
        'display-xl':  ['clamp(2.5rem, 5vw + 0.5rem, 4.5rem)', { lineHeight: '1', letterSpacing: '-0.035em' }],
        'display-lg':  ['clamp(2rem, 4vw + 0.5rem, 3.5rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-md':  ['clamp(1.75rem, 3vw + 0.5rem, 2.5rem)', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        'metric':      ['clamp(4rem, 10vw, 9rem)', { lineHeight: '0.9', letterSpacing: '-0.05em' }]
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'shimmer': 'shimmer 2s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'gradient-x': 'gradientX 8s ease infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 30px -5px rgba(230, 31, 62, 0.5)' },
          '50%': { boxShadow: '0 0 60px 0 rgba(230, 31, 62, 0.8)' }
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        }
      },
      backgroundImage: {
        'grid-fade': 'radial-gradient(circle at center, rgba(255,255,255,0.06) 1px, transparent 1px)',
        'noise': "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100'><filter id='n'><feTurbulence baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.4'/></svg>\")"
      }
    }
  },
  plugins: []
};

export default config;
