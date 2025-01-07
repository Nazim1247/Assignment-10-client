import React from 'react';
import { Zoom } from 'react-awesome-reveal';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateProduct = () => {
    const product = useLoaderData();
    const { _id, name, rating, category, customization, userEmail, stockStatus, price, description, processingTime, userName, photo, } = product;

    const handleUpdateProduct = (e) => {
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
        const updatedProduct = { name, rating, category, customization, userEmail, stockStatus, price, description, processingTime, userName, photo, };

        // send data to the server
        fetch(`https://my-assignment-10.vercel.app/products/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
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
            <Helmet>
            <title>Sports Equipment | Update Product</title>
            </Helmet>
            <Zoom>
            <div className='lg:w-3/4 mx-auto py-8 mt-12'>
                <div className="text-center p-10">
                    <h1 className="text-3xl font-bold">Update Product!</h1>
                </div>
                <div className="card w-full border shadow-md">
                    <form onSubmit={handleUpdateProduct} className="card-body">
                        {/* form first row */}
                        <div className='flex flex-col lg:flex-row gap-5'>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span>User Email</span>
                                </label>
                                <input type="text" name='userEmail'
                                    defaultValue={userEmail}
                                    placeholder="User Email" className="input input-bordered bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100" readOnly />
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span>User Name</span>
                                </label>
                                <input type="text" name='userName'
                                    defaultValue={userName}
                                    placeholder="User Name" className="input input-bordered bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100" readOnly />
                            </div>
                        </div>
                        {/* form second row */}
                        <div className='flex flex-col lg:flex-row gap-5'>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span>Item Name</span>
                                </label>
                                <input type="text" name='name'
                                    defaultValue={name}
                                    placeholder="item name" className="input input-bordered bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100" required />
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span>Stock Status</span>
                                </label>
                                <input type="text" name='stockStatus'
                                    defaultValue={stockStatus}
                                    placeholder="Stock Status" className="input input-bordered bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100" required />
                            </div>
                        </div>
                        {/* form third row */}
                        <div className='flex flex-col lg:flex-row gap-5'>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span>Rating</span>
                                </label>
                                <input type="text" name='rating'
                                    defaultValue={rating}
                                    placeholder="Rating" className="input input-bordered bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100" required />
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span>Price</span>
                                </label>
                                <input type="text" name='price'
                                    defaultValue={price}
                                    placeholder="Price" className="input input-bordered bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100" required />
                            </div>
                        </div>
                        {/* form forth row */}
                        <div className='flex flex-col lg:flex-row gap-5'>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span>Category</span>
                                </label>
                                <input type="text" name='category'
                                    defaultValue={category}
                                    placeholder="Category" className="input input-bordered bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100" required />
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span>Description</span>
                                </label>
                                <input type="text" name='description'
                                    defaultValue={description}
                                    placeholder="description" className="input input-bordered bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100" required />
                            </div>
                        </div>
                        {/* form 5th row */}
                        <div className='flex flex-col lg:flex-row gap-5'>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span>Customization</span>
                                </label>
                                <input type="text" name='customization'
                                    defaultValue={customization}
                                    placeholder="Customization" className="input input-bordered bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100" required />
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span>Processing Time </span>
                                </label>
                                <input type="text" name='processingTime'
                                    defaultValue={processingTime}
                                    placeholder="Processing Time" className="input input-bordered bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100" required />
                            </div>
                        </div>

                        {/* form 6th row */}
                        <div className="form-control">
                            <label className="label">
                                <span>Photo URL</span>
                            </label>
                            <input type="text" name='photo'
                                defaultValue={photo}
                                placeholder="Photo url" className="input input-bordered bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100" required />

                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary" title='Click for Update Product'>Update Product</button>
                        </div>
                    </form>
                </div>
            </div>
            </Zoom>
        </div>
    );
};

export default UpdateProduct;