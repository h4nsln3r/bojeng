import { FaFacebook, FaInstagram, FaSoundcloud, FaYoutube, FaSpotify } from 'react-icons/fa';
import './footer.scss';
import Icon from '../Icon';

const LINKS = {
  Soundcloud: 'https://soundcloud.com/bojengband?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
  Youtube: 'https://www.youtube.com/@bojengband',
  Instagram: 'https://www.instagram.com/bojengband',
  Facebook: 'https://www.facebook.com/bojengband',
  Spotify: 'https://open.spotify.com/artist/1BFiTHDwBWhaxVJ7JDi0fh?si=lf7AvMFTSg6xLO4ZO0fR-w',
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__column footer__column--left">
        <div className="contact">CONTACT: BOJENGTHEBAND@GMAIL.COM</div>
      </div>
      <div className="footer__column footer__column--center footer__icons">
        <Icon link={LINKS.Soundcloud} icon={<FaSoundcloud className="icon" />} />
        <Icon link={LINKS.Youtube} icon={<FaYoutube className="icon" />} />
        <Icon link={LINKS.Instagram} icon={<FaInstagram className="icon" />} />
        <Icon link={LINKS.Facebook} icon={<FaFacebook className="icon" />} />
        <Icon link={LINKS.Spotify} icon={<FaSpotify className="icon" />} />
      </div>
      <div className="footer__column footer__column--right"></div>
    </footer>
  );
};

export default Footer;
