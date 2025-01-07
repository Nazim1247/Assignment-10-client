import React from 'react';
import { Helmet } from 'react-helmet';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <Helmet>
            <title>Sports Equipment | Error</title>
            </Helmet>
            <div className='text-center space-y-3 mt-12'>
            <h2 className='text-xl'>Opps !!</h2>
            <p className='text-3xl'>404</p>
            <h2 className='text-xl text-red-600'>Not Found Data</h2>
            <p><Link to={'/'} className='btn btn-primary'><FaArrowLeftLong /> Back to Home</Link></p>
            </div>
        </div>
    );
};

export default ErrorPage;