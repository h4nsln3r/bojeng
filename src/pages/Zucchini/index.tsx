import ImageRotator from '../../components/ImageRotator/ImageRotator';
import Merch from '../../components/Merch';
import Gigs from '../../components/Gigs';

import BojengAlbum from '../../assets/images/zucchini_bojeng.png';
import Footer from '../../components/Footer/Footer';

const Zucchini = () => {
  return (
    <div className="z-index--1">
      <ImageRotator intervalRange={[4000, 4000]} durationRange={[500, 1000]} initialDelay={4000} />
      <img src={BojengAlbum} alt="Bojeng logo" className="background__bojeng-album" />
      <main className="">
        <div className="flex--row">
          <iframe
            className="spotify-player"
            src="https://open.spotify.com/embed/album/0xtOxVRRaA0kW7X4PlbtuP?utm_source=generator"
            width="100%"
            height="420px"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Spotify Player"></iframe>
        </div>
        <div className="flex--row--col">
          <Gigs />
          <Merch />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Zucchini;
