import { useEffect } from 'react';
import './_sections.scss';
import BojengImage from '@/assets/photos/DSC03690.jpg';
import { LINKS } from '@/data/socials';
import { FaInstagram, FaFacebook, FaSpotify, FaYoutube } from 'react-icons/fa';
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
      <div className="section__row section__col--mobile">
        <article className="contact-pass">
          <div className="contact-pass__clip" aria-hidden="true">
            <span className="contact-pass__hole" />
          </div>
          <div className="contact-pass__header">
            <span className="contact-pass__access">ALL ACCESS</span>
            <span className="contact-pass__category">BACKSTAGE · CREW · 2026</span>
          </div>
          <div className="contact-pass__body">
            <p className="contact-pass__label">{t('contact.bookingPress')}</p>
            <a href="mailto:BOJENGBAND@gmail.com" className="contact-pass__email link-underline">
              BOJENGBAND@gmail.com
            </a>
            <ul className="socials contact-pass__socials">
              {SOCIALS.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    aria-label={s.aria}
                    target="_blank"
                    rel="noreferrer"
                    className="socials__icon"
                  >
                    {s.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <span className="contact-pass__stamp" aria-hidden="true">
            VIP
          </span>
          <span className="contact-pass__barcode" aria-hidden="true" />
        </article>
        <figure className="contact-portrait">
          <div className="contact-portrait__stage">
            <img className="contact-portrait__media" src={BojengImage} alt="" />
            <span className="contact-portrait__wash" aria-hidden="true" />
            <span className="contact-portrait__spot" aria-hidden="true" />
            <span className="contact-portrait__grain" aria-hidden="true" />
          </div>
          <span className="contact-portrait__rule" aria-hidden="true" />
        </figure>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Contact;
