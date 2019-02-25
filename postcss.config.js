module.exports = {
  plugins: [
    require("postcss-import"),
    require("precss"),
    require("tailwindcss")("./tailwind.js"),
    require("autoprefixer"),
    require("cssnano")
  ]
};
