import React from 'react';
import './hero.scss';
import Icon from '../Icon';
import { FaFacebook, FaInstagram, FaSoundcloud, FaYoutube, FaSpotify } from 'react-icons/fa';
import { SlArrowDown } from 'react-icons/sl';
import { LINKS } from '@/data/socials';

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
      <div className="hero__footer__nav">
        <a href="#listen">
          <SlArrowDown />
        </a>
      </div>
      <div className="hero__footer__mail">
        <a className="">CONTACT: BOJENGBAND@GMAIL.COM</a>
      </div>
    </div>
  );
};

export default HeroFooter;
