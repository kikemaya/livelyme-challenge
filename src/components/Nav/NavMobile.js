import React, { useState } from 'react';

// import icons
import { XIcon } from '@heroicons/react/outline';
import { MenuAlt3Icon } from '@heroicons/react/outline';

// import navigation data
import { navBusiness, navIndividuals } from '../../data';

// import framer
import { motion } from 'framer-motion';

const NavMobile = (props) => {
  const fullNavBusiness = Object.values(navBusiness).flat()
  const fullNavIndividuals = Object.values(navIndividuals).flat()

  const { menu } = props

  const [isOpen, setIsOpen] = useState(false);

  const circleVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 180,
      transition: {
        type: 'spring',
        stiffness: 160,
        damping: 60,
      },
    },
  };

  const ulVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  };

  return (
    <nav className='relative text-white'>
      <div
        onClick={() => setIsOpen(true)}
        className='cursor-pointer text-primary'
      >
        <MenuAlt3Icon className='w-8 h-8' />
      </div>

      {/* circle */}
      <motion.div
        variants={circleVariants}
        initial='hidden'
        animate={isOpen ? 'visible' : 'hidden'}
        className='w-4 h-4 rounded-full bg-btn_imlively fixed top-0 right-0'
      ></motion.div>

      <motion.ul
        variants={ulVariants}
        initial='hidden'
        animate={isOpen ? 'visible' : ''}
        className={`${isOpen ? 'right-0' : '-right-full'
          } fixed top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-300 overflow-hidden`}
      >
        <div
          onClick={() => setIsOpen(false)}
          className='cursor-pointer absolute top-8 right-8'
        >
          <XIcon className='w-8 h-8' />
        </div>
        {
          (
            menu === 'business' && fullNavBusiness.length > 0) ?
            fullNavBusiness.map((item, idx) => {
              return (
                <li key={idx} className='mb-8'>
                  <a
                    href={item.href}
                    offset={-70}
                    className='text-xl cursor-pointer capitalize'
                  >
                    {item.name}
                  </a>
                </li>
              );
            })

            :
            fullNavIndividuals.map((item, idx) => {
              return (
                <li key={idx} className='mb-8'>
                  <a
                    href={item.href}
                    offset={-70}
                    className='text-xl cursor-pointer capitalize'
                  >
                    {item.name}
                  </a>
                </li>
              );
            })
        }
        {
          (menu === 'business')
            ?
            <a
              href='https://livelyme.com/contact-sales/'
              className='btn btn-md
          bg-white
          md:btn-lg transition-all rounded-lg text-black'>
              Contact Sales
            </a>
            :
            <a
              href='https://secure.livelyme.com/signup/start?_ga=2.237957895.623436556.1660686443-1647818060.1660340207'
              className='btn btn-md bg-white text-black md:btn-lg transition-all rounded-lg'>
              Open account
            </a>

        }
      </motion.ul>
    </nav>
  );
};

export default NavMobile;
