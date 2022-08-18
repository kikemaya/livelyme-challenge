import React from 'react';

// import services data
import { services } from '../../data';

const Services = () => {
  return (
    <section id='services' className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='text-footer section-title before:content-services relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-28 before:hidden before:lg:block'>
            So... How can i help you? 😊
          </h2>
          <p className='subtitle text-secondary'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam
            labore nisium illum cupiditate reiciendis a numquam
          </p>
        </div>
        <div className='grid lg:grid-cols-4 gap-8'>
          {services.map((service, index) => {
            const { icon, name, description } = service;
            return (
              <div className='p-6 rounded-2xl shadow-lg shadow-gray-900/10' key={index}>
                <div className='text-footer rounded-sm w-12 h-12 flex justify-center items-center mb-24 text-[28px]'>
                  {icon}
                </div>
                <h4 className='text-xl font-medium mb-2 text-footer'>{name}</h4>
                <p className='text-secondary'>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
