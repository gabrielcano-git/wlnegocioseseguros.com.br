module.exports = {
  content: ['./src/**/*.{mjs,js,html}'],
  corePlugins: { preflight: false },
  theme: {
    screens: { md: '48rem', lg: '64rem' },
    extend: {
      colors: { leaf: '#C8DFBE', sage: '#758C6E', ink: '#6B4A30', clay: '#B07A51' },
      maxWidth: { content: '76rem' }
    }
  }
};
