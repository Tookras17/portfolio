/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ["'DM Serif Display'", 'Georgia', 'serif'],
        mono: ["'DM Mono'", "'Courier New'", 'monospace'],
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        'fade-up-1': 'fadeUp 0.8s ease 0.00s both',
        'fade-up-2': 'fadeUp 0.8s ease 0.15s both',
        'fade-up-3': 'fadeUp 0.8s ease 0.30s both',
        'fade-in': 'fadeIn 1.0s ease 0.60s both',
        blink: 'blink 1.2s ease infinite',
      },
    },
  },
  plugins: [],
}
