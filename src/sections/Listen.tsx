import BojengImage from '@/assets/photos/ngbgasd.jpg';
import SpotifyPlayer from '@/components/Players/Spotify';
import './_sections.scss';

const Listen = () => {
  return (
    <div className="container">
      <div className="section__row section__col--mobile section__row--space-between">
        <div className="section__col">
          <SpotifyPlayer />
        </div>
        <figure className="section__img--maxwidth-720 bojengimage--green" aria-hidden="true">
          <img className="bojengimage__media" src={BojengImage} alt="" />
          <span className="bojengimage__grain" />
          <span className="bojengimage__vignette" />
          <span className="bojengimage__label">BOJENG · LIVE @ NGBG &apos;24 · 33⅓ RPM</span>
          <span className="bojengimage__stamp">NGBG FESTIVAL · 2024</span>
        </figure>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Listen;
