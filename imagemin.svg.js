const imagemin = require("imagemin");
const imageminSvgo = require("imagemin-svgo");

imagemin(["_assets/svg/**/*.svg"], "_includes", {
  use: [
    imageminSvgo({
      plugins: [
        { cleanupIDs: { remove: false } },
        { cleanupNumericValues: { floatPrecision: 2 } },
        { removeStyleElement: true },
        { removeTitle: true }
      ],
      multipass: true
    })
  ]
}).then(function() {
  console.log("SVG-Icons were successfully optimized");
});
