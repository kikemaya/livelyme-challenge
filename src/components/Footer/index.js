import React from 'react';

// import logo
import LogoWhite from '../../assets/img/logo-white.svg';

const Footer = () => {
  return (
    <footer className='bg-footer py-6'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between'>
          <div>
            <img src={LogoWhite} alt='logo white' className='w-32'/>
          </div>
          <p className='text-white text-center opacity-80 text-[15px] px-4 sm:px-0'>
            &copy; 2022 Enrique Maya. Made with ❤️ for the livelyme challenge.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;