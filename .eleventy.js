const Webmentions = require("eleventy-plugin-webmentions");
module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("./src/css/");
	eleventyConfig.addWatchTarget("./src/css/");

	eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

	eleventyConfig.addPlugin(Webmentions, {
		domain: "ashellm.net",
		token: "bLYhlV6taMuQuxTVAsIvWg",
	});

	return {
		dir: {
			input: "src",
			output: "public"
		},
	}
}
