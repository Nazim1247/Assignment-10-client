import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Root = () => {
    return (
        <div className='max-w-[1280px] mx-auto'>
            <div className='bg-base-200 shadow-md'>
            <Navbar></Navbar>
            </div>
            <div className='min-h-[195px]'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;