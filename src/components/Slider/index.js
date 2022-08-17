import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../../swiper.css';

// import required modules
import { Pagination } from 'swiper';
import Hero from '../Hero';
import { slideData } from '../../data';

const Slider = () => {

  return (
    <>
      <Swiper
        direction='horizontal'
        breakpoints={{
          1023: {
            direction: "vertical"
          }
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className='mySwiper h-[85vh] w-full relative'
      >
        {
          slideData.map(item => {
            return (
              <SwiperSlide key={item.id}>
                <Hero title={item.title} small_description={item.small_description} />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
};

export default Slider;
