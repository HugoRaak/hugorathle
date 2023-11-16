import React from 'react';
import { Layout, Home, About, Work, Contact } from '@components';
import PropTypes from 'prop-types';

const IndexPage = ({ location }) => {
    return (
        <Layout location={location}>
            <Home />
            <About />
            <Work />
            <Contact />
        </Layout>
    );
};

IndexPage.propTypes = {
    location: PropTypes.object.isRequired,
};

export default IndexPage;

export const Head = () => <title>Hugo Rathle</title>;
