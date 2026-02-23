import { useEffect } from 'react';
import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import { Listen, Shows, Contact } from './sections';

export default function App() {
  useEffect(() => {
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

        {/* <section id="merch" className="section section--merch">
          <Merch />
        </section>
        <section id="press" className="section section--press">
          <Press />
        </section> */}

        <section id="contact" className="section section--contact">
          <Contact />
        </section>

        <Footer />

        {/* <Feed /> */}
      </main>
    </>
  );
}
