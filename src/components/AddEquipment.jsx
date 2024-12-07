import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../providers/AuthProvider';
import { Zoom } from 'react-awesome-reveal';

const AddEquipment = () => {
    const {user} = useContext(AuthContext);

    const handleAddProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const rating = form.rating.value;
        const category = form.category.value;
        const customization = form.customization.value;
        const userEmail = form.userEmail.value;
        const stockStatus = form.stockStatus.value;
        const price = parseFloat(form.price.value);
        const description = form.description.value;
        const processingTime = form.processingTime.value;
        const userName = form.userName.value;
        const photo = form.photo.value;
        const newProduct = { name, rating, category, customization, userEmail, stockStatus, price, description, processingTime, userName, photo, };

        // send data to the server
        fetch('https://my-assignment-10.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <div>
            <Zoom>
            <div className='lg:w-3/4 mx-auto py-8'>
                <div className="text-center p-10">
                    <h1 className="text-3xl font-bold">Add Product!</h1>
                    <p className="py-6">
                        Add new sports products to our inventory with details like images, name, category, price, stock status, and customization options. User details are auto-filled for accountability. Secure and accessible only to authenticated users, ensuring efficient catalog management.
                    </p>
                </div>
                <div className="card bg-base-100 w-full shrink-0 shadow-md">
                    <form onSubmit={handleAddProduct} className="card-body">
                        {/* form first row */}
                        <div className='flex flex-col lg:flex-row gap-5'>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">User Email</span>
                                </label>
                                <input type="text" name='userEmail'
                                value={user.email}
                                placeholder="User Email" className="input input-bordered" readOnly />
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">User Name</span>
                                </label>
                                <input type="text" name='userName'
                                value={user.displayName}
                                placeholder="User Name" className="input input-bordered" readOnly />
                            </div>
                        </div>
                        {/* form second row */}
                        <div className='flex flex-col lg:flex-row gap-5'>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">Item Name</span>
                                </label>
                                <input type="text" name='name' placeholder="item name" className="input input-bordered" required />
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">Stock Status</span>
                                </label>
                                <input type="text" name='stockStatus' placeholder="Stock Status" className="input input-bordered" required />
                            </div>
                        </div>
                        {/* form third row */}
                        <div className='flex flex-col lg:flex-row gap-5'>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input type="text" name='rating' placeholder="Rating" className="input input-bordered" required />
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" name='price' placeholder="Price" className="input input-bordered" required />
                            </div>
                        </div>
                        {/* form forth row */}
                        <div className='flex flex-col lg:flex-row gap-5'>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">Category</span>
                                </label>
                                <input type="text" name='category' placeholder="Category" className="input input-bordered" required />
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <input type="text" name='description' placeholder="description" className="input input-bordered" required />
                            </div>
                        </div>
                        {/* form 5th row */}
                        <div className='flex flex-col lg:flex-row gap-5'>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">Customization</span>
                                </label>
                                <input type="text" name='customization' placeholder="Customization" className="input input-bordered" required />
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">Processing Time </span>
                                </label>
                                {/* <DatePicker
                                className='border-2 w-full py-3 px-4 rounded-lg'
                                name='processingTime'
                                    selected={selectedTime}
                                    onChange={handleTimeChange}
                                    showTimeSelect
                                    dateFormat="h:mm aa"
                                /> */}
                                <input type="text" name='processingTime' placeholder="Processing Time" className="input input-bordered" required />
                            </div>
                        </div>                      
                        {/* form 6th row */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="Photo url" className="input input-bordered" required />

                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Add Product</button>
                        </div>
                    </form>
                </div>
            </div>
            </Zoom>
        </div>
    );
};

export default AddEquipment;