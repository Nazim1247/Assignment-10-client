import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyEquipment = () => {
  const loadedProducts = useLoaderData();
  const [products, setProducts] = useState(loadedProducts)
console.log(products)
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`https://my-assignment-10.vercel.app/products/${id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Product has been deleted.",
                icon: "success"
              });
              const remaining = products.filter(p => p._id !== id);
              setProducts(remaining);
            }
          })
      }
    });
  }
  return (
    <div className='w-11/12 mx-auto'>

      {
        products.map(product => (<div key={product._id} className="card md:card-side bg-base-100 shadow-xl mb-8">
          <figure className='p-6 ml-6'>
            <img
              className='w-full md:w-[400px] h-56 md:h-96'
              src={product.photo}
              alt="" />
          </figure>
          <div className="p-10 space-y-2">
            <div className='flex items-center gap-4'>
              <h2 className="card-title">Item Name:</h2>
              <h2 className="card-title">{product.name}</h2>
            </div>
            <div className='flex gap-4'>
              <p className='font-semibold'>description:</p>
              <p>{product.description}</p>
            </div>
            <div className='flex gap-4'>
              <p className='font-semibold'>category:</p>
              <p>{product.category}</p>
            </div>
            <div className='flex gap-4'>
              <p className='font-semibold'>customization:</p>
              <p>{product.customization}</p>
            </div>
            <div className='flex gap-4'>
              <p className='font-semibold'>stockStatus:</p>
              <p>Available Stock {product.stockStatus}</p>
            </div>
            <div className='flex gap-4'>
              <p className='font-semibold'>rating:</p>
              <p>{product.rating}</p>
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
              <p>$ {product.price}</p>
            </div>
            <div className='flex gap-4'>
              <p className='font-semibold'>processingTime:</p>
              <p>{product.processingTime}</p>
            </div>
            <div className='flex gap-4'>
              <p className='font-semibold'>userName:</p>
              <p>{product.userName}</p>
            </div>
            <div className='flex gap-4'>
              <p className='font-semibold'>userEmail:</p>
              <p>{product.userEmail}</p>
            </div>
            <div className="card-actions">
              <Link to={`/update/${product._id}`} className="btn btn-primary">Update</Link>
              <button onClick={() => handleDelete(product._id)} className="btn btn-primary">Delete</button>
            </div>
          </div>
        </div>))
      }


    </div>
  );
};

export default MyEquipment;