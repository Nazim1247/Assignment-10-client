import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyEquipment = () => {
    const loadedProducts = useLoaderData();
    const [products, setProducts] = useState(loadedProducts)

    const handleDelete =(id)=>{
        console.log(id)
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
              
              fetch(`http://localhost:5000/products/${id}`,{
                method: 'DELETE'
              })
              .then(res => res.json())
              .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
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
                    <figure className='p-6'>
                        <img
                            className='w-full md:w-96 h-56 md:h-96 rounded-lg'
                            src={product.photo}
                            alt="" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Item Name: {product.name}</h2>
                        <p>category: {product.category}</p>
                        <p>customization: {product.customization}</p>
                        <p>description: {product.description}</p>
                        <p>stockStatus: {product.stockStatus}</p>
                        <p>rating: {product.rating}</p>
                        <p>price: {product.price}</p>
                        <p>userName: {product.userName}</p>
                        <p>userEmail: {product.userEmail}</p>
                        <p>processingTime: {product.processingTime}</p>
                        <div className="card-actions">
                            <Link to={`/update/${product._id}`} className="btn btn-primary">Update</Link>
                            <button onClick={()=>handleDelete(product._id)} className="btn btn-primary">Delete</button>
                        </div>
                    </div>
                </div>))
            }

            
        </div>
    );
};

export default MyEquipment;