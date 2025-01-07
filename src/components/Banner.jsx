import React from 'react';
import slider1 from '../assets/slider1.jpg';
import slider2 from '../assets/slider2.jpg';
import slider3 from '../assets/slider3.webp';
import slider4 from '../assets/slider4.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
const Banner = () => {
    return (
        <div className='w-11/12 mx-auto mt-16 py-8'>

            <Swiper navigation={true} modules={[Navigation, Autoplay]} autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }} className="mySwiper text-center">
                <SwiperSlide><img className='w-full h-56 md:h-[400px] rounded-lg' src={slider1} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full h-56 md:h-[400px] rounded-lg' src={slider2} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full h-56 md:h-[400px] rounded-lg' src={slider3} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full h-56 md:h-[400px] rounded-lg' src={slider4} alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;