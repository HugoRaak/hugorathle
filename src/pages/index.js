import React from 'react';
import { GlobalHead, Layout, Home, About, Work, Contact } from '@components';
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

export const Head = ({ location }) => {
    return <GlobalHead location={location} />;
};

Head.propTypes = {
    location: PropTypes.object.isRequired,
};
