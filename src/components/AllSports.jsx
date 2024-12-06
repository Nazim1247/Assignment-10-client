import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllSports = () => {
    const loadedProducts = useLoaderData();
    const [products, setProducts] = useState(loadedProducts);

    const handleSort = () => {
        const sortedProducts = [...products].sort((a, b) => b.price - a.price);
        setProducts(sortedProducts);

    }
    return (
        <div className='w-11/12 mx-auto py-8'>
            <div className='text-center mb-4'>
                <button onClick={handleSort} className='btn btn-secondary'>Sort by Price</button>
            </div>
            <div className="border-2">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            products.map((product, i) => <tr key={product._id}>
                                <th>{i + 1}</th>
                                <td>{product.name}</td>
                                <td>{product.category}</td>
                                <td>{product.price}</td>
                                <td>
                                    <Link to={`/productDetails/${product._id}`} className="btn btn-primary">View Details</Link>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllSports;