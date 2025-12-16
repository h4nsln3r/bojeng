import './_sections.scss';
import BojengImage1 from '../../assets/photos/DSC03200.jpg';
import BojengImage2 from '../../assets/photos/DSC03172.jpg';
import BojengImage3 from '../../assets/photos/DSC03167.jpg';
import { useTranslation } from 'react-i18next';

const PRESS_PHOTOS = [
  { src: BojengImage1, altKey: 'press.photo1Alt' },
  { src: BojengImage2, altKey: 'press.photo2Alt' },
  { src: BojengImage3, altKey: 'press.photo3Alt' },
];

const Press = () => {
  const { t } = useTranslation();
  return (
    <div className="container">
      <h2 className="section__title">{t('press.title')}</h2>
      <div className="press-grid">
        {PRESS_PHOTOS.map((p, index) => (
          <a key={index} href={p.src} target="_blank" rel="noreferrer" className="press-grid__item">
            <img src={p.src} alt={t(p.altKey)} loading="lazy" />
          </a>
        ))}
      </div>

      <div className="press-cards">
        <article className="press-card">
          <h3>{t('press.bioShortTitle')}</h3>
          <p>{t('press.bioShort')}</p>
        </article>

        <article className="press-card">
          <h3>{t('press.bioLongTitle')}</h3>
          <p>{t('press.bioLong')}</p>
        </article>

        <article className="press-card">
          <h3>{t('press.kitTitle')}</h3>
          <ul>
            <li>
              <a href="/press/Bojeng-EPK.zip" download>
                {t('press.kitEpkZip')}
              </a>
            </li>
            <li>
              <a href="/press/tech-rider.pdf" target="_blank" rel="noreferrer">
                {t('press.kitTechRider')}
              </a>
            </li>
            <li>
              <a href="/press/press-release.pdf" target="_blank" rel="noreferrer">
                {t('press.kitPressRelease')}
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
