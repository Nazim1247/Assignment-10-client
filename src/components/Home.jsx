import React, { useState } from 'react';
import Banner from './Banner';
import { useLoaderData } from 'react-router-dom';
import ProductsCard from './ProductsCard';
import SportsCategories from './SportsCategories';
import '../index.css';
import { FaToggleOff, FaToggleOn } from 'react-icons/fa';
import { Slide, Zoom } from 'react-awesome-reveal';
import ExploreSports from './ExploreSports';
import CustomerReviews from './CustomerReviews';
import { Helmet } from 'react-helmet';

const Home = () => {
    const products = useLoaderData();

    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme)
    }

    return (
        <div className={isDarkTheme ? 'dark-theme' : 'light-theme'}>
            <Helmet>
                <title>Sports Equipment | Home</title>
            </Helmet>
            <div className='w-11/12 mx-auto flex justify-end pt-4'>
                <button onClick={toggleTheme} className='btn-1'> {isDarkTheme ? <FaToggleOff className='text-4xl' title='Click for Light Mode' /> : <FaToggleOn className='text-4xl' title='Click for Dark Mode' />}</button>
            </div>

            <Zoom>
                <Banner></Banner>
            </Zoom>

            <Slide duration={2000} delay={100} direction='right'>
                <div className='text-center'>
                    <h2 className='text-2xl font-bold mb-2'>Explore Our Premium Sports Equipment</h2>
                    <p className='md:w-2/3 mx-auto px-5'>Discover a wide range of high-quality sports gear and accessories designed to elevate your game. From durable equipment to stylish apparel, find everything you need to perform at your best.</p>
                </div>

                <div>
                    <h2 className='text-center text-2xl font-bold mt-8'>Sports Categories</h2>
                    <SportsCategories></SportsCategories>
                </div>
            </Slide>

            <Slide duration={2000} delay={100}>
                <div className='w-11/12 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4 py-8'>
                    {
                        products.map(product => <ProductsCard key={product._id} product={product}></ProductsCard>)
                    }
                </div>
            </Slide>

            <Zoom>
                <div>
                    <CustomerReviews></CustomerReviews>
                </div>
            </Zoom>

            <Zoom>
                <div className=''>
                    <ExploreSports></ExploreSports>
                </div>
            </Zoom>

        </div>
    );
};

export default Home;