import React from 'react';
import slider1 from '../assets/slider1.webp';
import slider2 from '../assets/slider2.jpeg';
import slider3 from '../assets/slider3.jpeg';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
const Banner = () => {
    return (
        <div className='w-11/12 mx-auto py-8'>
            {/* <img className='w-full h-[600px] mx-auto' src={banner} alt="" /> */}

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper text-center">
        <SwiperSlide><img className='w-full h-[600px]' src={slider1} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-[600px]' src={slider2} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-[600px]' src={slider3} alt="" /></SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Banner;