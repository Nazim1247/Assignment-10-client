import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
    const products = useLoaderData();
    const { name, rating, category, customization, userEmail, stockStatus, price, description, processingTime, userName, photo, } = products;
    return (
        <div>

            <div className="card card-side bg-base-100 shadow-xl">
                <figure>
                    <img
                        className='w-full h-96'
                        src={photo}
                        alt="" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{category}</p>
                    <p>{customization}</p>
                    <p>{description}</p>
                    <p>{stockStatus}</p>
                    <p>{rating}</p>
                    <p>{price}</p>
                    <p>{userName}</p>
                    <p>{userEmail}</p>
                    <p>{processingTime}</p>
                    <div className="card-actions">
                        <Link to='/productDetails' className="btn btn-primary">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;