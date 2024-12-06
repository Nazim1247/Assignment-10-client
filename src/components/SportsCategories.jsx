import React from 'react';
import { Link } from 'react-router-dom';
const categories = [
    { id: 1, name: "Cricket Gear" },
    { id: 2, name: "Football Equipment" },
    { id: 3, name: "Tennis Accessories" },
    { id: 4, name: "Basketball Equipment" },
    { id: 5, name: "Running Equipment" },
    { id: 6, name: "Gym Equipment" },
  ];

const SportsCategories = () => {
    return (
        <div className='w-11/12 mx-auto md:flex justify-between items-center gap-5 py-5'>
            
            {
                categories.map(category => <Link key={category.id} className='btn' to={`/sports`}>{category.name}</Link>)
            }
            
        </div>
    );
};

export default SportsCategories;