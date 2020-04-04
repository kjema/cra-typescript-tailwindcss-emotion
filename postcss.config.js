const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./public/index.html", "./src/**/*.tsx"],
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
});

module.exports = {
  plugins: [
    require("tailwindcss")("./src/tailwind.config.js"),
    // Purge and minify CSS only production builds only
    ...(process.env.NODE_ENV === "production"
      ? [require("autoprefixer"), purgecss, require("cssnano")]
      : []),
  ],
};
