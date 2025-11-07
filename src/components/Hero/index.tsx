import React from 'react';
import './hero.scss';
import BojengLogo from '../../assets/logo-text/bojeng_logotyp_white.png';

const Hero = () => {
  return (
    <section className="hero" aria-label="Bojeng hero" id="top">
      <div className="hero__bg" />

      <div className="container hero__inner">
        <h1 className="hero__title">
          <img src={BojengLogo} />
        </h1>
        {/* <p className="hero__subtitle">Ny musik ute nu</p> */}
        <div className="hero__cta">
          <a className="btn btn--solid" href="#listen">
            Lyssna
          </a>
          <a className="btn btn--ghost" href="#shows">
            Biljetter
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
