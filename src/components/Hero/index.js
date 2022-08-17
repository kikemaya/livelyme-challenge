import React from 'react';

import Deck from './../Deck'

const Hero = (props) => {

  const { title, small_description } = props

  return (
    <section
      className='h-[80vh] lg:h-[83vh] flex items-center
      overflow-hidden
      px-6 mb-5'
    >
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full pt-8'>
          <div className='flex-1 flex flex-col items-center lg:items-start'>
            <h1 className='
            text-4xl leading-[44px] text-primary
            md:text-4xl md:leading-tight lg:text-6xl
            lg:leading-[1.2] font-medium md:tracking-[-2px]
            text-center md:text-left'>
              {title}
            </h1>
            <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left text-secondary'>
              {small_description}
            </p>
            <button className='btn btn-md bg-btn_imlively hover:bg-btn_imlively-hover md:btn-lg transition-all rounded-lg'>
              Learn more
            </button>
          </div>
          <div className='hidden lg:flex flex-1 h-full items-center justify-center relative'>
            <Deck />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
