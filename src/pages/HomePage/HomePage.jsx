// src/pages/HomePage.jsx
import React from 'react';

import Slideshow from './components/slideshow';
import Timecounter from './components/Timecounter';
import Updates from './components/Updates';
import Carosel from './components/Carosel';
import Teams from './components/Teams';


const HomePage = () => {
  return (
    <div>
      
      <Slideshow/>
      <Timecounter/>
      <Updates/>
      <Teams/>
      <Carosel/>
    </div>
  );
};

export default HomePage;
