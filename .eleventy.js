const pluginWebmentions = require("@chrisburnell/eleventy-cache-webmentions")

module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("./src/css/");
	eleventyConfig.addWatchTarget("./src/css/");


	eleventyConfig.addPlugin(pluginWebmentions, {
		// These 3 fields are all required!
		domain: "https://ashellm.net",
		feed: `https://webmention.io/api/mentions.jf2?domain=ashellm.net&per-page=9001&token=bLYhlV6taMuQuxTVAsIvWg`,
		key: "children"
	})

	return {
		dir: {
			input: "src",
			output: "public"
		},
	}
}
