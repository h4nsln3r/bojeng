import Footer from '../../components/Footer/Footer';
import './intro.scss';
import ImageRotator from '../../components/ImageRotator/ImageRotator';
import boeng from '../../assets/logo-text/bojeng_logotyp_purple.png';
import CountdownTimer from '../../components/CountdownTimer/CountdownTimer';

const init = () => {
  return (
    <div className="container">
      <ImageRotator intervalRange={[2000, 4000]} durationRange={[1000, 5000]} initialDelay={6000} />

      <main className="content">
        <div className="content__bojeng">
          <img className="content__bojeng--img" src={boeng} alt="boeng" />
          <br />
          <CountdownTimer targetDate="2025-06-06T00:00:00" />
          {/* <div className="commingsoon">Is about to happen...</div>
          <div className="commingsoon2">till then</div> */}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default init;
