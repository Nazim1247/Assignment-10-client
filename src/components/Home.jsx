import React from 'react';
import Banner from './Banner';
import { useLoaderData } from 'react-router-dom';
import ProductsCard from './ProductsCard';

const Home = () => {
    const products = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <div className='text-center'>
                <h2 className='text-xl font-bold'>Explore Our Premium Sports Equipment</h2>
                <p className='md:w-2/3 mx-auto px-5'>Discover a wide range of high-quality sports gear and accessories designed to elevate your game. From durable equipment to stylish apparel, find everything you need to perform at your best.</p>
            </div>
            <div className='w-11/12 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4 py-8'>
            {
                products.map(product => <ProductsCard key={product._id} product={product}></ProductsCard>)
            }
            </div>
        </div>
    );
};

export default Home;