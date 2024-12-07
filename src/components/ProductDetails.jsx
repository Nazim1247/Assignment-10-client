import React from 'react';
import { Zoom } from 'react-awesome-reveal';
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
    const product = useLoaderData();
    const { name, rating, category, customization, userEmail, stockStatus, price, description, processingTime, userName, photo, } = product;
    return (
        <Zoom>
        <div className='w-11/12 mx-auto py-12'>

            <div className="card md:card-side bg-base-100 shadow-md">
                <figure className='p-6'>
                    <img
                        className='w-full h-56 md:h-96 rounded-lg'
                        src={photo}
                        alt="" />
                </figure>
                <div className="p-10 space-y-2">
                    <div className='flex items-center gap-4'>
                        <h2 className="card-title">Item Name:</h2>
                        <h2 className="card-title">{name}</h2>
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
                        <div className="rating">
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" defaultChecked />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <p className='font-semibold'>price:</p>
                        <p>$ {price}</p>
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