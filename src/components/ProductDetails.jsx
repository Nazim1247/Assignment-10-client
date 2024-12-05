import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
    const products = useLoaderData();
    const { name, rating, category, customization, userEmail, stockStatus, price, description, processingTime, userName, photo, } = products;
    return (
        <div className='w-11/12 mx-auto py-12'>

            <div className="card card-side bg-base-100 shadow-xl">
                <figure className='p-6'>
                    <img
                        className='w-full h-96 rounded-lg'
                        src={photo}
                        alt="" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Item Name:   {name}</h2>
                    <p>Category: {category}</p>
                    <p>Customization: {customization}</p>
                    <p>Description: {description}</p>
                    <p>Stock Status: {stockStatus}</p>
                    <p>Rating: {rating}</p>
                    <p>Price: {price}</p>
                    <p>User Name: {userName}</p>
                    <p>User Email: {userEmail}</p>
                    <p>processing Time: {processingTime}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;