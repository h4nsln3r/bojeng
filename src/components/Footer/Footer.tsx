import { FaFacebook, FaInstagram, FaSoundcloud, FaYoutube, FaSpotify } from 'react-icons/fa';
import './footer.scss';
import Icon from '../Icon';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__column footer__column--left">
        <div className="contact">CONTACT: BOJENGTHEBAND@GMAIL.COM</div>
      </div>
      <div className="footer__column footer__column--center footer__icons">
        <Icon
          link={'https://soundcloud.com/bojengband?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'}
          icon={<FaSoundcloud className="icon" />}
        />
        <Icon link={'https://www.youtube.com/@bojengband'} icon={<FaYoutube className="icon" />} />
        <Icon link={'https://www.instagram.com/bojengband'} icon={<FaInstagram className="icon" />} />
        <Icon link={'https://www.facebook.com/bojengband'} icon={<FaFacebook className="icon" />} />
        <Icon link={'https://open.spotify.com/artist/1BFiTHDwBWhaxVJ7JDi0fh?si=lf7AvMFTSg6xLO4ZO0fR-w'} icon={<FaSpotify className="icon" />} />
      </div>

      <div className="footer__column footer__column--right">
        {/* <div className="foto">
          Foto:{' '}
          <a href="https://www.instagram.com/urbanan/" target="true">
            Urban Anjar
          </a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
