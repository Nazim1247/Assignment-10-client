
import Banner from './Banner';
import { useLoaderData } from 'react-router-dom';
import SportsCategories from './SportsCategories';
import { Slide, Zoom } from 'react-awesome-reveal';
import ExploreSports from './ExploreSports';
import CustomerReviews from './CustomerReviews';
import { Helmet } from 'react-helmet';

const Home = () => {
    const products = useLoaderData();

    return (
        <div >
            <Helmet>
                <title>Sports Equipment | Home</title>
            </Helmet>

            <Zoom>
                <div>
                <Banner></Banner>
                </div>
            </Zoom>

            <Slide duration={2000} delay={100} direction='right'>
                <div className='text-center'>
                    <h2 className='text-2xl font-bold mb-2'>Explore Our Premium Sports Equipment</h2>
                    <p className='md:w-2/3 mx-auto px-5'>Discover a wide range of high-quality sports gear and accessories designed to elevate your game. From durable equipment to stylish apparel, find everything you need to perform at your best.</p>
                
                </div>
            </Slide>

            <Slide duration={2000} delay={100}>
            <div>
                    <h2 className='text-center text-2xl font-bold mt-8'>Sports Categories</h2>
                    <div>
                    <SportsCategories products={products}></SportsCategories>
                    </div>
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