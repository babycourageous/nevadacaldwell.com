module.exports = function(eleventyConfig) {
  // Aliases are in relation to the _includes folder
  eleventyConfig.addLayoutAlias('default', 'layouts/default.njk')

  eleventyConfig.addPassthroughCopy('admin')

  let markdownIt = require('markdown-it')
  let options = {
    html: true,
  }
  eleventyConfig.setLibrary('md', markdownIt(options))

  return {
    dir: {
      input: './', // Equivalent to Jekyll's source property
      output: './_site', // Equivalent to Jekyll's destination property
    },
  }
}
