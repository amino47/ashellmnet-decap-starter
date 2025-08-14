 const { getWebmentions, getPublished } = require("@chrisburnell/eleventy-cache-webmentions")

module.exports = {
	eleventyComputed: {
		webmentions: (data) => {
			// Get this page's Webmentions as an Array (based on the URL)
			const webmentionsForUrl = getWebmentions({
				domain: "https://ashellm.net",
				feed: "https://webmention.io/api/mentions.jf2?domain=example.com&per-page=9001&token=bLYhlV6taMuQuxTVAsIvWg",
				key: "children"
			}, "https://ashelllm.net" + data.page.url)

			// If there are Webmentions for this page
			if (webmentionsForUrl.length) {
				// Sort them (based on when they were received/published)
				return webmentionsForUrl.sort((a, b) => {
					return getPublished(b) - getPublished(a)
				})
			}
			// Otherwise, return an empty Array
			return []
		},
	},
}
