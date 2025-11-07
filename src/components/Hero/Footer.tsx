import React from 'react';
import './hero.scss';
import Icon from '../Icon';
import { FaFacebook, FaInstagram, FaSoundcloud, FaYoutube, FaSpotify } from 'react-icons/fa';
const LINKS = {
  Soundcloud:
    'https://soundcloud.com/bojengband?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
  Youtube: 'https://www.youtube.com/@bojengband',
  Instagram: 'https://www.instagram.com/bojengband',
  Facebook: 'https://www.facebook.com/bojengband',
  Spotify: 'https://open.spotify.com/artist/1BFiTHDwBWhaxVJ7JDi0fh?si=lf7AvMFTSg6xLO4ZO0fR-w',
};
const HeroFooter = () => {
  return (
    <div className="hero__footer">
      <div className="hero__footer__icons">
        <Icon link={LINKS.Soundcloud} icon={<FaSoundcloud className="icon" />} />
        <Icon link={LINKS.Youtube} icon={<FaYoutube className="icon" />} />
        <Icon link={LINKS.Instagram} icon={<FaInstagram className="icon" />} />
        <Icon link={LINKS.Facebook} icon={<FaFacebook className="icon" />} />
        <Icon link={LINKS.Spotify} icon={<FaSpotify className="icon" />} />
      </div>
      <div className="hero__footer__nav">V</div>
      <div className="hero__footer__mail">
        <a className="">CONTACT: BOJENGBAND@GMAIL.COM</a>
      </div>
    </div>
  );
};

export default HeroFooter;
