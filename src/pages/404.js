import * as React from 'react';
import { Layout, NotFound } from '@components';
import PropTypes from 'prop-types';

const NotFoundPage = ({ location }) => {
    return (
        <Layout location={location}>
            <NotFound />
        </Layout>
    );
};

NotFoundPage.propTypes = {
    location: PropTypes.object.isRequired,
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
