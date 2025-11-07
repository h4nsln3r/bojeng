import { useEffect } from 'react';
import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';

// === Dummy data – byt till riktiga länkar/filer ===
const LATEST_SINGLE = {
  title: 'Ny singel: ”Ljus över Bojeng”',
  spotify: 'https://open.spotify.com/embed/track/XXXXXXXXXXXX', // byt
  apple: 'https://embed.music.apple.com/se/album/XXXXXXXXXXXX', // byt
  soundcloud: 'https://w.soundcloud.com/player/?url=XXXXXXXXXX', // byt
};

const VIDEO = {
  mux: 'https://player.mux.com/XXXXXXXXXXXX?autoplay=0&muted=0&loop=0',
  youtube: 'https://www.youtube.com/embed/XXXXXXXXXXX',
};

const SHOWS = [
  { date: '2025-12-05', city: 'Malmö', venue: 'Plan B', link: '#' },
  { date: '2026-01-17', city: 'Göteborg', venue: 'Pustervik (lilla)', link: '#' },
  { date: '2026-02-08', city: 'Stockholm', venue: 'Debaser', link: '#' },
];

const PRESS_PHOTOS = [
  // Lägg högupplösta bilder i /public/press eller /src/assets/press och uppdatera vägarna
  { src: '/press/bojeng_press_1.jpg', alt: 'Bojeng – pressbild 1' },
  { src: '/press/bojeng_press_2.jpg', alt: 'Bojeng – pressbild 2' },
  { src: '/press/bojeng_press_3.jpg', alt: 'Bojeng – pressbild 3' },
];

const SOCIALS = [
  { name: 'Instagram', href: 'https://instagram.com/bojeng', aria: 'Instagram' },
  { name: 'Spotify', href: 'https://open.spotify.com/artist/XXX', aria: 'Spotify' },
  { name: 'YouTube', href: 'https://youtube.com/@bojeng', aria: 'YouTube' },
  { name: 'TikTok', href: 'https://tiktok.com/@bojeng', aria: 'TikTok' },
];

export default function App() {
  useEffect(() => {
    // Scroll till sektion via hash (t.ex. /#shows)
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <>
      <Header />

      <main>
        <Hero />

        <section id="listen" className="section section--listen">
          <div className="container">
            <h2 className="section__title">Lyssna</h2>
            <p className="section__lede">{LATEST_SINGLE.title}</p>

            <div className="players">
              {LATEST_SINGLE.spotify && (
                <div className="player-card">
                  <h3>Spotify</h3>
                  <div className="ratio">
                    <iframe
                      title="Spotify"
                      src={LATEST_SINGLE.spotify}
                      loading="lazy"
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    />
                  </div>
                </div>
              )}

              {LATEST_SINGLE.apple && (
                <div className="player-card">
                  <h3>Apple Music</h3>
                  <div className="ratio">
                    <iframe title="Apple Music" src={LATEST_SINGLE.apple} loading="lazy" />
                  </div>
                </div>
              )}

              {LATEST_SINGLE.soundcloud && (
                <div className="player-card">
                  <h3>SoundCloud</h3>
                  <div className="ratio">
                    <iframe title="SoundCloud" src={LATEST_SINGLE.soundcloud} loading="lazy" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <section id="watch" className="section section--watch">
          <div className="container">
            <h2 className="section__title">Se</h2>
            <div className="video-wrap">
              <div className="ratio ratio--video">
                <iframe
                  title="Video"
                  src={VIDEO.mux || VIDEO.youtube}
                  allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="shows" className="section section--shows">
          <div className="container">
            <h2 className="section__title">Spelningar</h2>
            <ul className="shows-list">
              {SHOWS.map((s) => (
                <li key={s.date} className="shows-list__item">
                  <span className="shows-list__date">{formatDate(s.date)}</span>
                  <span className="shows-list__city">{s.city}</span>
                  <span className="shows-list__venue">{s.venue}</span>
                  <a
                    className="btn btn--ghost"
                    href={s.link}
                    aria-label={`Biljetter: ${s.city} – ${s.venue}`}
                  >
                    Biljetter
                  </a>
                </li>
              ))}
            </ul>
            <p className="section__fineprint">
              Fler datum släpps löpande – följ oss i sociala kanaler.
            </p>
          </div>
        </section>

        <section id="press" className="section section--press">
          <div className="container">
            <h2 className="section__title">Press</h2>
            <div className="press-grid">
              {PRESS_PHOTOS.map((p) => (
                <a
                  key={p.src}
                  href={p.src}
                  target="_blank"
                  rel="noreferrer"
                  className="press-grid__item"
                >
                  <img src={p.src} alt={p.alt} loading="lazy" />
                </a>
              ))}
            </div>

            <div className="press-cards">
              <article className="press-card">
                <h3>Bio (kort)</h3>
                <p>
                  Bojeng är ett [genre]-band från [stad]. Melodier med nerv, texterna på svenska och
                  energi från repetition till scen. Debut-EP:n släpptes 2025 med uppföljande singlar
                  under 2026.
                </p>
              </article>

              <article className="press-card">
                <h3>Bio (lång)</h3>
                <p>
                  Bojeng blandar [influens A], [influens B] och [influens C]. På scen är det tätt
                  och intimt – med fokus på dynamik, körer och rytm. Bandet har spelat bl.a.
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
          </div>
        </section>

        <section id="contact" className="section section--contact">
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
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

function formatDate(input: string) {
  const d = new Date(input + 'T12:00:00');
  return d.toLocaleDateString('sv-SE', { year: 'numeric', month: 'short', day: '2-digit' });
}
