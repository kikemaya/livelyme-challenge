import React, { useState, useEffect } from 'react';

// import react scroll
import { animateScroll as scroll } from 'react-scroll';

// import icon
import { ChevronUpIcon } from '@heroicons/react/outline';

const BackTopBtn = () => {

  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 200 ? setShow(true) : setShow(false);
    });
  });

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    show && (
      <button
        onClick={() => scrollToTop()}
        className='bg-btn_imlively hover:bg-btn_imlively-hover
        text-white w-12 h-12 rounded-full fixed right-6
        bottom-6 md:right-24 md:bottom-24 cursor-pointer flex justify-center items-center
        transition-all'
      >
        <ChevronUpIcon className='w-6 h-6' />
      </button>
    )
  );
};

export default BackTopBtn;
