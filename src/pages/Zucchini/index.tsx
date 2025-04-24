import ImageRotator from '../../components/ImageRotator/ImageRotator';
import Merch from '../../components/Merch';
import Gigs from '../../components/Gigs';

import BojengLogo from '../../assets/logo-text/bojeng_logotyp_white.png';
import BojengAlbum from '../../assets/images/zucchini_bojeng.png';

const Zucchini = () => {
  return (
    <div className="container">
      <ImageRotator intervalRange={[2000, 4000]} durationRange={[1000, 5000]} initialDelay={6000} />

      <main className="content content--center z-index--1">
        <header>
          <img className="bojeng__logo" src={BojengLogo} alt="Bojeng-Logo" />
        </header>
        <div className="flex--3 max-width--800 margin__bottom--4">
          <section className="section__spotify">
            <iframe
              src="https://open.spotify.com/embed/album/0xtOxVRRaA0kW7X4PlbtuP?utm_source=generator"
              width="100%"
              height="420px"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Spotify Player"></iframe>
          </section>
          <div className="">
            <img src={BojengAlbum} alt="Bojeng logo" className="bojeng__album" />
          </div>
          <Gigs />
        </div>
        <Merch />
      </main>
    </div>
  );
};

export default Zucchini;
