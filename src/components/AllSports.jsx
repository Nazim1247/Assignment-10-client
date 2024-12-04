import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';

const AllSports = () => {
    const products = useLoaderData();
    return (
        <div>
            all products: {products.length}
            {
                products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
            }
        </div>
    );
};

export default AllSports;