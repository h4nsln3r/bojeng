import React from 'react';
import './hero.scss';
import SocialLinks from '@/components/SocialLinks';
import { SlArrowDown } from 'react-icons/sl';
import { useTranslation } from 'react-i18next';

const HeroFooter = () => {
  const { t } = useTranslation();
  return (
    <div className="hero__footer">
      <div className="hero__footer__icons">
        <SocialLinks />
      </div>
      <div className="hero__footer__nav">
        <a href="#listen">
          <SlArrowDown />
        </a>
      </div>
      <div className="hero__footer__mail">
        <a href="mailto:BOJENGBAND@GMAIL.COM">{t('hero.contactPrefix')} BOJENGBAND@GMAIL.COM</a>
      </div>
    </div>
  );
};

export default HeroFooter;
