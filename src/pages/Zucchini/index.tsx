import { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import boeng from '../../assets/logo-text/bojeng_logotyp_purple.png';
import './zucchini.scss';
import Merch from '../../components/Merch';
import Footer from '../../components/Footer/Footer';
const gigs = [
  { date: '2025-05-03', time: '20:00', location: 'Pustervik, Göteborg' },
  { date: '2025-06-15', time: '21:30', location: 'Debaser, Stockholm' },
  { date: '2025-07-07', time: '18:00', location: 'Trädgården, Malmö' },
];

const Zucchini = () => {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const hasSeenVideo = localStorage.getItem('bojeng_intro_played');
    if (!hasSeenVideo) {
      setShowVideo(true);
    }
  }, []);

  const handleVideoEnd = () => {
    localStorage.setItem('bojeng_intro_played', 'true');
    setShowVideo(false);
  };

  return (
    <div className="container">
      {showVideo ? (
        <div className="video-overlay">
          <YouTube
            videoId="7eKy6U2WhfM" // Byt ut mot er riktiga video
            opts={{
              width: '100vw',
              height: '100vh',
              playerVars: {
                autoplay: 1, // spela automatiskt
                controls: 0, // inga kontroller
                rel: 0, // inga relaterade videos
                showinfo: 0, // ingen info i början
                modestbranding: 1, // minimerad YouTube-branding
                fs: 0, // ingen helskärmsknapp
                iv_load_policy: 3, // inga annotations
                mute: 1, // mutad autoplay (vissa browsers kräver det)
              },
            }}
            onEnd={handleVideoEnd}
          />
          {/* <iframe
            src="https://www.youtube.com/embed/7eKy6U2WhfM?si=qVvTAYpwMZMBpvua"
            title="Bojeng intro"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
            className="video-iframe"></iframe> */}
        </div>
      ) : (
        <>
          {/* LOGGA */}
          <header className="logo-header">
            <img src={boeng} alt="Bojeng logo" className="logo-img" />
          </header>

          <section className="spotify-section">
            <iframe
              src="https://open.spotify.com/embed/album/3XeMJ9HYmSV7UD7rVnOP9K?utm_source=generator"
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Spotify Player"></iframe>
          </section>

          <section className="gig-section">
            <h2 className="gig-heading">Kommande spelningar</h2>
            <table className="gig-table">
              <thead>
                <tr>
                  <th>Datum</th>
                  <th>Tid</th>
                  <th>Plats</th>
                </tr>
              </thead>
              <tbody>
                {gigs.map((gig, index) => (
                  <tr key={index}>
                    <td>{gig.date}</td>
                    <td>{gig.time}</td>
                    <td>{gig.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
          <Merch />
          <br />
          <br />
          <br />

          <Footer />
        </>
      )}
    </div>
  );
};

export default Zucchini;
