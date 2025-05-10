import { useState } from 'react';
import ImageRotator from '../../components/ImageRotator/ImageRotator';
import CountdownTimer from '../../components/CountdownTimer';
import Footer from '../../components/Footer/Footer';

import BojengLogo from '../../assets/logo-text/bojeng_logotyp_white.png';
import ZucchiniGif from '../../assets/zuc.gif';
import Zucchini from '../Zucchini';
import Gigs from '../../components/Gigs';
import Merch from '../../components/Merch';

import BojengAlbum from '../../assets/images/zucchini_bojeng.png';

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
    <>
      <div className="container">
        {!showZucchiniPage && showGif ? (
          <div className="gif-overlay">
            <img src={ZucchiniGif} alt="Intro GIF" className="intro-gif" />
          </div>
        ) : !showZucchiniPage ? (
          <>
            <ImageRotator intervalRange={[2000, 4000]} durationRange={[1000, 5000]} initialDelay={2000} />

            <main className="start-content start-content--center z-index--1">
              <img className="bojeng__logo--large" src={BojengLogo} alt="Bojeng-Logo" />
              <CountdownTimer targetDate="2025-06-06T00:00:00" onClickStart={handleCountdownClick} />
            </main>
          </>
        ) : (
          <>
            <img src={BojengAlbum} alt="Bojeng logo" className="background__bojeng-album z-index--1" />
            <ImageRotator intervalRange={[4000, 4000]} durationRange={[500, 1000]} initialDelay={4000} />
            <main className="flex--row flex--start z-index--1">
              <div className="flex--row--col margin__bottom--auto">
                <iframe
                  className="spotify-player"
                  src="https://open.spotify.com/embed/album/0xtOxVRRaA0kW7X4PlbtuP?utm_source=generator"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title="Spotify Player"></iframe>
                <iframe
                  className="youtube-player"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/xCPSnubQclw?si=ZMHVPkJweiJ70Jrw"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen></iframe>
              </div>

              <div className="flex--row--col">
                <Gigs />
                <Merch />
              </div>
            </main>
          </>
        )}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default Init;
