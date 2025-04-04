import { useState } from 'react';

import Sidebar from '../../components/Navigation/Sidebar/Sidebar';
import Footer from '../../components/Footer/Footer';

import './intro.scss';
import ImageRotator from '../../components/ImageRotator/ImageRotator';
import boeng from '../../assets/logo-text/bojeng_logotyp_purple.png';

const init = () => {
  return (
    <div className="container">
      <ImageRotator intervalRange={[2000, 4000]} durationRange={[1000, 5000]} initialDelay={6000} />
      <div className="header">
        <div className="header__bojeng">
          <img className="header__bojeng--img" src={boeng} alt="boeng" />
          <div className="commingsoon">Is about to happen...</div>
          <div className="commingsoon2">till then</div>
          
      
        </div>
      </div>
      <Sidebar />
      <main className="content"></main>
      <Footer />
    </div>
  );
};

export default init;
