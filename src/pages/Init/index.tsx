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
          <>
            <a
              className="bojeng__presave"
              href="https://open.spotify.com/album/0qN0CLMdj5unnYayYnl4FT?si=fkSyAxenRIWf5-5IglwMLQ"
              target="_blank"
              rel="noopener noreferrer">
              <span className="bojeng__presave--text">go&listen</span>
              <img src={BojengAlbum} alt="Bojeng logo" className="background__bojeng-album z-index--1" />
            </a>
            <ImageRotator intervalRange={[4000, 4000]} durationRange={[500, 1000]} initialDelay={4000} />
            <main className="flex__row z-index--1">
              <div className="flex__row--col margin__bottom--auto">
                <div className="flex__row--col--1">
                  <Gigs />

                  {/* <a href="https://share.amuse.io/track/bojeng-misery" className="presave__button" rel="noreferrer" target="_blank">
                    Presave new songs on spotify
                  </a> */}
                  {/* <br /> */}
                  <iframe
                    className="spotify-player"
                    src="https://open.spotify.com/embed/album/0qN0CLMdj5unnYayYnl4FT?utm_source=generator"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    title="Spotify Player"></iframe>
                </div>
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

              <div className="flex__row--col flex__row--start">
                <a className="bojeng__release" href="https://www.facebook.com/events/702256985855269" rel="noreferrer" target="_blank">
                  <img src={BojengReleaseDesk} alt="Bojeng logo" className="bojeng__release--img" />
                </a>
                <br />
                <br />
                <br />
                <Merch />
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
              </div>
            </main>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Init;
