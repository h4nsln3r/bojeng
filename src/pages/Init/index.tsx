import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import './intro.scss';
import ImageRotator from '../../components/ImageRotator/ImageRotator';
import boeng from '../../assets/logo-text/bojeng_logotyp_purple.png';
import CountdownTimer from '../../components/CountdownTimer/CountdownTimer';
import { PATHS } from '../../Routing';
import zuc from '../../assets/zuc.gif';
import Zucchini from '../Zucchini';
const Init = () => {
  const [showGif, setShowGif] = useState(false);
  const [showZucchini, setShowZucchini] = useState(false);
  const navigate = useNavigate();

  const handleCountdownClick = () => {
    setShowGif(true);
    setTimeout(() => {
      setShowZucchini(true);
    }, 6000);
  };

  return (
    <div className="container">
      {!showZucchini && showGif ? (
        <div className="gif-overlay">
          <img src={zuc} alt="Intro GIF" className="intro-gif" />
        </div>
      ) : !showZucchini ? (
        <>
          <ImageRotator intervalRange={[2000, 4000]} durationRange={[1000, 5000]} initialDelay={2000} />

          <main className="content">
            <div className="content__bojeng">
              <img className="content__bojeng--img" src={boeng} alt="boeng" />
              <br />
              <CountdownTimer targetDate="2025-06-06T00:00:00" onClickStart={handleCountdownClick} />
            </div>
          </main>

          <Footer />
        </>
      ) : (
        <Zucchini />
      )}
    </div>
  );
};

export default Init;
