import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateProduct = () => {
    const product = useLoaderData();
    const { _id, name, rating, category, customization, userEmail, stockStatus, price, description, processingTime, userName, photo, } = product;

    const handleUpdateProduct = (e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const rating = form.rating.value;
        const category = form.category.value;
        const customization = form.customization.value;
        const userEmail = form.userEmail.value;
        const stockStatus = form.stockStatus.value;
        const price = form.price.value;
        const description = form.description.value;
        const processingTime = form.processingTime.value;
        const userName = form.userName.value;
        const photo = form.photo.value;
        const updatedProduct = {name,rating,category,customization,userEmail,stockStatus,price,description,processingTime,userName,photo,};
    
        // send data to the server
        fetch(`http://localhost:5000/products/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                Swal.fire({
                    title: 'Success!',
                    text: 'Product Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (
        <div>
            <div className='lg:w-3/4 mx-auto py-8'>
            <div className="text-center p-10">
                <h1 className="text-3xl font-bold">Update Product!</h1>
            </div>
            <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                <form onSubmit={handleUpdateProduct} className="card-body">
                    {/* form first row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Item Name</span>
                            </label>
                            <input type="text" name='name'
                            defaultValue={name}
                            placeholder="item name" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Stock Status</span>
                            </label>
                            <input type="text" name='stockStatus'
                            defaultValue={stockStatus}
                            placeholder="Stock Status" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* form second row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="text" name='rating'
                            defaultValue={rating}
                            placeholder="Rating" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name='price'
                            defaultValue={price}
                            placeholder="Price" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* form third row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input type="text" name='category'
                            defaultValue={category}
                            placeholder="Category" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" name='description'
                            defaultValue={description}
                            placeholder="description" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* form forth row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Customization</span>
                            </label>
                            <input type="text" name='customization'
                            defaultValue={customization}
                            placeholder="Customization" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Processing Time </span>
                            </label>
                            <input type="text" name='processingTime'
                            defaultValue={processingTime}
                            placeholder="Processing Time" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* form 5th row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">User Email</span>
                            </label>
                            <input type="text" name='userEmail'
                            defaultValue={userEmail}
                            placeholder="User Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input type="text" name='userName'
                            defaultValue={userName}
                            placeholder="User Name" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* form 6th row */}
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name='photo'
                        defaultValue={photo}
                        placeholder="Photo url" className="input input-bordered" required />

                    </div>
                    
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Update Product</button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
};

export default UpdateProduct;