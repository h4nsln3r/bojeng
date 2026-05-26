import React from 'react';
import './hero.scss';
import BojengLogo from '../../assets/logo-text/bojeng_logotyp_white.png';
import HeroFooter from './Footer';
import { useTranslation } from 'react-i18next';

import zucWebm from '../../assets/gif/zuc.webm';
// Om du vill ha fallback kan du också exporta mp4 och använda den med <source>
// import zucMp4 from '../../assets/gif/zuc.mp4';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero" aria-label={t('hero.aria')} id="top">
      <div className="hero__bg" aria-hidden="true">
        <video className="hero__bgVideo" autoPlay loop muted playsInline preload="metadata">
          <source src={zucWebm} type="video/webm" />
        </video>
      </div>
      <div className="hero__overlay" aria-hidden="true" />

      <div className="container hero__inner">
        <h1 className="hero__title">
          <img src={BojengLogo} alt="Bojeng" />
        </h1>

        <div className="hero__cta">{/* CTA-knappar kan läggas till här */}</div>
      </div>

      <div className="container hero__footer-wrap">
        <HeroFooter />
      </div>
    </section>
  );
};

export default Hero;
