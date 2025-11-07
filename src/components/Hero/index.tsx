import React from 'react';
import './hero.scss';
import BojengLogo from '../../assets/logo-text/bojeng_logotyp_white.png';
import HeroFooter from './Footer';
import Button from '../Button';

const Hero = () => {
  return (
    <>
      <section className="hero" aria-label="Bojeng hero" id="top">
        <div className="hero__bg" />

        <div className="container hero__inner">
          <h1 className="hero__title">
            <img src={BojengLogo} />
          </h1>
          {/* <p className="hero__subtitle">Ny musik ute nu</p> */}
          <div className="hero__cta">
            <Button href="#listen" ariaLabel="Biljetter: Malmö – KB">
              Lyssna
            </Button>
            <Button href="#shows" variant="ghost" ariaLabel="Biljetter: Malmö – KB">
              Biljetter
            </Button>
          </div>
        </div>
      </section>
      <HeroFooter />
    </>
  );
};

export default Hero;
