module.exports = {
	siteMetadata: {
		title: `Matt Murphy`,
		description: `Matt Murphy's personal portfolio site which highlights some of his broadcasting/media career.`,
		author: `Keaton Sentak`,
		siteUrl: `https://mattmurphybroadcaster.com`
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-image`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#222222`,
				theme_color: `#007ced`,
				display: `minimal-ui`,
				icon: `src/images/favicon.png`
			}
		},
		`gatsby-plugin-gatsby-cloud`
	]
};
