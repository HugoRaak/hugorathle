import * as React from 'react';
import { GlobalHead, Layout, NotFound } from '@components';
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

export const Head = ({ location }) => {
    return <GlobalHead location={location} title="Page Not Found" />;
};

Head.propTypes = {
    location: PropTypes.object.isRequired,
};
