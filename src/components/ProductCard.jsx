import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { _id, name, rating, category, customization, userEmail, stockStatus, price, description, processingTime, userName, photo, } = product;
    return (
        <div>
            {/* <div className="card card-side bg-base-100 shadow-xl">
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
                        <Link to={`/productDetails/${_id}`} className="btn btn-primary">View Details</Link>
                    </div>
                </div>
            </div> */}

            <div className="">
                <table className="table">
                    
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>category</th>
                            <th>price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        <tr>
                            <th>{1}</th>
                            <td>{name}</td>
                            <td>{category}</td>
                            <td>{price}</td>
                            <td>
                            <Link to={`/productDetails/${_id}`} className="btn btn-primary">View Details</Link>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>

            
        </div>
    );
};

export default ProductCard;