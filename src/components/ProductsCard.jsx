import React from 'react';
import { Link } from 'react-router-dom';

const ProductsCard = ({ product }) => {
    const { _id, name, rating, category, customization, userEmail, stockStatus, price, description, processingTime, userName, photo, } = product;
    return (
        <div className=''>
            <div className="card bg-base-100 shadow-xl">
                <figure className='p-6'>
                    <img
                        className='w-full h-56 rounded-lg'
                        src={photo}
                        alt="" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Item Name: {name}</h2>
                    <p>Category: {category}</p>
                    <p>Customization: {customization}</p>
                    <p>Description: {description}</p>
                    <p>Stock Status: {stockStatus}</p>
                    <p>Rating: {rating}</p>
                    <p>Price: {price}</p>
                    <p>User Name: {userName}</p>
                    <p>User Email: {userEmail}</p>
                    <p>processing Time: {processingTime}</p>
                    <div className="card-actions">
                        <Link to={`/productDetails/${_id}`} className="btn btn-primary">View Details</Link>
                    </div>
                </div>
            </div>            
        </div>
    );
};

export default ProductsCard;