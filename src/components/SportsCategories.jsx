import React, { useState } from 'react';
import ProductsCard from './ProductsCard';

const categories = ["Equipments", "Cricket Gear", "Football", "Tennis ball", "Basketball", "Gym Equipment"]

const SportsCategories = ({ products }) => {
    // console.log(products)
    const [selectedCategory, setSelectedCategory] = useState('Equipments');
    const filterProduct = selectedCategory === 'Equipments' ? products : products.filter((item) => item.category === selectedCategory)
    // console.log(filterProduct)

    return (
        <div className='w-11/12 mx-auto'>

            <div className='grid md:grid-cols-3 lg:grid-cols-6 items-center gap-5 py-5'>
                {
                    categories.map(category => <button key={category} className={`px-4 py-2 rounded-lg ${selectedCategory === category ? "bg-pink-500 text-white" : "bg-gray-800 text-white"
                        }`} onClick={() => setSelectedCategory(category)}>{category}</button>)
                }
            </div>
            <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-4 py-8'>
                {
                    filterProduct.map(product => <ProductsCard key={product._id} product={product}></ProductsCard>)
                }
            </div>
        </div>
    );
};

export default SportsCategories;