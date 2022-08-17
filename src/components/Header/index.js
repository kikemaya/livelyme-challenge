import React from 'react';

// import components
import Logo from '../../assets/img/logo.svg';

import NavMobile from '../Nav/NavMobile';

import { navBusiness, navIndividuals } from '../../data';

const Header = (props) => {

  const {
    menu
  } = props

  return (
    <header className='flex items-center h-24 z-10 px-5 shadow-md shadow-gray-900/10 sticky top-0 w-full bg-white'>
      <div className='container mx-auto flex items-center justify-between text-primary'>

        <a href='/' className='block lg:hidden'>
          <img src={Logo} alt='logo' />
        </a>

        <div className='items-center hidden lg:flex'>
          <a href='/' className='hidden lg:block'>
            <img src={Logo} alt='logo' />
          </a>
          <ul className='ml-8 text-sm flex space-x-8 capitalize'>
            {
              (menu === 'business' && navBusiness.left)
                ?
                navBusiness.left.map((item, index) => {
                  return <a href={item.href} key={index} className='hover:text-btn_imlively'><li>{item.name}</li></a>
                })
                :
                navIndividuals.left.map((item, index) => {
                  return <a href={item.href} key={index} className='hover:text-btn_imlively'><li>{item.name}</li></a>
                })
            }
          </ul>
        </div>

        <div className='items-center hidden lg:flex'>
          <ul className='mr-8 text-sm flex space-x-8 capitalize'>
            {
              (menu === 'business' && navBusiness.right)
                ?
                navBusiness.right.map((item, index) => {
                  return <a href={item.href} key={index} className='hover:text-btn_imlively'><li>{item.name}</li></a>
                })
                :
                navIndividuals.right.map((item, index) => {
                  return <a href={item.href} key={index} className='hover:text-btn_imlively'><li>{item.name}</li></a>
                })
            }
          </ul>

          {
            (menu === 'business' && navBusiness.right)
              ?
              <a
                href='https://livelyme.com/contact-sales/'
                className='btn btn-md bg-btn_imlively hover:bg-btn_imlively-hover md:btn-lg transition-all rounded-lg'>
                Contact Sales
              </a>
              :
              <a
                href='https://secure.livelyme.com/signup/start?_ga=2.237957895.623436556.1660686443-1647818060.1660340207'
                className='btn btn-md bg-btn_imlively hover:bg-btn_imlively-hover md:btn-lg transition-all rounded-lg'>
                Open account
              </a>
          }
        </div>

        <div className='lg:hidden'>
          <NavMobile menu={menu} />
        </div>

      </div>
    </header>
  );
};

export default Header;
