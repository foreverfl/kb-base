module.exports = {
  plugins: {
    '@tailwindcss/postcss': {
      // Tailwind v4 configuration via CSS file
      config: './tailwind.config.css',
      // Disable base styles to avoid conflicts with Docusaurus
      base: null,
    },
  },
}