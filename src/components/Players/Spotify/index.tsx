import './spotifyplayer.scss';

const SpotifyPlayer = () => {
  return (
    <iframe
      className="spotify-player"
      src="https://open.spotify.com/embed/album/0qN0CLMdj5unnYayYnl4FT?utm_source=generator"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      title="Spotify Player"
    ></iframe>
  );
};

export default SpotifyPlayer;
