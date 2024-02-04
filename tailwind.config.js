/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "inset-outline": "inset 0 0 0 1px #7A9CCB",
      },
      fontFamily: {
        sans: ["Work Sans", "sans-serif"],
      },
      colors: {
        // primary: "#215AA8",
        // "primary-border": "#7A9CCB",
        // "primary-surface": "#D3DEEE",
        // "primary-hover": "#143665",
        // "primary-pressed": "#122641",
        // success: "#22C55E",
        // "success-border": "#86EFAC",
        // "success-surface": "#DCFCE7",
        // "success-hover": "#15803D",
        // "success-pressed": "#14532D",
        // danger: "#E72B2B",
        // "danger-border": "#FCA6A6",
        // "danger-surface": "#FEE1E1",
        // "danger-hover": "#BA1C1C",
        // "danger-pressed": "#811D1D",
        // warning: "#EAB308",
        // "warning-border": "#FDE047",
        // "warning-surface": "#FEF9C3",
        // "warning-hover": "#A16207",
        // "warning-pressed": "#713F12",
        // "neutral-10": "#FFFFFF",
        // "neutral-20": "#E5E7EB",
        // "neutral-30": "#D1D5DB",
        // "neutral-40": "#9CA3B0",
        // "neutral-50": "#6B7280",
        // "neutral-60": "#4B5563",
        // "neutral-70": "#384252",
        // "neutral-80": "#1F2937",
        // "neutral-90": "#111827",
      },
      fontSize: {
        'xs': ['14px', { lineHeight: '1rem', fontWeight: '400' }], // Add your own line-height
        'sm': ['16px', { lineHeight: '1.25rem', fontWeight: '400' }], // Add your own line-height
        'base': ['18px', { lineHeight: '1.5rem', fontWeight: '400' }], // Add your own line-height
        'lg': ['20px', { lineHeight: '1.75rem', fontWeight: '400' }], // Add your own line-height
        'xl': ['24px', { lineHeight: '2rem', fontWeight: '700' }], // Add your own line-height
        '2xl': ['36px', { lineHeight: '2.5rem', fontWeight: '600' }], // Add your own line-height
      },
      fontWeight: {
        'normal': '400',
        'semibold': '600',
      },
    },
  },
  plugins: [],
};
