import BojengImage from '../../assets/photos/ngbgasd.jpg';
import { Card } from '../CardList';
import SpotifyPlayer from '../Players/Spotify';
import './_sections.scss';

const Listen = () => {
  return (
    <div className="container">
      <div className="section__row section__col--mobile section__row--space-between">
        <div className="section__col">
          <h2 className="section__title">Lyssna</h2>
          <SpotifyPlayer />
          <br />
          <Card />
        </div>
        <img className="section__img--maxwidth-720 bojengimage--green" src={BojengImage} />
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Listen;
