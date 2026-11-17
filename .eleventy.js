require('dotenv').config()

const pluginIcons =  require('eleventy-plugin-icons')

module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("./src/css/");
	eleventyConfig.addWatchTarget("./src/css/");

	const webmentionToken = process.env.WEBMENTION_TOKEN

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
