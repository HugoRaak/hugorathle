import React from 'react';
import { Layout, Home, About, Work, Contact } from '@components';

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

export default IndexPage;

export const Head = () => <title>Hugo Rathle</title>;
