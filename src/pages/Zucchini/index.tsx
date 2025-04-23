import { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import boeng from '../../assets/logo-text/bojeng_logotyp_purple.png';
import zuc from '../../assets/zuc.gif';
import './zucchini.scss';
import Merch from '../../components/Merch';
import Footer from '../../components/Footer/Footer';
import ImageRotator from '../../components/ImageRotator/ImageRotator';
import Gigs from '../../components/Gigs';
const gigs = [
  { date: '2025-05-03', time: '20:00', location: 'Pustervik, Göteborg' },
  { date: '2025-06-15', time: '21:30', location: 'Debaser, Stockholm' },
  { date: '2025-07-07', time: '18:00', location: 'Trädgården, Malmö' },
];

const Zucchini = () => {
  return (
    <div className="container">
      <ImageRotator intervalRange={[2000, 4000]} durationRange={[1000, 5000]} initialDelay={6000} />
      <div className="z-index--1">
        {/* LOGGA */}
        <header className="logo-header">
          <img src={boeng} alt="Bojeng logo" className="logo-img" />
        </header>

        <div className="flex--3 max-width--800 margin__bottom--4">
          <section className="section__spotify">
            <iframe
              src="https://open.spotify.com/embed/album/0xtOxVRRaA0kW7X4PlbtuP?utm_source=generator"
              width="100%"
              height="420px"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Spotify Player"></iframe>
          </section>
          <div className="mitt-logo">
            <img src={boeng} alt="Bojeng logo" className="logo-img" />
          </div>
          <Gigs />
        </div>
        <Merch />
      </div>
    </div>
  );
};

export default Zucchini;
