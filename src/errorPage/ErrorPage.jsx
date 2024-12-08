import React from 'react';
import { Helmet } from 'react-helmet';

const ErrorPage = () => {
    return (
        <div>
            <Helmet>
            <title>Sports Equipment | Error</title>
            </Helmet>
            <h2 className='text-3xl text-red-600 text-center mt-12'>Not Found Data</h2>
        </div>
    );
};

export default ErrorPage;