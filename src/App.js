import React, { useState } from 'react';

// import components
import Header from './components/Header';
import BackTopBtn from './components/BackTopBtn';
import Slider from './components/Slider';
import Footer from './components/Footer';
import MenuChoice from './components/MenuChoice';

const App = () => {
  const [menu, setMenu] = useState('business')

  return (
    <div className='bg-white relative'>
      <MenuChoice menu={menu} setMenu={setMenu} />
      <Header menu={menu} setMenu={setMenu} />
      <Slider />
      <Footer />
      <BackTopBtn />
    </div>
  );
};

export default App;
