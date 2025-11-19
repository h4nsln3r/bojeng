import './_sections.scss';
import BojengImage1 from '../../assets/photos/DSC03200.jpg';
import BojengImage2 from '../../assets/photos/DSC03172.jpg';
import BojengImage3 from '../../assets/photos/DSC03167.jpg';

const PRESS_PHOTOS = [
  { src: BojengImage1, alt: 'Bojeng – pressbild 1' },
  { src: BojengImage2, alt: 'Bojeng – pressbild 2' },
  { src: BojengImage3, alt: 'Bojeng – pressbild 3' },
];

const Press = () => {
  return (
    <div className="container">
      <h2 className="section__title">Press</h2>
      <div className="press-grid">
        {PRESS_PHOTOS.map((p, index) => (
          <a key={index} href={p.src} target="_blank" rel="noreferrer" className="press-grid__item">
            <img src={p.src} alt={p.alt} loading="lazy" />
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
