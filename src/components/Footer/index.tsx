// import { FaFacebook, FaInstagram, FaSoundcloud, FaYoutube, FaSpotify } from 'react-icons/fa';
// import Icon from '../Icon';

import './footer.scss';

// const LINKS = {
//   Soundcloud:
//     'https://soundcloud.com/bojengband?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
//   Youtube: 'https://www.youtube.com/@bojengband',
//   Instagram: 'https://www.instagram.com/bojengband',
//   Facebook: 'https://www.facebook.com/bojengband',
//   Spotify: 'https://open.spotify.com/artist/1BFiTHDwBWhaxVJ7JDi0fh?si=lf7AvMFTSg6xLO4ZO0fR-w',
// };

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© {new Date().getFullYear()} Bojeng</p>
        <a href="#top" className="back-to-top">
          Till toppen ↑
        </a>
      </div>
    </footer>
  );
};

export default Footer;
