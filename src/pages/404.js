import * as React from 'react';
import { Layout, NotFound } from '@components';

const NotFoundPage = ({ location }) => {
    return (
        <Layout location={location}>
            <NotFound />
        </Layout>
    );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
