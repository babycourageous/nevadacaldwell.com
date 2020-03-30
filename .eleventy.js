const marked = require('marked')

module.exports = function(eleventyConfig) {
  eleventyConfig.setBrowserSyncConfig({
    files: [
      '_site/css/**/*',
      '_site/javascript/**/*'
    ]
  });
  
  // Aliases are in relation to the _includes folder
  // eleventyConfig.addLayoutAlias('default', 'layouts/default.njk')

  eleventyConfig.addFilter('md', function(value) {
    let result
    try {
      result = marked(value).trim()
      result = result.replace(/^<p>|<\/p>$/g, '')
      return result
    } catch (e) {
      console.error('Error processing markdown:', e)
      return value
    }
  })

  eleventyConfig.addShortcode('texttohtml', function(text) {
    return `${text}`
  })

  eleventyConfig.addPassthroughCopy('admin')

  let markdownIt = require('markdown-it')
  let options = {
    html: true,
  }
  eleventyConfig.setLibrary('md', markdownIt(options))
  eleventyConfig.addPassthroughCopy({ "src/_assets/uploads": "assets/uploads" });

  return {
    dir: {
      input: 'src',
      layouts: '_layouts',

    },
  }
}
