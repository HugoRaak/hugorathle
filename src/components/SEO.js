import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';

const SEO = ({ location, title = null, description = null, image = null }) => {
    const { site } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    defaultTitle: title
                    defaultDescription: description
                    siteUrl
                    defaultImage: image
                }
            }
        }
    `);

    const { defaultTitle, defaultDescription, defaultImage, siteUrl } = site.siteMetadata;

    const seo = {
        title: title ? `${title} | ${defaultTitle}` : defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}${location.pathname}`,
    };

    return (
        <>
            <title>{seo.title}</title>
            <html lang="en" />
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />

            <meta property="og:title" content={seo.title} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={seo.url} />
            <meta property="og:image" content={seo.image} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:description" content={seo.description} />
            <meta name="twitter:image" content={seo.image} />

            <meta
                name="google-site-verification"
                content="iTMNKmvDxQxnC18pi2aHeI5Nyxdgdf0pmGfj0IAtyKI"
            />
        </>
    );
};

SEO.propTypes = {
    location: PropTypes.object.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
};

export default SEO;
