const config = require('./src/config');

module.exports = {
    siteMetadata: {
        title: 'Hugo Rathle',
        description:
            'Hugo Rathle is a full-stack developer passionate about crafting exceptional digital experiences. From design to implementation, he strive to push boundaries and create elegant, high-performance computing solutions. Welcome to his digital universe!',
        siteUrl: `https://hugorathle.com`,
        image: '/og.png',
    },
    plugins: [
        `gatsby-plugin-postcss`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-robots-txt`,
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
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                trackingIds: ['G-8DSWV0RYDQ'],
                pluginConfig: {
                    head: true,
                    respectDNT: true,
                },
            },
        },
    ],
};
