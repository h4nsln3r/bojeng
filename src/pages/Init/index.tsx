import { useState } from 'react';
import ImageRotator from '../../components/ImageRotator/ImageRotator';
import CountdownTimer from '../../components/CountdownTimer';
import Footer from '../../components/Footer/Footer';

import './init.scss';

import BojengLogo from '../../assets/logo-text/bojeng_logotyp_white.png';
import ZucchiniGif from '../../assets/zuc.gif';
import Zucchini from '../Zucchini';

const Init = () => {
  const [showGif, setShowGif] = useState(false);
  const [showZucchiniPage, setShowZucchiniPage] = useState(false);

  const handleCountdownClick = () => {
    setShowGif(true);
    setTimeout(() => {
      setShowGif(false);
      setShowZucchiniPage(true);
    }, 6000);
  };

  return (
    <div className="container">
      {!showZucchiniPage && showGif ? (
        <div className="gif-overlay">
          <img src={ZucchiniGif} alt="Intro GIF" className="intro-gif" />
        </div>
      ) : !showZucchiniPage ? (
        <>
          <ImageRotator intervalRange={[2000, 4000]} durationRange={[1000, 5000]} initialDelay={2000} />

          <main className="content content--center z-index--1">
            <img className="bojeng__logo--large" src={BojengLogo} alt="Bojeng-Logo" />
            <CountdownTimer targetDate="2025-06-06T00:00:00" onClickStart={handleCountdownClick} />
          </main>
        </>
      ) : (
        <Zucchini />
      )}
      <Footer />
    </div>
  );
};

export default Init;
