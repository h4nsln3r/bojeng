import { useEffect } from 'react';
import './_sections.scss';
import BojengImage from '../../assets/photos/DSC03690.jpg';
import { LINKS } from '@/data/socials';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaSpotify } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import Icon from '../Icon';
import { useTranslation } from 'react-i18next';

const SOCIALS = [
  {
    name: 'Instagram',
    href: LINKS.Instagram,
    aria: 'Instagram',
    icon: <FaInstagram className="icon" />,
  },
  {
    name: 'Facebook',
    href: LINKS.Facebook,
    aria: 'Facebook',
    icon: <FaFacebook className="icon" />,
  },
  { name: 'Spotify', href: LINKS.Spotify, aria: 'Spotify', icon: <FaSpotify className="icon" /> },
  { name: 'YouTube', href: LINKS.YouTube, aria: 'YouTube', icon: <FaYoutube className="icon" /> },
];

const Contact = () => {
  const { t } = useTranslation();
  // Laddar LightWidget-skriptet korrekt i React
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.lightwidget.com/widgets/lightwidget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="container">
      <h2 className="section__title">{t('contact.title')}</h2>
      <div className="section__row section__col--mobile">
        <div className="contact-card">
          <p>
            {t('contact.bookingPress')}{' '}
            <a href="mailto:BOJENGBAND@gmail.com" className="link-underline">
              BOJENGBAND@gmail.com
            </a>
          </p>

          <ul className="socials">
            {SOCIALS.map((s) => (
              <li className="" key={s.name}>
                <Icon link={s.href} icon={s.icon} />
                <a href={s.href} aria-label={s.aria} target="_blank" rel="noreferrer">
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <img className="section__img--maxwidth-720" src={BojengImage} />
      </div>
      <br />
      <br />
    </div>
  );
};

export default Contact;
