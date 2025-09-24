import { useState } from 'react';
import ImageRotator from '../../components/ImageRotator/ImageRotator';
import CountdownTimer from '../../components/CountdownTimer';
import Footer from '../../components/Footer/Footer';

import BojengLogo from '../../assets/logo-text/bojeng_logotyp_white.png';
import ZucchiniGif from '../../assets/zuc.gif';
import Gigs from '../../components/Gigs';
import Merch from '../../components/Merch';

import BojengAlbum from '../../assets/images/zucchini_bojeng.png';
import BojengReleaseDesk from '../../assets/images/BOJENG_POSTER_RELEASEFEST.jpg';

const Init = () => {
  const [showGif, setShowGif] = useState(false);
  const [showZucchiniPage, setShowZucchiniPage] = useState(false);

  const handleCountdownClick = () => {
    setShowGif(true);
    setTimeout(() => {
      setShowGif(false);
      setShowZucchiniPage(true);
    }, 3000);
  };

  return (
    <>
      <div className="container">
        {!showZucchiniPage && showGif ? (
          <div className="gif-overlay">
            <img src={ZucchiniGif} alt="Intro GIF" className="intro-gif" />
          </div>
        ) : !showZucchiniPage ? (
          <>
            <ImageRotator intervalRange={[2000, 4000]} durationRange={[2500, 6000]} initialDelay={2000} />

            <main className="start-content start-content--center z-index--1">
              <img className="bojeng__logo--large" src={BojengLogo} alt="Bojeng-Logo" />
              <CountdownTimer targetDate="2025-05-25T00:00:00" onClickStart={handleCountdownClick} />
            </main>
          </>
        ) : (
          <main></main>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Init;
