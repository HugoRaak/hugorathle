import * as React from 'react';
import { SEO, Layout, NotFound } from '@components';
import PropTypes from 'prop-types';

const NotFoundPage = ({ location }) => {
    return (
        <>
            <Layout location={location}>
                <NotFound />
            </Layout>
        </>
    );
};

NotFoundPage.propTypes = {
    location: PropTypes.object.isRequired,
};

export default NotFoundPage;

// https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
// eslint-disable-next-line react/prop-types
export const Head = ({ location }) => {
    return <SEO location={location} title="Page Not Found" />;
};
