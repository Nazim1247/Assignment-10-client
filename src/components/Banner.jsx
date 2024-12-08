import React from 'react';
import slider1 from '../assets/slider1.jpg';
import slider2 from '../assets/slider2.jpg';
import slider3 from '../assets/slider3.webp';
import slider4 from '../assets/slider4.jpg';
import slider5 from '../assets/slider5.jpeg';
import slider6 from '../assets/slider6.webp';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
const Banner = () => {
    return (
        <div className='w-11/12 mx-auto py-8'>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper text-center">
                <SwiperSlide><img className='w-full h-56 md:h-[400px] rounded-lg' src={slider1} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full h-56 md:h-[400px] rounded-lg' src={slider2} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full h-56 md:h-[400px] rounded-lg' src={slider3} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full h-56 md:h-[400px] rounded-lg' src={slider4} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full h-56 md:h-[400px] rounded-lg' src={slider5} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full h-56 md:h-[400px] rounded-lg' src={slider6} alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;