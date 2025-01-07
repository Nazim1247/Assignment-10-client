import React, { useState } from 'react';
import { Zoom } from 'react-awesome-reveal';
import { Helmet } from 'react-helmet';
import { Link, useLoaderData } from 'react-router-dom';
import ProductsCard from './ProductsCard';

const AllSports = () => {
    const loadedProducts = useLoaderData();
    const [products, setProducts] = useState(loadedProducts);

    const handleSort = () => {
        // const sortedProducts = [...products].sort((a, b) => b.price - a.price);
        // setProducts(sortedProducts);

        fetch('https://my-assignment-10.vercel.app/all-products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(error => console.log(error))

    }
    return (
        <Zoom>
            <div className='w-11/12 mx-auto pb-8 mt-16'>
                <Helmet>
                    <title>Sports Equipment | All Sports Equipment</title>
                </Helmet>
                <div className='text-center mb-4'>
                    <button onClick={handleSort} className='btn btn-secondary mt-8' title='Click for Sort'>Sort by Price</button>
                </div>
                <div className="border rounded-md">
                    <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-4'>
                        {
                            products.map(product => <ProductsCard key={product._id} product={product}></ProductsCard>)
                        }
                    </div>
                    
                </div>

            </div>
        </Zoom>
    );
};

export default AllSports;