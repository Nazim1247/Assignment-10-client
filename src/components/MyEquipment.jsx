import React, { useContext, useState } from 'react';
import { Slide } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../providers/AuthProvider';
import { Helmet } from 'react-helmet';

const MyEquipment = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);

  fetch(`https://my-assignment-10.vercel.app/user-products/${user?.email}`)
    .then((response) => response.json())
    .then((data) => setProducts(data))
    .catch((error) => console.error("Error fetching equipment:", error));

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
    <Slide duration={2000} delay={100} direction='down'>
      <div className='w-11/12 mx-auto mt-8'>
        <Helmet>
          <title>Sports Equipment | My Equipment</title>
        </Helmet>
        {
          products?.map(product => (<div key={product._id} className="card md:card-side bg-base-100 shadow-md mb-8">
            <figure className='p-4 md:ml-4'>
              <img
                className='w-full h-56 md:h-96'
                src={product.photo}
                alt="" />
            </figure>
            <div className="p-6 md:p-10 space-y-2">
              <div className=''>
                <h2 className="card-title text-orange-500">{product.name}</h2>
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
                <p><span className='text-orange-500'>$</span> {product.price}</p>
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
              <div className=''>
                <p className='font-semibold'>description:</p>
                <p>{product.description}</p>
              </div>
              <div className="card-actions">
                <Link to={`/update/${product._id}`} className="btn btn-primary" title='Go to Update Page'>Update</Link>
                <button onClick={() => handleDelete(product._id)} className="btn btn-secondary" title='Click for Delete'>Delete</button>
              </div>
            </div>
          </div>))
        }

      </div>
    </Slide>
  );
};

export default MyEquipment;