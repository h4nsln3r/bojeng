import React from 'react';
import BojengImage1 from '../../assets/photos/DSC03200.jpg';
import BojengImage2 from '../../assets/photos/DSC03172.jpg';
import Button from '../Button';

const PRESS_PHOTOS = [
  { src: BojengImage1, alt: 'Bojeng – pressbild 1' },
  { src: BojengImage2, alt: 'Bojeng – pressbild 2' },
];
export const Merch = () => {
  return (
    <div className="container">
      <h2 className="section__title">Merch</h2>
      <div className="press-grid">
        {PRESS_PHOTOS.map((p, index) => (
          <a key={index} href={p.src} target="_blank" rel="noreferrer" className="press-grid__item">
            <img src={p.src} alt={p.alt} loading="lazy" />
          </a>
        ))}
      </div>

      <div className="press-cards">
        <article className="press-card">
          <h3>BOJENG T-SHIRT</h3>
          <Button href="#listen" ariaLabel="Biljetter: Malmö – KB">
            KÖP
          </Button>
        </article>

        <article className="press-card">
          <h3>Bio (lång)</h3>
          <p>
            Bojeng blandar [influens A], [influens B] och [influens C]. På scen är det tätt och
            intimt – med fokus på dynamik, körer och rytm. Bandet har spelat bl.a.
            [venues/festivaler] och arbetar nu med ny musik tillsammans med producent [namn].
          </p>
        </article>
      </div>
      <br />
      <br />
    </div>
  );
};
