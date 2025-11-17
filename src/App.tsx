import { useEffect } from 'react';
import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Listen from './components/Sections/Listen';
// import Watch from './components/Sections/Watch';
import Shows from './components/Sections/Shows';
import Press from './components/Sections/Press';

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
          <Listen />
        </section>

        {/* TODO gör det snyggt */}
        {/* <section id="watch" className="section section--watch">
          <Watch />
        </section> */}

        <section id="shows" className="section section--shows">
          <Shows />
        </section>

        <section id="press" className="section section--press">
          <Press />
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
