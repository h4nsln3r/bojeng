import './_sections.scss';
import BojengImage from '../../assets/photos/listen.jpg';

const PRESS_PHOTOS = [
  // Lägg högupplösta bilder i /public/press eller /src/assets/press och uppdatera vägarna
  { src: '/press/bojeng_press_1.jpg', alt: 'Bojeng – pressbild 1' },
  { src: '/press/bojeng_press_2.jpg', alt: 'Bojeng – pressbild 2' },
  { src: '/press/bojeng_press_3.jpg', alt: 'Bojeng – pressbild 3' },
];

const Press = () => {
  return (
    <div className="container">
      <h2 className="section__title">Press</h2>
      <div className="press-grid">
        {PRESS_PHOTOS.map((p) => (
          <a key={p.src} href={p.src} target="_blank" rel="noreferrer" className="press-grid__item">
            <img src={BojengImage} alt={p.alt} loading="lazy" />
          </a>
        ))}
      </div>

      <div className="press-cards">
        <article className="press-card">
          <h3>Bio (kort)</h3>
          <p>
            Bojeng är ett [genre]-band från [stad]. Melodier med nerv, texterna på svenska och
            energi från repetition till scen. Debut-EP:n släpptes 2025 med uppföljande singlar under
            2026.
          </p>
        </article>

        <article className="press-card">
          <h3>Bio (lång)</h3>
          <p>
            Bojeng blandar [influens A], [influens B] och [influens C]. På scen är det tätt och
            intimt – med fokus på dynamik, körer och rytm. Bandet har spelat bl.a.
            [venues/festivaler] och arbetar nu med ny musik tillsammans med producent [namn].
          </p>
        </article>

        <article className="press-card">
          <h3>Presskit</h3>
          <ul>
            <li>
              <a href="/press/Bojeng-EPK.zip" download>
                Ladda ned EPK (zip)
              </a>
            </li>
            <li>
              <a href="/press/tech-rider.pdf" target="_blank" rel="noreferrer">
                Tech rider (PDF)
              </a>
            </li>
            <li>
              <a href="/press/press-release.pdf" target="_blank" rel="noreferrer">
                Pressmeddelande (PDF)
              </a>
            </li>
          </ul>
        </article>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Press;
