import React from 'react';
import { SEO, Layout, Home, About, Work, Contact } from '@components';
import PropTypes from 'prop-types';

const IndexPage = ({ location }) => {
    return (
        <>
            <Layout location={location}>
                <Home />
                <About />
                <Work />
                <Contact />
            </Layout>
        </>
    );
};

IndexPage.propTypes = {
    location: PropTypes.object.isRequired,
};

export default IndexPage;

// eslint-disable-next-line react/prop-types
export const Head = ({ location }) => {
    return <SEO location={location} />;
};
