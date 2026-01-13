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
    <>
      <section className="hero" aria-label={t('hero.aria')} id="top">
        {/* Video-bakgrund */}
        <div className="hero__bg" aria-hidden="true">
          <video className="hero__bgVideo" autoPlay loop muted playsInline preload="metadata">
            <source src={zucWebm} type="video/webm" />
            {/* <source src={zucMp4} type="video/mp4" /> */}
          </video>
        </div>

        <div className="container hero__inner">
          <h1 className="hero__title">
            <img src={BojengLogo} alt="Bojeng" />
          </h1>

          {/* <p className="hero__subtitle">Ny musik ute nu</p> */}

          <div className="hero__cta">
            {/*
            <Button href="#listen" ariaLabel="Biljetter: Malmö – KB">
              Lyssna
            </Button>
            <Button href="#shows" variant="ghost" ariaLabel="Biljetter: Malmö – KB">
              Biljetter
            </Button>
            */}
          </div>
        </div>
      </section>

      <HeroFooter />
    </>
  );
};

export default Hero;
