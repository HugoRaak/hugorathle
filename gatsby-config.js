/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: 'Hugo Rathle',
    description: 'Hugo Rathle is a full-stack developer who enjoy creates new things on the web.',
    siteUrl: `https://hugo-rathle.com`,
    author: 'Hugo Rathle',
  },
  plugins: [
    'gatsby-plugin-postcss',
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
  ],
}
