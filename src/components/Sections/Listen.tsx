import BojengImage from '../../assets/photos/listen.jpg';
import './sections.scss';
// === Dummy data – byt till riktiga länkar/filer ===
const LATEST_SINGLE = {
  title: 'Ny singel: ”Ljus över Bojeng”',
  spotify: 'https://open.spotify.com/embed/track/XXXXXXXXXXXX', // byt
  apple: 'https://embed.music.apple.com/se/album/XXXXXXXXXXXX', // byt
  soundcloud: 'https://w.soundcloud.com/player/?url=XXXXXXXXXX', // byt
};
const Header = () => {
  return (
    <div className="container">
      <div className="section__row section__row--space-between">
        <div className="section__col">
          <h2 className="section__title">Lyssna</h2>
          <iframe
            className="spotify-player"
            src="https://open.spotify.com/embed/album/0qN0CLMdj5unnYayYnl4FT?utm_source=generator"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Spotify Player"
          ></iframe>
        </div>
        <img src={BojengImage} />
      </div>
      <br />
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
  );
};

export default Header;
