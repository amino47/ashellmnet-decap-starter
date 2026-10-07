module.exports = function(eleventyConfig) {
  
  eleventyConfig.addPassthroughCopy("public/css");

  return {
    dir: { input: 'src', output: '_site', includes: "_includes" }
  };
};
