import React from 'react';
import { Zoom } from 'react-awesome-reveal';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
    const product = useLoaderData();
    const { name, rating, category, customization, userEmail, stockStatus, price, description, processingTime, userName, photo, } = product;
    return (
        <Zoom>
            <div className='w-11/12 mx-auto py-12'>
                <Helmet>
                    <title>Sports Equipment | Product Details</title>
                </Helmet>
                <div className="card md:card-side bg-base-100 shadow-md">
                    <figure className='p-6'>
                        <img
                            className='w-full h-56 md:h-96 rounded-lg'
                            src={photo}
                            alt="" />
                    </figure>
                    <div className="p-10 space-y-2">
                        <div className=''>
                            <h2 className="card-title text-orange-500">{name}</h2>
                        </div>

                        <div className='flex gap-4'>
                            <p className='font-semibold'>category:</p>
                            <p>{category}</p>
                        </div>
                        <div className='flex gap-4'>
                            <p className='font-semibold'>customization:</p>
                            <p>{customization}</p>
                        </div>
                        <div className='flex gap-4'>
                            <p className='font-semibold'>stockStatus:</p>
                            <p>Available Stock {stockStatus}</p>
                        </div>
                        <div className='flex gap-4'>
                            <p className='font-semibold'>rating:</p>
                            <p>{rating}</p>
                            <div className="rating rating-sm">
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                <input
                                    type="radio"
                                    name="rating-6"
                                    className="mask mask-star-2 bg-orange-400"
                                    defaultChecked />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            <p className='font-semibold'>price:</p>
                            <p><span className='text-orange-500'>$</span> {price}</p>
                        </div>
                        <div className='flex gap-4'>
                            <p className='font-semibold'>processingTime:</p>
                            <p>{processingTime}</p>
                        </div>
                        <div className='flex gap-4'>
                            <p className='font-semibold'>userName:</p>
                            <p>{userName}</p>
                        </div>
                        <div className='flex gap-4'>
                            <p className='font-semibold'>userEmail:</p>
                            <p>{userEmail}</p>
                        </div>
                        <div className=''>
                            <p className='font-semibold'>description:</p>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Zoom>
    );
};

export default ProductDetails;