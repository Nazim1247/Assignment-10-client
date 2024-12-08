import React from 'react';
import { Link } from 'react-router-dom';

const ProductsCard = ({ product }) => {
  const { _id, name, rating, category, stockStatus, price, processingTime, photo, } = product;
  return (
    <div className=''>
      <div className="card border-2 shadow-md">
        <figure className='p-6'>
          <img
            className='w-full h-56 rounded-lg'
            src={photo}
            alt="" />
        </figure>
        <div className="px-10 pb-6 space-y-2">
          <h2 className="card-title text-orange-500">{name}</h2>

          <div className='flex gap-4'>
            <p className='font-semibold'>category:</p>
            <p>{category}</p>
          </div>
          <div className='flex gap-4'>
            <p className='font-semibold'>stockStatus:</p>
            <p>Available Stock {stockStatus}</p>
          </div>
          <div className='flex gap-4'>
            <p className='font-semibold'>processingTime:</p>
            <p>{processingTime}</p>
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
          <div className="card-actions">
            <Link to={`/productDetails/${_id}`} className="btn btn-primary w-full" title='Click for Details'>View Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;