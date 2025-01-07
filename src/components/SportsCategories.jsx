import React, { useState } from 'react';
import ProductsCard from './ProductsCard';
// import { Link } from 'react-router-dom';
// const productCategories = [
//     { id: 1, name: "Cricket Gear" },
//     { id: 2, name: "Football" },
//     { id: 3, name: "Tennis Ball" },
//     { id: 4, name: "Basketball" },
//     { id: 6, name: "Gym Equipment" },
//   ];

  const categories = ["Equipments","Cricket Gear","Football","Tennis Ball","Basketball","Gym Equipment"]

const SportsCategories = ({products}) => {
    // console.log(products)
    const [selectedCategory, setSelectedCategory] = useState('Equipments');
    const filterProduct = selectedCategory === 'Equipments'?products:products.filter((item)=> item.category === selectedCategory)

    return (
        <div className='w-11/12 mx-auto'>
            
            <div className='grid md:grid-cols-3 lg:grid-cols-6 items-center gap-5 py-5'>
            {
                categories.map(category => <button key={category} className={`px-4 py-2 rounded-lg ${
                    selectedCategory === category ? "bg-pink-500 text-white" : "bg-gray-800 text-white"
                  }`} onClick={() => setSelectedCategory(category)}>{category}</button>)
            }
            </div>
            <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-4 py-8'>
            {
                filterProduct.map(product => <ProductsCard key={product._id} product={product}></ProductsCard>)
            }
            </div>

            {/* {
                categories.map(category => <Link key={category.id} className='btn btn-secondary' to={`/sports`} title='See Our Products'>{category.name}</Link>)
            } */}
            
        </div>
    );
};

export default SportsCategories;