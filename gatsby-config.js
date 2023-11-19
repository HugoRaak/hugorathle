const config = require('./src/config.json');

module.exports = {
    siteMetadata: {
        title: 'Hugo Rathle',
        description:
            'Hugo Rathle is a full-stack developer who enjoy creates new things on the web.',
        siteUrl: `https://hugo-rathle.com`,
        author: 'Hugo Rathle',
    },
    plugins: [
        `gatsby-plugin-postcss`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Hugo Rathle`,
                short_name: `Hugo Rathle`,
                start_url: `/`,
                background_color: config.colors.darkBg,
                theme_color: config.colors.darkTheme,
                display: `minimal-ui`,
                icon: `src/images/logo.png`,
                theme_color_in_head: false,
            },
        },
        `gatsby-plugin-offline`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `projects`,
                path: `${__dirname}/src/data/projects`,
            },
        },
        `gatsby-transformer-json`,
    ],
};
