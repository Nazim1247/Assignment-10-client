import React, { useContext, useState } from 'react';
import { Zoom } from 'react-awesome-reveal';
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
    <Zoom>
      <div className='w-11/12 mx-auto pt-8 mt-16'>
        <Helmet>
          <title>Sports Equipment | My Equipment</title>
        </Helmet>

<table className="table">
                        
                        <thead className='text-gray-400'>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Rating</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {
                                products.map((product, i) => <tr key={product._id}>
                                    <th>{i + 1}</th>
                                    <td>{product.name}</td>
                                    <td>{product.category}</td>
                                    <td>${product.price}</td>
                                    <td>
                                        <div className='flex items-center gap-1'>
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
                                    </td>
                                    <td>
                                    <div className="card-actions">
                <Link to={`/update/${product._id}`} className="bg-primary text-white px-4 py-2 rounded-md" title='Go to Update Page'>Update</Link>
                <button onClick={() => handleDelete(product._id)} className="bg-secondary text-white px-4 py-2 rounded-md" title='Click for Delete'>Delete</button>
              </div>
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>

      </div>
    </Zoom>
  );
};

export default MyEquipment;