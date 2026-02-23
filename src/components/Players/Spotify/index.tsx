import './spotifyplayer.scss';
import { SPOTIFY_EMBED_URL } from '@/data/music';

const SpotifyPlayer = () => (
  <iframe
    className="spotify-player"
    src={SPOTIFY_EMBED_URL}
    frameBorder="0"
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy"
    title="Spotify Player"
  />
);

export default SpotifyPlayer;
