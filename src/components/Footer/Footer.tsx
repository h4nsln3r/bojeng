import { FaFacebook, FaInstagram, FaSoundcloud, FaYoutube } from 'react-icons/fa';
import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__column footer__column--left">
        <div className="contact">CONTACT: BOJENGTHEBAND@GMAIL.COM</div>
      </div>
      <div className="footer__column footer__column--center footer__icons">
        <a href="https://soundcloud.com/bojengband?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" target="_blank" className="icon-column">
          <FaSoundcloud className="icon" />
        </a>
        <a href="https://www.youtube.com/@bojengband" target="_blank">
          <FaYoutube className="icon" />
        </a>
        <a href="https://www.instagram.com/bojengband" target="_blank">
          <FaInstagram className="icon" />
        </a>
        <a href="https://www.facebook.com/bojengband" target="_blank">
          <FaFacebook className="icon" />
        </a>
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
