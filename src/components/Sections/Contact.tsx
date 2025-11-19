import { useEffect } from 'react';
import './_sections.scss';
// import BojengImage from '../../assets/photos/DSC03701-3.jpg';

const SOCIALS = [
  { name: 'Instagram', href: 'https://instagram.com/bojengband', aria: 'Instagram' },
  { name: 'Spotify', href: 'https://open.spotify.com/artist/XXX', aria: 'Spotify' },
  { name: 'YouTube', href: 'https://youtube.com/@bojeng', aria: 'YouTube' },
  { name: 'TikTok', href: 'https://tiktok.com/@bojeng', aria: 'TikTok' },
];

const Contact = () => {
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
      <h2 className="section__title">Kontakt</h2>

      <div className="contact-card">
        <p>
          Bokning/press:{' '}
          <a href="mailto:booking@bojeng.com" className="link-underline">
            booking@bojeng.com
          </a>
        </p>

        <ul className="socials">
          {SOCIALS.map((s) => (
            <li key={s.name}>
              <a href={s.href} aria-label={s.aria} target="_blank" rel="noreferrer">
                {s.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* --- INSTAGRAM FEED --- */}
      <div className="instagram-feed">
        <h3 className="section__subtitle">Senaste från Instagram</h3>

        <iframe
          src="//lightwidget.com/widgets/ad42fc24466952b499b263d00fb8d9be.html"
          scrolling="no"
          // allowTransparency="true"
          className="lightwidget-widget instagram-embed"
          style={{ width: '100%', border: 0, overflow: 'hidden' }}
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
