import BojengImage from '../../assets/photos/DSC03227.jpg';
import SpotifyPlayer from '../Players/Spotify';
import './_sections.scss';
// === Dummy data – byt till riktiga länkar/filer ===
const LATEST_SINGLE = {
  title: 'Ny singel: ”Ljus över Bojeng”',
  youtube: 'https://youtube.com/shorts/q4LA_MZsQ9Y?si=rzkqg9ourTyQM9rW', // byt
  apple: 'https://embed.music.apple.com/se/album/bojeng-ep/1814354097', // byt
  soundcloud:
    'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2151444258&color=%23135c19&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', // byt
};
const Listen = () => {
  return (
    <div className="container">
      <div className="section__row section__col--mobile section__row--space-between">
        <div className="section__col">
          <h2 className="section__title">Lyssna</h2>
          <SpotifyPlayer />
        </div>
        <img className="section__img--maxwidth-720" src={BojengImage} />
      </div>
      <br />
      <div className="players">
        {LATEST_SINGLE.youtube && (
          <div className="player-card">
            <div className="ratio">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/xCPSnubQclw?si=aYa9f0QAI7H_m0sS"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}

        {LATEST_SINGLE.apple && (
          <div className="player-card">
            <div className="ratio">
              <iframe title="Apple Music" src={LATEST_SINGLE.apple} loading="lazy" />
            </div>
          </div>
        )}

        {LATEST_SINGLE.soundcloud && (
          <div className="player-card">
            <div className="ratio">
              <iframe
                className="player-card--souncloud"
                title="SoundCloud"
                src={LATEST_SINGLE.soundcloud}
                loading="lazy"
              />
            </div>
          </div>
        )}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Listen;
