const Webmentions = require("eleventy-plugin-webmentions");
const pluginWebmentions = require("@chrisburnell/eleventy-cache-webmentions")

module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("./src/css/");
	eleventyConfig.addWatchTarget("./src/css/");


	eleventyConfig.addPlugin(Webmentions, {
		domain: "ashellm.net",
		token: "bLYhlV6taMuQuxTVAsIvWg",
	});

	eleventyConfig.addPlugin(pluginWebmentions, {
		// These 3 fields are all required!
		domain: "https://ashellm.net",
		feed: `https://webmention.io/api/mentions.jf2?domain=example.com&per-page=9001&token=bLYhlV6taMuQuxTVAsIvWg`,
		key: "children"
	})

	return {
		dir: {
			input: "src",
			output: "public"
		},
	}
}
