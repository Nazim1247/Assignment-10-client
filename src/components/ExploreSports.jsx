import React from 'react';
import { Link } from 'react-router-dom';

const ExploreSports = () => {
    return (
        <div className='w-11/12 mx-auto text-center space-y-2'>
            <h2 className='text-2xl font-bold'>Explore Our Sports Gear</h2>
            <p className='md:w-2/3 mx-auto'>Discover a wide range of sports equipment tailored for enthusiasts of every sport. From top-quality gear to essential accessories, we have everything you need to elevate your game.</p>
            <Link to='/sports' className='btn btn-secondary mx-auto'>Shop Now</Link>
        </div>
    );
};

export default ExploreSports;