import './_sections.scss';

const SOCIALS = [
  { name: 'Instagram', href: 'https://instagram.com/bojeng', aria: 'Instagram' },
  { name: 'Spotify', href: 'https://open.spotify.com/artist/XXX', aria: 'Spotify' },
  { name: 'YouTube', href: 'https://youtube.com/@bojeng', aria: 'YouTube' },
  { name: 'TikTok', href: 'https://tiktok.com/@bojeng', aria: 'TikTok' },
];

const Contact = () => {
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
      <br />
      <br />
    </div>
  );
};

export default Contact;
