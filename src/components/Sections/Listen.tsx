import BojengImage from '../../assets/photos/ngbgasd.jpg';
import { Card } from '../CardList';
import SpotifyPlayer from '../Players/Spotify';
import './_sections.scss';
import { useTranslation } from 'react-i18next';

const Listen = () => {
  const { t } = useTranslation();
  return (
    <div className="container">
      <div className="section__row section__col--mobile section__row--space-between">
        <div className="section__col">
          <h2 className="section__title">{t('listen.title')}</h2>
          <SpotifyPlayer />
          <Card />
          <br />
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
