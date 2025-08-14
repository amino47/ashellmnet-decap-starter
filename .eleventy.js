const pluginWebmentions = require("@chrisburnell/eleventy-cache-webmentions")
const pluginIcons =  require('eleventy-plugin-icons')
module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("./src/css/");
	eleventyConfig.addWatchTarget("./src/css/");


	eleventyConfig.addPlugin(pluginWebmentions, {
		// These 3 fields are all required!
		domain: "https://ashellm.net",
		feed: `https://webmention.io/api/mentions.jf2?domain=ashellm.net&per-page=9001&token=bLYhlV6taMuQuxTVAsIvWg`,
		key: "children"
	})

	eleventyConfig.addPlugin(pluginIcons, 
		{
			sources: [{ name: 'feather', path: 'node_modules/feather-icons/dist/icons' }],
		}	
	);

	return {
		dir: {
			input: "src",
			output: "public"
		},
	}
}
